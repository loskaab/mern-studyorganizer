import PropTypes from 'prop-types';
import Select from 'react-select';
// import CreatableSelect from 'react-select/creatable';

import { themes } from 'styles/themes';

const { colors } = themes;

export const StyledSelect = ({
  $ol = colors.white, // outline
  $b = colors.border, // border
  $bh = colors.accent, // hoverd border
  $bf = colors.hovered, //focused border
  $o = colors.black, // option text
  $oh = colors.hovered, //hoverd option
  $ob = colors.white, // option background
  $obh = colors.backgroundHoverd, //hoverd option background

  name,
  value,
  placeholder,
  defaultValue,
  styles,
  options, // [{ value: qwe, label: asd, }]
  onChange, // (option, name) => console.log(option, name)
  isClearable,
}) => {
  // styles
  const defaultStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      minWidth: '200px',
      borderRadius: `${themes.radiuses.s}`,
      outline: state.isFocused ? `1px solid ${$ol}` : `1px solid ${$ol}`,
      borderColor: state.isFocused ? `${$bf}` : `${$b}`,
      '&:hover': {
        borderColor: state.isFocused ? `${$bf}` : `${$bh}`,
      },
      color: `${colors.black}`,
      fontSize: '16px',
      cursor: 'pointer',
    }),

    option: (baseStyles, state) => ({
      ...baseStyles,
      borderBottom: `1px dotted ${colors.borderLight}`,
      fontSize: '16px',
      fontWeight: '500',
      color: state.isFocused ? `${$oh}` : `${$o}`,
      backgroundColor: state.isFocused ? `${$obh}` : `${$ob}`,
      textTransform: 'capitalize',
      cursor: 'pointer',
    }),

    placeholder: baseStyles => ({
      ...baseStyles,
      color: `${colors.placeholder}`,
    }),

    input: baseStyles => ({ ...baseStyles, textTransform: 'capitalize' }),

    singleValue: baseStyles => ({
      ...baseStyles,
      textTransform: 'capitalize',
    }),
  };

  return (
    <Select
      // onChange={onChange}
      styles={{ ...defaultStyles, ...styles }}
      options={options}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      isClearable={isClearable}
    />
  );
};

StyledSelect.propTypes = {
  $ol: PropTypes.string,
  $b: PropTypes.string,
  $bh: PropTypes.string,
  $bf: PropTypes.string,
  $o: PropTypes.string,
  $oh: PropTypes.string,
  $ob: PropTypes.string,
  $obh: PropTypes.string,

  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  styles: PropTypes.arrayOf(PropTypes.object),
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  isClearable: PropTypes.oneOfType(PropTypes.bool, PropTypes.string),
};
