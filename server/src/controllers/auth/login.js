const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');
const { HttpError, createMsg, sendEmail } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');
const { SECRET_KEY } = process.env;

const login = ctrlWrapper(async (req, res) => {
  const { email, password } = req.body;
  
  const user = await User.findOne({ email });
  if (!user) throw new HttpError(401);

  const { verifiedEmail, verificationCode } = user;
  if (!verifiedEmail) {
    const msg = createMsg.verifyEmail(email, verificationCode);
    await sendEmail.sendgrid(msg);
    throw new HttpError(401, `Email not verified, check ${email}!`);
  }

  const isPassword = bcrypt.compare(password, user.password);
  if (!isPassword) throw new HttpError(401);

  const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '6h' });
  await User.findByIdAndUpdate(user._id, { token });

  res.status(200).json({ token });
});

module.exports = login;
