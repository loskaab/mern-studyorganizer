import styled from 'styled-components';

import { themes } from 'styles/themes';

const { colors, radiuses } = themes;

export const List = styled.ol`
  width: 100%;
  counter-reset: section 0;
  background-color: ${colors.white};
  border-radius: ${radiuses.xl};
`;
