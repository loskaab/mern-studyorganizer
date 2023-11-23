import styled from 'styled-components';

import { themes } from 'styles/themes';

const { breakpoints } = themes;

export const GridDiv = styled.div`
  width: ${({ $w }) => $w};
  height: ${({ $h }) => $h};
  margin: ${({ $m = '0' }) => $m};
  padding: ${({ $p = '0' }) => $p};
  position: ${({ $pos = 'relative' }) => $pos};
  ${({ $side = 'left' }) => `${$side}: 0`};
  ${({ $high = 'top' }) => `${$high}: 0`};

  display: grid;
  align-items: ${({ $ai }) => $ai};
  justify-items: ${({ $jc }) => $jc};

  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ $mm = '300px' }) => $mm}, 1fr)
  );

  grid-row-gap: ${({ $rg = '10px' }) => $rg};
  grid-column-gap: ${({ $cg = '20px' }) => $cg};

  @media screen and (width >= ${breakpoints.tablet}) {
    grid-template-columns: ${({ $gtc }) => $gtc};
  }
`;
