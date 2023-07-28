const User = require('../../models/User');
const { ctrlWrapper } = require('../../decorators');
const { cloudinary, HttpError } = require('../../utils');

const updateAvatar = ctrlWrapper(async (req, res) => {
  const { avatarId } = req.user;
  if (avatarId) await cloudinary.destroy(avatarId);

  const { url, public_id } = await cloudinary.upload(req.file.path);
  const avatar = { avatarUrl: url, avatarId: public_id };
  const newUser = await User.findByIdAndUpdate(req.user._id, avatar, { new: true });
  if (!newUser) throw new HttpError(404);
  res.status(200).json(newUser);
});

module.exports = updateAvatar;
