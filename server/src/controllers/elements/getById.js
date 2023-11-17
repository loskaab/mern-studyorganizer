const { HttpError } = require('../../utils');

const { Element } = require('../../models');
const { ctrlWrapper } = require('../../decorators');

const getById = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  const element = await Element.findById(id);
  if (!element) throw HttpError(403);

  res.status(200).json({ message: 'Found', result: { element } });
});

module.exports = getById;
