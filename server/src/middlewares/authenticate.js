const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { HttpError } = require('../utils');
const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ', 2);

  if (bearer !== 'Bearer' || !token) next(new HttpError(401));

  try {
    const { id } = jwt.verify(token, SECRET_KEY);

    const user = await User.findById(id);
    if (!user || !user.token || user.token !== token) {
      next(new HttpError(401));
    }
    // identification
    req.user = user;
    next();
  } catch {
    next(new HttpError(401));
  }
};

module.exports = authenticate;
