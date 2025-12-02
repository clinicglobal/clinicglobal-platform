"use client";

import { useState, useEffect } from "react";

export const dynamic = "force-dynamic";

export default function EvolucaoPage({ params }) {
  const { id } = params;

  const [loading, setLoading] = useState(true);
  const [dadosCliente, setDadosCliente] = useState(null);

  useEffect(() => {
    const buscarDados = async () => {
      setLoading(true);

      // MOCK TEMPORÁRIO — depois vamos substituir pela API real
      const clienteMock = {
        id,
        nome: "Cliente Exemplo",
        peso: "72kg",
        evolucao: [
          { dia: "01/01", peso: "72kg" },
          { dia: "15/01", peso: "71kg" },
          { dia: "30/01", peso: "70kg" }
        ]
      };

      setDadosCliente(clienteMock);
      setLoading(false);
    };

    buscarDados();
  }, [id]);

  if (loading) {
    return <p>Carregando evolução...</p>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Evolução da Cliente</h1>
      <p><strong>ID:</strong> {dadosCliente.id}</p>
      <p><strong>Nome:</strong> {dadosCliente.nome}</p>
      <p><strong>Peso atual:</strong> {dadosCliente.peso}</p>

      <h2 style={{ marginTop: 20 }}>Histórico</h2>
      <ul>
        {dadosCliente.evolucao.map((item, index) => (
          <li key={index}>
            {item.dia}: {item.peso}
          </li>
        ))}
      </ul>
    </div>
  );
}
