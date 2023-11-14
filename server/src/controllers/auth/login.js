const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('../../models');
const { HttpError, sendMail, createMsg } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const { TOKEN_ACCESS_SECRET, TOKEN_REFRESH_SECRET } = process.env;

const login = ctrlWrapper(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw HttpError(401);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw HttpError(401);

  const { verifiedEmail, verificationCode } = user;
  if (!verifiedEmail) {
    const msg = createMsg('verifyEmail.ejs', { email, verificationCode });
    await sendMail.nodemailer(msg);
    res.status(200).json({ message: `Verification code sent to ${user.email}`, result: { user } });
  } else {
    const id = user._id;
    const accessToken = jwt.sign({ id }, TOKEN_ACCESS_SECRET, { expiresIn: '60s' });
    const refreshToken = jwt.sign({ id }, TOKEN_REFRESH_SECRET, { expiresIn: '7d' });

    const newUser = await User.findByIdAndUpdate(id, { accessToken, refreshToken }, { new: true });
    if (!newUser) throw HttpError(403);

    res.status(200).json({
      message: `Logged in: ${newUser.email}`,
      result: { user: { ...newUser._doc, verificationCode: verificationCode?.split(' ')[1] } },
    });
  }
});

module.exports = login;
