import PropTypes from 'prop-types';

import { Link } from './Link.styled';

const LinkRoute = ({ to, fs, children }) => {
  return (
    <Link to={to} fs={fs}>
      {children}
    </Link>
  );
};

export default LinkRoute;

Link.propTypes = {
  to: PropTypes.string.isRequired,
  fs: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
