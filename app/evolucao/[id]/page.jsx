"use client";

import { useState, useEffect } from "react";

export default function EvolucaoPage({ params }) {
  const { id } = params;

  const [loading, setLoading] = useState(true);
  const [dadosCliente, setDadosCliente] = useState(null);

  useEffect(() => {
    // Simulação de busca dos dados
    const buscarDados = async () => {
      setLoading(true);

      // MOCK — Depois vamos conectar ao banco real
      const clienteMock = {
        id,
        nome: "Cliente Exemplo",
        idade: 32,
        ultimasAvaliacoes: [
          { data: "10/10/2024", peso: "62kg", gordura: "24%" },
          { data: "20/11/2024", peso: "60kg", gordura: "22%" }
        ]
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
        Carregando evolução...
      </div>
    );
  }

  if (!dadosCliente) {
    return (
      <div className="p-6 text-center text-lg font-medium">
        Nenhum dado encontrado.
