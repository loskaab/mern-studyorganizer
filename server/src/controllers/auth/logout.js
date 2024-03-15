const { Session } = require('../../models');
// const { HttpError } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const logout = ctrlWrapper(async (req, res) => {
  // const session =
  await Session.deleteOne({ uid: req.user._id });
  // if (!session && !session.acknowledged) {
  //   throw HttpError(403, 'Failed to log out');
  // }

  res.status(200).json({ message: 'Logged out' });
});

module.exports = logout;
