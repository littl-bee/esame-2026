function Slide7({ onPrev }) {
  return (
    <div className="slide-container text-center">
      <h1 className="mb-4" style={{ color: "#9b59b6" }}>
        Doc portal – Consegna e festeggia!
      </h1>

      {/* Immagine di celebrazione */}
      <img 
        src="/images/espeonfesteggia.gif" 
        alt="Festeggia!" 
        style={{ maxWidth: "250px", margin: "0 auto 20px", display: "block" }}
      />

      <p className="mb-4" style={{ color: "#3d3d3d", fontSize: "1.1rem", lineHeight: "1.6" }}>
        Complimenti! Se sei arrivato fin qui e funziona tutto, ci sono buone possibilità che tu prenda un bel voto in questo esame, bravo!
      </p>

      <p style={{ color: "#7a37c1ff" }}>
        Tip: ricordati di fare push sul repository e di fare la Pull Request!
      </p>

      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-secondary" onClick={onPrev}>← Indietro</button>
      </div>
    </div>
  );
}

export default Slide7;
