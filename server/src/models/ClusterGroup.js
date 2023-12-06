const { Schema, model } = require('mongoose');

const { mongooseError, regExp } = require('../utils');

const required = [true, 'Required field!'];
const regex = field => [regExp[field].pattern, `Invalid ${field.toLowerCase()}!`];

const clusterGroupSchema = new Schema(
  {
    clusterGroup: { type: String, match: regex(regExp.NAME.name), required },

    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { versionKey: false, timestamps: true },
);

// Change error status
clusterGroupSchema.post('save', mongooseError);

const ClusterGroup = model('ClusterGroup', clusterGroupSchema);

module.exports = { ClusterGroup };
