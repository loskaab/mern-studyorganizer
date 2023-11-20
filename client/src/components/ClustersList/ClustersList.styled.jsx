import styled, { css } from 'styled-components';

import { themes } from 'styles/themes';

export const List = styled.ol`
  width: 100%;
  counter-reset: section 0;
`;

const baseStyle = css`
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: 10fr 20fr 1fr;
  grid-template-areas: 'title title title';
  align-items: baseline;

  &:not(:last-of-type) {
    margin-bottom: 5px;
  }
`;

export const LiHead = styled.li`
  ${baseStyle}
  counter-reset: subsection;

  justify-items: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;

  & h2 {
    grid-area: title;
    font-size: 18px;
    text-transform: uppercase;
  }

  & h2::before {
    counter-increment: section;
    content: 'Section ' counter(section) '. ';
    text-transform: capitalize;
  }
`;

export const LiContent = styled.li`
  ${baseStyle}

  & h3 {
    margin-right: 15px;
    font-size: 18px;
    justify-self: right;
  }

  & a::before {
    counter-increment: subsection;
    content: counter(section) '.' counter(subsection) '. ';
    font-size: 14px;
    font-weight: 700;
    color: ${themes.colors.black};
  }

  & span {
    justify-self: right;
    font-weight: 700;
  }
`;
