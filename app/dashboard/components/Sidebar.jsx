"use client";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        background: "#fafafa",
        height: "100vh",
        borderRight: "1px solid #eee",
        padding: "20px",
      }}
    >
      <h3>Menu</h3>
      <ul style={{ listStyle: "none", padding: 0, marginTop: 10 }}>
        <li style={{ marginBottom: 10 }}>🏥 Clínica</li>
        <li style={{ marginBottom: 10 }}>🧍🏻‍♀️ Clientes</li>
        <li style={{ marginBottom: 10 }}>📋 Avaliações</li>
        <li style={{ marginBottom: 10 }}>📈 Evolução</li>
        <li style={{ marginBottom: 10 }}>⚙️ Configurações</li>
      </ul>
    </div>
  );
}
