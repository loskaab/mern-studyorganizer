const Joi = require('joi');

const { validateBody } = require('../decorators');

const addSchema = validateBody(
  Joi.object({
    element: Joi.string().required(),
    title: Joi.string(),
    favorite: Joi.boolean(),
    checked: Joi.boolean(),
    group: Joi.string(),
    cluster: Joi.string().required(),
  }),
);

const updateSchema = validateBody(
  Joi.object({
    element: Joi.string(),
    title: Joi.string(),
    favorite: Joi.boolean(),
    checked: Joi.boolean(),
    group: Joi.string(),
    cluster: Joi.string(),
  }),
);

module.exports = { addSchema, updateSchema };
