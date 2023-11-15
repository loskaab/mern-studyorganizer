import PropTypes from 'prop-types';

import { Btn } from './Button.styled';

const Button = ({ $s, $w, onClick, type = 'button', disabled, children }) => {
  return (
    <Btn $s={$s} $w={$w} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </Btn>
  );
};

export default Button;

Button.propTypes = {
  $s: PropTypes.string,
  $w: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.oneOf(['img', 'png', 'svg']),
  ]),
};
