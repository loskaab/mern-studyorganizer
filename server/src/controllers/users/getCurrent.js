const { ctrlWrapper } = require('../../decorators');

const getCurrent = ctrlWrapper(async (req, res) => {
  const { _id, name, email } = req.user;

  res.status(200).json({ name, email, _id });
});

module.exports = getCurrent;
