// Importation de la bibliothèque Axios
import axios from "axios";

// Fonction pour récupérer les données des matches de football
const fetchFootballMatches = async () => {
  try {
    // Remplacez 'YOUR_API_KEY' par votre clé d'API personnelle
    const apiKey = "6489dbd4332ba9af5e269ecc208309c3";
    const url = "https://v3.football.api-sports.io"; // URL de l'API

    // Envoi d'une requête GET à l'API
    const response = await axios.get(url, {
      headers: {
        "x-rapidapi-host": "api-football.com",
        "x-rapidapi-key": apiKey,
      },
    });

    // Traitement des données reçues
    const matches = response.data.response; // Les données des matches
    console.log(matches); // Affiche les matches dans la console

    // Afficher les matches dans l'interface (optionnel)
    matches.forEach((match) => {
      console.log(
        `Match: ${match.teams.home.name} vs ${match.teams.away.name}`
      );
      console.log(`Date: ${new Date(match.fixture.date).toLocaleString()}`);
    });
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données des matches :",
      error
    );
  }
};

// Appel de la fonction pour récupérer les matches
fetchFootballMatches();
