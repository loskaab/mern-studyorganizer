import Select from 'react-select';

import { styles } from './Selects.styled';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const ClustersSelect = () => {
  return <Select options={options} styles={styles} />;
};

export default ClustersSelect;
