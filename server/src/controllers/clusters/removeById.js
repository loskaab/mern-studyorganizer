const { HttpError } = require('../../utils');

const { Cluster } = require('../../models');
const { Element } = require('../../models');
const { ctrlWrapper } = require('../../decorators');
const { restrictedAccess } = require('../../utils');

const removeById = ctrlWrapper(async (req, res) => {
  let { id } = req.params;
  id = id.includes('&') ? id.split('&') : [id];
  // elements
  let elementCount = 0;
  for (let i = 0; i < id.length; i += 1) {
    if (restrictedAccess.clusterId.includes(id[i])) {
      throw HttpError(403);
    }
    const { cluster } = await Cluster.findById(id[i]);
    const { deletedCount } = await Element.deleteMany({ cluster });
    elementCount += deletedCount;
  }
  // clusters
  const query = { _id: { $in: id } };
  const { deletedCount: clusterCount } = await Cluster.deleteMany(query);

  res.status(200).json({
    message: `Deleted ${clusterCount} cluster(s) and ${elementCount} element(s)`,
    result: { id },
  });
});

module.exports = removeById;
