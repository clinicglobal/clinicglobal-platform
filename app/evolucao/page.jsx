
"use client";

import { useState } from "react";
import {
  Upload,
  Calendar,
  Image as ImageIcon,
  Sparkles,
  Loader2,
} from "lucide-react";

export default function Evolucao() {
  const [fotoAntes, setFotoAntes] = useState(null);
  const [fotoDepois, setFotoDepois] = useState(null);
  const [descricaoIA, setDescricaoIA] = useState("");
  const [gerando, setGerando] = useState(false);
  const [observacoes, setObservacoes] = useState("");

  // UPLOAD DA FOTO "ANTES"
  const handleAntes = (e) => {
    const file = e.target.files[0];
    if (file) setFotoAntes(URL.createObjectURL(file));
  };

  // UPLOAD DA FOTO "DEPOIS"
  const handleDepois = (e) => {
    const file = e.target.files[0];
    if (file) setFotoDepois(URL.createObjectURL(file));
  };

  // IA GERA TEXTO PREMIUM DE EVOLUÇÃO
  const gerarDescricao = () => {
    setGerando(true);

    setTimeout(() => {
      setDescricaoIA(`
✨ *Análise de Evolução Gerada por IA – BonitaDerme Clinic Global*

A evolução apresentada demonstra uma resposta estética altamente positiva:

• Redução visível de edemas e retenção hídrica  
• Melhora significativa da textura e luminosidade da pele  
• Aumento da definição natural sem exageros  
• Harmonização facial progressiva  
• Resposta excelente aos protocolos aplicados  

📌 Observação profissional:  
Os resultados sugerem perfeita adesão do paciente ao plano estético. A evolução é contínua e deve permanecer sendo acompanhada com revisões periódicas.
      `);
      setGerando(false);
    }, 2200);
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 flex items-center gap-2">
        <Sparkles className="w-8 h-8 text-purple-500" />
        Evolução do Paciente – Timeline IA
      </h1>

      {/* UPLOAD DAS FOTOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* FOTO ANTES */}
        <div className="border p-4 rounded-2xl shadow">
          <h2 className="font-semibold mb-3 flex items-center gap-2">
            <ImageIcon className="w-5 h-5" />
            Foto Antes
          </h2>

          {fotoAntes ? (
            <img
              src={fotoAntes}
              className="rounded-xl border w-full"
              alt="Antes"
            />
          ) : (
            <label className="cursor-pointer border-dashed border-2 border-gray-300 p-6 rounded-xl flex flex-col items-center text-gray-500">
              <Upload className="w-8 h-8 mb-2" />
              Selecionar Foto
              <input type="file" className="hidden" onChange={handleAntes} />
            </label>
          )}
        </div>

        {/* FOTO DEPOIS */}
        <div className="border p-4 rounded-2xl shadow">
          <h2 className="font-semibold mb-3 flex items-center gap-2">
            <ImageIcon className="w-5 h-5" />
            Foto Depois
          </h2>

          {fotoDepois ? (
            <img
              src={fotoDepois}
              className="rounded-xl border w-full"
              alt="Depois"
            />
          ) : (
            <label className="cursor-pointer border-dashed border-2 border-gray-300 p-6 rounded-xl flex flex-col items-center text-gray-500">
              <Upload className="w-8 h-8 mb-2" />
              Selecionar Foto
              <input type="file" className="hidden" onChange={handleDepois} />
            </label>
          )}
        </div>
      </div>

      {/* BOTÃO GERAR IA */}
      <button
        onClick={gerarDescricao}
        disabled={gerando}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
      >
        {gerando ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> Gerando análise...
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5" /> Gerar Análise com IA
          </>
        )}
      </button>

      {/* RESULTADO DA IA */}
      {descricaoIA && (
        <div className="mt-8 p-6 bg-purple-50 border border-purple-200 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">✨ Análise da IA</h3>
          <p className="whitespace-pre-line leading-relaxed">{descricaoIA}</p>
        </div>
      )}

      {/* OBSERVAÇÕES PROFISSIONAIS */}
      <div className="mt-8">
        <h3 className="font-semibold mb-2 flex items-center gap-2">
          <Calendar className="w-5 h-5" /> Observações do Profissional
        </h3>
        <textarea
          className="w-full border rounded-xl p-4 h-32"
          value={observacoes}
          onChange={(e) => setObservacoes(e.target.value)}
          placeholder="Digite observações clínicas, detalhes da sessão, respostas do paciente..."
        ></textarea>
      </div>
    </div>
  );
}
