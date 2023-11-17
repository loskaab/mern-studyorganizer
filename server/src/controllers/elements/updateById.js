const { HttpError, filterValues } = require('../../utils');

const { Element } = require('../../models');
const { ctrlWrapper } = require('../../decorators');
const { restrictedAccess } = require('../../utils');

const updateById = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  if (restrictedAccess.elementId.includes(id)) throw HttpError(403);

  const newElement = await Element.findByIdAndUpdate(id, req.body, { new: true });
  if (!newElement) throw HttpError(403);

  res.status(200).json({ message: 'Updated', result: { element: filterValues(newElement) } });
});

module.exports = updateById;
