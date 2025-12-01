import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import { TrendingUp, Users, Calendar, DollarSign } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex">
      {/* Sidebar fixa */}
      <Sidebar />

      {/* Conteúdo principal */}
      <div className="ml-64 w-full min-h-screen bg-gray-50">
        <Topbar />

        <main className="p-8">

          {/* TÍTULO */}
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Dashboard Geral
          </h1>

          {/* CARDS PRINCIPAIS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* CARD FATURAMENTO */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-700">Faturamento</h3>
                <DollarSign className="text-purple-600" size={24} />
              </div>
              <p className="text-3xl font-bold mt-4">R$ 12.850</p>
              <p className="text-green-600 mt-2 flex items-center gap-1">
                <TrendingUp size={18} /> +18% este mês
              </p>
            </div>

            {/* CARD CLIENTES */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-700">Clientes</h3>
                <Users className="text-purple-600" size={24} />
              </div>
              <p className="text-3xl font-bold mt-4">298</p>
              <p className="text-purple-600 mt-2">
                Novos este mês: 32
              </p>
            </div>

            {/* CARD AGENDAMENTOS */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-700">Agendamentos</h3>
                <Calendar className="text-purple-600" size={24} />
              </div>
              <p className="text-3xl font-bold mt-4">87</p>
              <p className="text-purple-600 mt-2">
                Para hoje: 12
              </p>
            </div>

            {/* CARD CRESCIMENTO */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-700">Crescimento</h3>
                <TrendingUp className="text-purple-600" size={24} />
              </div>
              <p className="text-3xl font-bold mt-4">+42%</p>
              <p className="text-purple-600 mt-2">
                Comparado ao mês anterior
              </p>
            </div>

          </div>

          {/* GRÁFICO */}
          <div className="mt-10 bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Gráfico de Faturamento Mensal</h2>
            <iframe
              src="/dashboard/graficos"
              className="w-full h-96 rounded-xl border"
            ></iframe>
          </div>

        </main>
      </div>
    </div>
  );
}
