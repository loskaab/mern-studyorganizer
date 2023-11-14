import { FcGoogle } from 'react-icons/fc';
import { MdArrowForwardIos } from 'react-icons/md';

import { baseURL } from 'servises/baseURL';
import Container from 'components/shared/Container/Container';

import { IconLink } from './AuthBtns.styled';

const GoogleBtn = () => (
  <IconLink href={`${baseURL}/auth/google`}>
    <Container $p="0" $d="flex" $ai="center" $jc="space-between">
      <FcGoogle size="20px" />
      Sign in with Google
      <MdArrowForwardIos size="16px" />
    </Container>
  </IconLink>
);

export default GoogleBtn;
