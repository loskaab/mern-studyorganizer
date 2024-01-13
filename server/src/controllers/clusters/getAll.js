const { Cluster } = require('../../models');
const { HttpError } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const getAll = ctrlWrapper(async (req, res) => {
  const owner = req.user._id;
  const { page = 1, limit = 500, ...query } = req.query;
  const projection = '-updatedAt';
  const skip = (page - 1) * limit;
  const total = await Cluster.countDocuments({ owner, ...query });
  const clusters = await Cluster.find({ owner, ...query }, projection, { skip, limit })
    // .populate('owner', 'name email')
    .sort({ createdAt: 1 });
  if (!clusters) throw HttpError(403);

  res.status(200).json({ message: `Found ${total} cluster(s)`, result: { clusters } });
});

module.exports = getAll;
