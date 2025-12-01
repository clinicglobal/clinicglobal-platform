export default function Dashboard() {
  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
        Dashboard da Clínica
      </h1>

      <p style={{ marginTop: "10px", fontSize: "16px", color: "#555" }}>
        Bem-vinda à sua plataforma BonitaDerme Clinic Global.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        marginTop: "30px"
      }}>
        
        <div style={{
          padding: "20px",
          borderRadius: "16px",
          background: "white",
          boxShadow: "0 4px 8px rgba(0,0,0,0.08)"
        }}>
          <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>Pacientes Hoje</h2>
          <p style={{ fontSize: "32px", fontWeight: "bold" }}>8</p>
        </div>

        <div style={{
          padding: "20px",
          borderRadius: "16px",
          background: "white",
          boxShadow: "0 4px 8px rgba(0,0,0,0.08)"
        }}>
          <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>Faturamento</h2>
          <p style={{ fontSize: "32px", fontWeight: "bold" }}>R$ 2.450</p>
        </div>

        <div style={{
          padding: "20px",
          borderRadius: "16px",
          background: "white",
          boxShadow: "0 4px 8px rgba(0,0,0,0.08)"
        }}>
          <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>Avaliações Pendentes</h2>
          <p style={{ fontSize: "32px", fontWeight: "bold" }}>3</p>
        </div>

      </div>
    </div>
  );
}
