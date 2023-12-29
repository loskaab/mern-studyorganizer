import styled, { css } from 'styled-components';

export const Wrap = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const logoStyles = css`
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
    ${logoStyles}
    animation: logo-spin infinite 20s linear;

    &:hover {
      filter: drop-shadow(0 0 2em #61dafbaa);
    }
  }
`;

export const LinkVite = styled.a`
  display: inline-block;

  & img {
    ${logoStyles}

    &:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
  }
`;
