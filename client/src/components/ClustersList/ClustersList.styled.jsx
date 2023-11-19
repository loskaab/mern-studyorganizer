import styled, { css } from 'styled-components';

import { themes } from 'styles/themes';

export const List = styled.ol`
  counter-reset: section 0;
`;

const baseStyle = css`
  &:not(:last-of-type) {
    margin-bottom: 5px;
  }

  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: 6fr 10fr 1fr;
  align-items: baseline;

  & h2 {
    font-size: 18px;
  }

  & span {
    justify-self: center;
    font-weight: 700;
  }
`;

export const HeadLi = styled.li`
  ${baseStyle}

  justify-items: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: ${themes.colors.accent};
`;

export const Li = styled.li`
  ${baseStyle}

  & h2::before {
    counter-increment: section;
    content: counter(section) '. ';
  }
`;
