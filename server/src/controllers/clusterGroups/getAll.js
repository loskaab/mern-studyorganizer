const { ClusterGroup } = require('../../models');
const { HttpError } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const getAll = ctrlWrapper(async (req, res) => {
  const owner = req.user._id;
  const { page = 1, limit = 500, ...query } = req.query;
  const projection = '-createdAt -updatedAt';
  const skip = (page - 1) * limit;
  const total = await ClusterGroup.countDocuments({ owner, ...query });
  const clusterGroups = await ClusterGroup.find({ owner, ...query }, projection, { skip, limit })
    // .populate('owner', 'name email')
    .sort({ clusterGroupGroup: 1 });
  if (!clusterGroups) throw HttpError(403);

  res.status(200).json({ message: `Found ${total} clusterGroup(s)`, result: { clusterGroups } });
});

module.exports = getAll;
