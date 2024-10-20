import PropTypes from "prop-types";

export function Input({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="form-control"
    />
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired, // `value` doit être une chaîne obligatoire
  onChange: PropTypes.func.isRequired, // `onChange` doit être une fonction obligatoire
  placeholder: PropTypes.string, // `placeholder` est une chaîne optionnelle
};
