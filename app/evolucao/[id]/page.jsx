"use client";

import { useState, useEffect } from "react";

export default function EvolucaoPage({ params }) {
  const { id } = params;

  const [loading, setLoading] = useState(true);
  const [dadosCliente, setDadosCliente] = useState(null);

  useEffect(() => {
    const buscarDados = async () => {
      setLoading(true);

      // MOCK — Depois conectar a um banco real
      const clienteMock = {
        id,
        nome: "Cliente Exemplo",
        idade: 32,
        peso: "65 kg",
        altura: "1.68 m",
        evolucao: [
          { data: "2024-01-01", peso: "66 kg", cintura: "72 cm" },
          { data: "2024-02-01", peso: "65 kg", cintura: "70 cm" },
        ],
      };

      setDadosCliente(clienteMock);
      setLoading(false);
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
      <h1 className="text-3xl font-bold mb-4">
        Evolução do Cliente: {dadosCliente.nome}
      </h1>

      <div className="bg-white shadow-md rounded-lg p-4">
        <p><strong>ID:</strong> {dadosCliente.id}</p>
        <p><strong>Idade:</strong> {dadosCliente.idade}</p>
        <p><strong>Peso atual:</strong> {dadosCliente.peso}</p>
        <p><strong>Altura:</strong> {dadosCliente.altura}</p>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Histórico</h2>

      <div className="bg-white shadow-md rounded-lg p-4">
        {dadosCliente.evolucao.map((item, index) => (
          <div key={index} className="border-b py-2">
            <p><strong>Data:</strong> {item.data}</p>
            <p><strong>Peso:</strong> {item.peso}</p>
            <p><strong>Cintura:</strong> {item.cintura}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
