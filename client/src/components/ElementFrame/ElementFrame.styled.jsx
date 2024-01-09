import styled from 'styled-components';

import { themes } from 'styles/themes';

const { indents, colors } = themes;

export const Iframe = styled.iframe`
  border: none;

  border-radius: ${indents.m};
  background-color: ${colors.white};
`;
