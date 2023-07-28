const nodemailer = require('nodemailer');

const { MAIL_USER, MAIL_PASS } = process.env;

const transporter = nodemailer.createTransport({
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: { user: MAIL_USER, pass: MAIL_PASS },
});

const sendEmail = async (email, message) => {
  const options = {
    from: `"Support" <${MAIL_USER}>`,
    to: `${email}`,
    subject: 'Confirmation',
    text: 'Please, finish registration procedure.',
    html:
      'Hello! Congratulations, you have almost finished registration procedure. <br/>' +
      `The code <b>${message}</b> to verify email: <b>${email}</b> ✔`,
    // `<a href='${HOST_URL}/api/users/verify/${message}' target='_blank'> Click the link to verify email: <b>${email}</a>`
  };

  try {
    await transporter.sendMail(options);
    console.log(`Email sent to ${options.to}`);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = sendEmail;
