import styled from 'styled-components';

import { themes } from 'styles/themes';

export const Btn = styled.button`
  padding: 2px 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 12px;

  @media screen and (width >= 768px) {
    padding: 4px 10px;
    font-size: 14px;
  }

  color: ${themes.colors.black};
  border: 1px solid ${themes.colors.border};
  border-radius: ${themes.radius.s};
  background-color: ${themes.colors.white};
  transition: border-color 250ms, background-color 250ms, color 250ms;

  &:hover,
  &:focus {
    color: ${themes.colors.hovered};
    border-color: ${themes.colors.hovered};
    background-color: ${themes.colors.ligthBlue};
  }

  &:disabled {
    cursor: auto;
    color: ${themes.colors.border};
    border-color: ${themes.colors.border};
    background-color: ${themes.colors.white};
  }
`;
