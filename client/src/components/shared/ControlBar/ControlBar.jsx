import PropTypes from 'prop-types';

import { ControlDiv } from './ControlBar.styled';

const ControlBar = ({ $w, $pb, $pi, $pos, $x, $y, $rg, $cg, $mm, $gtc, children }) => {
  return (
    <ControlDiv
      $w={$w}
      $pb={$pb}
      $pi={$pi}
      $x={$x}
      $y={$y}
      $pos={$pos}
      $rg={$rg}
      $cg={$cg}
      $mm={$mm}
      $gtc={$gtc}
    >
      {children}
    </ControlDiv>
  );
};

export default ControlBar;

ControlBar.propTypes = {
  $w: PropTypes.string,
  $pb: PropTypes.string,
  $pi: PropTypes.string,
  $pos: PropTypes.string,
  $x: PropTypes.string,
  $y: PropTypes.string,
  $rg: PropTypes.string,
  $cg: PropTypes.string,
  $mm: PropTypes.string,
  $gtc: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.oneOf(['img', 'png', 'svg']),
  ]).isRequired,
};
