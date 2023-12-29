import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { visuallyHidden } from 'styles/utils/hidden.styled';
import { themes } from 'styles/themes';

const { colors, shadows, indents, radiuses } = themes;

// li

const baseLiStyle = css`
  margin: 0 ${indents.s};
  padding-inline: 4px;
  display: grid;
  grid-column-gap: 2px;
  grid-template-columns: 1fr 15fr 30fr 1fr 1fr;
  grid-template-areas: '. title title . .';
  align-items: center;
  justify-items: left;
  line-height: 1.5;
  border: 1px solid transparent;
  border-bottom-color: ${colors.borderLight};
`;

export const LiGroup = styled.li`
  ${baseLiStyle}
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

export const LiCluster = styled.li`
  ${baseLiStyle}

  transition: box-shadow 250ms, border-color 250ms;

  &:hover {
    border-color: ${colors.border};
    box-shadow: ${shadows.back};
    background-color: ${colors.backgroundHoverd};
  }

  &:hover label,
  &:hover button {
    opacity: 1;
  }
`;

const baseLinkStyle = css`
  font-size: 16px;

  &:hover {
    color: ${colors.hovered};
  }
`;

export const ElementLink = styled(Link)`
  ${baseLinkStyle}

  color: ${colors.black};

  font-weight: 500;
`;

export const ClusterLink = styled.a`
  ${baseLinkStyle}

  color: ${colors.placeholder};

  &::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) '. ';
    font-size: 14px;
    font-weight: 700;
    color: ${colors.black};
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

// delete button

export const DelBtn = styled.button`
  display: flex;
  justify-items: center;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  opacity: 0;
  transition: opacity 250ms;

  & svg {
    transition: color 250ms;
    color: ${colors.border};
  }
  &:hover svg {
    color: ${colors.placeholder};
  }
`;
