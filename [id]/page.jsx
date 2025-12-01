"use client";

import {
  User,
  Calendar,
  Activity,
  FileText,
  Sparkles,
  ArrowLeft,
  Camera,
  ChevronRight,
  BookOpen,
  ClipboardList
} from "lucide-react";

import Link from "next/link";

export default function PerfilCliente({ params }) {
  const { id } = params;

  // Dados temporários (vamos conectar ao banco depois)
  const cliente = {
    id,
    nome: "Cliente Exemplo",
    status: "Ativa",
    proximaSessao: "15/12/2025",
    ultimaSessao: "22/11/2025",
    objetivo: "Rejuvenescimento facial + firmeza global",
    progresso: 68,
  };

  const linhaDoTempo = [
    { data: "22/11/2025", evento: "Sessão de skinbooster + LED", tipo: "procedimento" },
    { data: "10/11/2025", evento: "Body Scan completo", tipo: "scanner" },
    { data: "05/11/2025", evento: "Avaliação Facial Inteligente", tipo: "avaliacao" },
    { data: "01/11/2025", evento: "Criação de protocolo exclusivo", tipo: "protocolo" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf8fc] to-white p-6">
      
      {/* BOTÃO VOLTAR */}
      <Link
        href="/clientes"
        className="flex items-center gap-2 text-gray-600 mb-6"
      >
        <ArrowLeft size={20} /> Voltar
      </Link>

      {/* TÍTULO */}
      <h1 className="text-3xl font-bold text-[#6c1b7e] mb-2">
        {cliente.nome}
      </h1>
      <p className="text-gray-600 mb-6">ID #{cliente.id}</p>

      {/* STATUS */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-6">
        <p className="text-gray-500">Status</p>
        <p className="text-lg font-semibold text-green-600">{cliente.status}</p>

        <div className="mt-4 flex justify-between text-gray-600">
          <div>
            <p className="text-sm">Próxima sessão</p>
            <p className="font-medium">{cliente.proximaSessao}</p>
          </div>
          <div>
            <p className="text-sm">Última sessão</p>
            <p className="font-medium">{cliente.ultimaSessao}</p>
          </div>
        </div>
      </div>

      {/* ACESSOS RÁPIDOS */}
      <h2 className="text-xl font-bold text-[#6c1b7e] mb-3">
        Acessos rápidos
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-8">

        <Link
          href={`/avaliacao?id=${cliente.id}`}
          className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center hover:scale-105 transition"
        >
          <Sparkles size={28} className="text-[#6c1b7e]" />
          <p className="font-medium mt-2">Avaliação Facial</p>
        </Link>

        <Link
          href={`/avaliacao-corporal?id=${cliente.id}`}
          className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center hover:scale-105 transition"
        >
          <Activity size={28} className="text-[#6c1b7e]" />
          <p className="font-medium mt-2">Avaliação Corporal</p>
        </Link>

        <Link
          href={`/body-scan?id=${cliente.id}`}
          className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center hover:scale-105 transition"
        >
          <Camera size={28} className="text-[#6c1b7e]" />
          <p className="font-medium mt-2">Body Scan</p>
        </Link>

        <Link
          href={`/protocolos?id=${cliente.id}`}
          className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center hover:scale-105 transition"
        >
          <ClipboardList size={28} className="text-[#6c1b7e]" />
          <p className="font-medium mt-2">Protocolos</p>
        </Link>

        <Link
          href={`/prontuario?id=${cliente.id}`}
          className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center hover:scale-105 transition"
        >
          <FileText size={28} className="text-[#6c1b7e]" />
          <p className="font-medium mt-2">Prontuário</p>
        </Link>

        <Link
          href={`/evolucao?id=${cliente.id}`}
          className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center hover:scale-105 transition"
        >
          <BookOpen size={28} className="text-[#6c1b7e]" />
          <p className="font-medium mt-2">Evolução</p>
        </Link>

      </div>

      {/* LINHA DO TEMPO */}
      <h2 className="text-xl font-bold text-[#6c1b7e] mb-3">
        Linha do tempo
      </h2>

      <div className="space-y-3">
        {linhaDoTempo.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-sm p-4 rounded-xl flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-500">{item.data}</p>
              <p className="font-medium">{item.evento}</p>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
}
