import PropTypes from 'prop-types';

import { FlexDiv } from './FlexWrap.styled';

const FlexWrap = ({ $w, $h, $m, $p, $d, $fd, $ai, $jc, children }) => (
  <FlexDiv
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
  $w: PropTypes.string,
  $h: PropTypes.string,
  $m: PropTypes.string,
  $p: PropTypes.string,
  $d: PropTypes.string,
  $fd: PropTypes.string,
  $ai: PropTypes.string,
  $jc: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default FlexWrap;
