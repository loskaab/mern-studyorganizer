const Item = require('../../models/Item');
const { ctrlWrapper } = require('../../decorators');

const getById = ctrlWrapper(async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.status(200).json(item);
});

module.exports = getById;
