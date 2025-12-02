"use client";

import { useState, useEffect } from "react";

// Impede erros de pre-render no Netlify
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

// Desabilita qualquer pré-render
export const revalidate = 0;

export default function BodyScanPage() {
  const [loading, setLoading] = useState(true);
  const [dados, setDados] = useState(null);

  useEffect(() => {
    async function carregar() {
      setLoading(true);

      // MOCK TEMPORÁRIO — ajuste depois quando conectar API
      const dadosMock = {
        peso: "72kg",
        gordura: "18%",
        musculo: "41%",
        agua: "55%",
        metabolismo: "1650 kcal",
      };

      setTimeout(() => {
        setDados(dadosMock);
        setLoading(false);
      }, 800);
    }

    carregar();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Carregando Body Scan...</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Body Scan</h1>

      <div style={{ marginTop: 20 }}>
        <p><strong>Peso:</strong> {dados.peso}</p>
        <p><strong>Gordura:</strong> {dados.gordura}</p>
        <p><strong>Músculo:</strong> {dados.musculo}</p>
        <p><strong>Água:</strong> {dados.agua}</p>
        <p><strong>Metabolismo:</strong> {dados.metabolismo}</p>
      </div>
    </div>
  );
}
