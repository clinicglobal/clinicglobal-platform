export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fff" }}>

      {/* HERO */}
      <section style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #fff 0%, #f8ecef 100%)"
      }}>
        <h1 style={{
          fontSize: "40px",
          color: "#2b2b2b",
          marginBottom: "20px"
        }}>
          ClinicGlobal — Sistema Inteligente para Clínicas de Estética
        </h1>
        <p style={{
          fontSize: "18px",
          color: "#444",
          maxWidth: "700px",
          margin: "0 auto"
        }}>
          A plataforma premium desenvolvida para levar sua clínica ao próximo nível.
          Avaliação facial, prontuário digital, automação, IA e muito mais —
          tudo em um único sistema profissional.
        </p>

        <a href="/contato" style={{
          display: "inline-block",
          marginTop: "30px",
          padding: "14px 30px",
          background: "#d8a6a0",
          color: "#fff",
          borderRadius: "8px",
          fontSize: "18px",
          textDecoration: "none"
        }}>
          Falar com Especialista
        </a>
      </section>

      {/* O SISTEMA */}
      <section style={{ padding: "70px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px", color: "#333" }}>
          O que é o ClinicGlobal?
        </h2>
        <p style={{
          maxWidth: "800px",
          margin: "0 auto",
          color: "#666",
          fontSize: "18px"
        }}>
          Um sistema completo para clínicas de estética, com tudo que você precisa:
          gestão, avaliação facial, pacientes, laudos, prontuário, financeiro e
          automações — tudo em um só lugar.
        </p>
      </section>

      {/* FUNCIONALIDADES */}
      <section style={{
        padding: "70px 20px",
        background: "#faf6f7",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "32px", marginBottom: "40px", color: "#333" }}>
          Funcionalidades Premium
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "25px",
          maxWidth: "1100px",
          margin: "0 auto"
        }}>
          {[
            "Avaliação Facial Inteligente",
            "Prontuário Digital Completo",
            "Gestão de Pacientes",
            "Financeiro Integrado",
            "Laudos Profissionais",
            "Agenda Inteligente",
            "Protocolos Personalizados",
            "Área da Clínica Premium"
          ].map((item, i) => (
            <div key={i} style={{
              padding: "30px",
              background: "#fff",
              borderRadius: "10px",
              border: "1px solid #f1d4d7"
            }}>
              <h3 style={{ color: "#d8a6a0", fontSize: "20px" }}>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PLANOS */}
      <section style={{ padding: "70px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px", color: "#333" }}>
          Planos e Preços
        </h2>
        <p style={{
          color: "#666",
          marginBottom: "40px",
          fontSize: "18px"
        }}>
          Escolha o melhor plano para sua clínica.
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px"
        }}>
          <div style={{
            padding: "30px",
            background: "#fff",
            borderRadius: "10px",
            border: "1px solid #f1d4d7",
            width: "280px"
          }}>
            <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>Essencial</h3>
            <p style={{ color: "#d8a6a0", fontSize: "26px" }}>R$ 49/mês</p>
          </div>

          <div style={{
            padding: "30px",
            background: "#fff",
            borderRadius: "10px",
            border: "2px solid #d8a6a0",
            width: "280px"
          }}>
            <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>Profissional</h3>
            <p style={{ color: "#d8a6a0", fontSize: "26px" }}>R$ 97/mês</p>
          </div>

          <div style={{
            padding: "30px",
            background: "#fff",
            borderRadius: "10px",
            border: "1px solid #f1d4d7",
            width: "280px"
          }}>
            <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>Supremo</h3>
            <p style={{ color: "#d8a6a0", fontSize: "26px" }}>R$ 197/mês</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#f1d4d7",
        padding: "25px",
        textAlign: "center",
        color: "#555"
      }}>
        ClinicGlobal © {new Date().getFullYear()} — Todos os direitos reservados.
      </footer>

    </div>
  );
}
