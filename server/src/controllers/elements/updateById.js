const { HttpError, filterValues } = require('../../utils');

const { Contact } = require('../../models');
const { ctrlWrapper } = require('../../decorators');
const { restrictedAccess } = require('../../utils');

const updateById = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  if (restrictedAccess.contactId.includes(id)) throw HttpError(403);

  const newContact = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!newContact) throw HttpError(403);

  res.status(200).json({ message: 'Updated', result: { contact: filterValues(newContact) } });
});

module.exports = updateById;
