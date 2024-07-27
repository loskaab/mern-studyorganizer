import styled from 'styled-components';

import { themes } from 'styles/themes';

const { colors, indents } = themes;

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
  display: flex;
  align-items: center;

  & a {
    padding: 2px 0;
    margin-right: ${indents.m};
    border-radius: ${indents.xs};
    text-decoration: none;
    white-space: nowrap;
    color: ${colors.black};
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;

    &.active {
      color: ${colors.accent};
    } /* &:global(.active) { } */
  }
`;

export const TitleBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: color 250ms;
  color: ${colors.accent};
  white-space: nowrap;

  font-size: 18px;
  font-weight: 700;

  &:hover {
    color: ${colors.hovered};
  }
`;

export const LogoBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  background-color: transparent;
  border-color: transparent;
`;
