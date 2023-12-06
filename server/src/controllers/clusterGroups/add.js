const { ClusterGroup } = require('../../models');
const { HttpError, filterValues } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const add = ctrlWrapper(async (req, res) => {
  const { _id: owner } = req.user;

  const clusterGroup = await ClusterGroup.find({ ...req.body, owner });
  if (clusterGroup[0]) {
    throw HttpError(409, 'Already existing cluster group');
  }

  const newClusterGroup = await ClusterGroup.create({ ...req.body, owner });
  if (!newClusterGroup) throw HttpError(403);

  res.status(201).json({ message: 'Created', result: { group: filterValues(newClusterGroup) } });
});

module.exports = add;
