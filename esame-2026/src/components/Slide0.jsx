function Slide0({ onStart }) {
  return (
    <div className="slide-container text-center" style={{ background: "linear-gradient(135deg, #ede0ff, #f3e8ff)" }}>
      
      <h1 className="mb-3" style={{ color: "#9b59b6", fontSize: "2.5rem" }}>
        Documentation portal
      </h1>

      {/* Divider carino */}
      <div style={{ width: "60px", height: "4px", backgroundColor: "#c39eff", margin: "0 auto 20px", borderRadius: "2px" }}></div>

      <p className="mb-5" style={{ color: "#3d3d3d", fontSize: "1.1rem", lineHeight: "1.6" }}>
        Il compito consiste nel riprodurre in React queste slide
        <br />
        e impacchettare l'app in un container Docker
      </p>

      <button
        className="btn btn-primary btn-lg"
        onClick={onStart}
        style={{
          backgroundColor: "#c39eff",
          border: "none",
          padding: "10px 30px",
          borderRadius: "12px",
          fontSize: "1.2rem",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}
      >
        Inizia
      </button>
    </div>
  );
}

export default Slide0;
