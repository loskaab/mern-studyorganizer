import PropTypes from 'prop-types';

import { LiHead as Li } from './Li.styled';

const LiHead = ({ group }) => {
  return (
    <Li>
      <h2>{group}</h2>
    </Li>
  );
};

export default LiHead;

LiHead.propTypes = { group: PropTypes.string };
