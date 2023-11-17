const { HttpError } = require('../../utils');

const { Cluster } = require('../../models');
const { ctrlWrapper } = require('../../decorators');
const { restrictedAccess } = require('../../utils');

const removeById = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  if (restrictedAccess.clusterId.includes(id)) throw HttpError(403);

  const delCluster = await Cluster.findByIdAndDelete(id);
  if (!delCluster) throw HttpError(403);

  res.status(200).json({ message: 'Deleted', result: { cluster: delCluster } });
});

module.exports = removeById;
