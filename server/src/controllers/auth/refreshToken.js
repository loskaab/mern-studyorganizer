const jwt = require('jsonwebtoken');

const { Session, User } = require('../../models');
const { ctrlWrapper } = require('../../decorators');
const { HttpError } = require('../../utils');
const { TOKEN_ACCESS_SECRET, TOKEN_REFRESH_SECRET } = process.env;

const refreshToken = ctrlWrapper(async (req, res, next) => {
  const { refreshtoken } = req.headers; // const { refreshtoken } = req.body;
  try {
    const { uid, sid } = jwt.verify(refreshtoken, TOKEN_REFRESH_SECRET);
    const user = await User.findOne({ _id: uid });
    const session = await Session.findOne({ _id: sid });
    const candidate = { accessToken: null, refreshToken: null };

    if (!user || !session || !user.verifiedEmail) {
      res.status(200).json({ result: { user: { ...candidate } } });
    } else {
      candidate.accessToken = jwt.sign({ uid, sid }, TOKEN_ACCESS_SECRET, { expiresIn: '60s' });
      candidate.refreshToken = jwt.sign({ uid, sid }, TOKEN_REFRESH_SECRET, { expiresIn: '7d' });

      res.status(200).json({ result: { user: { ...user._doc, ...candidate } } });
    }
  } catch {
    next(HttpError(403));
  }
});

module.exports = refreshToken;
