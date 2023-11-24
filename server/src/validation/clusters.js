const Joi = require('joi');

const { validateBody } = require('../decorators');
const { regExp } = require('../utils');

const addSchema = validateBody(
  Joi.object({
    cluster: Joi.string().pattern(regExp.HTTP.pattern).required(),
    title: Joi.string().required(),
    favorite: Joi.boolean(),
    checked: Joi.boolean(),
    group: Joi.string().required(),
  }),
);

const updateCheckedSchema = validateBody(Joi.object({ checked: Joi.boolean().required() }));

const updateFavoriteSchema = validateBody(Joi.object({ favorite: Joi.boolean().required() }));

module.exports = { addSchema, updateCheckedSchema, updateFavoriteSchema };
