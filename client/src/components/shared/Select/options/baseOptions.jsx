import { FaStar, FaCheckCircle } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';
import { ImRadioUnchecked } from 'react-icons/im';
import { CgSandClock } from 'react-icons/cg';

import { Div } from './options.styled';

export const baseOptions = [
  {
    value: 'recent',
    label: (
      <Div>
        <CgSandClock size="16px" /> <span>Recent</span>
      </Div>
    ),
  },
  {
    value: 'favorite',
    label: (
      <Div>
        <FaStar size="18px" /> <span>Fav</span>
      </Div>
    ),
  },
  {
    value: 'checked',
    label: (
      <Div>
        <FaCheckCircle size="16px" /> <span>Check</span>
      </Div>
    ),
  },
  {
    value: 'unchecked',
    label: (
      <Div>
        <ImRadioUnchecked size="16px" /> <span>Empty</span>
      </Div>
    ),
  },
  {
    value: 'trash',
    label: (
      <Div>
        <FiTrash2 size="16px" /> <span>Trash</span>
      </Div>
    ),
  },
];
