import styled, { css } from 'styled-components';

import { themes } from 'styles/themes';

const { colors, breakpoints } = themes;

const baseStyles = css`
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;

  @media screen and (width > ${breakpoints.tablet}) {
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
  border-color: ${colors.accent};
  color: ${colors.white};
  background-color: ${colors.accent};

  &:hover,
  &:focus {
    border-color: ${colors.hovered};
    background-color: ${colors.hovered};
  }

  &:disabled {
    cursor: auto;
    color: ${colors.border};
    border-color: ${colors.accent};
    background-color: ${colors.accent};
  }
`;

export const IconLink = styled.a`
  ${baseStyles};

  margin-top: 18px;
  padding-inline: 10px;

  font-weight: 500;
  border-color: ${colors.accent};
  color: ${colors.accent};
  background-color: ${colors.white};

  &:hover,
  &:focus {
    color: ${colors.hovered};
    border-color: ${colors.hovered};
    background-color: ${colors.backgroundHoverd};
  }

  & pre {
    font-size: 12px;
  }
`;
