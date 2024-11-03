import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../../contexts/userContext";
import { Role } from "../../entities/role";
import { footballPositions } from "../../data/generatedUsers";

function AddUser() {
  const { id } = useParams(); // Récupère l'ID de l'URL
  const redirection = useNavigate(); // pour la redirection

  // Références pour les inputs
  const nomCompletInputRef = useRef();
  const roleInputRef = useRef();
  const dateNaissanceInputRef = useRef();
  const dateRecrutementInputRef = useRef();
  const divisionInputRef = useRef();
  const loginInputRef = useRef();
  const dossarInputRef = useRef();
  const positionInputRef = useRef();

  const { createUser, updateUser } = useUserContext(); // Accéder aux méthodes du contexte

  const { state } = useLocation(); // la variable state qui est dans DetailsUser

  //const [selectedOptions, setSelectedOptions] = useState([]); // Correction de l'initialisation
  const [user, setUser] = useState(null); // Initialiser l'utilisateur à null

  // Chargement des données utilisateur si nous sommes en mode édition (update)
  useEffect(() => {
    if (state === null && id !== "0") {
      redirection("/AddUser"); // Rediriger si on essaie d'accéder sans User valide
    } else if (state && state.users) {
      setUser(state.users); // Récupère les données User à modifier
    }
  }, [redirection, state, id]);

  /**  const handleChange = (event) => {
    const selected = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(selected);
  };*/

  // Gestion de la soumission du formulaire
  function submitHandler(event) {
    event.preventDefault(); // pour conserver la saisie à l'écran

    const nomCompletEntered = nomCompletInputRef.current.value;
    const roleEntered = roleInputRef.current.value;
    const dateNaissanceEntered = dateNaissanceInputRef.current.value;
    const dateRecrutementEntered = dateRecrutementInputRef.current.value;
    const divisionEntered = divisionInputRef.current.value;
    const loginEntered = loginInputRef.current.value;
    const dossarEntered = dossarInputRef.current.value;
    const positionEntered = positionInputRef.current.value;

    if (user === null) {
      // Mode création : on envoie les données directement
      createUser(
        nomCompletEntered,
        roleEntered,
        dateNaissanceEntered,
        dateRecrutementEntered,
        divisionEntered,
        loginEntered,
        "CLUB_NAME",
        dossarEntered,
        positionEntered
      );
    } else {
      // Mode mise à jour
      updateUser(
        user.id,
        nomCompletEntered,
        roleEntered,
        dateNaissanceEntered,
        dateRecrutementEntered,
        divisionEntered,
        loginEntered,
        "CLUB_NAME",
        dossarEntered,
        positionEntered
      );
    }

    // Vider les champs après soumission
    nomCompletInputRef.current.value = "";
    roleInputRef.current.value = Role.JOEUR; // ou autre valeur par défaut
    dateNaissanceInputRef.current.value = "";
    dateRecrutementInputRef.current.value = "";
    divisionInputRef.current.value = "";
    loginInputRef.current.value = "";
    dossarInputRef.current.value = "";
    positionInputRef.current.value = footballPositions[0]; // Position par défaut

    redirection("/joueurs"); // Redirection après soumission
  }

  return (
    <div className="container my-3">
      <div>
        <form onSubmit={submitHandler}>
          {/* Nom Complet */}
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

          {/* Rôle */}
          <div className="mb-3">
            <label htmlFor="role" className="form-label">
              Rôle
            </label>
            <select
              className="form-select"
              id="role"
              ref={roleInputRef}
              defaultValue={user ? user.role : Role.JOEUR} // Valeur par défaut
            >
              <option value={Role.COACH}>Coach</option>
              <option value={Role.JOEUR}>Joueur</option>
            </select>
          </div>

          {/* Date de Naissance */}
          <div className="mb-3">
            <label htmlFor="dateNaissance" className="form-label">
              Date de Naissance
            </label>
            <input
              type="date"
              className="form-control"
              id="dateNaissance"
              name="dateNaissance"
              ref={dateNaissanceInputRef}
              defaultValue={
                user ? user.dateNaissance.toISOString().split("T")[0] : ""
              }
              required
            />
          </div>

          {/* Date de Recrutement */}
          <div className="mb-3">
            <label htmlFor="dateRecrutement" className="form-label">
              Date de Recrutement
            </label>
            <input
              type="date"
              className="form-control"
              id="dateRecrutement"
              name="dateRecrutement"
              ref={dateRecrutementInputRef}
              defaultValue={
                user ? user.dateRecrutement.toISOString().split("T")[0] : ""
              }
              required
            />
          </div>

          {/* Division */}
          <div className="mb-3">
            <label htmlFor="division" className="form-label">
              Division de Football
            </label>
            <input
              type="number"
              className="form-control"
              id="division"
              name="division"
              ref={divisionInputRef}
              defaultValue={user ? user.divisionFootball : ""}
              required
            />
          </div>

          {/* Login */}
          <div className="mb-3">
            <label htmlFor="login" className="form-label">
              Login
            </label>
            <input
              type="email"
              className="form-control"
              id="login"
              name="login"
              ref={loginInputRef}
              defaultValue={user ? user.login : ""}
              required
            />
          </div>

          {/* Dossar */}
          <div className="mb-3">
            <label htmlFor="dossar" className="form-label">
              Dossar
            </label>
            <input
              type="number"
              className="form-control"
              id="dossar"
              name="dossar"
              ref={dossarInputRef}
              defaultValue={user ? user.dossar : ""}
              required
            />
          </div>

          {/* Position */}
          <div className="mb-3">
            <label htmlFor="position" className="form-label">
              Position
            </label>
            <select
              className="form-select"
              id="position"
              ref={positionInputRef}
              defaultValue={user ? user.position : footballPositions[0]} // Valeur par défaut
              required
            >
              {footballPositions.map((position, index) => (
                <option key={index} value={position}>
                  {position}
                </option>
              ))}
            </select>
          </div>

          <div className="p-2">
            <button type="submit" className="btn btn-primary">
              {user === null ? "Créer" : "Mettre à jour"}
            </button>
            <NavLink to={"/joueurs"}>
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
