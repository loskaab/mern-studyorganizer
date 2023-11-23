const { HttpError } = require('../../utils');

const { ClusterGroup } = require('../../models');
const { ctrlWrapper } = require('../../decorators');

const getById = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  const clusterGroup = await ClusterGroup.findById(id);
  if (!clusterGroup) throw HttpError(403);

  res.status(200).json({ message: 'Found', result: { clusterGroup } });
});

module.exports = getById;
