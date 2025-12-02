"use client";

import { useState, useEffect } from "react";

// Impede erro de pre-render no Netlify
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function BodyScanPage() {
  const [loading, setLoading] = useState(true);
  const [dados, setDados] = useState(null);

  useEffect(() => {
    async function carregar() {
      setLoading(true);

      // MOCK TEMPORÁRIO
      const mock = {
        nome: "Cliente Exemplo",
        peso: "72 kg",
        gordura: "22%",
        musculos: "35%",
        hidratacao: "58%",
      };

      setTimeout(() => {
        setDados(mock);
        setLoading(false);
      }, 800);
    }

    carregar();
  }, []);

  if (loading) return <p style={{ padding: 20 }}>Carregando dados…</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Body Scan</h1>

      <p><strong>Nome:</strong> {dados.nome}</p>
      <p><strong>Peso:</strong> {dados.peso}</p>
      <p><strong>% Gordura:</strong> {dados.gordura}</p>
      <p><strong>Massa Muscular:</strong> {dados.musculos}</p>
      <p><strong>Hidratação:</strong> {dados.hidratacao}</p>
    </div>
  );
}
