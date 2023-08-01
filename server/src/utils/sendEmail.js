const nmMail = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const HttpError = require('./HttpError');

const { SENDGRID_API_KEY, MAIL_USER, MAIL_PASS } = process.env;

// SendGrid service
sgMail.setApiKey(SENDGRID_API_KEY);

const sendgrid = async msg => {
  try {
    await sgMail.send(msg);
    // console.log(`Email sent to ${email}`);
  } catch (error) {
    throw new HttpError(500, error.message);
  }
};

// Nodemailer service
const transporter = nmMail.createTransport({
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: { user: MAIL_USER, pass: MAIL_PASS },
});

const nodemailer = async msg => {
  try {
    await transporter.sendMail(msg);
    // console.log(`Email sent to ${email}`);
  } catch (error) {
    throw new HttpError(500, error.message);
  }
};

module.exports = { sendgrid, nodemailer };
