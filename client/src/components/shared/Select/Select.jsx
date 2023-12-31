import PropTypes from 'prop-types';

import { SelectSimple, defaultTheme, defaultStyles } from './Select.styled';

const Select = ({
  styles,

  $obh,
  $sobh,

  $ol,
  $b,
  $bh,
  $bf,
  $o,
  $oh,
  $ob,

  name,
  value,
  defaultValue,
  placeholder,
  options, // [{ value: qwe, label: asd, }]
  onChange, // (option, name) => console.log(option, name)
  isMulti,
  isClearable,
  isDisabled,
}) => {
  return (
    <SelectSimple
      theme={defaultTheme({ $obh, $sobh })}
      styles={{
        ...defaultStyles({ $ol, $b, $bh, $bf, $o, $oh, $ob, $obh }),
        ...styles,
      }}
      name={name}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      options={options}
      onChange={onChange}
      isMulti={isMulti}
      isClearable={isClearable}
      isDisabled={isDisabled}
    />
  );
};

Select.propTypes = {
  styles: PropTypes.arrayOf(PropTypes.object),

  $obh: PropTypes.string,
  $sobh: PropTypes.string,

  $ol: PropTypes.string,
  $b: PropTypes.string,
  $bh: PropTypes.string,
  $bf: PropTypes.string,
  $o: PropTypes.string,
  $oh: PropTypes.string,
  $ob: PropTypes.string,

  options: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  isMulti: PropTypes.bool,
  isClearable: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
    PropTypes.object,
  ]),
  isDisabled: PropTypes.bool,
};

export default Select;
