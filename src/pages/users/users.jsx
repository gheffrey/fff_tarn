import PropTypes from "prop-types";
import { SearchBar } from "../../components/forms/SearchBar";
import { UsersRow } from "../../components/users/usersRow";
import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/userContext";

export function UserColumn({ usersList }) {
  const rows = [];

  for (let u of usersList) {
    rows.push(<UsersRow user={u} key={u.id} />); // Passer "user" comme prop
  }

  return (
    <div className="container p-5">
      <div className="mb-5 align-text-bottom">
        <Link to="/addUsers">
          <button className="btn btn-success">Créer Users</button>
        </Link>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom Complet</th>
            <th>Role</th>
            <th>Date de Naissance</th>
            <th>Date de Recrutement</th>
            <th>Division de Football</th>
            <th>Login</th>
            <th>Mot de Passe</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

UserColumn.propTypes = {
  usersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nomComplet: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      dateNaissance: PropTypes.instanceOf(Date).isRequired,
      dateRecrutement: PropTypes.instanceOf(Date).isRequired,
      divisionFootball: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function Users() {
  const { users: generatedUsers } = useUserContext();

  return (
    <div className="container my-3">
      <div>
        <SearchBar />
      </div>
      <div>
        <UserColumn usersList={generatedUsers} />
      </div>
    </div>
  );
}

export default Users;
