export default function Home() {
  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      padding: "40px",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "40px", color: "#6a5acd" }}>
        ClinicGlobal Platform
      </h1>

      <p style={{ fontSize: "20px", marginTop: "20px" }}>
        Sistema Inteligente para Clínicas de Estética e Saúde.
      </p>

      <div style={{
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center"
      }}>
        <a href="#" style={{
          padding: "15px 25px",
          backgroundColor: "#6a5acd",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          width: "250px"
        }}>
          Área da Clínica
        </a>

        <a href="#" style={{
          padding: "15px 25px",
          backgroundColor: "#483d8b",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          width: "250px"
        }}>
          Fazer Avaliação Facial
        </a>

        <a href="#" style={{
          padding: "15px 25px",
          backgroundColor: "#372f86",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          width: "250px"
        }}>
          Contato | Suporte
        </a>
      </div>

      <footer style={{ marginTop: "60px", fontSize: "14px", opacity: 0.6 }}>
        © 2025 ClinicGlobal — Todos os direitos reservados.
      </footer>
    </div>
  );
}
