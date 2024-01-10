import PropTypes from 'prop-types';

import { FlexDiv } from './FlexWrap.styled';

const FlexWrap = ({
  className,
  $w,
  $h,
  $m,
  $p,
  $d,
  $fd,
  $ai,
  $jc,
  children,
}) => (
  <FlexDiv
    className={className}
    $w={$w}
    $h={$h}
    $m={$m}
    $p={$p}
    $d={$d}
    $fd={$fd}
    $ai={$ai}
    $jc={$jc}
  >
    {children}
  </FlexDiv>
);

FlexWrap.propTypes = {
  className: PropTypes.string,
  $w: PropTypes.string,
  $h: PropTypes.string,
  $m: PropTypes.string,
  $p: PropTypes.string,
  $d: PropTypes.string,
  $fd: PropTypes.string,
  $ai: PropTypes.string,
  $jc: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.oneOf(['img', 'png', 'svg']),
  ]),
};

export default FlexWrap;
