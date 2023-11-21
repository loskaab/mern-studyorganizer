import styled from 'styled-components';

import { themes } from 'styles/themes';

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

  @media screen and (width >= ${themes.breakpoints.mobile}) {
    max-width: ${themes.breakpoints.mobile};
  }

  @media screen and (width >= ${themes.breakpoints.tablet}) {
    max-width: ${themes.breakpoints.tablet};
    padding: ${({ $p = '0 24px' }) => $p};
  }

  @media screen and (width >= ${themes.breakpoints.desktop}) {
    max-width: 100%; // max-width: ${themes.breakpoints.desktop};
    padding: ${({ $p = '0 40px' }) => $p};
  }
`;
