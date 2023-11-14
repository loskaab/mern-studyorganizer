const mongoose = require('mongoose');

const { APP_NAME, MDB_USER, MDB_PATH, MDB_PASSWORD } = process.env;

const DB_HOST =
  `mongodb+srv://${MDB_USER}:${MDB_PASSWORD}` +
  `@${MDB_PATH}.mongodb.net/${APP_NAME}_DB?retryWrites=true&w=majority`;

const connectDB = (uri, options = {}) => mongoose.connect(uri, options);

module.exports = { connectDB, DB_HOST };
