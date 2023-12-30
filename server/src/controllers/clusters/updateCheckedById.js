const { HttpError } = require('../../utils');

const { Cluster } = require('../../models');
const { ctrlWrapper } = require('../../decorators');

const updateCheckedById = ctrlWrapper(async (req, res) => {
  const { checked } = req.body;
  const { id } = req.params;

  const newCluster = await Cluster.findByIdAndUpdate(id, { ...req.body }, { new: true });
  if (!newCluster) throw HttpError(403);

  const message = checked ? 'Checked' : 'Unchecked';

  res.status(200).json({ message, result: { cluster: newCluster } });
});

module.exports = updateCheckedById;
