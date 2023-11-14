const { HttpError } = require('../../utils');

const { Contact } = require('../../models');
const { ctrlWrapper } = require('../../decorators');
const { restrictedAccess } = require('../../utils');

const removeById = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  if (restrictedAccess.contactId.includes(id)) throw HttpError(403);

  const delContact = await Contact.findByIdAndDelete(id);
  if (!delContact) throw HttpError(403);

  res.status(200).json({ message: 'Deleted', result: { contact: delContact } });
});

module.exports = removeById;
