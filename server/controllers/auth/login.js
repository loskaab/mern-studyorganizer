const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');
const { HttpError, sendEmail } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');
const { SECRET_KEY } = process.env;

const login = ctrlWrapper(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw new HttpError(401);
  if (!user.verifiedEmail) {
    await sendEmail(email, user.verificationCode);
    throw new HttpError(401, 'Email not verified');
  }
  const isPassword = bcrypt.compare(password, user.password);
  if (!isPassword) throw new HttpError(401);
  const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '23h' });
  await User.findByIdAndUpdate(user._id, { token });
  res.status(200).json({ ...req.body, token });
});

module.exports = login;
