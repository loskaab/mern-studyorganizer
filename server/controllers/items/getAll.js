const Item = require('../../models/Item');
const { ctrlWrapper } = require('../../decorators');

const getAll = ctrlWrapper(async (req, res) => {
  const owner = req.user._id;
  const { page = 1, limit = 20, ...queryParams } = req.query;
  const projection = '-createdAt -updatedAt';
  const pagination = { skip: (page - 1) * limit, limit };
  const query = { owner, ...queryParams };

  const total = await Item.countDocuments(query);
  const items = await Item.find(query, projection, pagination).populate('owner', 'name email');
  res.status(200).json({ total, items });
});

module.exports = getAll;
