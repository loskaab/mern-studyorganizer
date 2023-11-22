import styled from 'styled-components';

import { themes } from 'styles/themes';

const { colors, indents, radiuses } = themes;

export const StyledHeader = styled.header`
  padding: 0 20px;
  height: ${indents.xl};
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: start;
  z-index: 10;
  background-color: ${colors.background};
`;

export const LogoLink = styled.a`
  margin-right: 20px;
`;

export const Nav = styled.nav`
  margin-right: auto;

  & a {
    padding: 2px 5px;
    border-radius: ${radiuses.s};
    text-decoration: none;
    color: ${colors.black};
    text-decoration: none;
    font-weight: 700;
    font-size: 20px;

    &.active {
      color: ${colors.accent};
    } /* &:global(.active) { } */
  }
`;

export const Div = styled.div`
  margin-right: auto;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
`;
