const { Schema, model } = require('mongoose');

const { mongooseError, regExp } = require('../utils');

const required = [true, 'Required field!'];
const length = lgth => [lgth, `Must be at least ${lgth} characters long!`];
const regex = field => [regExp[field].pattern, `Invalid ${field.toLowerCase()}!`];

const roleList = ['admin', 'user'];

const userSchema = new Schema(
  {
    name: { type: String, minlength: length(4), required },
    email: { type: String, unique: true, match: regex(regExp.EMAIL.name), required },
    password: { type: String, minlength: length(6), required },
    accessToken: { type: String, default: null },
    refreshToken: { type: String, default: null },
    verifiedEmail: { type: Boolean, default: false, required },
    verificationCode: { type: String, default: null },

    avatarUrl: { type: String, default: '' },
    avatarId: { type: String, default: null },
    whatsApp: { type: String, default: '' },
    telegram: { type: String, default: '' },
    location: { type: String, default: '' },
    socialLink: { type: String, default: '' },
    birthday: { type: String, default: '' },
    about: { type: String, default: '' },
    role: { type: String, enum: roleList, default: 'user' },
  },
  { versionKey: false, timestamps: true },
);

// Change error status
userSchema.post('save', mongooseError);

const User = model('User', userSchema);

module.exports = { User };
