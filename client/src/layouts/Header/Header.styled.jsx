import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

import { themes } from 'styles/themes';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 6px 20px;
  z-index: 10;
  background-color: ${themes.colors.background};
  border-bottom: 1px solid #dbdbdb;

  & > a {
    margin-right: 20px;
  }
`;

export const NavLink = styled(Link)`
  padding: 2px 5px;
  border-radius: ${themes.radius.s};
  text-decoration: none;
  color: ${themes.colors.black};
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;

  &.active {
    color: ${themes.colors.accent};
  } /* &:global(.active) { } */
`;

export const Div = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;

  & button {
    margin-left: 20px;
  }
`;
