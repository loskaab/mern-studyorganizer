import styled, { css } from 'styled-components';

import { themes } from 'styles/themes';

const baseStyles = css`
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;

  @media screen and (width > ${themes.breakpoints.tablet}) {
    font-size: 16px;
  }

  border: 1px solid;
  border-radius: 20px;
  transition: border-color 250ms, background-color 250ms, color 250ms;
`;

export const SignButton = styled.button`
  ${baseStyles};

  margin-top: 30px;

  font-weight: 700;
  border-color: ${themes.colors.accent};
  color: ${themes.colors.white};
  background-color: ${themes.colors.accent};

  &:hover,
  &:focus {
    border-color: ${themes.colors.hovered};
    background-color: ${themes.colors.hovered};
  }

  &:disabled {
    cursor: auto;
    color: ${themes.colors.border};
    border-color: ${themes.colors.accent};
    background-color: ${themes.colors.accent};
  }
`;

export const IconLink = styled.a`
  ${baseStyles};

  margin-top: 18px;
  padding-inline: 10px;

  font-weight: 500;
  border-color: ${themes.colors.accent};
  color: ${themes.colors.accent};
  background-color: ${themes.colors.white};

  &:hover,
  &:focus {
    color: ${themes.colors.hovered};
    border-color: ${themes.colors.hovered};
    background-color: ${themes.colors.backgroundHoverd};
  }

  & pre {
    font-size: 12px;
  }
`;
