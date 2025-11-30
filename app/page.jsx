export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "42px", fontWeight: "800", color: "#5C3BDB" }}>
        ClinicGlobal Platform
      </h1>

      <p
        style={{
          fontSize: "20px",
          maxWidth: "600px",
          marginTop: "10px",
          marginBottom: "40px",
          color: "#333",
        }}
      >
        Sistema Inteligente para Clínicas de Estética e Saúde.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <a
          href="#"
          style={{
            padding: "18px",
            background: "linear-gradient(90deg, #7b5bff, #6a48f7)",
            borderRadius: "12px",
            color: "#fff",
            fontSize: "18px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Área da Clínica
        </a>

        <a
          href="#"
          style={{
            padding: "18px",
            background: "linear-gradient(90deg, #5a3ae4, #4b2fcf)",
            borderRadius: "12px",
            color: "#fff",
            fontSize: "18px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Fazer Avaliação Facial
        </a>

        <a
          href="#"
          style={{
            padding: "18px",
            background: "linear-gradient(90deg, #3e2bbd, #34239e)",
            borderRadius: "12px",
            color: "#fff",
            fontSize: "18px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Contato | Suporte
        </a>
      </div>

      <p style={{ marginTop: "60px", color: "#777" }}>
        © 2025 ClinicGlobal — Todos os direitos reservados.
      </p>
    </main>
  );
}
