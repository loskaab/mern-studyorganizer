const { Schema, model } = require('mongoose');

const { mongooseError } = require('../utils');

const required = [true, 'Required field!'];

const sessionSchema = new Schema(
  {
    uid: { type: Schema.Types.ObjectId, required },
    expiresAt: { type: Date, expires: '2d' },
  },
  { versionKey: false, timestamps: true },
);

// Change error status
sessionSchema.post('save', mongooseError);

const Session = model('Session', sessionSchema);

module.exports = { Session };
