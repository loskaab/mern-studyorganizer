import styled, { css } from 'styled-components';

import { baseBtnStyles } from '../Li.styled';

import { themes } from 'styles/themes';

const { colors, radiuses } = themes;

// element

const baseWrapStyles = css`
  display: grid;
  align-items: center;
  grid-template-columns: 20fr 1fr 20fr;
`;

export const GridWrap = styled.div`
  ${baseWrapStyles}
`;

export const Form = styled.form`
  ${baseWrapStyles}

  grid-template-columns: 12fr 1fr 12fr;
`;

export const Textarea = styled.textarea`
  outline: none;
  border: 1px solid ${colors.accent};
  border-radius: ${radiuses.s};
  resize: vertical;
`;

export const Divider = styled.div`
  height: 75%;
  width: 1px;
  justify-self: center;
  border: 1px solid ${colors.borderLight};
`;

// buttons

export const BtnWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const SubmitBtn = styled.button`
  ${baseBtnStyles}
`;

export const ResizeBtn = styled.button`
  ${baseBtnStyles}

  cursor: row-resize;
`;

export const SpeakBtn = styled.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${radiuses.s};
  color: ${colors.black};
  transition: background-color 250ms;

  &:hover,
  &:focus {
    background-color: ${colors.backgroundHoverd};
  }
`;
