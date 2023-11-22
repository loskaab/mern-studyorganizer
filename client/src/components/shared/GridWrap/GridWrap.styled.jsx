import styled from 'styled-components';

import { themes } from 'styles/themes';

const { breakpoints } = themes;

export const GridDiv = styled.div`
  margin: ${({ $m = '0' }) => $m};
  padding: ${({ $p = '0' }) => $p};
  /* max-width: 1280px; */
  position: relative;
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
    height: ${({ $h }) => $h};
    grid-template-columns: ${({ $gtc }) => $gtc};
  }
`;
