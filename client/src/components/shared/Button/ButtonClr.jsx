import PropTypes from 'prop-types';

import { AccentBtn } from './Button.styled';

const ButtonClr = ({
  $w,
  $h,
  $s,
  onClick,
  type = 'button',
  disabled,
  children,
}) => {
  return (
    <AccentBtn
      $w={$w}
      $h={$h}
      $s={$s}
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
  $s: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.oneOf(['img', 'png', 'svg']),
  ]),
};
