import styled from 'styled-components';

export const LinkMern = styled.a`
  display: inline-block;

  &:hover {
    color: #535bf2;
  }

  & img {
    height: 12em;
    padding: 1em;

    will-change: filter;
    transition: filter 300ms;

    &:hover {
      filter: drop-shadow(0 0 2em #61dafbaa);
    }
  }

  & ~ p {
    margin-top: 1em;
    font-weight: 500;
    text-align: center;

    & code {
      font-weight: 400;
      font-family: 'Courier New', Courier, monospace;
    }
  }
`;
