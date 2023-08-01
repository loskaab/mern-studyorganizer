/* eslint-disable indent */
const email = errors => {
  errors.forEach(err => {
    switch (err.code) {
      case 'string.pattern.base':
        err.message = `"email" is invalid.`;
        break;
      case 'any.required':
        err.message = `"email" is required.`;
        break;
      default:
        break;
    }
  });

  return errors;
};

module.exports = { email };
