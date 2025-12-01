export const metadata = {
  title: "Dashboard | BonitaDerme Clinic Global",
};

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f7f7f7" }}>
      
      {/* MENU LATERAL */}
      <aside style={{
        width: "240px",
        background: "#ffffff",
        padding: "20px",
        borderRight: "1px solid #eee",
        boxShadow: "2px 0 10px rgba(0,0,0,0.05)"
      }}>
        <h2 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "30px" }}>
          ClinicGlobal
        </h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <a href="/dashboard" style={{ fontSize: "16px" }}>🏠 Início</a>
          <a href="/clinic" style={{ fontSize: "16px" }}>💉 Estética</a>
          <a href="/avaliacao" style={{ fontSize: "16px" }}>📋 Avaliações</a>
        </nav>
      </aside>

      {/* CONTEÚDO DINÂMICO */}
      <main style={{ flex: 1, padding: "30px" }}>
        {children}
      </main>
    </div>
  );
}
