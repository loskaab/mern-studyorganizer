import PropTypes from 'prop-types';

import { SelectCreatable, defaultTheme, defaultStyles } from './Select.styled';

const CreatableSelect = ({
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
  value = { value: 'HTML', label: 'Chocolate' },
  defaultValue,
  placeholder = 'Create / Select...',
  options, // [{ value: qwe, label: asd, }]
  onChange, // (option, name) => console.log(option, name)
  isClearable,
  onCreateOption,
  isLoading,
  isDisabled,
}) => {
  return (
    <SelectCreatable
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
      isClearable={isClearable}
      onCreateOption={onCreateOption}
      isLoading={isLoading}
      isDisabled={isDisabled}
    />
  );
};

CreatableSelect.propTypes = {
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
    PropTypes.string,
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  isClearable: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
    PropTypes.object,
  ]),
  onCreateOption: PropTypes.func,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

export default CreatableSelect;
