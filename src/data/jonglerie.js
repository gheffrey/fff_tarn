import { faker } from "@faker-js/faker";

// Fonction pour générer une liste de jongleries
const generateJonglerie = (numItems = 3) => {
  return Array.from({
    length: faker.number.int({ min: 1, max: numItems }),
  }).map(() => {
    return {
      id: parseInt(faker.string.numeric(5)), // Convertir l'ID en nombre
      joueur: faker.person.fullName(), // Génération d'un nom complet pour le joueur
      dateEnregistrement: faker.date
        .soon({
          days: 30,
          refDate: new Date("2023-01-01T00:00:00.000Z"), // Référence pour la date
        })
        .toISOString(), // Convertir la date en chaîne de caractères
      resultat: faker.number.int({ min: 1, max: 100 }), // Résultat aléatoire entre 1 et 100
    };
  });
};

// Génération de la liste de jongleries
const listJonglerie = generateJonglerie(); // Vous pouvez spécifier un nombre max si nécessaire
export { listJonglerie };
