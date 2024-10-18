import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/userContext";
import DetailsUser from "../../pages/users/detailsUser";

export function UsersRow({ user }) {
  const { deleteuser } = useUserContext();

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    //console.log(user);
  }, []);

  const handleClick = () => {
    if (!clicked) {
      <DetailsUser user={user} key={user.id} />;
      setClicked(true);
    }
  };

  const handleDeleteuser = () => {
    deleteuser(user.id);
  };

  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.nomComplet}</td>
      <td>{user.role}</td>
      <td>{user.dateNaissance.toLocaleDateString()}</td>{" "}
      <td>{user.dateRecrutement.toLocaleDateString()}</td>{" "}
      <td>{user.divisionFootball}</td> <td>{user.login}</td>
      <td>{user.password}</td>
      <td>
        <Link to={`/detailsuser/${user.id}`} state={{ usrs: user }}>
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
    dateNaissance: PropTypes.instanceOf(Date).isRequired,
    dateRecrutement: PropTypes.instanceOf(Date).isRequired,
    divisionFootball: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
};
