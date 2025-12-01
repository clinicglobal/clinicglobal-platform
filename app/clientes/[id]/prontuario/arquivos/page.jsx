"use client";

import Link from "next/link";
import {
  User,
  FileText,
  MessageSquare,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";

export default function PerfilCliente({ params }) {
  const { id } = params;

  // MOCK TEMPORÁRIO — será substituído pelo Supabase no final
  const cliente = {
    id,
    nome: "Cliente Exemplo",
    status: "Ativa",
    proximaSessao: "15/01/2026",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 p-6">
      {/* VOLTAR */}
      <Link href="/clientes" className="flex items-center text-purple-700 mb-6">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Voltar para clientes
      </Link>

      {/* CABEÇALHO DO CLIENTE */}
      <div className="bg-white shadow-lg rounded-2xl p-6 border border-purple-100">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center">
            <User className="w-8 h-8" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">{cliente.nome}</h1>
            <p className="text-gray-600">
              Status:{" "}
              <span className="font-semibold text-green-600">
                {cliente.status}
              </span>
            </p>
            <p className="text-gray-600">
              Próxima sessão:{" "}
              <span className="font-semibold text-purple-700">
                {cliente.proximaSessao}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* MENU PREMIUM */}
      <div className="mt-8 space-y-4">

        {/* Prontuário Inteligente */}
        <Link
          href={`/clientes/${id}/prontuario`}
          className="block bg-white p-5 rounded-xl shadow-md border border-purple-100 hover:shadow-xl transition"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <FileText className="w-7 h-7 text-purple-700" />
              <div>
                <h2 className="text-lg font-semibold">Prontuário Inteligente</h2>
                <p className="text-sm text-gray-600">
                  Histórico, gravação automática, arquivos e evolução.
                </p>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 text-purple-500" />
          </div>
        </Link>

        {/* Evolução Facial / Corporal */}
        <Link
          href={`/evolucao/${id}`}
          className="block bg-white p-5 rounded-xl shadow-md border border-purple-100 hover:shadow-xl transition"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <MessageSquare className="w-7 h-7 text-purple-700" />
              <div>
                <h2 className="text-lg font-semibold">Evolução do Cliente</h2>
                <p className="text-sm text-gray-600">
                  Antes e depois, fotos, anotações e acompanhamento profissional.
                </p>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 text-purple-500" />
          </div>
        </Link>

        {/* Protocolos Inteligentes */}
        <Link
          href={`/protocolos`}
          className="block bg-white p-5 rounded-xl shadow-md border border-purple-100 hover:shadow-xl transition"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <FileText className="w-7 h-7 text-purple-700" />
              <div>
                <h2 className="text-lg font-semibold">Protocolos Inteligentes</h2>
                <p className="text-sm text-gray-600">
                  Sugestões automáticas baseadas nas queixas e avaliações.
                </p>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 text-purple-500" />
          </div>
        </Link>
      </div>
    </div>
  );
}
