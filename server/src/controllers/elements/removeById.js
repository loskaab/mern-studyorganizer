const { HttpError } = require('../../utils');

const { Element } = require('../../models');
const { ctrlWrapper } = require('../../decorators');
const { restrictedAccess } = require('../../utils');

const removeById = ctrlWrapper(async (req, res) => {
  let { id } = req.params;
  id = id.includes('&') ? id.split('&') : [id];

  for (let i = 0; i < id.length; i += 1) {
    if (restrictedAccess.elementId.includes(id[i])) {
      throw HttpError(403);
    }
  }

  const query = { _id: { $in: id } };
  const { deletedCount } = await Element.deleteMany(query);

  res.status(200).json({ message: `Deleted ${deletedCount} element(s)`, result: { id } });
});

module.exports = removeById;
