import styled from 'styled-components';
// import { BsCheckCircle, BsExclamationCircle } from 'react-icons/bs';

import { themes } from 'styles/themes';

export const Form = styled.form`
  padding: 40px;
  display: grid;
  grid-row-gap: 25px;

  border-radius: ${themes.radius.m};
  background-color: ${themes.colors.white};
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;

  & span {
    font-size: 14px;
    font-weight: 400;
    color: ${themes.colors.error};
    text-transform: lowercase;
  }
`;

export const Input = styled.input`
  /* margin-bottom: 20px; */
  width: 100%;

  /* &:last-of-type {
    margin-bottom: 0;
  } */

  padding: 8px 16px;
  padding-left: ${({ name }) => name.toLowerCase().includes('pass') && '38px'};

  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  border: 1px solid ${themes.colors.border};
  border-radius: ${themes.radius.s};
  outline: 0.5px solid transparent;
  transition: border-color 250ms linear, outline-color 250ms linear;

  /* border-color: ${({ validation }) => {
    switch (validation) {
      case 'noValue':
        return themes.colors.border;
      case validation:
        return themes.colors[validation];
      default:
        break;
    }
  }}; */

  /* &:hover,
  &:focus {
    border-color: ${'qwe'};
    outline-color: ${'qwe'};
  } */
`;

// function validateHoverFocus({ validation }) {
//   switch (validation) {
//     case validation:
//       return themes.colors[validation];
//     default:
//       break;
//   }
// }
