export default function DashboardPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "700" }}>
        Painel da Clínica
      </h1>

      <p style={{ marginTop: "10px", fontSize: "18px", opacity: 0.8 }}>
        Bem-vinda ao painel oficial da BonitaDerme Clinic Global.
      </p>

      <div style={{ marginTop: "30px", padding: "20px", background: "#fff", borderRadius: "12px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "600" }}>Visão Geral</h2>
        <p style={{ marginTop: "6px", opacity: 0.7 }}>
          Aqui você verá estatísticas, atendimentos, vendas e indicadores da sua plataforma.
        </p>
      </div>
    </div>
  );
}
