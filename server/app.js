const express = require('express');
const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();

const routes = require('./routes');
const { missingRouteHandler, globalErrorHandler } = require('./middlewares');

const app = express();
const options = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(options)); // Logging
app.use(cors({ origin: '*' })); // Enable CORS

app.use('/api', routes); // Routes handling

app.use(missingRouteHandler); // Missing route error 404: 'Not Found',

app.use(globalErrorHandler); // Global error 500: 'Internal Server Error',

module.exports = app;
