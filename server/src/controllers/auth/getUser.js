const { ctrlWrapper } = require('../../decorators');

const getUser = ctrlWrapper(async (req, res) => {
  const { user } = req;

  res.status(200).json({
    result: { user: { ...user._doc, verificationCode: user.verificationCode?.split(' ')[1] } },
  });
});

module.exports = getUser;
