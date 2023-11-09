// letters, numbers, underscores, dashes, spases
const name = /^[a-zA-Zа-яА-Я0-9]+(([_ -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я0-9]*)*$/;
// test@test.com // test@test.ua
const email = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
// digits, spaces, dashes, parentheses, can start with +
const phone = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;
// letters, start with @
const telegram = /.*\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*$/;
// telegram + phone
const telegramPhone =
  /(.*\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*$)|(^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$)/;
// dd-mm-yyyy
const date = /^([0-2^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)((19|20)\d{2}$)/;
// letters, more than two
const country = /[a-zA-Z]\w{1}$/;
// letters, numbers, dashes
const cryptoRandomUUID = /^[a-zA-Zа-яА-Я0-9]+(([-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я0-9]*)*$/;

module.exports = {
  name,
  email,
  phone,
  telegram,
  telegramPhone,
  date,
  country,
  cryptoRandomUUID,
};
