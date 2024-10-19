import PropTypes from "prop-types"; // Import de PropTypes pour la validation
import { createContext, useContext, useEffect } from "react";
import { listJonglerie } from "../data/jonglerie"; // Import de la liste de jongleries
import useLocalStorage from "../Hooks/useLocalStorage"; // Hook personnalisé pour le stockage local

const JonglerieContext = createContext({ jongleries: [] }); // Utilisation de 'jongleries' au lieu de 'Jongleries'

const JonglerieProvider = ({ children }) => {
  const values = useJonglerieProvider();

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
  const [jongleries, setJongleries] = useLocalStorage("jongleries", []);

  useEffect(() => {
    // Convertir les dates en instances de Date
    const convertedJongleries = listJonglerie.map((jonglerie) => ({
      ...jonglerie,
      dateEnregistrement: new Date(jonglerie.dateEnregistrement), // Assurez-vous qu'il s'agit d'une instance de Date
    }));

    setJongleries(convertedJongleries);
  }, [setJongleries]);

  useEffect(() => {
    setJongleries(listJonglerie); // Chargement initial des jongleries
  }, [setJongleries]);

  const createJonglerie = (dateEnregistrement, user, resultat) => {
    const maxId = jongleries.reduce(
      (max, jonglerie) => (jonglerie.id > max ? jonglerie.id : max),
      0
    );

    const newJonglerie = {
      id: parseInt(maxId) + 1,
      dateEnregistrement: dateEnregistrement.toISOString(), // Convertir en chaîne
      client: user,
      resultat: resultat, // Renommé pour correspondre à la structure
    };

    setJongleries((prevJongleries) => {
      return [...prevJongleries, newJonglerie];
    });
  };

  const updateJonglerie = () => {
    // Implémentez la mise à jour si nécessaire
  };

  const deleteJonglerie = (jonglerieId) => {
    setJongleries((prevJongleries) => {
      return prevJongleries.filter((jonglerie) => jonglerie.id !== jonglerieId);
    });
  };

  return {
    jongleries, // Renommé pour correspondre à la clé utilisée dans le contexte
    createJonglerie,
    updateJonglerie,
    deleteJonglerie,
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
