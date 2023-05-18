/* eslint-disable no-restricted-syntax */
import PropTypes from 'prop-types';

const Button = ({ label, onClick, variant }) => {
  const buttonClass = variant ? `btn ${variant}` : 'btn';

  return (
    <button
      className={buttonClass}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
};

export default Button;
