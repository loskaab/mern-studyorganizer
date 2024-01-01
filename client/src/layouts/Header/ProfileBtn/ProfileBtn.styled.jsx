import styled, { css } from 'styled-components';

import { themes } from 'styles/themes';

const { colors, breakpoints } = themes;

const avatarStyles = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: ${colors.accent};
  background-image: ${({ $url }) => `url(${$url})`};
  background-size: cover;
  cursor: pointer;

  outline: 1px solid tomato;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.white};
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    ${({ $abbr }) => `content:"${$abbr}"`};
  }
`;

export const BtnDiv = styled.div`
  ${avatarStyles}

  min-width: 36px;
  min-height: 36px;
  margin-left: auto;
  font-size: 12px;
  outline: 3px solid transparent;
  transition: outline-color 250ms;

  &:hover,
  &:focus {
    outline-color: ${colors.borderLight};
  }

  &::after {
    min-width: 36px;
    min-height: 36px;
  }

  @media screen and (width > ${breakpoints.tablet}) {
    font-size: 14px;
  }
`;

// Move to ProfileForm
export const Label = styled.label`
  ${avatarStyles}

  min-width: 150px;
  min-height: 150px;
  font-size: 18px;
  border: 3px solid transparent;
  transition: border-color 250ms;

  &:hover,
  &:focus {
    border-color: ${colors.hovered};
  }

  &::after {
    min-width: 150px;
    min-height: 150px;
  }

  @media screen and (width > ${breakpoints.tablet}) {
    font-size: 20px;
  }
`;
