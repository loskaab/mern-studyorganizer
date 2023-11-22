import styled, { css } from 'styled-components';
import { Form as FormikForm, Field as FormikField, ErrorMessage } from 'formik';
import { BsCheckCircle, BsExclamationCircle } from 'react-icons/bs';

import { themes } from 'styles/themes';

export const Form = styled(FormikForm)`
  padding: 40px;
  display: flex;
  flex-direction: column;

  border-radius: ${themes.radiuses.m};
  background-color: ${themes.colors.white};

  box-shadow: ${themes.shadows.auth};
`;

export const Label = styled.label`
  display: flex;
  align-items: baseline;

  font-size: 16px;
  font-weight: 500;

  & pre {
    font-size: 10px;
  }
  // &::first-letter { text-transform: uppercase; }
`;

const baseFieldStyles = css`
  margin-bottom: 20px;
  width: 100%;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const FieldWrap = styled.div`
  ${baseFieldStyles}
  position: relative;
`;

export const Field = styled(FormikField)`
  ${baseFieldStyles}

  padding: 10px 12px;
  padding-left: ${({ name }) => name.toLowerCase().includes('pass') && '38px'};

  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  border: 1px solid ${themes.colors.border};
  border-radius: ${themes.radiuses.s};
  outline: 0.5px solid transparent;
  transition: border-color 250ms linear, outline-color 250ms linear;

  border-color: ${({ $validation }) => {
    switch ($validation) {
      case 'noValue':
        return themes.colors.border;
      case $validation:
        return themes.colors[$validation];
      default:
        break;
    }
  }};

  &:hover,
  &:focus {
    border-color: ${validateHoverFocus};
    outline-color: ${validateHoverFocus};
  }
`;

function validateHoverFocus({ $validation }) {
  switch ($validation) {
    case $validation:
      return themes.colors[$validation];
    default:
      break;
  }
}

export const Title = styled.div`
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  & h2 {
    margin: 0;

    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 14px;
  font-weight: 400;

  color: ${themes.colors.error};
`;

const IconStyles = css`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
`;

export const SuccessIcon = styled(BsCheckCircle)`
  ${IconStyles};

  color: ${themes.colors.success};
`;

export const ErrorIcon = styled(BsExclamationCircle)`
  ${IconStyles};

  color: ${themes.colors.error};
`;
