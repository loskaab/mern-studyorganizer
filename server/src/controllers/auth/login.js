const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Session, User } = require('../../models');
const { HttpError, sendMail, createMsg, expiresAt } = require('../../utils');
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
    res.status(200).json({
      message: `Verification code sent to ${user.email}`,
      result: { user: { ...user._doc, verificationCode: verificationCode?.split(' ')[1] } },
    });
  } else {
    const session = await Session.create({ uid: user._id, expiresAt: expiresAt() });
    
    const payload = { uid: user._id, sid: session._id };
    const accessToken = jwt.sign(payload, TOKEN_ACCESS_SECRET, { expiresIn: '60s' });
    const refreshToken = jwt.sign(payload, TOKEN_REFRESH_SECRET, { expiresIn: '7d' });

    res.status(200).json({
      message: `Logged in: ${user.email}`,
      result: {
        user: {
          ...user._doc,
          refreshToken,
          accessToken,
          verificationCode: verificationCode?.split(' ')[1],
        },
      },
    });
  }
});

module.exports = login;
