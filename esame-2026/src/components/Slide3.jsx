function Slide3({ onNext, onPrev }) {
  return (
    <div className="slide-container">
      <h1 className="mb-4 text-center">
        Doc portal – Progetta i tuoi componenti
      </h1>

      {/* Titolo */}
      <div className="mb-3">
        <h4>Titolo</h4>
        <p>
          Definisci chiaramente il titolo del componente o della sezione
          che stai realizzando.
        </p>
      </div>

      {/* Descrizione */}
      <div className="mb-3">
        <h4>Descrizione</h4>
        <p>
          La descrizione spiega lo scopo del componente e il suo
          comportamento all'interno dell'applicazione.
        </p>
      </div>

      {/* Suggestions */}
      <div className="mb-4">
        <h4>Suggestions</h4>
        <pre className="bg-light p-3 rounded border">
{`- Mantieni i componenti piccoli e riutilizzabili
- Usa props per passare i dati
- Evita duplicazioni di codice`}
        </pre>
      </div>

      {/* Navigazione */}
      <div className="d-flex justify-content-between">
        <button className="btn btn-secondary" onClick={onPrev}>← Indietro</button>
        <button className="btn btn-primary" onClick={onNext}>Avanti →</button>
      </div>
    </div>
  );
}

export default Slide3;
