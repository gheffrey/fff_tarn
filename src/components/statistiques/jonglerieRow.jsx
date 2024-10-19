import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useJonglerieContext } from "../../contexts/jonglerieContext";
import DetailsJonglerie from "../../pages/statistiques/detailsJonglerie";

export function JonglerieRow({ jonglerie }) {
  const { deleteJonglerie } = useJonglerieContext(); // Utilisation du contexte des jongleries

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    console.log(jonglerie);
  }, []);

  const handleClick = () => {
    if (!clicked) {
      <DetailsJonglerie jonglerie={jonglerie} key={jonglerie.id} />;
      setClicked(true);
    }
  };

  const handleDeleteJonglerie = () => {
    deleteJonglerie(jonglerie.id);
  };

  return (
    <tr>
      <td>{jonglerie.id}</td>
      <td>{jonglerie.joueur}</td>
      <td>
        {new Date(jonglerie.dateEnregistrement).toLocaleDateString()}
      </td>{" "}
      {/* Convertir pour affichage */}
      <td>{jonglerie.resultat}</td>
      <td>
        <Link
          to={`/detailsJonglerie/${jonglerie.id}`}
          state={{ jongleries: jonglerie }}
        >
          <button
            onClick={handleClick}
            className="btn btn-primary"
            id={jonglerie.id}
            key={jonglerie.id}
          >
            Détails
          </button>
        </Link>
      </td>
      <td>
        <button
          onClick={() => handleDeleteJonglerie()}
          className="btn btn-danger"
          id={jonglerie.id}
          key={jonglerie.id}
        >
          Supprimer
        </button>
      </td>
    </tr>
  );
}
JonglerieRow.propTypes = {
  jonglerie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    joueur: PropTypes.string.isRequired,
    dateEnregistrement: PropTypes.string.isRequired, // Doit être une chaîne
    resultat: PropTypes.number.isRequired,
  }).isRequired,
};
