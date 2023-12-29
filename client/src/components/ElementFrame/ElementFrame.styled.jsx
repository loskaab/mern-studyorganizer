import styled from 'styled-components';

import { themes } from 'styles/themes';

const { radiuses, colors } = themes;

export const Iframe = styled.iframe`
  border: none;

  border-radius: ${radiuses.xl};
  background-color: ${colors.white};
`;
