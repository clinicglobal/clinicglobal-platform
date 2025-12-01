import CardMetric from "./components/CardMetric";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Dashboard <span className="text-purple-600">Supremo</span>
        </h1>

        <button className="px-5 py-2 rounded-xl bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition">
          Nova Avaliação
        </button>
      </div>

      {/* Cards SUPREMOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <CardMetric title="Avaliações Hoje" value="12" color="#7C3AED" />
        <CardMetric title="Clientes Atendidos" value="48" color="#1D4ED8" />
        <CardMetric title="Ticket Médio" value="R$ 620" color="#059669" />
        <CardMetric title="Faturamento" value="R$ 8.750" color="#D97706" />
      </div>

      {/* resto já está pronto… */}
