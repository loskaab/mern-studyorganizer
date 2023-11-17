const { Schema, model } = require('mongoose');

const { mongooseError } = require('../utils');

const required = [true, 'Required field!'];
const groupList = ['small', 'middle', 'large'];

const elementSchema = new Schema(
  {
    element: { type: String, required },
    title: { type: String, default: '' },
    checked: { type: Boolean, default: false },
    favorite: { type: Boolean, default: false },
    group: { type: String, enum: groupList, default: 'middle' },

    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    cluster: { type: Schema.Types.ObjectId, ref: 'Cluster', required: true },
  },
  { versionKey: false, timestamps: true },
);

// Change error status
elementSchema.post('save', mongooseError);

const Element = model('Element', elementSchema);

module.exports = { Element };
