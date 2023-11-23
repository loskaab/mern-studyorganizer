import PropTypes from 'prop-types';

import { TransparentBtn } from './Button.styled';

const Button = ({
  $w,
  $h,
  $s,
  $bs,
  onClick,
  type = 'button',
  disabled,
  children,
}) => {
  return (
    <TransparentBtn
      $w={$w}
      $h={$h}
      $s={$s}
      $bs={$bs}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </TransparentBtn>
  );
};

export default Button;

Button.propTypes = {
  $w: PropTypes.string,
  $h: PropTypes.string,
  $s: PropTypes.string,
  $bs: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.oneOf(['img', 'png', 'svg']),
  ]),
};
