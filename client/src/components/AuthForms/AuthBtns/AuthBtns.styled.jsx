import styled, { css } from 'styled-components';

import { themes } from 'styles/themes';

const CommonStyles = css`
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;

  @media screen and (width >= 768px) {
    font-size: 16px;
  }

  border: 1px solid;
  border-radius: ${themes.radius.s};
  transition: border-color 250ms, background-color 250ms, color 250ms;
`;

export const SignButton = styled.button`
  ${CommonStyles};

  margin-top: 30px;

  font-weight: 700;
  border-color: ${themes.colors.accent};
  color: ${themes.colors.white};
  background-color: ${themes.colors.accent};

  &:hover,
  &:focus {
    border-color: ${themes.colors.hovered};
    background-color: ${themes.colors.hovered};
  }

  &:disabled {
    cursor: auto;
    color: ${themes.colors.border};
    border-color: ${themes.colors.accent};
    background-color: ${themes.colors.accent};
  }
`;

export const IconLink = styled.a`
  ${CommonStyles};

  margin-top: 18px;
  padding-inline: 10px;

  font-weight: 400;
  border-color: ${themes.colors.border};
  color: ${themes.colors.black};
  background-color: ${themes.colors.white};

  &:hover,
  &:focus {
    color: ${themes.colors.hovered};
    border-color: ${themes.colors.hovered};
    background-color: ${themes.colors.ligthBlue};
  }

  & pre {
    font-size: 12px;
  }
`;
