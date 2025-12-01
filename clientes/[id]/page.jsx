"use client";

import { useState } from "react";
import {
  User,
  FileText,
  MessageSquare,
  Activity,
  ArrowLeft,
  ChevronRight,
  Image,
  Brain,
  Camera,
} from "lucide-react";
import Link from "next/link";

export default function PerfilCliente({ params }) {
  const { id } = params;

  // Mock inicial — depois vamos conectar ao Supabase
  const cliente = {
    id,
    nome: "Cliente Exemplo",
    idade: 42,
    foto: "/profile.png",
    status: "Ativa",
    proximaSessao: "15/12/2025",
    ultimosProcedimentos: ["Skinbooster", "Bioestimulador", "Botox"],
    objetivos: "Rejuvenescer e melhorar firmeza facial",
  };

  const [aba, setAba] = useState("perfil");

  const AbaBotao = ({ id, icon: Icone, titulo }) => (
    <button
      onClick={() => setAba(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl border 
        ${aba === id ? "bg-purple-600 text-white" : "border-gray-300"}`}
    >
      <Icone size={18} />
      {titulo}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-6">
      {/* voltar */}
      <Link
        href="/clientes"
        className="flex items-center gap-2 text-purple-700 font-semibold mb-4"
      >
        <ArrowLeft size={18} />
        Voltar
      </Link>

      {/* CARD DO CLIENTE */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
        <div className="flex items-center gap-4">
          <img
            src={cliente.foto}
            className="w-20 h-20 rounded-full object-cover border-4 border-purple-300"
          />

          <div>
            <h1 className="text-3xl font-bold">{cliente.nome}</h1>
            <p className="text-gray-600">ID: {cliente.id}</p>
            <p className="text-purple-700 font-semibold">
              Status: {cliente.status}
            </p>
          </div>
        </div>

        <div className="mt-4 flex gap-3 flex-wrap">
          <AbaBotao id="perfil" icon={User} titulo="Perfil" />
          <AbaBotao id="avaliacoes" icon={FileText} titulo="Avaliações" />
          <AbaBotao id="evolucao" icon={Activity} titulo="Evolução" />
          <AbaBotao id="prontuario" icon={MessageSquare} titulo="Prontuário" />
          <AbaBotao id="scan" icon={Camera} titulo="Body Scan" />
          <AbaBotao id="ia" icon={Brain} titulo="Recomendações de IA" />
        </div>
      </div>

      {/* CONTEÚDO DAS ABAS */}
      <div className="bg-white rounded-2xl shadow-xl p-6">
        {aba === "perfil" && <PerfilDados cliente={cliente} />}
        {aba === "avaliacoes" && <AvaliacaoModulo />}
        {aba === "evolucao" && <EvolucaoModulo />}
        {aba === "prontuario" && <ProntuarioInteligente />}
        {aba === "scan" && <BodyScanModulo />}
        {aba === "ia" && <IAModulo cliente={cliente} />}
      </div>
    </div>
  );
}

// ===========================
// 🔹 COMPONENTES DAS ABAS
// ===========================

function PerfilDados({ cliente }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Informações do Cliente</h2>

      <div className="grid grid-cols-2 gap-4">
        <p><b>Idade:</b> {cliente.idade}</p>
        <p><b>Próxima sessão:</b> {cliente.proximaSessao}</p>
        <p><b>Status:</b> {cliente.status}</p>
        <p><b>Objetivos:</b> {cliente.objetivos}</p>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Últimos Procedimentos</h3>
        <ul className="list-disc list-inside text-gray-700">
          {cliente.ultimosProcedimentos.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function AvaliacaoModulo() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Avaliações do Cliente</h2>
      <p>🔍 Facial, corporal, bioimpedância, IA — tudo integrado.</p>

      <Link
        href="/avaliacao"
        className="mt-4 flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-xl"
      >
        <FileText size={18} /> Fazer Nova Avaliação
      </Link>
    </div>
  );
}

function EvolucaoModulo() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Evolução</h2>
      <p>📅 Registros de progresso, fotos comparativas e gráficos.</p>
    </div>
  );
}

function ProntuarioInteligente() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Prontuário Inteligente</h2>
      <p>
        🧠 O sistema transcreve a fala do profissional e organiza tudo em texto,
        protocolo sugerido e condutas.
      </p>

      <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-xl">
        Iniciar Gravação de Voz
      </button>
    </div>
  );
}

function BodyScanModulo() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Body Scan 3D</h2>
      <p>📸 Captura, compara e analisa automaticamente.</p>

      <Link
        href="/body-scan"
        className="flex items-center mt-4 gap-2 bg-purple-600 text-white px-4 py-2 rounded-xl"
      >
        <Camera size={18} /> Iniciar Body Scan
      </Link>
    </div>
  );
}

function IAModulo({ cliente }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Recomendações Inteligentes</h2>
      <p>
        🤖 Protocolos personalizados gerados automaticamente para{" "}
        <b>{cliente.nome}</b>.
      </p>

      <div className="mt-4 p-4 rounded-xl bg-purple-50 border border-purple-200">
        <p>✨ Hidratação profunda | Skinbooster</p>
        <p>✨ Estímulo de colágeno | Bioestimulador</p>
        <p>✨ Redução de manchas | Laser + tópico clareador</p>
      </div>
    </div>
  );
}
