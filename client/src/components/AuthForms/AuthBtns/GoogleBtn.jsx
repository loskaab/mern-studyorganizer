import PropTypes from 'prop-types';
import { FcGoogle } from 'react-icons/fc';
import { MdArrowForwardIos } from 'react-icons/md';

import { baseURL } from 'servises/baseURL';
import FlexWrap from 'components/shared/FlexWrap/FlexWrap';

import { IconLink } from './AuthBtns.styled';

const GoogleBtn = ({ children }) => (
  <IconLink href={`${baseURL}/auth/google`}>
    <FlexWrap $p="0" $d="flex" $ai="center" $jc="space-between">
      <FcGoogle size="20px" />
      {children}
      <MdArrowForwardIos size="16px" />
    </FlexWrap>
  </IconLink>
);

export default GoogleBtn;

GoogleBtn.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.oneOf(['img', 'png', 'svg']),
  ]),
};
