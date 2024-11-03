import PropTypes from "prop-types"; // Import de PropTypes pour la validation
import { createContext, useContext, useEffect } from "react";
import { listJonglerie } from "../data/jonglerie"; // Import de la liste de jongleries
import useLocalStorage from "../Hooks/useLocalStorage"; // Hook personnalisé pour le stockage local

const JonglerieContext = createContext(); // Crée un contexte sans valeur initiale

const JonglerieProvider = ({ children }) => {
  const values = useJonglerieProvider(); // Récupère les valeurs du fournisseur

  return (
    <JonglerieContext.Provider value={values}>
      {children}
    </JonglerieContext.Provider>
  );
};

JonglerieProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validation du prop "children"
};

const useJonglerieProvider = () => {
  const [jongleries, setJongleries] = useLocalStorage("jongleries", []); // État des jongleries avec stockage local

  useEffect(() => {
    // Charger initialement les jongleries depuis listJonglerie
    const convertedJongleries = listJonglerie.map((jonglerie) => ({
      ...jonglerie,
      dateEnregistrement: new Date(jonglerie.dateEnregistrement), // Convertir en instance de Date
    }));

    setJongleries(convertedJongleries);
  }, [setJongleries]);

  const createJonglerie = (dateEnregistrement, joueur, resultat) => {
    const maxId = jongleries.reduce(
      (max, jonglerie) => Math.max(max, jonglerie.id), // Utiliser Math.max pour obtenir l'ID max
      0
    );

    const newJonglerie = {
      id: maxId + 1, // Incrémenter l'ID max
      joueur: joueur,
      dateEnregistrement: dateEnregistrement.toISOString(),
      resultat: resultat,
    };

    // Met à jour l'état des jongleries
    setJongleries((prevJongleries) => [...prevJongleries, newJonglerie]);
  };

  const deleteJonglerie = (jonglerieId) => {
    setJongleries(
      (prevJongleries) =>
        prevJongleries.filter((jonglerie) => jonglerie.id !== jonglerieId) // Filtrer pour supprimer
    );
  };

  return {
    jongleries, // Liste des jongleries
    createJonglerie, // Fonction pour ajouter une jonglerie
    deleteJonglerie, // Fonction pour supprimer une jonglerie
  };
};

const useJonglerieContext = () => {
  const context = useContext(JonglerieContext); // Récupération du contexte
  if (context === undefined) {
    throw new Error(
      "useJonglerieContext must be used within a JonglerieProvider"
    );
  }
  return context; // Retourne le contexte
};

export { JonglerieProvider, useJonglerieContext };
