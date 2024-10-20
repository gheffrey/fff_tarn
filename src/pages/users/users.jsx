import { useState } from "react";
import PropTypes from "prop-types";
import { SearchBar } from "../../components/forms/SearchBar";
import { UsersRow } from "../../components/users/UsersRow";
import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/userContext";

export function UserColumn({ usersList, searchTerm, isChecked }) {
  // Appliquer un filtrage en fonction du terme de recherche et de la case cochée
  const filteredUsers = usersList.filter((user) => {
    if (!isChecked) {
      return true; // Si la case n'est pas cochée, on ne filtre pas par nom
    }
    return user.nomComplet.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const rows = filteredUsers.map((u) => <UsersRow user={u} key={u.id} />); // Passer "user" comme prop

  return (
    <div className="container p-5">
      <div className="mb-5 align-text-bottom">
        <Link to="/addUser">
          <button className="btn btn-success">Créer Users</button>
        </Link>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Nom Complet</th>
            <th>Role</th>
            <th>Date de Naissance</th>
            <th>Date de Recrutement</th>
            <th>Division de Football</th>
            <th>Dossar</th>
            <th>Position</th>
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
  searchTerm: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

function Users() {
  const { users: generatedUsers } = useUserContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="container my-3">
      <div>
        <SearchBar
          searchTerm={searchTerm} // chaîne
          onSearchChange={handleSearchChange} // fonction
          isChecked={isChecked} // booléen
          onCheckboxChange={handleCheckboxChange} // fonction
        />
      </div>
      <div>
        <UserColumn
          usersList={generatedUsers}
          searchTerm={searchTerm}
          isChecked={isChecked}
        />
      </div>
    </div>
  );
}

export default Users;
