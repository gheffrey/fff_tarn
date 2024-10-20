import PropTypes from "prop-types";

export function Checkbox({ id, checked, onChange, labell }) {
  return (
    <div className="form-check">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="form-check-input"
      />
      <label className="form-check-label" htmlFor={id}>
        {labell}
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired, // `id` doit être une chaîne obligatoire
  checked: PropTypes.bool.isRequired, // `checked` doit être un booléen obligatoire
  onChange: PropTypes.func.isRequired, // `onChange` doit être une fonction obligatoire
  labell: PropTypes.string.isRequired, // `labell` doit être une chaîne obligatoire
};
