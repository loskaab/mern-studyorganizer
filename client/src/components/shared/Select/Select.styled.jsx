import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';

export { Select as SelectSimple };
export { CreatableSelect as SelectCreatable };

import { themes } from 'styles/themes';
const { colors, radiuses } = themes;

export const defaultTheme = ({
  $obh = colors.accent, // hoverd option background
  $sobh = colors.backgroundHoverd, // selected option background
}) => {
  return theme => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: `${$obh}`,
      primary: `${$sobh}`,
    },
    borderRadius: `${radiuses.s}`,
  });
};

export const defaultStyles = ({
  $br = radiuses.s, // border radius
  $ol = colors.white, // outline (if not neded, must be equal to the background)
  $b = colors.border, // border
  $bh = colors.accent, // hoverd border
  $bf = colors.hovered, //focused border
  $o = colors.black, // option text
  $oh = colors.hovered, // hoverd option
  $ob = colors.white, // option background
}) => ({
  // Select Styles
  control: (styles, state) => {
    return {
      ...styles,
      minWidth: '100px',
      borderRadius: `${$br}`,
      outline: state.isFocused ? `1px solid ${$ol}` : 'none',
      borderColor: state.isFocused ? `${$bf}` : `${$b}`,
      '&:hover': { borderColor: state.isFocused ? `${$bf}` : `${$bh}` },
      color: `${$o}`,
      ':active': { color: `${$ob}` },
      fontSize: '16px',
      cursor: 'pointer',
    };
  },

  option: (styles, state) => {
    return {
      ...styles,
      borderBottom: `1px dotted ${colors.borderLight}`,
      fontSize: '16px',
      fontWeight: '500',
      color: state.isSelected ? `${$o}` : state.isFocused && `${$ob}`,
      ':active': { color: `${$oh}`, backgroundColor: `${$ob}` },
      textTransform: 'capitalize',
      cursor: 'pointer',
    };
  },

  placeholder: styles => {
    return {
      ...styles,
      color: `${colors.placeholder}`,
    };
  },

  input: styles => {
    return {
      ...styles,
      textTransform: 'capitalize',
    };
  },

  singleValue: styles => {
    return {
      ...styles,
      textTransform: 'capitalize',
    };
  },

  multiValue: styles => {
    return {
      ...styles,
      borderRadius: `${radiuses.xs}`,
      backgroundColor: 'transparent',
    };
  },
  multiValueLabel: styles => ({
    ...styles,
    display: 'flex',
    alineItems: 'center',
    padding: 0,
    paddingLeft: 0,
    fontSize: '16px',
    color: colors.hovered,
  }),
  multiValueRemove: styles => ({
    ...styles,
    color: colors.border,

    ':hover': {
      backgroundColor: colors.white,
      color: colors.placeholder,
    },
  }),
});
