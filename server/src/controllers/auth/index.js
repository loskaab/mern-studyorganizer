const forgotPass = require('./forgotPass');
const getUser = require('./getUser');
const login = require('./login');
const logout = require('./logout');
const refreshToken = require('./refreshToken');
const register = require('./register');
const verifyEmail = require('./verifyEmail');
const resetPass = require('./resetPass');
// const google = require('./google');

module.exports = {
  forgotPass,
  getUser,
  login,
  logout,
  refreshToken,
  register,
  resetPass,
  verifyEmail,
  // google,
};
