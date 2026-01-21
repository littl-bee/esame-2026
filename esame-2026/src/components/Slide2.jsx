function Slide2({ onNext, onPrev }) {
  return (
    <div className="slide-container">
      <h1 className="mb-4 text-center">
        Doc portal – Sviluppa l'applicazione React
      </h1>

      <p>Inizia scrivendo il codice HTML dell'interfaccia da realizzare.</p>

      <ul className="list-group mb-4">
        <li className="list-group-item">
          Scomponi l'interfaccia in componenti React riutilizzabili
        </li>
        <li className="list-group-item">
          Aggiungi la logica (in questo caso la navigazione) solo in un secondo momento
        </li>
      </ul>

      <p>
        Tip: segui la tecnica{" "}
        <a
          href="https://react.dev/learn/thinking-in-react"
          target="_blank"
          rel="noreferrer"
        >
          thinking in React
        </a>
      </p>

      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-secondary" onClick={onPrev}>← Indietro</button>
        <button className="btn btn-primary" onClick={onNext}>Avanti →</button>
      </div>
    </div>
  );
}

export default Slide2;
