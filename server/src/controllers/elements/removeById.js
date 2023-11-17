const { HttpError } = require('../../utils');

const { Element } = require('../../models');
const { ctrlWrapper } = require('../../decorators');
const { restrictedAccess } = require('../../utils');

const removeById = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  if (restrictedAccess.elementId.includes(id)) throw HttpError(403);

  const delElement = await Element.findByIdAndDelete(id);
  if (!delElement) throw HttpError(403);

  res.status(200).json({ message: 'Deleted', result: { element: delElement } });
});

module.exports = removeById;
