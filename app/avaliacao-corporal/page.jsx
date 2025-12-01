"use client";

import { useState } from "react";
import { Sparkles, Scan, FileText, Loader2 } from "lucide-react";

export default function AvaliacaoCorporal() {
  const [formData, setFormData] = useState({
    idade: "",
    peso: "",
    altura: "",
    biotipo: "",
    gorduraLocalizada: "",
    flacidez: "",
    celulite: "",
    retencao: "",
    objetivo: "",
  });

  const [resultado, setResultado] = useState("");
  const [gerando, setGerando] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const gerarAvaliacao = async () => {
    setGerando(true);

    const prompt = `
    Sou uma IA especialista em estética corporal.
    Gere uma avaliação corporal extremamente completa, objetiva e profissional baseada nos dados:

    Idade: ${formData.idade}
    Peso: ${formData.peso}
    Altura: ${formData.altura}
    Biotipo: ${formData.biotipo}
    Gordura localizada: ${formData.gorduraLocalizada}
    Flacidez: ${formData.flacidez}
    Celulite: ${formData.celulite}
    Retenção: ${formData.retencao}
    Objetivo: ${formData.objetivo}

    Inclua:
    - Análise corporal completa
    - Identificação do biotipo metabólico
    - Graus de celulite / flacidez
    - Áreas prioritárias
    - Percentual estimado de gordura
    - Recomendações de tratamentos estéticos
    - Frequência semanal ideal
    - Sugestão de bioimpedância
    - Sugestão de dermocosméticos
    `;

    const resposta = "Avaliação gerada com sucesso (modelo IA será conectado depois).";

    setResultado(resposta);
    setGerando(false);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <Sparkles /> Avaliação Corporal Premium
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.keys(formData).map((campo) => (
          <div key={campo}>
            <label className="font-semibold capitalize">
              {campo.replace(/([A-Z])/g, " $1")}
            </label>
            <input
              type="text"
              name={campo}
              value={formData[campo]}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              placeholder="Digite aqui"
            />
          </div>
        ))}
      </div>

      <button
        onClick={gerarAvaliacao}
        className="bg-purple-600 text-white px-6 py-3 rounded-lg mt-4 flex items-center gap-2"
        disabled={gerando}
      >
        {gerando ? (
          <>
            <Loader2 className="animate-spin" /> Gerando avaliação...
          </>
        ) : (
          <>
            <Scan /> Gerar Avaliação Inteligente
          </>
        )}
      </button>

      {resultado && (
        <div className="mt-6 p-4 border rounded-lg bg-gray-50">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-2">
            <FileText /> Resultado da Avaliação
          </h2>
          <p className="whitespace-pre-wrap">{resultado}</p>
        </div>
      )}
    </div>
  );
}
