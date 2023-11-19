import styled, { css } from 'styled-components';

import { themes } from 'styles/themes';

// Size styles
const smallStyles = css`
  min-width: 60px;
  padding: 2px 8px;
  border-radius: 8px;
  font-size: 12px;
  @media screen and (width > ${themes.breakpoints.tablet}) {
    min-width: 80px;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 14px;
  }
`;
const mediumStyles = css`
  min-width: 100px;
  padding: 4px 12px;
  border-radius: 14px;
  font-size: 14px;
  @media screen and (width > ${themes.breakpoints.tablet}) {
    min-width: 120px;
    padding: 8px 16px;
    border-radius: 18px;
    font-size: 16px;
  }
`;
const largeStyles = css`
  min-width: 140px;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  @media screen and (width > ${themes.breakpoints.tablet}) {
    min-width: 160px;
    padding: 12px 20px;
    border-radius: 24px;
    font-size: 18px;
  }
`;

// Color styles
const transparentStyles = css`
  font-weight: 500;
  color: ${themes.colors.accent};
  background-color: ${themes.colors.white};

  &:hover,
  &:focus {
    color: ${themes.colors.hovered};
    border-color: ${themes.colors.hovered};
    background-color: ${themes.colors.ligthBlue};
  }

  &:disabled {
    border-color: ${themes.colors.accent};
    background-color: ${themes.colors.white};
  }
`;

const coloredStyles = css`
  font-weight: 700;
  color: ${themes.colors.white};
  background-color: ${themes.colors.accent};

  &:hover,
  &:focus {
    border-color: ${themes.colors.hovered};
    background-color: ${themes.colors.hovered};
  }

  &:disabled {
    border-color: ${themes.colors.accent};
    background-color: ${themes.colors.accent};
  }
`;

// Base styles
const baseStyles = css`
  width: ${({ $w }) => $w};
  height: ${({ $h }) => $h};
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Roboto', sans-serif;

  border: 1px solid ${themes.colors.accent};
  transition: color 250ms, border-color 250ms, background-color 250ms;

  &:disabled {
    cursor: auto;
    color: ${themes.colors.border};
    border-color: ${themes.colors.border};
    background-color: ${themes.colors.accent};
  }

  ${({ $s = 's' }) => {
    switch ($s) {
      case 's':
        return smallStyles;
      case 'm':
        return mediumStyles;
      case 'l':
        return largeStyles;
      default:
        break;
    }
  }}
`;

// Buttons
export const TransparentBtn = styled.button`
  ${baseStyles}
  ${transparentStyles}
`;

export const AccentBtn = styled.button`
  ${baseStyles}
  ${coloredStyles}
`;
