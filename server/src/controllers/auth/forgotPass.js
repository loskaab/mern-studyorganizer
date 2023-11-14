const jwt = require('jsonwebtoken');

const { User } = require('../../models/user');
const { ctrlWrapper } = require('../../decorators');
const { HttpError, sendMail, createMsg } = require('../../utils');

const { TOKEN_ACCESS_SECRET, NODE_ENV, DEV_FRONT_URL, PROD_FRONT_URL } = process.env;
const frontUrl = NODE_ENV === 'development' ? DEV_FRONT_URL : PROD_FRONT_URL;

const forgotPass = ctrlWrapper(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw HttpError(403);

  const id = user._id;
  const secret = TOKEN_ACCESS_SECRET + user.password;
  const pwdToken = jwt.sign({ id }, secret, { expiresIn: '10m' });

  const link = `${frontUrl}/reset?id=${id}&pwd_token=${pwdToken}`;
  const msg = createMsg('forgotPass.ejs', { email, link });
  await sendMail.nodemailer(msg);

  res.status(200).json({
    message: `Link sent to ${user.email} (expires in 10 min)`,
  });
});

module.exports = forgotPass;
