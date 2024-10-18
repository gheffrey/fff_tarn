/**
 * {string} placeholder
 * {string} value
 * {(s : string) => void} onChange
 */

export function Input({ placeholder, value, onChange }) {
  return (
    <div>
      <input
        type="text"
        className="form-control"
        name="inputSearch"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
