import styled, { css } from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';

import { themes } from 'styles/themes';

const CommonStyles = css`
  margin-left: auto;

  color: ${themes.colors.accent};
  text-decoration: underline;
  font-family: 'Roboto', sans-serif;
  font-size: ${({ fs = '14px' }) => fs};
  font-weight: 400;
`;

export const Link = styled(RouteLink)`
  ${CommonStyles};
`;

export const Btn = styled.button`
  ${CommonStyles};

  background-color: transparent;
  border-color: transparent;
`;
