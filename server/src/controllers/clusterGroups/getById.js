const { HttpError } = require('../../utils');

const { ClusterGroup } = require('../../models');
const { ctrlWrapper } = require('../../decorators');

const getById = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  const group = await ClusterGroup.findById(id);
  if (!group) throw HttpError(403);

  res.status(200).json({ message: 'Found', result: { group } });
});

module.exports = getById;
