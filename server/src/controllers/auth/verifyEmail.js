const { User } = require('../../models/user');
const { ctrlWrapper } = require('../../decorators');
const { HttpError } = require('../../utils');

const verifyEmail = ctrlWrapper(async (req, res) => {
  const { verificationCode } = req.body;
  // Find user
  const userArr = await User.find({
    verificationCode: { $regex: `${verificationCode}`, $options: 'i' },
  });
  const user = userArr[0];
  if (!user) throw HttpError(403, `Failed to verify ${user.email}`);
  // Check verification code
  const [code, newEmail] = user.verificationCode.split(' ');
  if (code !== verificationCode) throw HttpError(403);
  // Define mail change or new one
  if (newEmail) {
    await User.findByIdAndUpdate(user._id, { email: newEmail });
  }

  const candidate = { verifiedEmail: true, verificationCode: null };
  const newUser = await User.findByIdAndUpdate(user._id, candidate, { new: true });
  if (!newUser) throw HttpError(403, `Failed to verify ${user.email}`);

  res.status(200).json({ message: `Email verified`, result: { user: newUser } });
});

module.exports = verifyEmail;
