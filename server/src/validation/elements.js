const Joi = require('joi');

const { validateBody } = require('../decorators');
const groupList = ['small', 'middle', 'large'];

const addSchema = validateBody(
  Joi.object({
    element: Joi.string().required(),
    title: Joi.string().required(),
    checked: Joi.boolean(),
    favorite: Joi.boolean(),
    group: Joi.string().valid(...groupList),
  }),
);

const updateCheckedSchema = validateBody(Joi.object({ checked: Joi.boolean().required() }));

const updateFavoriteSchema = validateBody(Joi.object({ favorite: Joi.boolean().required() }));

module.exports = { addSchema, updateCheckedSchema, updateFavoriteSchema };
