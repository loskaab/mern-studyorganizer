const globalErrorHandler = require('./globalErrorHandler');
const missingRouteHandler = require('./missingRouteHandler');
const authenticate = require('./authenticate');
const isValidId = require('./isValidId');
const upload = require('./upload');
const jsonParser = require('./jsonParser');

module.exports = {
  authenticate,
  globalErrorHandler,
  missingRouteHandler,
  isValidId,
  upload,
  jsonParser,
};
