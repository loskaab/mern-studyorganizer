import PropTypes from 'prop-types';

import { Btn } from './Link.styled';

const LinkBtn = ({ $fs, onClick, children }) => {
  return (
    <Btn type="button" $fs={$fs} onClick={onClick}>
      {children}
    </Btn>
  );
};

export default LinkBtn;

LinkBtn.propTypes = {
  $fs: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
