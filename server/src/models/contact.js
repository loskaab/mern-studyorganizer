const { Schema, model } = require('mongoose');

const { mongooseError, regExp } = require('../utils');

const required = [true, 'Required field!'];
const regex = field => [regExp[field].pattern, `Invalid ${field.toLowerCase()}!`];

const groupList = ['work', 'sport', 'private'];

const elementSchema = new Schema(
  {
    firstName: { type: String, match: regex(regExp.NAME.name), required },
    lastName: { type: String, match: regex(regExp.NAME.name), default: '' },
    phone: { type: String, match: regex(regExp.PHONE.name), default: '' },
    email: { type: String, match: regex(regExp.EMAIL.name), default: '' },
    whatsapp: { type: String, match: regex(regExp.PHONE.name), default: '' },
    viber: { type: String, match: regex(regExp.PHONE.name), default: '' },
    telegram: { type: String, match: regex(regExp.TELEGRAM.name), default: '' },
    linkedin: { type: String, match: regex(regExp.LINKEDIN.name), default: '' },
    github: { type: String, match: regex(regExp.GITHUB.name), default: '' },
    address: { type: String, match: regex(regExp.ADDRESS.name), default: '' },
    birthday: { type: String, match: regex(regExp.DATE.name), default: '' },
    notes: { type: String, default: '' },

    favorite: { type: Boolean, default: false },
    group: { type: String, enum: groupList, default: 'private' },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { versionKey: false, timestamps: true },
);

// Change error status
elementSchema.post('save', mongooseError);

const Element = model('Element', elementSchema);

module.exports = { Element };
