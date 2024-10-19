import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../../contexts/userContext";
import { Role } from "../../entities/role";
function AddUser() {
  const { id } = useParams(); // Récupère l'ID de l'URL
  const redirection = useNavigate(); //pour la redirection

  //pour les inputs
  const nomCompletInputRef = useRef();
  const roleInputRef = useRef();

  const [setSelectedOptions] = useState([]); // Pour le rôle sélectionné
  const { createUser, updateUser } = useUserContext(); // Accéder aux méthodes du contexte

  const { state } = useLocation(); //la variable state qui est dans DetailsUser

  const navigate = useNavigate();
  const [user, setUser] = useState(null); // Initialiser l'utilisateur à null

  // Chargement des données utilisateur si nous sommes en mode édition (update)
  useEffect(() => {
    if (state === null && id !== "0") {
      navigate("/AddUser"); // Rediriger si on essaie d'accéder sans User valide
    } else if (state && state.users) {
      setUser(state.users); // Récupère les données User à modifier
    }
  }, [navigate, state, id]);

  const handleChange = (event) => {
    const selected = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(selected);
  };

  // Gestion de la soumission du formulaire
  function submitHandler(event) {
    event.preventDefault(); // pour conserver la saisie à l'écran

    const nomCompletEntered = nomCompletInputRef.current.value;
    const roleEntered = roleInputRef.current.value;

    if (user === null) {
      // Mode création
      createUser(nomCompletEntered, roleEntered);
    } else if (user) {
      // Mode mise à jour
      updateUser(user.id, nomCompletEntered, roleEntered);
    }

    // Vider les champs après soumission
    nomCompletInputRef.current.value = "";
    roleInputRef.current.value = Role.JOEUR; // ou autre valeur par défaut

    redirection("/joueurs"); // Redirection après soumission
  }

  return (
    <div className="container my-3">
      <div>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="nomComplet" className="form-label">
              Nom Complet
            </label>
            <input
              type="text"
              className="form-control"
              id="nomComplet"
              name="nomComplet"
              ref={nomCompletInputRef}
              required
              defaultValue={user ? user.nomComplet : ""} // Valeur par défaut si utilisateur est en édition
            />
          </div>
          <div className="mb-3">
            <label htmlFor="role" className="form-label">
              Rôle
            </label>
            <select
              className="form-select"
              id="role"
              multiple
              onChange={handleChange}
              ref={roleInputRef}
              defaultValue={user ? user.role : Role.JOEUR} // Valeur par défaut selon le rôle
            >
              <option value={Role.COACH}>Coach</option>
              <option value={Role.JOEUR}>Joueur</option>
            </select>
          </div>
          <div className="p-2">
            <button type="submit" className="btn btn-primary">
              {user === null ? "Créer" : "Mettre à jour"}{" "}
              {/* Changer le texte selon le mode */}
            </button>
            <NavLink to={"/users"}>
              <button type="button" className="btn btn-danger">
                Annuler
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
