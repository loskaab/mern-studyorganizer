const { Schema, model } = require('mongoose');

const { mongooseError } = require('../utils');

const length = lgth => [lgth, `db: Must be at least ${lgth} characters long!`];

const itemSchema = new Schema(
  {
    title: { type: String, minlength: length(5), default: 'title' },
    ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  {
    timestamps: true,
    versionKey: false,
    // collection: 'items',
  },
);

itemSchema.post('save', mongooseError); // Set validation-error status

const Item = model('Item', itemSchema);

module.exports = Item;
