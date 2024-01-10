const { HttpError } = require('../../utils');

const { Cluster } = require('../../models');
const { ClusterGroup } = require('../../models');
const { Element } = require('../../models');
const { ctrlWrapper } = require('../../decorators');
const { restrictedAccess } = require('../../utils');

const removeById = ctrlWrapper(async (req, res) => {
  let { id } = req.params;
  id = id.includes('&') ? id.split('&') : [id];

  const groups = [];
  let elementCount = 0;
  let groupCount = 0;
  // elements
  for (let i = 0; i < id.length; i += 1) {
    if (restrictedAccess.clusterId.includes(id[i])) {
      throw HttpError(403);
    }
    const { cluster, group } = await Cluster.findById(id[i]);
    const { deletedCount } = await Element.deleteMany({ cluster });
    deletedCount ?? HttpError(403, 'Failed to delete element');
    elementCount += deletedCount;
    // groups
    if (!groups.includes(group)) groups.push(group);
  }
  // clusters
  const { deletedCount: clusterCount } = await Cluster.deleteMany({ _id: { $in: id } });
  if (!clusterCount) throw HttpError(403, 'Failed to delete cluster');
  // groups
  for (let i = 0; i < groups.length; i += 1) {
    const clusters = await Cluster.find({ group: groups[i] });
    if (clusters.length === 0) {
      const delGroup = await ClusterGroup.findOneAndDelete({ clusterGroup: groups[i] });
      if (!delGroup) throw HttpError(403, 'Failed to delete group');
      groupCount += 1;
    }
  }

  res.status(200).json({
    message: `Deleted ${clusterCount} cluster(s), ${elementCount} element(s), ${groupCount} group(s)`,
    result: { id },
  });
});

module.exports = removeById;
