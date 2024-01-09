const { isValidObjectId } = require('mongoose');

const { HttpError } = require('../utils');

const isValidId = (req, res, next) => {
  let { id } = req.params;
  id = id.includes('&') ? id.split('&') : [id];

  for (let i = 0; i < id.length; i += 1) {
    if (!isValidObjectId(id[i])) {
      next(HttpError(400, `ID ${id[i]} is not valid`));
    }
  }
  next();
};

module.exports = isValidId;
