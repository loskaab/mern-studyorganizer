const { HttpError, filterValues } = require('../../utils');

const { Cluster } = require('../../models');
const { ctrlWrapper } = require('../../decorators');
const { restrictedAccess } = require('../../utils');

const updateById = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  if (restrictedAccess.clusterId.includes(id)) throw HttpError(403);

  const newCluster = await Cluster.findByIdAndUpdate(id, { ...req.body }, { new: true });
  if (!newCluster) throw HttpError(403);

  res.status(200).json({ message: 'Updated', result: { cluster: filterValues(newCluster) } });
});

module.exports = updateById;
