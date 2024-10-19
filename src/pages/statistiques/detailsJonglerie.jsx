import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DetailsJonglerie() {
  const { state } = useLocation(); // Récupérer l'état passé avec "Link"
  const navigate = useNavigate();
  const [jonglerie, setJonglerie] = useState({}); // Initialiser une jonglerie vide

  useEffect(() => {
    if (state === null) {
      // Si aucune jonglerie n'est passée, revenir à la liste des jongleries
      navigate("/jongleries");
    } else {
      // Sinon, stocker la jonglerie dans le state
      setJonglerie(state.jonglerie); // "jonglerie" correspond à l'objet jonglerie
    }
  }, [navigate, state]);

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
              <h5 className="card-title">ID : {jonglerie.id}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Joueur : {jonglerie.joueur}
              </h6>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Date :{" "}
                {jonglerie.dateEnregistrement
                  ? new Date(jonglerie.dateEnregistrement).toLocaleDateString()
                  : "Non défini"}
              </h6>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Résultat : {jonglerie.resultat}
              </h6>
            </div>
            <div className="mb-3">
              <Link
                to={`/updateJonglerie/${jonglerie.id}`}
                state={{ jonglerie }}
              >
                <button
                  className="btn btn-primary"
                  id={jonglerie.id}
                  key={jonglerie.id}
                >
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

export default DetailsJonglerie;
