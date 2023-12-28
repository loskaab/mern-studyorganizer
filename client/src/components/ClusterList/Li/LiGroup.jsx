import PropTypes from 'prop-types';

import { LiGroup as Li } from './Li.styled';

const LiGroup = ({ group }) => {
  return (
    <Li>
      <h2>{group}</h2>
    </Li>
  );
};

export default LiGroup;

LiGroup.propTypes = { group: PropTypes.string };
