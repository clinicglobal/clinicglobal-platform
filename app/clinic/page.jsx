export default function ClinicPage() {
  return (
    <div style={{
      padding: "30px",
      background: "#fafafa",
      borderRadius: "12px",
      border: "1px solid #eee",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ fontSize: "28px", marginBottom: "15px", color: "#333" }}>
        BonitaDerme Clinic Pro — Dashboard
      </h1>

      <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}>
        Bem-vinda ao painel da <strong>BonitaDerme Clinic Global</strong>.
        Aqui você terá acesso aos módulos profissionais, relatórios,
        prontuários digitais e recursos premium.
      </p>

      <div style={{
        marginTop: "25px",
        padding: "20px",
        borderRadius: "10px",
        background: "white",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
      }}>
        <h2 style={{ marginBottom: "10px", fontSize: "20px", color: "#444" }}>
          Módulos disponíveis:
        </h2>

        <ul style={{ fontSize: "16px", lineHeight: "1.7", marginLeft: "20px" }}>
          <li>Avaliação Facial Inteligente</li>
          <li>Prontuário Automático</li>
          <li>Diagnóstico IA (Mirror Derm Lab)</li>
          <li>Controle de Procedimentos</li>
          <li>Estoque e Financeiro Integrado</li>
          <li>Área VIP da Paciente</li>
        </ul>
      </div>
    </div>
  );
}
