import PropTypes from 'prop-types';

import { LiFolder as Li } from './Li.styled';

const LiFolder = ({ folder }) => {
  return (
    <Li>
      <h2>{folder}</h2>
    </Li>
  );
};

export default LiFolder;

LiFolder.propTypes = { folder: PropTypes.string };
