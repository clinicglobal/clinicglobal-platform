"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Mic,
  Upload,
  FileText,
  Trash,
  Image as ImageIcon,
} from "lucide-react";
import Link from "next/link";

export default function ProntuarioPage({ params }) {
  const { id } = params;

  const [historico, setHistorico] = useState([]);
  const [gravando, setGravando] = useState(false);
  const [texto, setTexto] = useState("");

  let recognition;

  // ===== INICIAR GRAVAÇÃO =====
  const iniciarGravacao = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    recognition = new SpeechRecognition();
    recognition.lang = "pt-BR";
    recognition.interimResults = true;

    recognition.onresult = (e) => {
      const fala = Array.from(e.results)
        .map((r) => r[0].transcript)
        .join("");
      setTexto(fala);
    };

    recognition.start();
    setGravando(true);
  };

  // ===== PARAR GRAVAÇÃO =====
  const pararGravacao = () => {
    if (recognition) recognition.stop();
    setGravando(false);
  };

  // ===== SALVAR TEXTO =====
  const salvarTexto = () => {
    if (!texto.trim()) return;

    const novo = {
      id: Date.now(),
      tipo: "texto",
      conteudo: texto,
      data: new Date().toLocaleString("pt-BR"),
    };

    setHistorico([novo, ...historico]);
    setTexto("");
  };

  // ===== UPLOAD DE ARQUIVOS =====
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const novo = {
      id: Date.now(),
      tipo: "arquivo",
      nome: file.name,
      data: new Date().toLocaleString("pt-BR"),
    };

    setHistorico([novo, ...historico]);
  };

  // ===== APAGAR ITEM =====
  const deletar = (id) => {
    setHistorico(historico.filter((h) => h.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 p-6">
      {/* VOLTAR */}
      <Link
        href={`/clientes/${id}`}
        className="flex items-center text-purple-700 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Voltar
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Prontuário Inteligente
      </h1>

      {/* GRAVAÇÃO DE ÁUDIO */}
      <div className="bg-white p-5 shadow-lg rounded-xl border border-purple-100 mb-4">
        <h2 className="font-semibold mb-2 text-gray-800">
          Gravação de Áudio com Transcrição
        </h2>

        <div className="flex items-center gap-4">
          {!gravando ? (
            <button
              className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg"
              onClick={iniciarGravacao}
            >
              <Mic className="w-5 h-5" />
              Iniciar gravação
            </button>
          ) : (
            <button
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg"
              onClick={pararGravacao}
            >
              <Mic className="w-5 h-5" />
              Parar
            </button>
          )}

          <button
            onClick={salvarTexto}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Salvar texto
          </button>
        </div>

        <textarea
          rows="4"
          className="w-full mt-3 p-3 border rounded-lg"
          placeholder="O texto da gravação aparecerá aqui..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        ></textarea>
      </div>

      {/* UPLOADS */}
      <div className="bg-white p-5 shadow-lg rounded-xl border border-purple-100 mb-6">
        <h2 className="font-semibold mb-2 text-gray-800">Upload de Arquivos</h2>

        <label className="flex items-center gap-3 cursor-pointer bg-purple-100 border border-purple-200 p-3 rounded-lg hover:bg-purple-200 transition">
          <Upload className="w-6 h-6 text-purple-700" />
          <span className="text-purple-700 font-medium">
            Enviar foto, PDF ou arquivo
          </span>
          <input type="file" className="hidden" onChange={handleUpload} />
        </label>
      </div>

      {/* HISTÓRICO */}
      <h2 className="text-xl font-bold text-gray-900 mb-2">Registros</h2>

      <div className="space-y-4">
        {historico.length === 0 && (
          <p className="text-gray-600">Nenhum registro ainda.</p>
        )}

        {historico.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow border border-purple-100 flex justify-between items-center"
          >
            <div className="flex items-center gap-3">
              {item.tipo === "texto" && (
                <FileText className="w-6 h-6 text-purple-700" />
              )}

              {item.tipo === "arquivo" && (
                <ImageIcon className="w-6 h-6 text-purple-700" />
              )}

              <div>
                <p className="font-medium text-gray-900">
                  {item.tipo === "texto" ? "Anotação de áudio" : item.nome}
                </p>
                <p className="text-gray-500 text-sm">{item.data}</p>
              </div>
            </div>

            <button onClick={() => deletar(item.id)}>
              <Trash className="w-6 h-6 text-red-600" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
