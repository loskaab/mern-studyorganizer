const Item = require('../../models/Item');
const { ctrlWrapper } = require('../../decorators');
const { HttpError } = require('../../utils');

const updateTitleById = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  const newItem = await Item.findByIdAndUpdate(id, req.body, { new: true });
  if (!newItem) throw new HttpError(404);
  res.status(201).json(newItem);
});

module.exports = updateTitleById;
