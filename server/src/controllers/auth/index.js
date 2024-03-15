const forgotPass = require('./forgotPass');
const google = require('./google');
const login = require('./login');
const logout = require('./logout');
const refreshToken = require('./refreshToken');
const register = require('./register');
const resetPass = require('./resetPass');
const verifyEmail = require('./verifyEmail');

module.exports = {
  forgotPass,
  google,
  login,
  logout,
  refreshToken,
  register,
  verifyEmail,
  resetPass,
};
