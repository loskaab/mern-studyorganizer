const Joi = require('joi');

const { validateBody } = require('../decorators');

const addSchema = validateBody(
  Joi.object({
    element: Joi.string().required(),
    title: Joi.string().required(),
    favorite: Joi.boolean().required(),
    checked: Joi.boolean().required(),
    group: Joi.string().required(),
  }),
);

const updateCheckedSchema = validateBody(Joi.object({ checked: Joi.boolean().required() }));

const updateFavoriteSchema = validateBody(Joi.object({ favorite: Joi.boolean().required() }));

module.exports = { addSchema, updateCheckedSchema, updateFavoriteSchema };
