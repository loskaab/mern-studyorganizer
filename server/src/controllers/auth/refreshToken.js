const jwt = require('jsonwebtoken');

const { User } = require('../../models');
const { ctrlWrapper } = require('../../decorators');
const { HttpError } = require('../../utils');
const { TOKEN_ACCESS_SECRET, TOKEN_REFRESH_SECRET } = process.env;

const refreshToken = ctrlWrapper(async (req, res, next) => {
  const { refreshtoken } = req.headers; // const { refreshtoken } = req.body;
  try {
    const { id } = jwt.verify(refreshtoken, TOKEN_REFRESH_SECRET);
    const user = await User.findOne({ refreshToken: refreshtoken });

    const candidate = { accessToken: null, refreshToken: null };

    if (!user || !user.verifiedEmail || !user.refreshToken || user.refreshToken !== refreshtoken) {
      res.status(403).json({ message: 'Forbidden', result: { user: candidate } });
    } else {
      candidate.accessToken = jwt.sign({ id }, TOKEN_ACCESS_SECRET, { expiresIn: '60s' });
      candidate.refreshToken = jwt.sign({ id }, TOKEN_REFRESH_SECRET, { expiresIn: '7d' });

      const newUser = await User.findByIdAndUpdate(user._id, candidate, { new: true });
      if (!newUser) throw HttpError(403);

      res.status(200).json({ result: { user: candidate } });
    }
  } catch {
    next(HttpError(403));
  }
});

module.exports = refreshToken;
