import styled, { css } from 'styled-components';

import { themes } from 'styles/themes';

const { colors, breakpoints } = themes;

// Base styles
const baseStyles = css`
  position: relative;
  width: ${({ $w }) => $w};
  height: ${({ $h }) => $h};
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Roboto', sans-serif;
  border: 1px solid ${colors.accent};
  box-shadow: ${({ $bs }) => $bs};
  transition: color 250ms, border-color 250ms, background-color 250ms;

  &:disabled {
    cursor: auto;
    color: ${colors.border};
    border-color: ${colors.border};
    background-color: ${colors.accent};
  }

  // change bg-color on child hoverd
  &:has(div:hover) {
    background-color: ${colors.white};
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

// Size styles
const smallStyles = css`
  min-width: 60px;
  padding: 2px 8px;
  border-radius: 8px;
  font-size: 12px;
  @media screen and (width > ${breakpoints.tablet}) {
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
  @media screen and (width > ${breakpoints.tablet}) {
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
  @media screen and (width > ${breakpoints.tablet}) {
    min-width: 160px;
    padding: 12px 20px;
    border-radius: 24px;
    font-size: 18px;
  }
`;

// Color styles
const transparentStyles = css`
  font-weight: 500;
  color: ${colors.accent};
  background-color: ${colors.white};

  &:hover,
  &:focus {
    color: ${colors.hovered};
    border-color: ${colors.hovered};
    background-color: ${colors.backgroundHoverd};
  }

  &:disabled {
    border-color: ${colors.accent};
    background-color: ${colors.white};
  }
`;

const coloredStyles = css`
  font-weight: 700;
  color: ${colors.white};
  background-color: ${colors.accent};

  &:hover,
  &:focus {
    border-color: ${colors.hovered};
    background-color: ${colors.hovered};
  }

  &:disabled {
    border-color: ${colors.accent};
    background-color: ${colors.accent};
  }
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
