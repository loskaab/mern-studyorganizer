const path = require('path');

const { convert } = require('html-to-text');

const renderEjsTemplate = require('./renderEjsTemplate');
const { APP_NAME, MAIL_USER } = process.env;

// Veryfy email message
const verifyEmail = (to, verificationCode) => {
  const file = path.join(__dirname, '..', 'views', 'verification.ejs');
  const html = renderEjsTemplate(file, { APP_NAME, to, verificationCode });

  return {
    from: `"Support" <${MAIL_USER}>`,
    to,
    subject: `${APP_NAME} Confirmation`,
    text: convert(html),
    html,
  };
};

// Feedback message
const feedback = (name, email, text) => {
  const html = `<h3>Feedback from ${name}</h3> <p>${text}</p> <p>Contact me at ${email}</p>`;

  return {
    from: `"${name} by ${APP_NAME}" <${MAIL_USER}>`,
    to: `${MAIL_USER}, ${email}>`,
    subject: `${name}'s Feedback`,
    text: convert(html),
    html,
  };
};

module.exports = { verifyEmail, feedback };
