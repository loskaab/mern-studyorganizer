const { Schema, model } = require('mongoose');

const { mongooseError } = require('../utils');

const length = lgth => [lgth, `db: Must be at least ${lgth} characters long!`];

const itemSchema = new Schema(
  {
    title: { type: String, minlength: length(5), default: 'title' },
    owner: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  },
  {
    timestamps: true,
    versionKey: false,
    // collection: 'items',
  },
);

itemSchema.post('save', mongooseError); // Set validation-error status

const Item = model('item', itemSchema);

module.exports = Item;
