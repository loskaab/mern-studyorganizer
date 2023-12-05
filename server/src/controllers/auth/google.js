const jwt = require('jsonwebtoken');

const { User } = require('../../models/User');
const { HttpError } = require('../../utils');
const { TOKEN_ACCESS_SECRET, TOKEN_REFRESH_SECRET, NODE_ENV, DEV_FRONT_URL, PROD_FRONT_URL } =
  process.env;

const frontUrl = NODE_ENV === 'development' ? DEV_FRONT_URL : PROD_FRONT_URL;

const google = async (req, res) => {
  const { _id: id } = req.user;
  const accessToken = jwt.sign({ id }, TOKEN_ACCESS_SECRET, { expiresIn: '60s' });
  const refreshToken = jwt.sign({ id }, TOKEN_REFRESH_SECRET, { expiresIn: '7d' });
  const newUser = await User.findByIdAndUpdate(id, { accessToken, refreshToken });
  if (!newUser) throw HttpError(403, 'Failed to log in');

  res.redirect(`${frontUrl}/google?accessToken=${accessToken}&refreshToken=${refreshToken}`);
};

module.exports = google;
