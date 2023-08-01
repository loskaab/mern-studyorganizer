const Item = require('../../models/Item');
const { ctrlWrapper } = require('../../decorators');
const { HttpError } = require('../../utils');

const getById = ctrlWrapper(async (req, res) => {
  const { id } = req.params;

  const item = await Item.findById(id);
  if (!item) throw new HttpError(404, `ID ${id} is not valid`);
  if (String(req.user._id) !== String(item.ownerId)) throw new HttpError(403);

  res.status(200).json(item);
});

module.exports = getById;
