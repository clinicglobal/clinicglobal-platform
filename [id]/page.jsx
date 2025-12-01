"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Camera,
  Plus,
  ChevronRight,
  Image as ImageIcon,
} from "lucide-react";

export default function EvolucaoPage({ params }) {
  const { id } = params;

  // Dados temporários (vamos conectar ao banco depois)
  const evolucoes = [
    {
      data: "22/11/2025",
      titulo: "Sessão 03 – Skinbooster + LED",
      descricao: "Melhora visível de textura e brilho na pele.",
      fotoAntes: "/antes.png",
      fotoDepois: "/depois.png",
    },
    {
      data: "10/11/2025",
      titulo: "Sessão 02 – Bioestimulador",
      descricao: "Início do estímulo de colágeno profundo.",
      fotoAntes: "/antes.png",
      fotoDepois: "/depois.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white p-6">

      {/* Voltar */}
      <Link href={`/clientes/${id}`} className="flex items-center gap-2 text-gray-600 mb-6">
        <ArrowLeft size={20} /> Voltar ao Cliente
      </Link>

      <h1 className="text-3xl font-bold text-purple-700 mb-2">
        Evolução do Cliente #{id}
      </h1>
      <p className="text-gray-500 mb-6">
        Antes e depois • Sessões • Linha do tempo Premium
      </p>

      {/* Botão adicionar nova evolução */}
      <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl flex items-center gap-2 shadow-md mb-6">
        <Plus size={20} /> Registrar nova evolução
      </button>

      {/* LINHA DO TEMPO */}
      <div className="space-y-5">

        {evolucoes.map((item, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-purple-500"
          >
            <div className="flex justify-between items-center mb-3">
              <div>
                <p className="text-sm text-gray-500">{item.data}</p>
                <h2 className="text-xl font-semibold">{item.titulo}</h2>
              </div>
              <ChevronRight size={24} className="text-gray-400" />
            </div>

            <p className="text-gray-600 mb-4">{item.descricao}</p>

            {/* Fotos antes/depois */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border">
                <img src={item.fotoAntes} className="w-full object-cover" />
                <p className="text-center text-sm text-gray-500 py-2">Antes</p>
              </div>

              <div className="rounded-xl overflow-hidden border">
                <img src={item.fotoDepois} className="w-full object-cover" />
                <p className="text-center text-sm text-gray-500 py-2">Depois</p>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Botão exportar */}
      <button className="mt-8 bg-purple-100 text-purple-700 px-5 py-3 rounded-xl flex items-center gap-2 w-full justify-center hover:bg-purple-200 transition">
        <ImageIcon size={20} /> Exportar Evolução em PDF
      </button>

    </div>
  );
}
