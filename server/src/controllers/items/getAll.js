const Item = require('../../models/Item');
const { ctrlWrapper } = require('../../decorators');

const getAll = ctrlWrapper(async (req, res) => {
  const { page = 1, limit = 20, ...queryParams } = req.query;

  const query = { ownerId: req.user._id, ...queryParams };
  const projection = '-createdAt -updatedAt';
  const pagination = { skip: (page - 1) * limit, limit };

  const items = await Item.find(query, projection, pagination).populate('ownerId', 'name email');
  const total = await Item.countDocuments(query);

  res.status(200).json({ total, items });
});

module.exports = getAll;
