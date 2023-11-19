import PropTypes from 'prop-types';

import { Link } from './Link.styled';

const LinkRoute = ({ $fs, to, children }) => {
  return (
    <Link $fs={$fs} to={to}>
      {children}
    </Link>
  );
};

export default LinkRoute;

LinkRoute.propTypes = {
  $fs: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
