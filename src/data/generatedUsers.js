import { faker } from "@faker-js/faker";
import { Role } from "../entities/role";

const footballPositions = [
  "Gardien",
  "Défenseur",
  "Milieu",
  "Attaquant",
  "Ailier",
  "Libéro",
  "Latéral",
  "Avant-centre",
];

const generatedUsers = Array(faker.helpers.rangeToNumber({ min: 12, max: 26 }))
  .fill()
  .map(() => {
    return {
      id: faker.string.numeric(3), // Générer un identifiant numérique
      nomComplet: faker.person.fullName(), // Générer un nom complet
      role: faker.helpers.arrayElement([Role.COACH, Role.JOEUR]), // Rôle aléatoire (COACH ou JOUEUR)

      // Générer une date de naissance aléatoire (age entre 10 et 25 ans)
      dateNaissance: faker.date.birthdate({ min: 10, max: 25, mode: "age" }),

      // Générer une date de recrutement aléatoire entre il y a 1 et 10 ans
      dateRecrutement: faker.date.soon({ refDate: "2023-01-01T00:00:00.000Z" }),

      // Numéro de division de football (aléatoire entre 1 et 5)
      divisionFootball: faker.number.int({ min: 1, max: 5 }),

      // Générer un email basé sur le nom comme login
      login: faker.internet.email(),

      club: faker.company.name(),

      dossar: faker.number.int({ min: 1, max: 25 }),

      position: faker.helpers.arrayElement(footballPositions), // Sélectionne aléatoirement un poste dans le tableau
    };
  });

export default generatedUsers;
