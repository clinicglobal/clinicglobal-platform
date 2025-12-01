// app/clientes/layout.jsx
export default function ClientesLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="border-b bg-white px-6 py-4 shadow-sm">
        <h1 className="text-2xl font-bold text-purple-700">
          👥 Gestão de Clientes
        </h1>
        <p className="text-gray-500 -mt-1">
          Controle completo de pacientes, contatos e histórico.
        </p>
      </header>

      <main className="flex-1 px-6 py-6">
        {children}
      </main>
    </div>
  );
}
