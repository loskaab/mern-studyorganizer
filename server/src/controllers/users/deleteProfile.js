const { User } = require('../../models/user');
const { Contact } = require('../../models/contact');
const { ctrlWrapper } = require('../../decorators');
const { cloudinary, HttpError, restrictedAccess } = require('../../utils');

const deleteProfile = ctrlWrapper(async (req, res) => {
  const { _id, avatarId } = req.user;
  if (restrictedAccess.userId.includes(_id)) {
    throw HttpError(403, 'Register to access');
  }
  const { deletedCount } = await Contact.deleteMany({ owner: _id });
  if (avatarId) await cloudinary.destroy(avatarId);

  const delUser = await User.findByIdAndDelete(_id);
  if (!delUser) throw HttpError(403, 'Failed to delete account');

  res
    .status(200)
    .json({ message: `User ${delUser.email} with ${deletedCount} contact(s) deleted` });
});

module.exports = deleteProfile;
