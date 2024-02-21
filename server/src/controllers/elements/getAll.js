const { Element } = require('../../models');
const { HttpError } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const getAll = ctrlWrapper(async (req, res) => {
  const owner = req.user._id;
  const { page = 1, limit = 1000000, ...query } = req.query;
  const projection = '-updatedAt';
  const skip = (page - 1) * limit;
  const total = await Element.countDocuments({ owner, ...query });
  const elements = await Element.find({ owner, ...query }, projection, { skip, limit })
    // .populate('owner', 'name email')
    .sort({ createdAt: 1 });
  if (!elements) throw HttpError(403);

  res.status(200).json({ message: `Found ${total} element(s)`, result: { elements } });
});

module.exports = getAll;
