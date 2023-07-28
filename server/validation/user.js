const Joi = require('joi');

const { validate } = require('../decorators');
const { regExp, joiError } = require('../utils');

const register = validate(
  Joi.object({
    name: Joi.string().min(4).required(),
    email: Joi.string().pattern(regExp.email).required().error(joiError.email),
    password: Joi.string().min(6).required(),
  }),
);

const login = validate(
  Joi.object({
    email: Joi.string().pattern(regExp.email).required().error(joiError.email),
    password: Joi.string().min(6).required(),
  }),
);

const verify = validate(
  Joi.object({
    email: Joi.string().pattern(regExp.email).required().error(joiError.email),
    verificationCode: Joi.string().required(),
  }),
);

module.exports = { register, login, verify };
