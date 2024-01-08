import styled from 'styled-components';

import { themes } from 'styles/themes';

const { colors, indents, radiuses } = themes;

export const StyledHeader = styled.header`
  padding: 0 20px;
  height: ${({ $height }) => $height};
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: start;
  z-index: 10;
  background-color: ${colors.background};
`;

export const Nav = styled.nav`
  margin-right: auto;

  & a {
    padding: 2px 0;
    margin-right: ${indents.m};
    border-radius: ${radiuses.s};
    text-decoration: none;
    color: ${colors.black};
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;

    &.active {
      color: ${colors.accent};
    } /* &:global(.active) { } */
  }
`;

export const Title = styled.h2`
  font-size: 26px;
`;
