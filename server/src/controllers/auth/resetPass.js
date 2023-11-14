const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('../../models/user');
const { ctrlWrapper } = require('../../decorators');
const { HttpError } = require('../../utils');

const { TOKEN_ACCESS_SECRET } = process.env;

const resetPass = ctrlWrapper(async (req, res) => {
  const { newPass, confirmPass, id, pwdToken } = req.body;

  const user = await User.findOne({ _id: id });
  if (!user) throw HttpError(403);
  const secret = TOKEN_ACCESS_SECRET + user.password;
  try {
    jwt.verify(pwdToken, secret);
  } catch (error) {
    throw HttpError(403, 'Try again with new link');
  }
  if (newPass !== confirmPass) throw HttpError(400);

  const hashPassword = await bcrypt.hash(newPass, 10);
  const newUser = await User.findByIdAndUpdate(id, { password: hashPassword });
  if (!newUser) throw HttpError(403, 'Failed to reset');

  res.status(200).json({ message: 'Password reset' });
});

module.exports = resetPass;
