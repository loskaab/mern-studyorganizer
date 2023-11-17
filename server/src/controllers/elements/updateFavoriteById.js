const { HttpError } = require('../../utils');

const { Element } = require('../../models');
const { ctrlWrapper } = require('../../decorators');

const updateFavoriteById = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  const newElement = await Element.findByIdAndUpdate(id, req.body, { new: true });
  if (!newElement) throw HttpError(403);

  res.status(200).json({ message: 'Updated', result: { element: newElement } });
});

module.exports = updateFavoriteById;
