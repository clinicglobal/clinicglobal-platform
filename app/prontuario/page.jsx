"use client";

import { useState, useRef, useEffect } from "react";
import { Mic, Square, Save, FileText } from "lucide-react";

export default function ProntuarioIA() {
  const [gravando, setGravando] = useState(false);
  const [texto, setTexto] = useState("");
  const [gerando, setGerando] = useState(false);
  const [historico, setHistorico] = useState([]);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  // CARREGAR HISTÓRICO
  useEffect(() => {
    const saved = localStorage.getItem("prontuarios");
    if (saved) setHistorico(JSON.parse(saved));
  }, []);

  // INICIAR GRAVAÇÃO 🎙️
  const iniciarGravacao = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = (e) => chunksRef.current.push(e.data);

    mediaRecorderRef.current.onstop = gerarTextoIA;

    chunksRef.current = [];
    mediaRecorderRef.current.start();

    setGravando(true);
  };

  // PARAR GRAVAÇÃO 🟥
  const pararGravacao = () => {
    mediaRecorderRef.current.stop();
    setGravando(false);
  };

  // GERAR TEXTO COM IA ✨
  const gerarTextoIA = async () => {
    setGerando(true);

    const blob = new Blob(chunksRef.current, { type: "audio/webm" });
    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64Audio = reader.result.split(",")[1];

      // IA SIMULADA
      const textoGerado =
        "Resumo clínico:\n• Paciente relata dores na região X.\n• Observado: linhas, manchas, textura irregular.\n• Recomendado protocolo personalizado com foco em hidratação profunda e bioestimuladores.\n\nEste texto será substituído pela IA real depois.";

      setTexto(textoGerado);
      setGerando(false);
    };

    reader.readAsDataURL(blob);
  };

  // SALVAR PRONTUÁRIO 💾
  const salvarProntuario = () => {
    if (!texto.trim()) return;

    const novo = {
      id: Date.now(),
      conteudo: texto,
      data: new Date().toLocaleString(),
    };

    const atualizado = [novo, ...historico];
    setHistorico(atualizado);
    localStorage.setItem("prontuarios", JSON.stringify(atualizado));

    setTexto("");
    alert("Prontuário salvo com sucesso!");
  };

  return (
    <div className="space-y-6">

      {/* ÁREA DE GRAVAÇÃO */}
      <div className="bg-purple-100 border border-purple-300 p-5 rounded-xl">
        <h2 className="text-xl font-semibold mb-3 text-purple-700">
          Capturar relato da paciente (IA)
        </h2>

        {gravando ? (
          <button
            onClick={pararGravacao}
            className="bg-red-600 text-white px-6 py-3 rounded-xl flex items-center gap-2"
          >
            <Square size={20} /> Parar gravação
          </button>
        ) : (
          <button
            onClick={iniciarGravacao}
            className="bg-purple-600 text-white px-6 py-3 rounded-xl flex items-center gap-2"
          >
            <Mic size={20} /> Iniciar gravação
          </button>
        )}

        {gerando && (
          <p className="mt-3 text-purple-700 animate-pulse">
            Processando áudio… gerando texto com IA…
          </p>
        )}
      </div>

      {/* TEXTO GERADO */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Texto gerado pela IA
        </h3>
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          className="w-full min-h-[180px] p-4 border rounded-xl bg-white shadow"
          placeholder="O texto aparecerá aqui…"
        />
      </div>

      {/* BOTÃO SALVAR */}
      <button
        onClick={salvarProntuario}
        className="bg-green-600 text-white px-6 py-3 rounded-xl flex items-center gap-2"
      >
        <Save size={20} /> Salvar prontuário
      </button>

      {/* HISTÓRICO */}
      <div className="pt-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Histórico</h3>

        {historico.length === 0 && (
          <p className="text-gray-500">Nenhum prontuário salvo ainda.</p>
        )}

        <div className="space-y-4">
          {historico.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl p-4 shadow bg-white"
            >
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">{item.data}</span>
                <FileText className="text-purple-600" />
              </div>

              <p className="whitespace-pre-line mt-2">{item.conteudo}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
