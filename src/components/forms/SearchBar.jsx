import PropTypes from "prop-types";
import { Input } from "./Input";
import { Checkbox } from "./Checkbox";

export function SearchBar({
  searchTerm,
  onSearchChange,
  isChecked,
  onCheckboxChange,
}) {
  return (
    <div>
      <div className="mb-3">
        <Input value={searchTerm} onChange={onSearchChange} placeholder="Nom" />
        <Checkbox
          id="stocked"
          checked={isChecked}
          onChange={onCheckboxChange}
          labell="Rechercher par nom"
        />
      </div>
    </div>
  );
}

// Validation des props pour SearchBar
SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired, // `searchTerm` est une chaîne obligatoire
  onSearchChange: PropTypes.func.isRequired, // `onSearchChange` est une fonction obligatoire
  isChecked: PropTypes.bool.isRequired, // `isChecked` est un booléen obligatoire
  onCheckboxChange: PropTypes.func.isRequired, // `onCheckboxChange` est une fonction obligatoire
};
