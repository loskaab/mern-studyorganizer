import styled, { css } from 'styled-components';

import { visuallyHidden } from 'styles/utils/hidden.styled';
import { themes } from 'styles/themes';

const baseStyle = css`
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: 1fr 10fr 20fr;
  grid-template-areas: '. title title';
  align-items: center;
  justify-items: left;
  line-height: 1.5;
`;

export const LiHead = styled.li`
  ${baseStyle}
  counter-reset: subsection;

  & h2 {
    justify-self: center;
    grid-area: title;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    text-transform: uppercase;

    &::before {
      counter-increment: section;
      content: 'Section ' counter(section) '. ';
      text-transform: capitalize;
    }
  }
`;

export const LiContent = styled.li`
  ${baseStyle}

  border: 1px solid transparent;
  border-bottom-color: ${themes.colors.lightGray};
  transition: box-shadow 250ms, border-color 250ms;

  &:hover {
    box-shadow: ${themes.shadows.hover};
    border-color: ${themes.colors.border};

    & svg {
      stroke: ${themes.colors.placeholder};
      stroke-width: 2px;
    }
  }

  & svg {
    transition: stroke 250ms;
  }

  & h3 {
    font-size: 16px;
    font-weight: 500;
  }

  & a {
    font-size: 16px;

    &::before {
      counter-increment: subsection;
      content: counter(section) '.' counter(subsection) '. ';
      font-size: 14px;
      font-weight: 700;
      color: ${themes.colors.black};
    }
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
