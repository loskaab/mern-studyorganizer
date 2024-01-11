import styled from 'styled-components';

import { themes } from 'styles/themes';

const { indents } = themes;

export const List = styled.ol`
  width: 100%;

  padding-bottom: ${indents.xl};
  counter-reset: section 0;
`;
