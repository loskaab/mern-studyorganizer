const { Schema, model } = require('mongoose');

const { mongooseError } = require('../utils');

const required = [true, 'Required field!'];

const elementSchema = new Schema(
  {
    element: { type: String, required },
    caption: { type: String, default: '' },
    lang: { type: String, default: 'en' },
    favorite: { type: Boolean, default: false },
    checked: { type: Boolean, default: true },
    group: { type: String, default: '' },
    cluster: { type: String, default: '' },

    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { versionKey: false, timestamps: true },
);

// Change error status
elementSchema.post('save', mongooseError);

const Element = model('Element', elementSchema);

module.exports = { Element };
