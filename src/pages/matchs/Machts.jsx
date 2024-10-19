// FootballMatches.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const Matchs = () => {
  const [matches, setMatches] = useState([]); // État pour stocker les matchs
  const [loading, setLoading] = useState(true); // État pour indiquer le chargement
  const [error, setError] = useState(null); // État pour les erreurs

  useEffect(() => {
    const fetchFootballMatches = async () => {
      try {
        const apiKey = "6489dbd4332ba9af5e269ecc208309c3"; // Remplacez par votre clé d'API
        const url = "https://v3.football.api-sports.io/fixtures"; // URL de l'API pour récupérer les matchs

        const response = await axios.get(url, {
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": apiKey,
          },
        });

        // Vérifier la structure des données dans la console
        console.log(response.data);

        // Vérifier si `response.data.response` est un tableau et contient des données
        if (Array.isArray(response.data.response)) {
          setMatches(response.data.response); // Stocke les matchs récupérés
        } else {
          throw new Error(
            "Les données reçues ne sont pas sous le format attendu."
          );
        }
      } catch (error) {
        console.error(error); // Affiche l'erreur dans la console pour le débogage
        setError("Erreur lors de la récupération des données des matchs."); // Gère les erreurs
      } finally {
        setLoading(false); // Fin du chargement
      }
    };

    fetchFootballMatches(); // Appel de la fonction pour récupérer les matchs
  }, []);

  if (loading) {
    return <div>Chargement des matchs...</div>; // Affiche un message de chargement
  }

  if (error) {
    return <div>{error}</div>; // Affiche une erreur si elle se produit
  }

  return (
    <div className="container">
      <h1>Derniers Matchs de Football</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Équipe Domicile</th>
            <th>Équipe Extérieure</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {matches.length > 0 ? (
            matches.map((match) => (
              <tr key={match.fixture.id}>
                <td>{match.fixture.id}</td>
                <td>{match.teams.home.name}</td>
                <td>{match.teams.away.name}</td>
                <td>{new Date(match.fixture.date).toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Aucun match disponible.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Matchs;
