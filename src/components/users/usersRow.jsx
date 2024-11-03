import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/userContext";

export function UsersRow({ user }) {
  const { deleteUser } = useUserContext();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // Effet optionnel si vous souhaitez faire quelque chose quand "user" change
    //console.log(user);
  }, [user]);

  const handleClick = () => {
    if (!clicked) {
      // Le code ici ne rend pas un composant dans le DOM
      // Pour une meilleure gestion, vous pouvez faire de la navigation ou ouvrir un modal par exemple
      setClicked(true);
    }
  };

  const handleDeleteuser = () => {
    deleteUser(user.id);
  };

  return (
    <tr>
      <td>{user.nomComplet}</td>
      <td>{user.role}</td>
      <td>{new Date(user.dateNaissance).toLocaleDateString()}</td>
      <td>{new Date(user.dateRecrutement).toLocaleDateString()}</td>
      <td>{user.divisionFootball}</td>
      <td>{user.dossar}</td>
      <td>{user.position}</td>
      <td>
        <Link to={`/detailsuser/${user.id}`} state={{ users: user }}>
          <button
            onClick={handleClick}
            className="btn btn-primary"
            id={user.id}
            key={user.id}
          >
            Details
          </button>
        </Link>
      </td>
      <td>
        <button
          onClick={() => handleDeleteuser()}
          className="btn btn-danger"
          id={user.id}
          key={user.id}
        >
          Supprimer
        </button>
      </td>
    </tr>
  );
}

UsersRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nomComplet: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    dateNaissance: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.string, // Si les dates sont des chaînes à convertir
    ]).isRequired,
    dateRecrutement: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.string,
    ]).isRequired,
    divisionFootball: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    dossar: PropTypes.string.isRequired, // Ajout de la propriété dossar
    position: PropTypes.string.isRequired, // Ajout de la propriété position
  }).isRequired,
};
