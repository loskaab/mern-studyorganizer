const { Schema, model } = require('mongoose');

const { mongooseError, regExp } = require('../utils');

const required = [true, 'db: Required field!'];
const length = lgth => [lgth, `db: Must be at least ${lgth} characters long!`];
const emailRegex = [regExp.email, 'db: Invalid email!'];

const userSchema = new Schema(
  {
    name: { type: String, unique: true, minlength: length(4), required },
    email: { type: String, unique: true, match: emailRegex, required },
    password: { type: String, minlength: length(6), required },
    token: { type: String, default: null },
    avatarUrl: { type: String, default: '' },
    avatarId: { type: String, default: null },
    verifiedEmail: { type: Boolean, default: false, required },
    verificationCode: { type: String, default: null, required },
  },
  {
    timestamps: true,
    versionKey: false,
    // collection: 'users',
  },
);

userSchema.post('save', mongooseError); // Set validation-error status

const User = model('User', userSchema);

module.exports = User;
