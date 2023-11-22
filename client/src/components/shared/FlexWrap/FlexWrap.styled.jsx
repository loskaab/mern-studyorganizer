import styled from 'styled-components';

import { themes } from 'styles/themes';

const { breakpoints } = themes;

export const FlexDiv = styled.div`
  margin: ${({ $m = '0 auto' }) => $m};
  padding: ${({ $p = '0 10px' }) => $p};
  width: ${({ $w = '100%' }) => $w};
  height: ${({ $h }) => $h};
  position: relative;

  display: ${({ $d = 'flex' }) => $d};
  flex-direction: ${({ $fd }) => $fd};
  justify-content: ${({ $jc }) => $jc};
  align-items: ${({ $ai }) => $ai};

  background-color: transparent;

  @media screen and (width >= ${breakpoints.mobile}) {
    max-width: ${breakpoints.mobile};
  }

  @media screen and (width >= ${breakpoints.tablet}) {
    max-width: ${breakpoints.tablet};
    padding: ${({ $p = '0 24px' }) => $p};
  }

  @media screen and (width >= ${breakpoints.desktop}) {
    max-width: 100%; // max-width: ${breakpoints.desktop};
    padding: ${({ $p = '0 40px' }) => $p};
  }
`;
