function Slide6({ onNext, onPrev }) {
  return (
    <div className="slide-container">
      <h1 className="mb-4 text-center">
        Doc portal – Configura il container
      </h1>

      <p>Scrivi il Dockerfile e istanzia il container Docker.</p>

      <h5>Ricetta per il Dockerfile:</h5>
      <ul className="list-group mb-3">
        <li className="list-group-item">Crea il Dockerfile</li>
        <li className="list-group-item">Basati su un’immagine Node (FROM "node:latest")</li>
        <li className="list-group-item">Aggiungi il file package.json</li>
        <li className="list-group-item">Lancia il comando <code>npm install</code></li>
        <li className="list-group-item">Espone la porta 4173</li>
        <li className="list-group-item">Copia la directory "dist" (creata con <code>npm run build</code>)</li>
        <li className="list-group-item">Lancia il server (<code>npm run preview --host</code>)</li>
        <li className="list-group-item">Crea l’immagine Docker (<code>docker build</code>)</li>
        <li className="list-group-item">Istanzia il container (<code>docker run</code>)</li>
      </ul>

      <p>
        Documentazione:{" "}
        <a href="https://docs.docker.com/guides/reactjs/develop/" target="_blank" rel="noreferrer">
          Docker + React
        </a>
      </p>

      <pre className="bg-light p-3 rounded border mb-3">
docker build . -t esame-its-2026
docker run -p 4173:4173 --name esame-its-2026 esame-its-2026
      </pre>

      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-secondary" onClick={onPrev}>← Indietro</button>
        <button className="btn btn-primary" onClick={onNext}>Avanti →</button>
      </div>
    </div>
  );
}

export default Slide6;
