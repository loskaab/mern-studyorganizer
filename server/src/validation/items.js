const Joi = require('joi');

const { validate } = require('../decorators');

const addItem = validate(
  Joi.object({
    title: Joi.string().min(5).required(),
  }),
);

module.exports = { addItem };
