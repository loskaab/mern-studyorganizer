import styled from 'styled-components';

import { themes } from 'styles/themes';

const { colors, radiuses } = themes;

export const Form = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${radiuses.xl};
  background-color: ${colors.backgroundHoverd};
`;
