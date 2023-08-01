const User = require('../../models/User');
const Item = require('../../models/Item');
const { ctrlWrapper } = require('../../decorators');
const { cloudinary, HttpError } = require('../../utils');

const deleteCurrent = ctrlWrapper(async (req, res) => {
  const { _id, avatarId } = req.user;

  const { deletedCount } = await Item.deleteMany({ owner: _id });
  if (avatarId) await cloudinary.destroy(avatarId);

  const delUser = await User.findByIdAndDelete(_id);
  if (!delUser) throw new HttpError(404);
  
  res.status(200).json({ message: `User ${delUser.email} deleted!`, items: deletedCount });
});

module.exports = deleteCurrent;
