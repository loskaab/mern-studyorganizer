const { HttpError } = require('../../utils');

const { Cluster } = require('../../models');
const { ctrlWrapper } = require('../../decorators');

const updateFavoriteById = ctrlWrapper(async (req, res) => {
  const { favorite } = req.body;
  const { id } = req.params;

  const newCluster = await Cluster.findByIdAndUpdate(id, { favorite }, { new: true });
  if (!newCluster) throw HttpError(403);

  const message = favorite ? 'Add to favorites' : 'Removed from favorites';

  res.status(200).json({ message, result: { cluster: newCluster } });
});

module.exports = updateFavoriteById;
