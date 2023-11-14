const Joi = require('joi');

const { regExp } = require('../utils');
const { validateBody } = require('../decorators');

const groupList = ['private', 'work', 'sport'];

const addSchema = validateBody(
  Joi.object({
    firstName: Joi.string().pattern(regExp.NAME.pattern).required(),
    lastName: Joi.string().pattern(regExp.NAME.pattern).allow(''),
    phone: Joi.string().pattern(regExp.PHONE.pattern).allow(''),
    email: Joi.string().pattern(regExp.EMAIL.pattern).allow(''),
    whatsapp: Joi.string().pattern(regExp.PHONE.pattern).allow(''),
    viber: Joi.string().pattern(regExp.PHONE.pattern).allow(''),
    telegram: Joi.string().pattern(regExp.TELEGRAM.pattern).allow(''),
    linkedin: Joi.string().pattern(regExp.LINKEDIN.pattern).allow(''),
    github: Joi.string().pattern(regExp.GITHUB.pattern).allow(''),
    address: Joi.string().pattern(regExp.ADDRESS.pattern).allow(''),
    birthday: Joi.string().pattern(regExp.DATE.pattern).allow(''),
    notes: Joi.string().allow(''),
    group: Joi.string().valid(...groupList),
    favorite: Joi.boolean(),
  }),
);

const updateFavoriteSchema = validateBody(Joi.object({ favorite: Joi.boolean().required() }));

module.exports = { addSchema, updateFavoriteSchema };
