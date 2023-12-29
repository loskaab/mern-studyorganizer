import styled, { css } from 'styled-components';

import { themes } from 'styles/themes';

const { indents } = themes;

export const SideBarDiv = styled.div`
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
  padding-inline: ${indents.m};
  padding-block: ${indents.s};
  position: fixed;
  ${({ $side }) => `${$side}: 0`};
  top: ${({ $offY }) => $offY};

  z-index: 100;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;
