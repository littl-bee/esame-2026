function Slide5({ onNext, onPrev }) {
  return (
    <div className="slide-container">
      <h1 className="mb-4 text-center">
        Doc portal – Genera la build di produzione
      </h1>

      <p>Lancia il comando di build per generare i file pronti per la distribuzione.</p>

      <pre className="bg-light p-3 rounded border">
        npm run build
      </pre>

      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-secondary" onClick={onPrev}>← Indietro</button>
        <button className="btn btn-primary" onClick={onNext}>Avanti →</button>
      </div>
    </div>
  );
}

export default Slide5;
