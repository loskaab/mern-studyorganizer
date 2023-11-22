import styled from 'styled-components';

import { themes } from 'styles/themes';

const { colors } = themes;

export const Button = styled.button`
  width: fit-content;
  position: absolute;
  top: 50%;
  left: 10px;
  display: flex;
  align-items: center;

  transform: translateY(-50%);

  border-color: transparent;
  background-color: transparent;
  color: ${colors.border};
  transition: color 250ms;

  &:hover,
  &:focus {
    color: ${colors.black};
  }
`;
