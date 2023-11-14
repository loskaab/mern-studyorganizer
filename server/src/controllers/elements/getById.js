const { HttpError } = require('../../utils');

const { Contact } = require('../../models');
const { ctrlWrapper } = require('../../decorators');

const getById = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  if (!contact) throw HttpError(403);

  res.status(200).json({ message: 'Found', result: { contact } });
});

module.exports = getById;
