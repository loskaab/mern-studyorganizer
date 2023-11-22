import PropTypes from 'prop-types';

import { GridDiv } from './GridWrap.styled';

const GridWrap = ({ $h, $m, $p, $ai, $jc, $rg, $cg, $mm, $gtc, children }) => {
  return (
    <GridDiv
      id="grid"
      $h={$h}
      $m={$m}
      $p={$p}
      $ai={$ai}
      $jc={$jc}
      $rg={$rg}
      $cg={$cg}
      $mm={$mm}
      $gtc={$gtc}
    >
      {children}
    </GridDiv>
  );
};

export default GridWrap;

GridWrap.propTypes = {
  $h: PropTypes.string,
  $m: PropTypes.string,
  $p: PropTypes.string,
  $ai: PropTypes.string,
  $jc: PropTypes.string,
  $rg: PropTypes.string,
  $cg: PropTypes.string,
  $mm: PropTypes.string,
  $gtc: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.oneOf(['img', 'png', 'svg']),
  ]),
};
