const Item = require('../../models/Item');
const { ctrlWrapper } = require('../../decorators');
const { HttpError } = require('../../utils');

// DELETE
const removeById = ctrlWrapper(async (req, res) => {
  const delItem = await Item.findByIdAndDelete(req.params.id);
  if (!delItem) throw new HttpError(404);
  res.status(204);
});

module.exports = removeById;
