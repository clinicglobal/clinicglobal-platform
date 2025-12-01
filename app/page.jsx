export default function HomePage() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ fontSize: "36px", color: "#5A2DFF" }}>
        ClinicGlobal Platform
      </h1>

      <p style={{ marginTop: "20px", color: "#555", fontSize: "18px" }}>
        Sistema Inteligente para Clínicas de Estética e Saúde.
      </p>

      <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "20px" }}>
        <a href="/clinic" style={buttonStyle}>Área da Clínica</a>
        <a href="/avaliacao" style={buttonStyle}>Fazer Avaliação Facial</a>
        <a href="https://wa.me/5518996361069" style={buttonStyle}>Contato | Suporte</a>
      </div>
    </div>
  );
}

const buttonStyle = {
  background: "linear-gradient(90deg, #6A5BFF, #8E2EFF)",
  padding: "18px 28px",
  borderRadius: "14px",
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "bold",
};
