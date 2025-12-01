"use client";

import { User, FileText, MessageSquare, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PerfilCliente({ params }) {
  const { id } = params;

  // Mock temporário — depois vamos conectar ao Supabase
  const cliente = {
    id,
    nome: "Cliente Exemplo",
    status: "Ativa",
    proximaSessao: "15/12/2025",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      
      <Link
        href="/clientes"
        className="inline-flex items-center gap-2 text-purple-700 font-semibold mb-6"
      >
        <ArrowLeft size={20} />
        Voltar
      </Link>

      <div className="bg-white shadow-lg rounded-2xl p-8 border-l-4 border-purple-600">
        <div className="flex items-center gap-6">
          <div className="bg-purple-100 p-6 rounded-full">
            <User size={40} className="text-purple-700" />
          </div>

          <div>
            <h1 className="text-3xl font-bold">{cliente.nome}</h1>
            <p className="text-gray-500">{cliente.status}</p>
            <p className="text-gray-600 mt-2">
              Próxima sessão: <strong>{cliente.proximaSessao}</strong>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          
          {/* Avaliação Facial */}
          <Link
            href={`/avaliacao/${cliente.id}`}
            className="bg-purple-600 hover:bg-purple-700 text-white p-6 rounded-xl shadow-lg font-semibold flex items-center justify-between transition"
          >
            Avaliação Facial Premium
            <FileText size={26} />
          </Link>

          {/* Avaliação Corporal */}
          <Link
            href={`/avaliacao-corporal/${cliente.id}`}
            className="bg-pink-500 hover:bg-pink-600 text-white p-6 rounded-xl shadow-lg font-semibold flex items-center justify-between transition"
          >
            Avaliação Corporal Premium
            <FileText size={26} />
          </Link>

          {/* Evolução */}
          <Link
            href={`/evolucao?id=${cliente.id}`}
            className="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-xl rounded-xl shadow-lg font-semibold flex items-center justify-between transition"
          >
            Evolução
            <MessageSquare size={26} />
          </Link>

          {/* Prontuário Inteligente */}
          <Link
            href={`/prontuario?id=${cliente.id}`}
            className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-xl shadow-lg font-semibold flex items-center justify-between transition"
          >
            Prontuário Inteligente (IA + Voz)
            <MessageSquare size={26} />
          </Link>

        </div>
      </div>
    </div>
  );
}
