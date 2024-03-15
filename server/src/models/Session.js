const { Schema, model } = require('mongoose');

const { mongooseError } = require('../utils');

const required = [true, 'Required field!'];

const sessionSchema = new Schema(
  {
    uid: { type: Schema.Types.ObjectId, required },
    expiresAt: {
      type: Date,
      expires: '1d',
      default: new Date().setDate(new Date().getDate() + 1),
    },
  },
  { versionKey: false, timestamps: true },
);

// Add index
// sessionSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 });

// Change error status
sessionSchema.post('save', mongooseError);

const Session = model('Session', sessionSchema);

module.exports = { Session };
