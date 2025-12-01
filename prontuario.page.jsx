"use client";

import { useState, useRef } from "react";
import { Mic, Square, Camera, Save, FileText, Loader2 } from "lucide-react";

export default function ProntuarioIA() {
  const [gravando, setGravando] = useState(false);
  const [texto, setTexto] = useState("");
  const [gerando, setGerando] = useState(false);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  // INICIAR GRAVAÇÃO 🔊
  const iniciarGravacao = async () => {
    setGravando(true);
    chunksRef.current = [];

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = (e) => {
      chunksRef.current.push(e.data);
    };

    mediaRecorderRef.current.onstop = async () => {
      const blob = new Blob(chunksRef.current, { type: "audio/webm" });
      transcreverAudio(blob);
    };

    mediaRecorderRef.current.start();
  };

  // PARAR GRAVAÇÃO 🛑
  const pararGravacao = () => {
    setGravando(false);
    mediaRecorderRef.current.stop();
  };

  // ENVIAR ÁUDIO PARA IA — TRANSCRIÇÃO 🎙️➡️🧠
  const transcreverAudio = async (blob) => {
    setGerando(true);

    // 🔥 Aqui entra a API da IA (OpenAI Whisper ou Gemini)
    // No deploy real, isso chama a API pelo backend
    setTimeout(() => {
      setTexto(
        (prev) =>
          prev +
          "\n[Transcrição inteligente do áudio adicionada automaticamente...]"
      );
      setGerando(false);
    }, 2300);
  };

  // GERAR PROTOCOLO SUGERIDO — IA ESTÉTICA ✨
  const gerarProtocolo = () => {
    setGerando(true);

    setTimeout(() => {
      setTexto(
        (prev) =>
          prev +
          `\n\n✨ **Protocolo sugerido pela IA BonitaDerme Clinic Pro:**\n
• Hidratação intensiva com Skinbooster (2 sessões)  
• Bioestimulador de colágeno — Radiesse 1,5ml  
• Laser Lavieen — 1 sessão  
• Manutenção mensal com enzimas personalizadas  
• Avaliação fotográfica a cada visita  
`
      );
      setGerando(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-zinc-300 dark:from-zinc-950 dark:to-zinc-900 p-6 text-zinc-900 dark:text-white">

      <div className="max-w-3xl mx-auto bg-white/20 dark:bg-black/30 backdrop-blur-xl shadow-2xl p-8 rounded-2xl border border-white/20">

        <h1 className="text-3xl font-bold mb-6 text-center">
          🩺 Prontuário Inteligente — BonitaDerme Clinic Pro
        </h1>

        {/* BOTÕES */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">

          {/* GRAVAR ÁUDIO */}
          {!gravando ? (
            <button
              onClick={iniciarGravacao}
              className="px-5 py-3 bg-purple-700 hover:bg-purple-600 text-white rounded-xl flex items-center gap-2 shadow-lg"
            >
              <Mic size={20} /> Iniciar Gravação
            </button>
          ) : (
            <button
              onClick={pararGravacao}
              className="px-5 py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl flex items-center gap-2 shadow-lg"
            >
              <Square size={20} /> Parar
            </button>
          )}

          {/* FOTO */}
          <button className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl flex items-center gap-2 shadow-lg">
            <Camera size={20} /> Adicionar Foto
          </button>

          {/* PROTOCOLO IA */}
          <button
            onClick={gerarProtocolo}
            className="px-5 py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl flex items-center gap-2 shadow-lg"
          >
            <FileText size={20} /> Gerar Protocolo IA
          </button>

          {/* SALVAR */}
          <button className="px-5 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl flex items-center gap-2 shadow-lg">
            <Save size={20} /> Salvar Prontuário
          </button>
        </div>

        {/* LOADING */}
        {gerando && (
          <div className="flex items-center gap-3 text-purple-500 mb-3 animate-pulse">
            <Loader2 className="animate-spin" />
            Processando com IA…
          </div>
        )}

        {/* ÁREA DE TEXTO */}
        <textarea
          className="w-full h-96 p-4 rounded-xl bg-white/50 dark:bg-black/40 backdrop-blur border border-zinc-300 dark:border-zinc-700 outline-none"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="O prontuário será preenchido automaticamente pela IA conforme você fala..."
        ></textarea>
      </div>
    </div>
  );
}
