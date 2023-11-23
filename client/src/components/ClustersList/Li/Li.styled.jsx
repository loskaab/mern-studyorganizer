import styled, { css } from 'styled-components';

import { visuallyHidden } from 'styles/utils/hidden.styled';
import { themes } from 'styles/themes';

const { colors, shadows, indents, radiuses } = themes;

const baseStyle = css`
  margin: 0 ${indents.s};
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: 1fr 10fr 20fr;
  grid-template-areas: '. title title';
  align-items: center;
  justify-items: left;
  line-height: 1.5;
  border: 1px solid transparent;
  border-bottom-color: ${colors.borderLight};
`;

export const LiHead = styled.li`
  ${baseStyle}
  counter-reset: subsection;
  line-height: 2;

  &:first-of-type {
    border-top-left-radius: ${radiuses.xl};
    border-top-right-radius: ${radiuses.xl};
  }

  & h2 {
    justify-self: center;
    grid-area: title;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    text-transform: uppercase;

    &::before {
      counter-increment: section;
      content: 'Group ' counter(section) '. ';
      text-transform: capitalize;
    }
  }
`;

export const LiContent = styled.li`
  ${baseStyle}

  transition: box-shadow 250ms, border-color 250ms;

  & h3 {
    font-size: 16px;
    font-weight: 500;
  }

  &:hover {
    border-color: ${colors.border};
    box-shadow: ${shadows.back};
    background-color: ${colors.backgroundHoverd};
  }

  & svg {
    transition: stroke 250ms;
    stroke-width: 2.5px;
    color: ${({ $hoverd }) => ($hoverd ? colors.yellow : 'transparent')};
    stroke: ${({ $hoverd }) => ($hoverd ? colors.yellow : colors.border)};
  }
  &:hover svg {
    stroke: ${({ $hoverd }) => !$hoverd && colors.placeholder};
    stroke-width: ${({ $hoverd }) => !$hoverd && '2px'};
  }

  & a {
    font-size: 16px;
    color: ${colors.placeholder};

    &::before {
      counter-increment: subsection;
      content: counter(section) '.' counter(subsection) '. ';
      font-size: 14px;
      font-weight: 700;
      color: ${colors.black};
    }
  }
  &:hover a {
    color: ${colors.hovered};
  }
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & input {
    ${visuallyHidden}
  }
`;
