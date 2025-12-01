export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Dashboard <span className="text-purple-600">Premium</span>
        </h1>

        <button className="px-5 py-2 rounded-xl bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition">
          Nova Avaliação
        </button>
      </div>

      {/* Cards Resumo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        <div className="rounded-3xl bg-white p-6 shadow-lg border border-gray-100">
          <p className="text-gray-500 text-sm">Avaliações Hoje</p>
          <h2 className="text-3xl font-bold mt-2 text-purple-700">12</h2>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-lg border border-gray-100">
          <p className="text-gray-500 text-sm">Clientes Atendidos</p>
          <h2 className="text-3xl font-bold mt-2 text-purple-700">48</h2>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-lg border border-gray-100">
          <p className="text-gray-500 text-sm">Ticket Médio</p>
          <h2 className="text-3xl font-bold mt-2 text-purple-700">R$ 620</h2>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-lg border border-gray-100">
          <p className="text-gray-500 text-sm">Faturamento</p>
          <h2 className="text-3xl font-bold mt-2 text-purple-700">R$ 8.750</h2>
        </div>
      </div>

      {/* Área de Conteúdo Secundário */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Últimas Avaliações
          </h3>

          <ul className="space-y-4">
            <li className="flex justify-between border-b pb-3">
              <span className="font-medium text-gray-700">Milena Santos</span>
              <span className="text-purple-600">Concluída</span>
            </li>

            <li className="flex justify-between border-b pb-3">
              <span className="font-medium text-gray-700">Juliana Alves</span>
              <span className="text-yellow-500">Pendente</span>
            </li>

            <li className="flex justify-between border-b pb-3">
              <span className="font-medium text-gray-700">Roberta Lima</span>
              <span className="text-purple-600">Concluída</span>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Notificações
          </h3>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-purple-50 border border-purple-100">
              Novo cliente cadastrado: <strong>Amanda Rocha</strong>
            </div>

            <div className="p-4 rounded-xl bg-yellow-50 border border-yellow-100">
              Avaliação pendente de finalização
            </div>

            <div className="p-4 rounded-xl bg-green-50 border border-green-100">
              Pagamento confirmado de <strong>R$ 690</strong>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
