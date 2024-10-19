import PropTypes from "prop-types";
import { SearchBar } from "../../components/forms/SearchBar";
import { JonglerieRow } from "../../components/statistiques/jonglerieRow"; // Adaptation : Import de JonglerieRow
import { Link } from "react-router-dom";
import { useJonglerieContext } from "../../contexts/jonglerieContext"; // Adaptation : Utilisation du contexte des jongleries

export function JonglerieColumn({ jonglerieList }) {
  const rows = [];

  for (let j of jonglerieList) {
    rows.push(<JonglerieRow jonglerie={j} key={j.id} />); // Adaptation : Passer "jonglerie" comme prop
  }

  return (
    <div className="container p-5">
      <div className="mb-5 align-text-bottom">
        <Link to="/addJonglerie">
          <button className="btn btn-success">Créer Jonglerie</button>
        </Link>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Joueur</th>
            <th>Date</th>
            <th>Résultat</th>
            <th>Actions</th> {/* Adapter pour les actions possibles */}
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

function Jongleries() {
  const { jongleries: generatedJongleries } = useJonglerieContext(); // Utilisation correcte du contexte des jongleries

  return (
    <div className="container my-3">
      <div>
        <SearchBar />
      </div>
      <div>
        <JonglerieColumn jonglerieList={generatedJongleries} />{" "}
        {/* Passer la liste des jongleries */}
      </div>
    </div>
  );
}
JonglerieColumn.propTypes = {
  jonglerieList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      joueur: PropTypes.string.isRequired,
      dateEnregistrement: PropTypes.string.isRequired, // Doit être une chaîne
      resultat: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Jongleries;
