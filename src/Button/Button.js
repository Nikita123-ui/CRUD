import PropTypes from 'prop-types';
import './Button.css';
// import Icon from '../Icon/icon';
/**
 * Name : Button
 * Desc : Render Button
 * @param {string} variant
 * @param {string} size
 * @param {node}   children
 * @param {string} className
 */
const Button = ({ children, variant, size, buttonShape, disabled }) => {
  const className = `${variant} ${size} ${buttonShape} btn1`;
  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
};
export default Button;

Button.defaultProps = {
  size: 'sm',
  variant: 'primary',
  buttonShape: 'round',
  disabled: false,
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'success',
    'warning',
    'danger',
    'outline',
    'shadedBtn',
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  buttonShape: PropTypes.oneOf(['round', 'semiRound', 'circle']),
  children: PropTypes.node,
  className: PropTypes.string,
  disable: PropTypes.bool,
};
