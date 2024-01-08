import styled, { css } from 'styled-components';

import { visuallyHidden } from 'styles/utils/hidden.styled';
import { themes } from 'styles/themes';

const { colors, shadows, indents, radiuses } = themes;

// li

const baseLiStyle = css`
  padding-block: ${indents.xs};
  &:not(:last-of-type) {
    margin-bottom: ${indents.s};
  }
  position: relative;

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 25fr 1fr;
  /* grid-template-areas: '. . . .'; */

  background-color: ${colors.white};
  border-radius: ${radiuses.s};
  font-size: 22px;
`;
export const Li = styled.li`
  ${baseLiStyle}

  transition: box-shadow 250ms, border-color 250ms;

  &:hover {
    border-color: ${colors.border};
    box-shadow: ${shadows.back};
    /* background-color: ${colors.backgroundHoverd}; */
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`;

// input label

const baseLabelStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${visuallyHidden}
  }
`;

export const LabelFavorite = styled.label`
  ${baseLabelStyle}

  & svg {
    transition: stroke 250ms;
    stroke-width: 2px;
    color: ${({ $hovered }) => ($hovered ? colors.yellow : 'transparent')};
    stroke: ${({ $hovered }) => ($hovered ? colors.yellow : colors.border)};
  }
  &:hover svg {
    stroke: ${colors.placeholder};
  }
`;

export const LabelChecked = styled.label`
  ${baseLabelStyle}
  opacity: ${({ $hovered }) => ($hovered ? 1 : 0)};
  transition: opacity 250ms;

  & svg {
    transition: border-color 250ms, color 250ms;
    padding: 1px;
    padding-top: 2px;
    border: 2px solid ${colors.border};
    border-radius: 50%;
    color: ${({ $hovered }) => ($hovered ? colors.border : 'transparent')};
  }
  &:hover svg {
    border-color: ${colors.placeholder};
    color: ${({ $hovered }) => ($hovered ? colors.placeholder : 'transparent')};
  }
`;

// edit, trash buttons

export const baseBtnStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  transition: opacity 250ms;

  & svg {
    transition: color 250ms;
    color: ${colors.border};
  }
  &:hover,
  &:hover svg {
    color: ${colors.placeholder};
  }
`;

export const TrashBtn = styled.button`
  ${baseBtnStyles}

  opacity: ${({ $hovered }) => ($hovered ? 1 : 0)};
`;

export const EditBtn = styled.button`
  ${baseBtnStyles}

  opacity: 0;
`;
