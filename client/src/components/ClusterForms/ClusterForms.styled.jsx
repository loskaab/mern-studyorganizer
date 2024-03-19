import styled, { css } from 'styled-components';

import { themes } from 'styles/themes';
import { visuallyHidden } from 'styles/utils/hidden.styled';

const { colors, indents, shadows } = themes;

export const Form = styled.form`
  width: 460px;
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${indents.s};
  background-color: ${colors.white};
  box-shadow: ${shadows.auth};
`;

export const Label = styled.label`
  position: relative;

  font-size: 16px;
  font-weight: 500;

  &:last-of-type {
    margin-bottom: 10px;
  }

  & > span {
    font-size: 14px;
    font-weight: 400;
    color: ${colors.error};
  }
`;

const baseStyles = css`
  width: 100%;
  padding: 8px 8px;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  border: 1px solid ${colors.border};
  border-radius: ${indents.xs};
  outline: 0.5px solid transparent;
  transition: border-color 250ms linear, outline-color 250ms linear;

  &:hover,
  &:focus {
    border-color: ${colors.hovered};
  }
`;

export const Hidden = styled.input`
  ${baseStyles}
  ${visuallyHidden}
`;

export const Input = styled.input`
  ${baseStyles}
`;
