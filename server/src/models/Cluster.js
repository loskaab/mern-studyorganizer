const { Schema, model } = require('mongoose');

const { mongooseError, regExp } = require('../utils');

const required = [true, 'Required field!'];
const regex = field => [regExp[field].pattern, `Invalid ${field.toLowerCase()}!`];

const clusterSchema = new Schema(
  {
    cluster: { type: String, match: regex(regExp.HTTP.name), required },
    title: { type: String, default: '', required },
    lang: { type: String, default: 'de' },
    rate: { type: String, default: 0.75 },
    favorite: { type: Boolean, default: false },
    checked: { type: Boolean, default: false },
    group: { type: String, required },

    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { versionKey: false, timestamps: true },
);

// Change error status
clusterSchema.post('save', mongooseError);

const Cluster = model('Cluster', clusterSchema);

module.exports = { Cluster };
