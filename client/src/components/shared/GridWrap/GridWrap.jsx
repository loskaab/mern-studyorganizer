import PropTypes from 'prop-types';

import { GridDiv } from './GridWrap.styled';

const GridWrap = ({ $h, $m, $p, $rg, $cg, $mm, $gtc, children }) => {
  return (
    <GridDiv id="grid" $h={$h} $m={$m} $p={$p} $rg={$rg} $cg={$cg} $mm={$mm} $gtc={$gtc}>
      {children}
    </GridDiv>
  );
};

export default GridWrap;

GridWrap.propTypes = {
  $h: PropTypes.string,
  $m: PropTypes.string,
  $p: PropTypes.string,
  $rg: PropTypes.string,
  $cg: PropTypes.string,
  $mm: PropTypes.string,
  $gtc: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
