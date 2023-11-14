const isUnuqueConflict = ({ name, code }) => name === 'MongoServerError' && code === 11000;

const mongooseError = (error, data, next) => {
  console.log('error: ', error.message);

  error.status = isUnuqueConflict(error) ? 409 : 400;
  next();
};

module.exports = mongooseError;
