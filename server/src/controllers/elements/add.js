const { Element } = require('../../models');
const { HttpError, filterValues } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const add = ctrlWrapper(async (req, res) => {
  const { _id: owner, lang } = req.user;

  const newElement = await Element.create({ ...req.body, lang, owner });
  if (!newElement) throw HttpError(403);

  res.status(201).json({ message: 'Created', result: { element: filterValues(newElement) } });
});

module.exports = add;
