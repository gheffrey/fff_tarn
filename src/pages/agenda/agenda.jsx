import { useState } from "react";

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
  const hours = [
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
  ];

  // État pour stocker les tâches
  const [schedule, setSchedule] = useState(() => {
    const initialSchedule = {};
    days.forEach((day) => {
      initialSchedule[day] = Array(hours.length).fill("");
    });
    return initialSchedule;
  });

  // État pour stocker les cases modifiées
  const [modifiedCells, setModifiedCells] = useState(() => {
    const initialModifiedCells = {};
    days.forEach((day) => {
      initialModifiedCells[day] = Array(hours.length).fill(false); // Initialement aucune case n'est modifiée
    });
    return initialModifiedCells;
  });

  // Gestion de la modification d'une tâche
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

      // Marquer la case comme modifiée
      setModifiedCells((prevModifiedCells) => ({
        ...prevModifiedCells,
        [day]: prevModifiedCells[day].map((modified, i) =>
          i === hourIndex ? true : modified
        ),
      }));
    }
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Emploi du Temps Modifiable</h1>
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
              <td>{hour}</td>
              {days.map((day, dayIndex) => (
                <td
                  key={dayIndex}
                  onClick={() => handleEdit(day, hourIndex)}
                  style={{
                    cursor: "pointer",
                    textAlign: "center",
                    backgroundColor: modifiedCells[day][hourIndex]
                      ? "#D4EDDA"
                      : "white", // Change la couleur de fond si modifié
                  }}
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
