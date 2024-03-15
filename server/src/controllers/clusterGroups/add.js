const { ClusterGroup } = require('../../models');
const { HttpError, filterValues } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const add = ctrlWrapper(async (req, res) => {
  const { _id: owner } = req.user;

  const clusterGroupArr = await ClusterGroup.find({ ...req.body, owner });
  if (clusterGroupArr[0]) {
    throw HttpError(409, 'Already existing cluster group');
  }

  const newClusterGroup = await ClusterGroup.create({ ...req.body, owner });
  if (!newClusterGroup) throw HttpError(403);

  res
    .status(201)
    .json({ message: 'Group created', result: { group: filterValues(newClusterGroup) } });
});

module.exports = add;
