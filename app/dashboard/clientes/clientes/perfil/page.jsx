"use client";

import { useState, useEffect } from "react";

export default function PerfilClientePage({ params }) {
  const { id } = params;

  const [loading, setLoading] = useState(true);
  const [dadosCliente, setDadosCliente] = useState(null);

  useEffect(() => {
    async function buscarDados() {
      setLoading(true);

      // MOCK — substituir pelo Supabase depois
      const clienteMock = {
        id,
        nome: "Cliente Exemplo",
        idade: 28,
        peso: "58 kg",
        altura: "1.65 m",
        ultimaAvaliacao: "12/12/2024",
        objetivo: "Emagrecimento",
      };

      setTimeout(() => {
        setDadosCliente(clienteMock);
        setLoading(false);
      }, 800);
    }

    buscarDados();
  }, [id]);

  if (loading) {
    return (
      <div className="p-4 text-center text-gray-600">
        Carregando dados do cliente...
      </div>
    );
  }

  if (!dadosCliente) {
    return (
      <div className="p-4 text-center text-red-600">
        Cliente não encontrado.
      </div>
    );
  }

  return (
    <div className="p-4">
      {/* DADOS PRINCIPAIS */}
      <div className="bg-white shadow-md rounded-xl p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Dados do Cliente</h2>

        <p><strong>Nome:</strong> {dadosCliente.nome}</p>
        <p><strong>Idade:</strong> {dadosCliente.idade}</p>
        <p><strong>Peso:</strong> {dadosCliente.peso}</p>
        <p><strong>Altura:</strong> {dadosCliente.altura}</p>
        <p><strong>Objetivo:</strong> {dadosCliente.objetivo}</p>
        <p><strong>Última Avaliação:</strong> {dadosCliente.ultimaAvaliacao}</p>
      </div>

      {/* BOTÕES */}
      <div className="flex gap-4 mt-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Ver Evolução
        </button>

        <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
          Nova Avaliação
        </button>
      </div>
    </div>
  );
}
