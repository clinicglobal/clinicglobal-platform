import Sidebar from "./components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-50">

      {/* MENU LATERAL */}
      <Sidebar />

      {/* CONTEÚDO */}
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}
