// AddJonglerie.jsx
import { useRef, useState } from "react";
import { useJonglerieContext } from "../../contexts/jonglerieContext";
import { useUserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function AddJonglerie() {
  const { createJonglerie } = useJonglerieContext();
  const { users } = useUserContext();
  const redirection = useNavigate(); //pour la redirection

  const joueurAffecterInputRef = useRef();
  const [dateEnregistrement, setDateEnregistrement] = useState("");
  const [resultat, setResultat] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const joueur = joueurAffecterInputRef.current.value;

    if (!joueur || resultat <= 0 || !dateEnregistrement) {
      alert("Veuillez remplir tous les champs correctement.");
      return;
    }

    createJonglerie(new Date(dateEnregistrement), joueur, parseInt(resultat));
    joueurAffecterInputRef.current.value = "";
    redirection("/jonglerie");
  };

  return (
    <div className="container my-5">
      <h2>Ajouter une Nouvelle Jonglerie</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="joueur" className="form-label">
            Affecter à un joueur
          </label>
          <select
            id="joueur"
            className="form-select"
            ref={joueurAffecterInputRef}
            required
          >
            <option value="" disabled>
              Sélectionnez un joueur
            </option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                Dossar : {user.dossar} | Nom complet : {user.nomComplet}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="dateEnregistrement" className="form-label">
            Date denregistrement
          </label>
          <input
            type="date"
            id="dateEnregistrement"
            className="form-control"
            value={dateEnregistrement}
            onChange={(e) => setDateEnregistrement(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="resultat" className="form-label">
            Résultat
          </label>
          <input
            type="number"
            id="resultat"
            className="form-control"
            value={resultat}
            onChange={(e) => setResultat(e.target.value)}
            min="1"
            max="100"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Ajouter Jonglerie
        </button>
      </form>
    </div>
  );
}

AddJonglerie.propTypes = {
  createJonglerie: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      dossar: PropTypes.string,
      nomComplet: PropTypes.string,
    })
  ),
};

export default AddJonglerie;
