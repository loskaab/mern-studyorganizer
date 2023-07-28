const bcrypt = require('bcryptjs');

const gravatar = require('gravatar');
const crypto = require('crypto');

const User = require('../../models/User');
const { HttpError, sendEmail } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const register = ctrlWrapper(async (req, res) => {
  const { name, email } = req.body;
  if (await User.findOne({ name })) throw new HttpError(409);
  if (await User.findOne({ email })) throw new HttpError(409);

  const verificationCode = crypto.randomUUID();
  await sendEmail(email, verificationCode);
  const password = await bcrypt.hash(req.body.password, 10);
  const avatarUrl = gravatar.url(email, { s: '200' });

  const newUser = await User.create({ ...req.body, password, verificationCode, avatarUrl });
  if (!newUser) throw new HttpError(404);
  res.status(201).json({ message: `Verification code was send!`, user: { name, email } });
});

module.exports = register;
