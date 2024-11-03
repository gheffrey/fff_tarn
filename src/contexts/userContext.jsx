import PropTypes from "prop-types"; // Import de PropTypes pour la validation
import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
import generatedUsers from "../data/generatedUsers"; // Remplacer "clients" par "users" si nécessaire

const UserContext = createContext({
  users: [], // Définir la structure par défaut du contexte
});

const UserProvider = ({ children }) => {
  const values = useUserProvider(); // Récupérer les fonctions et valeurs du hook personnalisé

  return (
    <UserContext.Provider value={values}>
      {children} {/* Rendre les enfants du provider */}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validation du prop "children"
};

const useUserProvider = () => {
  const [users, setUsers] = useLocalStorage("users", []);

  useEffect(() => {
    setUsers(generatedUsers); // Charger les utilisateurs générés avec Faker.js
  }, []);

  const createUser = (
    nom,
    role,
    dateNaissance,
    dateRecrutement,
    divisionFootball,
    login,
    club,
    dossar,
    position
  ) => {
    const maxId = users.reduce(
      (max, user) => (user.id > max ? user.id : max),
      0
    );

    const newUser = {
      id: parseInt(maxId) + 1,
      nomComplet: nom,
      role: role,
      dateNaissance: dateNaissance,
      dateRecrutement: dateRecrutement,
      divisionFootball: divisionFootball,
      login: login,
      club: "CLUB_NAME",
      dossar: dossar,
      position: position,
    };

    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };

  const updateUser = (
    userId,
    updatedNom,
    updatedRole,
    updatedDateNaissance,
    updatedDateRecrutement,
    updatedDivisionFootball,
    updatedLogin,
    updatedClub,
    updateDossar,
    updatePosition
  ) => {
    setUsers((prevUsers) => {
      return prevUsers.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            nomComplet: updatedNom || user.nomComplet,
            role: updatedRole || user.role,
            dateNaissance: updatedDateNaissance || user.dateNaissance,
            dateRecrutement: updatedDateRecrutement || user.dateRecrutement,
            divisionFootball: updatedDivisionFootball || user.divisionFootball,
            login: updatedLogin || user.login,
            club: updatedClub || user.club,
            dossar: updateDossar || user.dossar,
            position: updatePosition || user.position,
          };
        } else {
          return user;
        }
      });
    });
  };

  const deleteUser = (userId) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== userId);
    });
  };

  return {
    users,
    createUser,
    updateUser,
    deleteUser,
  };
};

const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return context;
};

export { UserProvider, useUserContext };
