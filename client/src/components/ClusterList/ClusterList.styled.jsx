import styled from 'styled-components';

import { themes } from 'styles/themes';

const { colors, indents, radiuses } = themes;

export const List = styled.ol`
  width: 100%;
  padding-top: 2px;
  padding-bottom: ${indents.xl};
  counter-reset: section 0;
  background-color: ${colors.white};
  border-radius: ${radiuses.xl};
`;
