import styled from 'styled-components';

import { themes } from 'styles/themes';

export const ControlDiv = styled.div`
  width: ${({ $w }) => $w};
  padding-block: ${({ $pb = themes.indent.s }) => $pb};
  padding-inline: ${({ $pi = themes.indent.m }) => $pi};
  position: ${({ $pos = 'fixed' }) => $pos};
  ${({ $x = 'left' }) => `${$x}: 0`};
  ${({ $y = 'top' }) => `${$y}: 0`};

  display: grid;
  justify-items: center;

  grid-template-columns: repeat(auto-fit, minmax(${({ $mm = '300px' }) => $mm}, 1fr));

  grid-row-gap: ${({ $rg = '10px' }) => $rg};
  grid-column-gap: ${({ $cg = '20px' }) => $cg};

  @media screen and (width >= ${themes.breakpoints.tablet}) {
    grid-template-columns: ${({ $gtc }) => $gtc};
  }
`;
