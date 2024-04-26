const jwt = require('jsonwebtoken');

const { Session, User } = require('../../models');
const { ctrlWrapper } = require('../../decorators');
const { HttpError } = require('../../utils');

const { TOKEN_ACCESS_SECRET, TOKEN_REFRESH_SECRET } = process.env;

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

  // Log in
  const exdate = new Date();
  exdate.setDate(exdate.getDate() + 2);
  const session = await Session.create({ uid: newUser._id, expiresAt: exdate });
  
  const payload = { uid: newUser._id, sid: session._id };
  const accessToken = jwt.sign(payload, TOKEN_ACCESS_SECRET, { expiresIn: '60s' });
  const refreshToken = jwt.sign(payload, TOKEN_REFRESH_SECRET, { expiresIn: '7d' });

  res.status(200).json({
    message: `Email verified, logged in: ${newUser.email}`,
    result: { user: { ...newUser._doc, accessToken, refreshToken } },
  });
});

module.exports = verifyEmail;
