export default function Home() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ fontSize: "48px", color: "#5A2DFA" }}>
        ClinicGlobal Platform
      </h1>
      <p style={{ marginTop: "20px", fontSize: "20px" }}>
        Sistema Inteligente para Clínicas de Estética e Saúde.
      </p>

      <div style={{ marginTop: "40px" }}>
        <a
          href="/clinic"
          style={{
            display: "block",
            margin: "20px auto",
            padding: "18px",
            width: "80%",
            maxWidth: "330px",
            background: "#5A2DFA",
            color: "#fff",
            borderRadius: "14px",
            textDecoration: "none",
            fontSize: "20px",
          }}
        >
          Área da Clínica
        </a>

        <a
          href="/avaliacao"
          style={{
            display: "block",
            margin: "20px auto",
            padding: "18px",
            width: "80%",
            maxWidth: "330px",
            background: "#6a11cb",
            color: "#fff",
            borderRadius: "14px",
            textDecoration: "none",
            fontSize: "20px",
          }}
        >
          Fazer Avaliação Facial
        </a>

        <a
          href="mailto:suporte@clinicglobal.com"
          style={{
            display: "block",
            margin: "20px auto",
            padding: "18px",
            width: "80%",
            maxWidth: "330px",
            background: "#2575fc",
            color: "#fff",
            borderRadius: "14px",
            textDecoration: "none",
            fontSize: "20px",
          }}
        >
          Contato | Suporte
        </a>
      </div>
    </div>
  );
}
