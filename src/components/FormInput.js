import React from "react";
import PropTypes from "prop-types";

function FormInput(props) {
  const { name, label, placeholder, type, error, required } = props;
  return (
    <div className="input">
      <label className="input__label" htmlFor={name}>
        {label}
      </label>
      <input
        className="input__field"
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
      />
      {error && <p className="input__error">{error}</p>}
    </div>
  );
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
};

export default FormInput;
