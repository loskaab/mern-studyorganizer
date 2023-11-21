import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const ClustersSelect = () => {
  return (
    <Select
      options={options}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          // height: '20px',
          minWidth: '200px',
          border: 'none',
          fontSize: '16px',
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          border: '1px dotted gray',
          // height: '100%',
          fontSize: '16px',
          fontWeight: state.isFocused ? '600' : '400',
          color: state.isFocused ? 'white' : 'black',
          backgroundColor: state.isFocused ? '#a0adf7' : 'white',
          textTransform: 'capitalize',
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
      }}
    />
  );
};

export default ClustersSelect;
