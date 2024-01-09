import styled from 'styled-components';

import { themes } from 'styles/themes';

const { indents } = themes;

export const SelectWrap = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  column-gap: ${indents.s};
  grid-template-columns: 2fr 1fr 2fr;
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
`;
