const { HttpError } = require('../../utils');

const { Cluster } = require('../../models');
const { ctrlWrapper } = require('../../decorators');

const getById = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  const cluster = await Cluster.findById(id);
  if (!cluster) throw HttpError(403);

  res.status(200).json({ message: 'Found', result: { cluster } });
});

module.exports = getById;
