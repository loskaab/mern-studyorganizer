const { User } = require('../../models');
const { HttpError } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const logout = ctrlWrapper(async (req, res) => {
  const newUser = await User.findByIdAndUpdate(req.user._id, { accessToken: null }, { new: true });
  if (!newUser) throw HttpError(403, 'Failed to log out');

  res.status(200).json({ message: `Logged out` });
});

module.exports = logout;
