export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* MENU LATERAL FIXO */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-2xl font-bold mb-6 text-purple-600">Dashboard</h2>

        <ul className="space-y-4 text-gray-700">
          <li><a href="/dashboard" className="hover:text-purple-600">Início</a></li>
          <li><a href="/clinic" className="hover:text-purple-600">Clínicas</a></li>
          <li><a href="/avaliacao" className="hover:text-purple-600">Avaliações</a></li>
          <li><a href="/login" className="hover:text-purple-600">Sair</a></li>
        </ul>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
