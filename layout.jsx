import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-50">

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTEÚDO */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <Header />

        {/* PÁGINAS */}
        <main className="flex-1 p-10">
          {children}
        </main>

      </div>
    </div>
  );
}
