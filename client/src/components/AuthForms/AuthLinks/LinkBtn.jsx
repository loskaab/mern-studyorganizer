import PropTypes from 'prop-types';

import { Btn } from './Link.styled';

const LinkBtn = ({ onClick, fs, children }) => {
  return (
    <Btn type="button" onClick={onClick} fs={fs}>
      {children}
    </Btn>
  );
};

export default LinkBtn;

Btn.propTypes = {
  onClick: PropTypes.func.isRequired,
  fs: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
