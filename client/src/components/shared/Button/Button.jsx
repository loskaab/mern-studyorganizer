import PropTypes from 'prop-types';

import { TransparentBtn } from './Button.styled';

const Button = ({
  $w,
  $h,
  $size,
  onClick,
  type = 'button',
  disabled,
  children,
}) => {
  return (
    <TransparentBtn
      $w={$w}
      $h={$h}
      $size={$size}
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
  $size: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.oneOf(['img', 'png', 'svg']),
  ]),
};
