const Item = require('../../models/Item');
const { ctrlWrapper } = require('../../decorators');

const add = ctrlWrapper(async (req, res) => {
  const owner = req.user._id;
  const newItem = await Item.create({ ...req.body, owner });
  res.status(201).json(newItem);
});

module.exports = add;
