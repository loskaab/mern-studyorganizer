import styled from 'styled-components';

import { themes } from 'styles/themes';

const { colors, shadows, indents, radiuses } = themes;

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  ${({ $bd = true }) => $bd && `background-color: ${colors.backdrop}`};
  ${({ $bd = true }) => $bd && `backdrop-filter: blur(${indents.s})`};

  & > div {
    position: absolute;
    ${({ $x = 'left: 50%' }) => $x};
    ${({ $y = 'top: 50%' }) => $y};

    ${({ $x, $y }) => !$x && !$y && 'transform: translate(-50%, -50%);'}

    border-radius: ${radiuses.xl};
    background-color: transparent; // ${colors.white};
    box-shadow: ${shadows.back};
  }
`;
