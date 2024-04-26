const { Schema, model } = require('mongoose');

const { mongooseError } = require('../utils');

const required = [true, 'Required field!'];

const expireAfterSeconds = 24 * 60 * 60;

const sessionSchema = new Schema(
  {
    uid: { type: Schema.Types.ObjectId, required },
    expiresAt: {
      type: Date,
      expires: expireAfterSeconds,
      default: new Date(Date.now() + expireAfterSeconds * 1000),
      index: true,
    },
  },
  { versionKey: false, timestamps: true },
);

// Change error status
sessionSchema.post('save', mongooseError);

const Session = model('Session', sessionSchema);

module.exports = { Session };
