import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';

export { Select as SelectSimple };
export { CreatableSelect as SelectCreatable };

import { themes } from 'styles/themes';
const { colors } = themes;

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
    borderRadius: `${themes.radiuses.s}`,
  });
};

export const defaultStyles = ({
  $ol = colors.white, // outline
  $b = colors.border, // border
  $bh = colors.accent, // hoverd border
  $bf = colors.hovered, //focused border
  $o = colors.black, // option text
  $oh = colors.hovered, // hoverd option
  $ob = colors.white, // option background
}) => ({
  // Select Styles
  control: (baseStyles, state) => {
    return {
      ...baseStyles,
      minWidth: '200px',
      borderRadius: `${themes.radiuses.s}`,
      outline: state.isFocused ? `1px solid ${$ol}` : 'none',
      borderColor: state.isFocused ? `${$bf}` : `${$b}`,
      '&:hover': { borderColor: state.isFocused ? `${$bf}` : `${$bh}` },
      color: `${$o}`,
      ':active': { color: `${$ob}` },
      fontSize: '16px',
      cursor: 'pointer',
    };
  },

  option: (baseStyles, state) => {
    return {
      ...baseStyles,
      borderBottom: `1px dotted ${colors.borderLight}`,
      fontSize: '16px',
      fontWeight: '500',

      color: state.isSelected ? `${$o}` : state.isFocused && `${$ob}`,

      ':active': { color: `${$oh}`, backgroundColor: `${$ob}` },
      textTransform: 'capitalize',
      cursor: 'pointer',
    };
  },

  placeholder: baseStyles => {
    return {
      ...baseStyles,
      color: `${colors.placeholder}`,
    };
  },

  input: baseStyles => {
    return {
      ...baseStyles,
      textTransform: 'capitalize',
    };
  },

  singleValue: baseStyles => {
    return {
      ...baseStyles,
      textTransform: 'capitalize',
    };
  },
});
