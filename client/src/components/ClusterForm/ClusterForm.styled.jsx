import styled, { css } from 'styled-components';

import { themes } from 'styles/themes';
import { visuallyHidden } from 'styles/utils/hidden.styled';

export const Form = styled.form`
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${themes.radiuses.m};
  background-color: ${themes.colors.white};
  box-shadow: ${themes.shadows.auth};
`;

export const Label = styled.label`
  position: relative;
  font-size: 18px;
  font-weight: 700;

  &:not(:first-of-type) {
    font-size: 16px;
    font-weight: 500;
  }

  &:last-of-type {
    margin-bottom: 10px;
  }

  & span {
    font-size: 14px;
    font-weight: 400;
    color: ${themes.colors.error};
  }
`;

const baseStyles = css`
  width: 100%;
  padding: 8px 8px;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  border: 1px solid ${themes.colors.border};
  border-radius: ${themes.radiuses.s};
  outline: 0.5px solid transparent;
  transition: border-color 250ms linear, outline-color 250ms linear;

  &:hover,
  &:focus {
    border: 1px solid ${themes.colors.hovered};
  }
`;

export const Hidden = styled.input`
  ${baseStyles}
  ${visuallyHidden}
`;

export const Input = styled.input`
  ${baseStyles}
`;

export const SelectWrap = styled.div`
  ${baseStyles}
  position: relative;
  display: grid;
  grid-template-areas: 'select';
  align-items: center;
  cursor: pointer;

  // Custom arrow
  &::after {
    grid-area: select;
    justify-self: end;
    content: '';
    width: 0.8em;
    height: 0.5em;
    background-color: ${themes.colors.placeholder};
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }

  & select {
    position: relative;
    grid-area: select;
    // A reset of styles, including removing the default dropdown arrow
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-overflow: '';
    text-indent: 0.01px; /* Removes default arrow from firefox*/
    text-overflow: ''; /*Removes default arrow from firefox*/
    &::-ms-expand {
      display: none;
    }
    // Additional resets for further consistency
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    outline: none;
  }
`;
