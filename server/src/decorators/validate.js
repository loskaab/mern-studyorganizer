const { HttpError } = require('../utils');

const validate = schema => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) next(new HttpError(400, error.message));
  next();
};

module.exports = validate;
