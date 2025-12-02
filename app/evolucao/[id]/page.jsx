"use client";

import { useState, useEffect } from "react";

// Impede falha no build do Netlify para rotas dinâmicas
export function generateStaticParams() {
  return [];
}

export const dynamic = "force-dynamic";

export default function EvolucaoPage({ params }) {
  const { id } = params;

  const [loading, setLoading] = useState(true);
  const [dadosCliente, setDadosCliente] = useState(null);

  useEffect(() => {
    const buscarDados = async () => {
      setLoading(true);

      // MOCK TEMPORÁRIO – depois colocamos API real
      const clienteMock = {
        id,
        nome: "Cliente Exemplo",
        peso: "72kg",
        evolucao: [
          "Redução de medidas",
          "Melhora da firmeza da pele",
          "Aumento de massa magra",
        ],
      };

      setTimeout(() => {
        setDadosCliente(clienteMock);
        setLoading(false);
      }, 600);
    };

    buscarDados();
  }, [id]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Evolução do Cliente</h1>
      <p><b>ID do cliente:</b> {id}</p>

      {loading && <p>Carregando dados...</p>}

      {!loading && dadosCliente && (
        <div>
          <h2>{dadosCliente.nome}</h2>
          <p><b>Peso:</b> {dadosCliente.peso}</p>

          <h3>Evoluções:</h3>
          <ul>
            {dadosCliente.evolucao.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
