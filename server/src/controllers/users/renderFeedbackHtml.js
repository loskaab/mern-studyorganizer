const { ctrlWrapper } = require('../../decorators');

const renderFeedbackHtml = ctrlWrapper((req, res) => {
  res.status(200).render('feedback');
});

module.exports = renderFeedbackHtml;
