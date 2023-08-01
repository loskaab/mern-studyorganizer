const mongoose = require('mongoose');

const { DB_NAME, DB_USER, DB_PATH, DB_PASSWORD } = process.env;

const DB_HOST =
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}` +
  `@${DB_PATH}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const connectDB = (uri, options = {}) => mongoose.connect(uri, options);

module.exports = { connectDB, DB_HOST };
