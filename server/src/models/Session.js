const { Schema, model } = require('mongoose');

const { mongooseError } = require('../utils');

const required = [true, 'Required field!'];

const sessionSchema = new Schema(
  {
    uid: { type: Schema.Types.ObjectId, required },
    expiresAt: {
      type: Date,
      expires: '1d',
      default:  new Date(Date.now() + 24 * 60 * 60 * 1000),
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
