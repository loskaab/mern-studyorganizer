const Joi = require('joi');

const { validateBody } = require('../decorators');
const { regExp, langCodes } = require('../utils');

const addSchema = validateBody(
  Joi.object({
    cluster: Joi.string().pattern(regExp.HTTP.pattern).required(),
    title: Joi.string().required(),
    group: Joi.string().required(),
    gdriveId: Joi.string(),
  }),
);

const updateSchema = validateBody(
  Joi.object({
    cluster: Joi.string().pattern(regExp.HTTP.pattern),
    title: Joi.string(),
    group: Joi.string(),
    gdriveId: Joi.string(),
    lang: Joi.string().valid(...Object.keys(langCodes)),
    rate: Joi.number(),
    favorite: Joi.boolean(),
    checked: Joi.boolean(),
  }),
);

module.exports = { addSchema, updateSchema };
