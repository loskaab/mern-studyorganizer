import PropTypes from 'prop-types';

import { GridDiv } from './GridWrap.styled';

const GridWrap = ({
  $w,
  $h,
  $m,
  $p,
  $pos,
  $side,
  $high,
  $ai,
  $jc,
  $rg,
  $cg,
  $mm,
  $gtc,
  children,
}) => {
  return (
    <GridDiv
      id="grid"
      $w={$w}
      $h={$h}
      $m={$m}
      $p={$p}
      $pos={$pos}
      $side={$side}
      $high={$high}
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
  $w: PropTypes.string,
  $h: PropTypes.string,
  $m: PropTypes.string,
  $p: PropTypes.string,
  $pos: PropTypes.string,
  $side: PropTypes.string,
  $high: PropTypes.string,
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
