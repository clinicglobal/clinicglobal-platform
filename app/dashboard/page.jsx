"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function GraficoClientes() {
  const meses = [
    "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
    "Jul", "Ago", "Set", "Out", "Nov", "Dez",
  ];

  const data = {
    labels: meses,
    datasets: [
      {
        label: "Novos Clientes",
        data: [12, 18, 25, 22, 29, 34, 40, 39, 45, 51, 48, 60],
        backgroundColor: "rgba(168, 85, 247, 0.6)", // Roxo Premium
        borderColor: "rgba(126, 34, 206, 1)",
        borderWidth: 1.8,
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 10 },
      },
    },
  };

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ marginBottom: "15px", fontSize: "18px", fontWeight: "600" }}>
        Novos Clientes por Mês
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
}
