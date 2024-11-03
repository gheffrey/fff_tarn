import { useState, useEffect } from "react";

const Agenda = () => {
  const days = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  // Récupérer les horaires modifiables depuis le localStorage ou initialiser par défaut
  const getInitialHours = () => {
    const savedHours = localStorage.getItem("hours");
    if (savedHours) {
      return JSON.parse(savedHours);
    }
    return [
      "09:00 - 10:00",
      "10:00 - 11:00",
      "11:00 - 12:00",
      "12:00 - 13:00",
      "13:00 - 14:00",
    ];
  };

  // État pour stocker les horaires
  const [hours, setHours] = useState(getInitialHours);

  // Récupérer l’emploi du temps depuis le localStorage ou initialiser
  const getInitialSchedule = () => {
    const savedSchedule = localStorage.getItem("schedule");
    if (savedSchedule) {
      return JSON.parse(savedSchedule);
    }
    const initialSchedule = {};
    days.forEach((day) => {
      initialSchedule[day] = Array(hours.length).fill("");
    });
    return initialSchedule;
  };

  const [schedule, setSchedule] = useState(getInitialSchedule);

  // Sauvegarder les horaires dans le localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem("hours", JSON.stringify(hours));
    setSchedule(getInitialSchedule());
  }, [hours]);

  useEffect(() => {
    localStorage.setItem("schedule", JSON.stringify(schedule));
  }, [schedule]);

  const handleEdit = (day, hourIndex) => {
    const newTask = prompt(
      `Entrez une tâche pour ${day} à ${hours[hourIndex]} :`,
      schedule[day][hourIndex]
    );
    if (newTask !== null) {
      setSchedule((prevSchedule) => ({
        ...prevSchedule,
        [day]: prevSchedule[day].map((task, i) =>
          i === hourIndex ? newTask : task
        ),
      }));
    }
  };

  // Ajouter un nouvel horaire
  const handleAddHour = () => {
    const newHour = prompt("Entrez un nouvel horaire (ex : 15:00 - 16:00) :");
    if (newHour) {
      setHours((prevHours) => [...prevHours, newHour]);
    }
  };

  // Modifier un horaire existant
  const handleEditHour = (index) => {
    const updatedHour = prompt("Modifier l’horaire :", hours[index]);
    if (updatedHour) {
      setHours((prevHours) =>
        prevHours.map((hour, i) => (i === index ? updatedHour : hour))
      );
    }
  };

  // Supprimer un horaire
  const handleDeleteHour = (index) => {
    if (window.confirm("Voulez-vous supprimer cet horaire ?")) {
      setHours((prevHours) => prevHours.filter((_, i) => i !== index));
      setSchedule((prevSchedule) => {
        const updatedSchedule = { ...prevSchedule };
        days.forEach((day) => {
          updatedSchedule[day] = updatedSchedule[day].filter(
            (_, i) => i !== index
          );
        });
        return updatedSchedule;
      });
    }
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>AGENDA</h1>
      <button onClick={handleAddHour}>Ajouter un horaire</button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Heure</th>
            {days.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour, hourIndex) => (
            <tr key={hourIndex}>
              <td>
                {hour}
                <button onClick={() => handleEditHour(hourIndex)}>✏️</button>
                <button onClick={() => handleDeleteHour(hourIndex)}>🗑️</button>
              </td>
              {days.map((day, dayIndex) => (
                <td
                  key={dayIndex}
                  onClick={() => handleEdit(day, hourIndex)}
                  style={{ cursor: "pointer", textAlign: "center" }}
                >
                  {schedule[day][hourIndex] || "Cliquez pour ajouter"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Agenda;
