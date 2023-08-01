const Item = require('../../models/Item');
const { ctrlWrapper } = require('../../decorators');

const add = ctrlWrapper(async (req, res) => {
  const ownerId = req.user._id;
  const newItem = await Item.create({ ...req.body, ownerId });

  res.status(201).json(newItem);
});

module.exports = add;
