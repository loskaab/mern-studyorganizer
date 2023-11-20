import * as Yup from 'yup';

import { regExp } from 'utils/constants';

const pattern = regExp => [regExp.pattern, `pattern: ${regExp.msg}`];
// const groupList = ['common', 'study', 'health', 'sport'];

export const titleSchema = Yup.object().shape({
  title: Yup.string().max(20, 'is too long').required('required'),
  group: Yup.string(),
});

export const clusterSchema = Yup.object().shape({
  cluster: Yup.string()
    .matches(...pattern(regExp.HTTP))
    .required('required'),
});
