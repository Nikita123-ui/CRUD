import PropTypes from 'prop-types';
import React from 'react';
import './toast.css';

/**
 * Name: Toast
 * Desc: Render Toast
 */

function Toast({ variant, children, showClose, hideToast, className }) {
  return (
    <div className="toastContainer">
      <div className={`toastWrapper toast-${[variant]} ${className}`}>
        <div className="toastContent">{children}</div>
        {showClose && (
          <button className="toastBtn" onClick={() => hideToast()}>
            X
          </button>
        )}
      </div>
    </div>
  );
}

Toast.defaultProps = {
  showClose: false,
  variant: 'success',
};

Toast.propTypes = {
  showClose: PropTypes.bool,
  variant: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
  children: PropTypes.node,
};

export default Toast;
