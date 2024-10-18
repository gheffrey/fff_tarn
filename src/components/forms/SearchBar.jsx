import { Input } from "./Input";
import { Checkbox } from "./checkbox";

export function SearchBar() {
  return (
    <div>
      <div className="mb-3">
        <Input value="" onChange={() => null} placeholder="Matricule" />
        <Checkbox
          id="stocked"
          checked={false}
          onChange={() => null}
          labell="Rechercher par matricule"
        />
      </div>
    </div>
  );
}
