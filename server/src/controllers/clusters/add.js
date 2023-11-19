const { Cluster } = require('../../models');
const { HttpError, filterValues } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const add = ctrlWrapper(async (req, res) => {
  const { _id: owner } = req.user;
  const { cluster } = req.body;

  if (await Cluster.findOne({ cluster })) {
    throw HttpError(409, 'Already existing cluster');
  }

  const newCluster = await Cluster.create({ ...req.body, owner });
  if (!newCluster) throw HttpError(403);

  res.status(201).json({ message: 'Created', result: { cluster: filterValues(newCluster) } });
});

module.exports = add;
