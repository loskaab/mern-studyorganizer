const jwt = require('jsonwebtoken');

const { Session } = require('../../models');
// const { HttpError } = require('../../utils');
const { TOKEN_ACCESS_SECRET, TOKEN_REFRESH_SECRET, NODE_ENV, DEV_FRONT_URL, PROD_FRONT_URL } =
  process.env;

const frontUrl = NODE_ENV === 'development' ? DEV_FRONT_URL : PROD_FRONT_URL;

const google = async (req, res) => {
  const { _id: uid } = req.user;
  const session = await Session.create({ uid });
  
  const payload = { uid, sid: session._id };

  const accessToken = jwt.sign(payload, TOKEN_ACCESS_SECRET, { expiresIn: '60s' });
  const refreshToken = jwt.sign(payload, TOKEN_REFRESH_SECRET, { expiresIn: '7d' });
  // const newUser = await User.findByIdAndUpdate(id, { accessToken, refreshToken });
  // if (!newUser) throw HttpError(403, 'Failed to log in');

  res.redirect(`${frontUrl}/google?accessToken=${accessToken}&refreshToken=${refreshToken}`);
};

module.exports = google;
