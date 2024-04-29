const { Schema, model } = require('mongoose');

const { mongooseError } = require('../utils');

const required = [true, 'Required field!'];

const exdate = new Date();
exdate.setDate(exdate.getDate() + 2);

const sessionSchema = new Schema(
  {
    uid: { type: Schema.Types.ObjectId, required },
    expiresAt: { type: Date, expires: '2d', default: exdate },
  },
  { versionKey: false, timestamps: true },
);

// Change error status
sessionSchema.post('save', mongooseError);

const Session = model('Session', sessionSchema);

module.exports = { Session };
