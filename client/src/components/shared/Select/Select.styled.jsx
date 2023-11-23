import PropTypes from 'prop-types';
import Select from 'react-select';

import { themes } from 'styles/themes';

const {
  white,
  hovered,
  black,
  placeholder,
  backgroundHoverd,
  border,
  borderLight,
} = themes.colors;

export const StyledSelect = ({
  $bg = white,
  $b = border,
  $bh = hovered,
  options,
}) => (
  <Select
    styles={{
      control: (baseStyles, state) => ({
        ...baseStyles,
        minWidth: '200px',
        borderRadius: `${themes.radiuses.s}`,
        outline: state.isFocused ? `1px solid ${$bg}` : `1px solid ${$bg}`,
        borderColor: state.isFocused ? `${hovered}` : `${$b}`,
        '&:hover': {
          borderColor: state.isFocused ? `${hovered}` : `${$bh}`,
        },
        color: `${black}`,
        fontSize: '16px',
        cursor: 'text',
      }),

      option: (baseStyles, state) => ({
        ...baseStyles,
        borderBottom: `1px dotted ${borderLight}`,
        fontSize: '16px',
        fontWeight: '500',
        color: state.isFocused ? `${hovered}` : `${black}`,
        backgroundColor: state.isFocused ? `${backgroundHoverd}` : `${white}`,
        textTransform: 'capitalize',
        cursor: 'pointer',
      }),

      placeholder: baseStyles => ({
        ...baseStyles,
        color: `${placeholder}`,
      }),

      input: baseStyles => ({ ...baseStyles, textTransform: 'capitalize' }),

      singleValue: baseStyles => ({
        ...baseStyles,
        textTransform: 'capitalize',
      }),
    }}
    options={options}
  />
);

StyledSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  $bg: PropTypes.string,
  $b: PropTypes.string,
  $bh: PropTypes.string,
};
