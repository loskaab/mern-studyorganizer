import PropTypes from 'prop-types';

import { AccentBtn } from './Button.styled';

const ButtonClr = ({
  $w,
  $h,
  $size,
  onClick,
  type = 'button',
  disabled,
  children,
}) => {
  return (
    <AccentBtn
      $w={$w}
      $h={$h}
      $size={$size}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </AccentBtn>
  );
};

export default ButtonClr;

ButtonClr.propTypes = {
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
