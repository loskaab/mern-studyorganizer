import styled, { css } from 'styled-components';

import { baseBtnStyles } from '../LiElement.styled';

import { themes } from 'styles/themes';

const { colors, indents } = themes;

// element

const baseWrapStyles = css`
  padding-block: 4px;
  height: 100%;
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
  border-radius: ${indents.xs};
  resize: none;
`;

export const Divider = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &::after {
    content: '';
    height: calc(100% - 8px);
    width: 1px;
    border: 1px solid ${colors.borderLight};
    transition: border-color 250ms;
  }

  &:hover::after {
    border-color: ${colors.placeholder};
  }
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
`;

export const TranslateBtn = styled.button`
  ${baseBtnStyles}
`;

export const SpeakBtn = styled.button`
  height: 100%;
  text-align: left;
  display: flex;
  align-items: top;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${indents.xs};
  color: ${colors.black};
  transition: background-color 250ms;
  overflow-x: auto;

  &:hover,
  &:focus {
    background-color: ${colors.backgroundHoverd};
  }
`;

const baseAudioStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;

export const Iframe = styled.iframe`
  ${baseAudioStyle}

  height: 60px;
  border-radius: 30px;
`;

export const Audio = styled.audio`
  ${baseAudioStyle}
`;
