import * as yup from 'yup';

import regExp from 'services/regExp';

// Avatar
const MAX_SIZE = 1024 * 1024;
const MB = 1024 * 1024;
// const kB = 1024;
const avatar = yup
  .mixed()
  .test('type', 'is invalid!', files =>
    !files || !files[0] ? true : files[0].type.includes('image'),
  )
  .test('size', `max ${MAX_SIZE / MB}MB`, files =>
    !files || !files[0] ? true : files[0].size <= MAX_SIZE,
  );

// Name
const name = yup
  .string()
  .required('is required!')
  .min(4, 'is too short!')
  .max(20, 'is too long!')
  .matches(regExp.name, 'only letters, numbers, underscores, dashes!');

// Email
const email = yup.string().required('is required!').matches(regExp.email, 'is invalid!');

// Verification code
const verifyEmail = yup
  .string()
  .matches(regExp.cryptoRandomUUID, { message: 'is invalid!', excludeEmptyString: true });

// Password
const password = yup
  .string()
  .required('is required!')
  .min(6, 'is too short!')
  .max(20, 'is too long!');

// Confirm password
const confirmPass = yup
  .string()
  .required('is required!')
  .oneOf([yup.ref('password')], 'must match!');

// Birthday
const birthday = yup
  .string()
  .matches(regExp.birthday, { message: 'dd-mm-yyyy', excludeEmptyString: true });

// Country
const country = yup
  .string()
  .max(30, 'is too long!')
  .matches(regExp.country, { message: 'is invalid!', excludeEmptyString: true });
// WhatsApp
const whatsapp = yup
  .string()
  .matches(regExp.phone, { message: 'is invalid!', excludeEmptyString: true });

//Telegram
const telegram = yup
  .string()
  .matches(regExp.telegramPhone, { message: 'is invalid!', excludeEmptyString: true });

// ---------------------------------Schemas------------------------------ //

const signup = yup.object({ name, email, password, confirmPass }).required();

const signin = yup.object({ email, password }).required();

const profile = yup
  .object({
    avatar,
    name,
    email,
    verifyEmail,
    password,
    confirmPass,
    birthday,
    country,
    whatsapp,
    telegram,
  })
  .required();

export default { signup, signin, profile };
