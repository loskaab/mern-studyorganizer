const { HttpError } = require('../utils');

const validate = schema => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) next(new HttpError(422, error.message));
  next();
};

module.exports = validate;

// const validate = schema => (req, res, next) => {
//   const { error, value } = schema.validate(
//     { query: req.query, params: req.params, body: req.body },
//     { abortEarly: false, allowUnknown: true, stripUnknown: false },
//   );
//   if (typeof error !== 'undefined') {
//     return res.status(400).json({ error: error.details.map(err => err.message).join(', ') });
//   }
//   req.query = value.query;
//   req.params = value.params;
//   req.body = value.body;
//   return next();
// };
