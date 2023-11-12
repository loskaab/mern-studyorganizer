import PropTypes from 'prop-types';

import { Btn } from './Button.styled';

const Button = ({ onClick, type = 'button', disabled, children }) => {
  return (
    <Btn onClick={onClick} type={type} disabled={disabled}>
      {children}
    </Btn>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.oneOf(['img', 'png', 'svg']),
  ]),
};
