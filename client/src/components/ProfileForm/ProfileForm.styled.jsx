import styled from 'styled-components';

import { themes } from 'styles/themes';

const { colors, indents } = themes;

export const Form = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${indents.m};
  background-color: ${colors.backgroundHoverd};
`;
