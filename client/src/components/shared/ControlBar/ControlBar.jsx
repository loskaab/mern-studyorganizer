import PropTypes from 'prop-types';

import { ControlDiv } from './ControlBar.styled';

const ControlBar = ({
  $w,
  $mb,
  $mi,
  $pos,
  $side,
  $high,
  $rg,
  $cg,
  $mm,
  $gtc,
  children,
}) => {
  return (
    <ControlDiv
      $w={$w}
      $mb={$mb}
      $mi={$mi}
      $side={$side}
      $high={$high}
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
  $mb: PropTypes.string,
  $mi: PropTypes.string,
  $pos: PropTypes.string,
  $side: PropTypes.string,
  $high: PropTypes.string,
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
