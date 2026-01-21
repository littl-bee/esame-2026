function Slide1({ onNext, onPrev }) {
  return (
    <div className="slide-container">
      <h1 className="mb-4 text-center">
        Doc portal – Crea una nuova applicazione React
      </h1>

      <p>
        Inizializza l'applicazione React usando <strong>Vite</strong>.
      </p>

      <p>
        Tip: utilizza un template già configurato per React,
        come <strong>react, react-ts, react-swc, react-swc-ts</strong>.
      </p>

      <pre className="bg-light p-3 rounded border">
        npm create vite@latest esame-2026 -- --template react
      </pre>

      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-secondary" onClick={onPrev}>← Indietro</button>
        <button className="btn btn-primary" onClick={onNext}>Avanti →</button>
      </div>
    </div>
  );
}

export default Slide1;
