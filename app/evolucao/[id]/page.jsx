"use client";

import { useState, useEffect } from "react";

// Evita necessidade de generateStaticParams no Netlify
export const dynamic = "force-dynamic";

export default function EvolucaoPage({ params }) {
  const { id } = params;

  const [loading, setLoading] = useState(true);
  const [dadosCliente, setDadosCliente] = useState(null);

  useEffect(() => {
    const buscarDados = async () => {
      setLoading(true);

      // MOCK — Depois vai substituir pelo Supabase
      const clienteMock = {
        id,
        nome: "Cliente Exemplo",
        idade: 32,
        peso: 58,
        gordura: "21%",
        evolucao: [
          { data: "2024-01-10", peso: 60, gordura: "23%" },
          { data: "2024-02-10", peso: 58, gordura: "21%" },
        ],
      };

      setTimeout(() => {
        setDadosCliente(clienteMock);
        setLoading(false);
      }, 800);
    };

    buscarDados();
  }, [id]);

  if (loading) {
    return (
      <div className="p-6 text-center text-lg font-medium">
        Carregando dados...
      </div>
    );
  }

  if (!dadosCliente) {
    return (
      <div className="p-6 text-center text-lg font-medium">
        Nenhum dado encontrado.
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Evolução de {dadosCliente.nome}
      </h1>

      <div className="bg-white shadow p-4 rounded-md mb-6">
        <p><strong>Idade:</strong> {dadosCliente.idade}</p>
        <p><strong>Peso atual:</strong> {dadosCliente.peso} kg</p>
        <p><strong>% Gordura:</strong> {dadosCliente.gordura}</p>
      </div>

      <h2 className="text-xl font-semibold mb-2">Histórico:</h2>

      <div className="bg-white shadow p-4 rounded-md">
        {dadosCliente.evolucao.map((evo, index) => (
          <div key={index} className="border-b py-2">
            <p><strong>Data:</strong> {evo.data}</p>
            <p><strong>Peso:</strong> {evo.peso} kg</p>
            <p><strong>Gordura:</strong> {evo.gordura}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
