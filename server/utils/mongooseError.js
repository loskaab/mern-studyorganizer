const mongooseError = (error, data, next) => {
  const { name, code } = error;
  error.status = name === 'MongoServerError' && code === 11000 ? 409 : 422;
  next();
};

module.exports = mongooseError;
