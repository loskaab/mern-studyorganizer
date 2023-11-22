import styled from 'styled-components';

import { themes } from 'styles/themes';

const { colors, indents, radiuses, shadows } = themes;

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  /* background-color: ${colors.backdrop}; */
  /* backdrop-filter: blur(5px); */

  & > div {
    width: 400px;
    height: 400px;
    position: absolute;
    top: ${indents.xl};
    right: ${indents.m};

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: ${radiuses.xl};
    background-color: ${colors.backgroundHoverd};
    box-shadow: ${shadows.back};
  }
`;
