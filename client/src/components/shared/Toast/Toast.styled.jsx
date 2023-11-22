import styled from 'styled-components';
import { ToastContainer as Toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { themes } from 'styles/themes';

const { colors } = themes;

export const ToastContainer = styled(Toast).attrs({
  className: 'toast-container',
  toastClassName: 'toast',
  bodyClassName: 'body',
  progressClassName: 'progress',
})`
  width: fit-content;

  & button[aria-label='close'] {
    & svg {
      color: ${colors.placeholder};
    }
  }
  .toast {
    color: ${colors.black};
  }

  & .Toastify__toast--info {
    .body {
      & svg {
        fill: ${colors.accent};
      }
    }
    .progress {
      background-color: ${colors.accent};
    }
  }

  & .Toastify__toast--success {
    .body {
      & svg {
        fill: ${colors.success};
      }
    }
    .progress {
      background-color: ${colors.success};
    }
  }

  & .Toastify__toast--error {
    .body {
      & svg {
        fill: ${colors.error};
      }
    }
    .progress {
      background-color: ${colors.error};
    }
  }
`;
