import { faker } from "@faker-js/faker";

// Fonction pour générer un club avec un id, un matricule, et un nom
const generateClub = () => {
  return {
    id: faker.string.numeric(5), // Génère un ID numérique à 5 chiffres
    matricule: faker.string.alphanumeric(8), // Génère un matricule alphanumérique à 8 caractères
    nom: faker.company.name(), // Génère un nom de club (similaire à un nom d'entreprise)
  };
};

// Générer un club
const club = generateClub();

export { club };
