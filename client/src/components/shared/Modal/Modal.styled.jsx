import styled from 'styled-components';
import { themes } from 'styles/themes';

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  background-color: ${themes.colors.backdrop};
  backdrop-filter: blur(5px);

  & > div {
    min-width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    background-color: transparent; // ${themes.colors.white};
    box-shadow: ${themes.shadows.modal};
  }
`;
