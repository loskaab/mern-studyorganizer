const forgotPass = require('./forgotPass');
const login = require('./login');
const logout = require('./logout');
const refreshToken = require('./refreshToken');
const register = require('./register');
const verifyEmail = require('./verifyEmail');
const resetPass = require('./resetPass');
// const google = require('./google');
// const getUser = require('./getUser');

module.exports = {
  forgotPass,
  login,
  logout,
  refreshToken,
  register,
  resetPass,
  verifyEmail,
  // google,
  // getUser,
};
