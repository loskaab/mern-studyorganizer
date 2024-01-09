const Joi = require('joi');

const { validateBody } = require('../decorators');
const { regExp } = require('../utils');

const addSchema = validateBody(
  Joi.object({
    cluster: Joi.string().pattern(regExp.HTTP.pattern).required(),
    title: Joi.string().required(),
    lang: Joi.string(),
    favorite: Joi.boolean(),
    checked: Joi.boolean(),
    group: Joi.string().required(),
  }),
);

const updateSchema = validateBody(
  Joi.object({
    cluster: Joi.string().pattern(regExp.HTTP.pattern),
    title: Joi.string(),
    lang: Joi.string(),
    favorite: Joi.boolean(),
    checked: Joi.boolean(),
    group: Joi.string(),
  }),
);

module.exports = { addSchema, updateSchema };
