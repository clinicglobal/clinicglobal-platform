"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { mes: "Jan", valor: 1200 },
  { mes: "Fev", valor: 1800 },
  { mes: "Mar", valor: 2600 },
  { mes: "Abr", valor: 2200 },
  { mes: "Mai", valor: 3100 },
  { mes: "Jun", valor: 4250 },
];

export default function GraficoFaturamento() {
  return (
    <div className="p-6 rounded-3xl shadow-xl bg-white/70 backdrop-blur-xl border border-purple-300">
      <h2 className="text-xl font-semibold text-purple-700 mb-4">
        Faturamento Mensal
      </h2>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis dataKey="mes" stroke="#7C3AED" />
          <YAxis stroke="#7C3AED" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="valor"
            stroke="#7C3AED"
            strokeWidth={3}
            dot={{ stroke: "#7C3AED", strokeWidth: 2, r: 5 }}
            activeDot={{ r: 8 }}
            animationDuration={1200}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
