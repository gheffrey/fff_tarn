import { useState } from "react";

function Regles() {
  // State pour gérer les fichiers PDF téléversés
  const [pdfFiles, setPdfFiles] = useState([]);

  // Fonction pour gérer le téléversement de fichiers
  const handleFileUpload = (e) => {
    const files = e.target.files;
    const uploadedFiles = [];

    // Parcourir les fichiers téléversés et les ajouter à la liste
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      // Vérifier si le fichier est un PDF
      if (file.type === "application/pdf") {
        // Utiliser un objet URL pour créer un lien temporaire
        const fileURL = URL.createObjectURL(file);
        uploadedFiles.push({
          name: file.name,
          url: fileURL,
        });
      } else {
        alert("Seuls les fichiers PDF sont autorisés");
      }
    }

    // Mettre à jour l'état avec les nouveaux fichiers PDF
    setPdfFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col mt-0">
            <h5 className="card-title">Ajoutez un nouveau document</h5>
          </div>
        </div>
        <div className="mt-3">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileUpload}
            multiple
            className="form-control"
          />
        </div>

        <div className="mt-3">
          <h5>Documents téléversés :</h5>
          {pdfFiles.length === 0 ? (
            <p>Aucun document téléversé pour le moment.</p>
          ) : (
            <ul>
              {pdfFiles.map((file, index) => (
                <li key={index}>
                  <a href={file.url} target="_blank" rel="noopener noreferrer">
                    {file.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Regles;
