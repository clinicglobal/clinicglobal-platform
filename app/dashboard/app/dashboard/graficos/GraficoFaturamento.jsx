"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const dados = [
  { mes: "Jan", valor: 4500 },
  { mes: "Fev", valor: 6100 },
  { mes: "Mar", valor: 7200 },
  { mes: "Abr", valor: 6800 },
  { mes: "Mai", valor: 9100 },
  { mes: "Jun", valor: 12450 },
];

export default function GraficoFaturamento() {
  return (
    <div className="p-6 rounded-3xl shadow-xl bg-white/80 border border-purple-300 backdrop-blur-xl">
      <h2 className="text-2xl font-bold text-purple-700 mb-4">
        Faturamento – Últimos 6 meses
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dados}>
          <CartesianGrid strokeDasharray="3 3" stroke="#d8b4fe" />
          <XAxis dataKey="mes" stroke="#7e22ce" />
          <YAxis stroke="#7e22ce" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="valor"
            stroke="#9333ea"
            strokeWidth={4}
            dot={{ r: 6, fill: "#9333ea" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
