const jwt = require('jsonwebtoken');

const { HttpError } = require('../utils');
const { User } = require('../models');

const { TOKEN_ACCESS_SECRET } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, accessToken] = authorization.split(' ');

  if (bearer !== 'Bearer') {
    next(HttpError(401));
  }

  try {
    const { id } = jwt.verify(accessToken, TOKEN_ACCESS_SECRET);
    const user = await User.findById(id);
    if (!user || !user.accessToken || user.accessToken !== accessToken) {
      next(HttpError(401));
    }
    req.user = user;
    next();
  } catch {
    next(HttpError(401));
  }
};

module.exports = authenticate;
