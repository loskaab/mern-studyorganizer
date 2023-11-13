const NAME = {
  name: 'NAME',
  msg: 'only letters, numbers, underscores, dashes, spases',
  pattern: /^[a-zA-Zа-яА-Я0-9]+(([_ -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я0-9]*)*$/,
};

const EMAIL = {
  name: 'EMAIL',
  msg: 'test@test.com, test@test.ua',
  pattern: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
};

const PHONE = {
  name: 'PHONE',
  msg: 'only digits, spaces, dashes, parentheses, can start with +',
  pattern: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
};

const TELEGRAM = {
  name: 'TELEGRAM',
  msg: 'only letters and numbers,  more than five, start with @',
  pattern: /.*\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*$/,
};

const TELEGRAM_PHONE = {
  name: 'TELEGRAM_PHONE',
  msg: 'only letters, digits, spaces, dashes, parentheses, can start with +, @',
  pattern:
    /(.*\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*$)|(^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$)/,
};

const HTTP_LINK = {
  name: 'HTTP_LINK',
  msg: 'http(s)://.../...',
  pattern:
    /^(http(s)?:\/\/)?(([_.-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я0-9]*)+\/(([_-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я0-9]*)*$/,
};

const LINKEDIN = {
  name: 'LINKEDIN',
  msg: 'http(s)://linkedin.com/...',
  pattern:
    /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)+\/(([_-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я0-9]*)*$/,
};

const GITHUB = {
  name: 'GITHUB',
  msg: 'http(s)://www.github.com/...',
  pattern:
    /^(http(s?):\/\/)?(www\.)?github\.com+\/(([_-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я0-9]*)*$/,
};

const DATE = {
  name: 'DATE',
  msg: 'dd.mm.yyyy',
  pattern:
    /^([0-2^([0-2][0-9]|(3)[0-1])(\.)(((0)[0-9])|((1)[0-2]))(\.)((19|20)\d{2}$)/,
};

const ADDRESS = {
  name: 'ADDRESS',
  msg: 'only letters, numbers, commas, dashes, spases',
  pattern:
    /^[a-zA-Zа-яА-Я0-9]+(([ -]|(, )[a-zA-Zа-яА-Я0-9])?[a-zA-Zа-яА-Я0-9]*)*$/,
};

export {
  NAME,
  EMAIL,
  PHONE,
  TELEGRAM,
  TELEGRAM_PHONE,
  HTTP_LINK,
  LINKEDIN,
  GITHUB,
  DATE,
  ADDRESS,
};
