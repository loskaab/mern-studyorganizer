import { themes } from 'styles/themes';

const {
  white,
  accent,
  hovered,
  black,
  background,
  backgroundHoverd,
  borderLight,
} = themes.colors;

export const styles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    minWidth: '200px',
    borderRadius: '8px',
    outline: state.isFocused
      ? `1px solid ${background}`
      : `1px solid ${background}`,
    borderColor: state.isFocused ? `${accent}` : `${background}`,
    '&:hover': {
      borderColor: state.isFocused ? `${accent}` : `${borderLight}`,
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
    color: 'gray',
  }),

  input: baseStyles => ({ ...baseStyles, textTransform: 'capitalize' }),

  singleValue: baseStyles => ({
    ...baseStyles,
    textTransform: 'capitalize',
  }),
};
