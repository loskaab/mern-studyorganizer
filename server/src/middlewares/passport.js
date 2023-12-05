const crypto = require('crypto');

const passport = require('passport');
const bcrypt = require('bcryptjs');
const { Strategy } = require('passport-google-oauth2');

const { User } = require('../models/User');
// const { sendEmail, createMsg } = require('../utils');

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, NODE_ENV, PORT, PROD_BACK_URL } = process.env;

const baseUrl = NODE_ENV === 'development' ? `http://localhost:${PORT}` : PROD_BACK_URL;

const googleParams = {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: `${baseUrl}/api/auth/google/cb`,
  passReqToCallback: true,
};

const googleCallback = async (request, accessToken, refreshToken, profile, done) => {
  try {
    const { email, displayName, verified, picture, provider } = profile;
    const user = await User.findOne({ email });
    if (user) {
      return done(null, user);
    }
    // Create user
    const password = await bcrypt.hash(crypto.randomUUID(), 10);
    const newUser = await User.create({
      name: displayName,
      email,
      password,
      avatarUrl: picture,
      verifiedEmail: verified,
      verificationCode: provider,
    });
    // Send avtocreate password notification
    // const msg = createMsg.changePassword(email);
    // await sendEmail.nodemailer(msg);

    return done(null, newUser);
  } catch (error) {
    done(error, false);
  }
};

const googleStrategy = new Strategy(googleParams, googleCallback);

passport.use('google', googleStrategy);

module.exports = passport;
