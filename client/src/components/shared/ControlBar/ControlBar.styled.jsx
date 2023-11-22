import styled from 'styled-components';

import { themes } from 'styles/themes';

const { indents, shadows, breakpoints } = themes;

export const ControlDiv = styled.div`
  width: ${({ $w }) => $w};
  padding-block: ${({ $pb = indents.s }) => $pb};
  padding-inline: ${({ $pi = indents.m }) => $pi};
  position: ${({ $pos = 'fixed' }) => $pos};
  ${({ $side = 'left' }) => `${$side}: 0`};
  ${({ $high = 'top' }) => `${$high}: 0`};

  display: grid;
  align-items: center;
  justify-items: center;

  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ $mm = '300px' }) => $mm}, 1fr)
  );

  grid-row-gap: ${({ $rg = '10px' }) => $rg};
  grid-column-gap: ${({ $cg = '20px' }) => $cg};

  @media screen and (width >= ${breakpoints.tablet}) {
    grid-template-columns: ${({ $gtc }) => $gtc};
  }

  & > button {
    box-shadow: ${shadows.button};
  }
`;
