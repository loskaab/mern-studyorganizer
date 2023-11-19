import * as Yup from 'yup';

import { regExp } from 'utils/constants';

const pattern = regExp => [regExp.pattern, `pattern: ${regExp.msg}`];
// const groupList = ['common', 'study', 'health', 'sport'];

export const clusterSchema = Yup.object().shape({
  cluster: Yup.string()
    .required('required')
    .matches(...pattern(regExp.HTTP)),
  title: Yup.string().max(20, 'is too long'),
  group: Yup.string(),
});
