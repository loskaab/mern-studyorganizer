const { Schema, model } = require('mongoose');

const { mongooseError } = require('../utils');

const required = [true, 'Required field!'];

const sessionSchema = new Schema(
  {
    uid: { type: Schema.Types.ObjectId, required },
    expiresAt: { type: Date, expires: 60 * 60 * 24 * 2 },
  },
  { versionKey: false, timestamps: true },
);

// Change error status
sessionSchema.post('save', mongooseError);

const Session = model('Session', sessionSchema);

module.exports = { Session };
