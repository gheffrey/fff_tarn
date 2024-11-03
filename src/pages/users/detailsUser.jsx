import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DetailsUser() {
  const { state } = useLocation(); // Récupérer l'état passé avec "Link"
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // Initialiser l'utilisateur à null

  useEffect(() => {
    if (!state || !state.users) {
      // Si aucun utilisateur n'est passé, revenir à la liste des utilisateurs
      navigate("/users");
    } else {
      // Sinon, stocker l'utilisateur dans le state
      setUser(state.users); // "users" correspond à l'objet utilisateur
    }
  }, [navigate, state]);

  // Si l'utilisateur n'est pas défini, afficher un message ou une redirection
  if (!user) {
    return <p>Chargement des détails de l utilisateur...</p>;
  }

  return (
    <div>
      <div className="container my-3">
        <div
          className="mt-5"
          style={{
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
          }}
        >
          <div className="card" style={{ height: "18rem", width: "22rem" }}>
            <div className="card-body">
              <h5 className="card-title">ID : {user.id}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Nom Complet : {user.nomComplet}
              </h6>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Rôle : {user.role}
              </h6>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Date de Naissance :{" "}
                {user.dateNaissance
                  ? new Date(user.dateNaissance).toLocaleDateString()
                  : "Non défini"}
              </h6>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Date de Recrutement :{" "}
                {user.dateRecrutement
                  ? new Date(user.dateRecrutement).toLocaleDateString()
                  : "Non défini"}
              </h6>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Division de Football : {user.divisionFootball}
              </h6>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Login : {user.login}
              </h6>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Club : {user.club}
              </h6>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Dossar : {user.dossar}
              </h6>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Position : {user.position}
              </h6>
            </div>
            <div className="mb-3">
              <Link to={`/updateUser/${user.id}`} state={{ users: user }}>
                <button className="btn btn-primary" id={user.id} key={user.id}>
                  Mettre à jour
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsUser;
