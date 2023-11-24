import styled, { css } from 'styled-components';

import { themes } from 'styles/themes';
import { visuallyHidden } from 'styles/utils/hidden.styled';

// import Select from 'components/shared/Select/Select';

const { colors, radiuses, shadows } = themes;

export const Form = styled.form`
  width: 460px;
  padding: 40px;
  display: grid;
  grid-row-gap: 20px;

  border-radius: ${radiuses.m};
  background-color: ${colors.white};
  box-shadow: ${shadows.auth};
`;

export const Label = styled.label`
  position: relative;

  font-size: 16px;
  font-weight: 500;

  &:first-of-type {
    font-size: 18px;
    font-weight: 700;
  }

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
  border-radius: ${radiuses.s};
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

// Custom select pattern

{
  /* <SelectWrap>
  <select name="group" id="group-select">
    <option value="qwe">asd</option>
  </select>
  <span></span>
</SelectWrap>; */
}

// export const SelectWrap = styled(Select)`
//   ${baseStyles}
//   position: relative;
//   display: grid;
//   grid-template-areas: 'select';
//   align-items: center;
//   cursor: pointer;

//   // Custom arrow
//   &::after {
//     grid-area: select;
//     justify-self: end;
//     content: '';
//     width: 0.8em;
//     height: 0.5em;
//     background-color: ${colors.placeholder};
//     clip-path: polygon(100% 0%, 0 0%, 50% 100%);
//   }

//   & select {
//     position: relative;
//     grid-area: select;
//     // A reset of styles, including removing the default dropdown arrow
//     appearance: none;
//     -webkit-appearance: none;
//     -moz-appearance: none;
//     text-overflow: '';
//     text-indent: 0.01px; /* Removes default arrow from firefox*/
//     text-overflow: ''; /*Removes default arrow from firefox*/
//     &::-ms-expand {
//       display: none;
//     }
//     // Additional resets for further consistency
//     background-color: transparent;
//     border: none;
//     padding: 0 1em 0 0;
//     margin: 0;
//     width: 100%;
//     font-family: inherit;
//     font-size: inherit;
//     cursor: inherit;
//     line-height: inherit;
//     outline: none;
//   }
// `;
