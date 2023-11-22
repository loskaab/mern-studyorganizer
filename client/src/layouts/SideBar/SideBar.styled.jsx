import styled, { css } from 'styled-components';

import { themes } from 'styles/themes';

const { indents } = themes;

export const SideBarDiv = styled.div`
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
  padding-inline: ${indents.m};
  padding-block: ${indents.s};
  position: fixed;
  ${({ $side }) => `${$side}: 0`};
  top: ${({ $offY }) => $offY};

  z-index: 100;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const baseLogo = css`
  height: 6em;
  padding: 1em;

  will-change: filter;
  transition: filter 300ms;

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const LinkReact = styled.a`
  display: inline-block;

  &:hover {
    color: #535bf2;
  }

  & img {
    ${baseLogo}
    animation: logo-spin infinite 20s linear;

    &:hover {
      filter: drop-shadow(0 0 2em #61dafbaa);
    }
  }
`;

export const LinkVite = styled.a`
  display: inline-block;

  & img {
    ${baseLogo}

    &:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
  }
`;
