import styled from 'styled-components';

import { themes } from 'styles/themes';

const { colors } = themes;

export const Button = styled.div`
  position: absolute;
  top: 50%;
  left: 6px;
  display: flex;
  align-items: center;
  transform: translateY(-50%);

  &:hover svg {
    stroke: ${colors.hovered};
  }

  & svg {
    transition: stroke 250ms;
    stroke: transparent;
    stroke: ${({ $colored }) => $colored && colors.yellow};

    @keyframes refresh-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-360deg);
      }
    }
    animation: refresh-spin infinite 12s linear;
  }
`;
