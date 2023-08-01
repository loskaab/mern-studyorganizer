const { ctrlWrapper } = require('../../decorators');
const { createMsg, sendEmail } = require('../../utils');

const sendFeedback = ctrlWrapper(async (req, res) => {
  const { name, email, text } = req.body;

  try {
    const msg = createMsg.feedback(name, email, text);
    await sendEmail.nodemailer(msg);
    
    res.status(200).render('done', { message: `Email sent successfully!` });
  } catch (error) {
    res.render('error', { error });
  }
});

module.exports = sendFeedback;
