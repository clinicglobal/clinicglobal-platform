"use client";

import GraficoFaturamento from "./graficos/GraficoFaturamento";

export default function DashboardPage() {
  return (
    <div className="p-6 md:p-10 space-y-10">

      {/* TÍTULO DO DASHBOARD */}
      <h1 className="text-3xl font-bold text-purple-700">
        Dashboard BonitaDerme Clinic Global
      </h1>

      {/* CARDS PREMIUM */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* CARD 1 — Fatura do Mês */}
        <div className="p-6 rounded-3xl shadow-xl bg-white/70 border border-purple-300 backdrop-blur-xl hover:scale-[1.02] transition">
          <p className="text-lg text-gray-600">Faturamento do Mês</p>
          <h2 className="text-4xl font-bold text-purple-700 mt-2">R$ 12.450</h2>
          <p className="text-sm text-green-600 mt-1">▲ +22% vs mês anterior</p>
        </div>

        {/* CARD 2 — Agendamentos */}
        <div className="p-6 rounded-3xl shadow-xl bg-white/70 border border-purple-3"use client";

import GraficoFaturamento from "./graficos/GraficoFaturamento";

export default function DashboardPage() {
  return (
    <div className="p-6 md:p-10 space-y-10">

      {/* TÍTULO DO DASHBOARD */}
      <h1 className="text-3xl font-bold text-purple-700">
        Dashboard BonitaDerme Clinic Global
      </h1>

      {/* CARDS PREMIUM */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* CARD 1 — Fatura do Mês */}
        <div className="p-6 rounded-3xl shadow-xl bg-white/70 border border-purple-300 backdrop-blur-xl hover:scale-[1.02] transition">
          <p className="text-lg text-gray-600">Faturamento do Mês</p>
          <h2 className="text-4xl font-bold text-purple-700 mt-2">R$ 12.450</h2>
          <p className="text-sm text-green-600 mt-1">▲ +22% vs mês anterior</p>
        </div>

        {/* CARD 2 — Agendamentos */}
        <div className="p-6 rounded-3xl shadow-xl bg-white/70 border border-purple-300 backdrop-blur-xl hover:scale-[1.02] transition">
          <p className="text-lg text-gray-600">Agendamentos</p>
          <h2 className="text-4xl font-bold text-purple-700 mt-2">37</h2>
          <p className="text-sm text-blue-600 mt-1">Hoje</p>
        </div>

        {/* CARD 3 — Novas Avaliações */}
        <div className="p-6 rounded-3xl shadow-xl bg-white/70 border border-purple-300 backdrop-blur-xl hover:scale-[1.02] transition">
          <p className="text-lg text-gray-600">Novas Avaliações</p>
          <h2 className="text-4xl font-bold text-purple-700 mt-2">14</h2>
          <p className="text-sm text-green-600 mt-1">Nos últimos 7 dias</p>
        </div>

      </div>

      {/* GRÁFICO PREMIUM */}
      <div>
        <GraficoFaturamento />
      </div>

      {/* 🔮 PRÓXIMAS SEÇÕES QUE A GENTE VAI ADICIONAR */}
      {/* 
        ⬇️ Próximo bloco será colocado aqui, sem alterar nada acima:

        - Gráfico de Clientes
        - Tabela de Agendamentos
        - Avaliações Recentes
        - Indicadores Avançados
        - Ranking de Procedimentos
        - Sistema de metas mensais
      */}

    </div>
  );
}00 backdrop-blur-xl hover:scale-[1.02]
