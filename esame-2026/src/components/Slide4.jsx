function Slide4({ onNext, onPrev }) {
  return (
    <div className="slide-container">
      <h1 className="mb-4 text-center">
        Doc portal – Controlla l'avanzamento utilizzando l'ambiente di sviluppo
      </h1>

      <p>Lancia l'app in locale per verificare che tutto funzioni correttamente.</p>

      <pre className="bg-light p-3 rounded border">
        npm run dev
      </pre>

      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-secondary" onClick={onPrev}>← Indietro</button>
        <button className="btn btn-primary" onClick={onNext}>Avanti →</button>
      </div>
    </div>
  );
}

export default Slide4;