export default function HomePage() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ fontSize: "48px", fontWeight: "bold", color: "#6C43F3" }}>
        ClinicGlobal Platform
      </h1>

      <p style={{ marginTop: "20px", fontSize: "20px", color: "#555" }}>
        Sistema Inteligente para Clínicas de Estética e Saúde.
      </p>

      <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "20px" }}>
        
        <a href="/clinic" style={buttonStyle}>
          Área da Clínica
        </a>

        <a href="/avaliacao" style={buttonStyle}>
          Fazer Avaliação Facial
        </a>

        <a href="/contato" style={buttonStyle}>
          Contato | Suporte
        </a>

      </div>
    </div>
  );
}

const buttonStyle = {
  background: "linear-gradient(45deg, #6C43F3, #8F6CFF)",
  padding: "18px",
  borderRadius: "14px",
  textDecoration: "none",
  color: "white",
  fontSize: "20px",
  fontWeight: "bold",
  display: "block",
  width: "90%",
  maxWidth: "400px",
  margin: "0 auto"
};
