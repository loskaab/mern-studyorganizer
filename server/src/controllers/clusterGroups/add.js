const { ClusterGroup } = require('../../models');
const { HttpError, filterValues } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const add = ctrlWrapper(async (req, res) => {
  const { _id: owner } = req.user;
  const { clusterGroup } = req.body;

  if (await ClusterGroup.findOne({ clusterGroup })) {
    throw HttpError(409, 'Already existing cluster group');
  }

  const newClusterGroup = await ClusterGroup.create({ ...req.body, owner });
  if (!newClusterGroup) throw HttpError(403);

  res
    .status(201)
    .json({ message: 'Created', result: { clusterGroup: filterValues(newClusterGroup) } });
});

module.exports = add;
