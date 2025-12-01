export const metadata = {
  title: "ClinicGlobal Dashboard",
  description: "Painel administrativo da plataforma",
};

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f7f7f7" }}>
      
      {/* SIDEBAR */}
      <aside
        style={{
          width: "260px",
          background: "#ffffff",
          borderRight: "1px solid #eee",
          padding: "30px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h2 style={{ fontSize: "22px", fontWeight: "700" }}>ClinicGlobal</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <a href="/dashboard" style={{ textDecoration: "none", color: "#444" }}>
            📊 Dashboard
          </a>
          <a href="/clinic" style={{ textDecoration: "none", color: "#444" }}>
            🏥 Clínica
          </a>
          <a href="/avaliacao" style={{ textDecoration: "none", color: "#444" }}>
            📋 Avaliações
          </a>
          <a href="/login" style={{ textDecoration: "none", color: "#444" }}>
            🔐 Sair
          </a>
        </nav>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main style={{ flex: 1, padding: "40px" }}>
        {children}
      </main>

    </div>
  );
      }
