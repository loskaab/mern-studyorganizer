const chardet = require('chardet');

const { Element, Cluster } = require('../../models');
const { HttpError, filterValues } = require('../../utils');
const { ctrlWrapper } = require('../../decorators');

const add = ctrlWrapper(async (req, res) => {
  const { _id: owner } = req.user;
  const { cluster, element } = req.body;

  const clusterLang = (await Cluster.findOne({ title: cluster })).lang;
  const encoding = chardet.analyse(Buffer.from(element));
  const lang = clusterLang || encoding[0].lang || encoding[1].lang;

  const newElement = await Element.create({ ...req.body, lang, owner });
  if (!newElement) throw HttpError(403);

  res.status(201).json({ message: 'Created', result: { element: filterValues(newElement) } });
});

module.exports = add;
