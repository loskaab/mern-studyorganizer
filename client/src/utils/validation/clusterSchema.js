import * as Yup from 'yup';

import { regExp } from 'utils/constants';

const pattern = regExp => [regExp.pattern, regExp.msg];
const groupList = ['common', 'study', 'health', 'sport'];

export const clusterSchema = Yup.object().shape({
  cluster: Yup.string()
    .required('Required')
    .matches(...pattern(regExp.HTTP)),
  title: Yup.string(),
  group: Yup.mixed().oneOf(groupList),
});
