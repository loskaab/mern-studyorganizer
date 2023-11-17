const { HttpError } = require('../../utils');

const { Cluster } = require('../../models');
const { ctrlWrapper } = require('../../decorators');

const updateFavoriteById = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  const newCluster = await Cluster.findByIdAndUpdate(id, req.body, { new: true });
  if (!newCluster) throw HttpError(403);

  res.status(200).json({ message: 'Updated', result: { cluster: newCluster } });
});

module.exports = updateFavoriteById;
