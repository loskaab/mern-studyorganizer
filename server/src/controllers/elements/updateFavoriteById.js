const { HttpError } = require('../../utils');

const { Contact } = require('../../models');
const { ctrlWrapper } = require('../../decorators');

const updateFavoriteById = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  const newContact = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!newContact) throw HttpError(403);

  res.status(200).json({ message: 'Updated', result: { contact: newContact } });
});

module.exports = updateFavoriteById;
