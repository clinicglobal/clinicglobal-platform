"use client";

import { useState } from "react";
import { Search, PlusCircle, User, Star, Filter } from "lucide-react";

const clientesMock = [
  { id: 1, nome: "Milena Santos", status: "VIP", telefone: "(14) 99999-0000" },
  { id: 2, nome: "Larissa Almeida", status: "Nova", telefone: "(14) 98888-1111" },
  { id: 3, nome: "Patrícia Moreira", status: "Em tratamento", telefone: "(14) 97777-2222" },
];

export default function Clientes() {
  const [busca, setBusca] = useState("");

  const filtrados = clientesMock.filter((c) =>
    c.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf7f7] to-[#ece9e9] p-6">
      <h1 className="text-3xl font-bold text-[#6A3EA1] mb-6">
        Clientes
      </h1>

      {/* Barra de busca */}
      <div className="mb-6 flex items-center gap-3 bg-white shadow-md rounded-2xl p-3">
        <Search className="text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Buscar cliente por nome..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full outline-none text-gray-700 text-sm"
        />
      </div>

      {/* Filtros */}
      <div className="flex gap-3 mb-6">
        <button className="px-4 py-2 bg-[#6A3EA1] text-white text-xs rounded-full shadow">
          Todos
        </button>
        <button className="px-4 py-2 bg-white text-[#6A3EA1] text-xs rounded-full shadow flex items-center gap-1">
          <Star size={14} /> VIP
        </button>
        <button className="px-4 py-2 bg-white text-[#6A3EA1] text-xs rounded-full shadow">
          Em tratamento
        </button>
        <button className="px-4 py-2 bg-white text-[#6A3EA1] text-xs rounded-full shadow">
          Novos
        </button>
      </div>

      {/* Lista de clientes */}
      <div className="grid gap-4">
        {filtrados.map((c) => (
          <a
            key={c.id}
            href={`/clientes/perfil?id=${c.id}`}
            className="bg-white p-4 rounded-2xl shadow hover:scale-[1.01] transition flex justify-between items-center"
          >
            <div className="flex items-center gap-3">
              <div className="bg-[#6A3EA1]/10 p-3 rounded-full">
                <User className="text-[#6A3EA1]" size={22} />
              </div>
              <div>
                <p className="font-semibold text-gray-800">{c.nome}</p>
                <p className="text-xs text-gray-500">{c.telefone}</p>
              </div>
            </div>

            {c.status === "VIP" && (
              <span className="px-3 py-1 bg-yellow-200 text-yellow-800 text-xs rounded-full">
                VIP ⭐
              </span>
            )}

            {c.status === "Em tratamento" && (
              <span className="px-3 py-1 bg-purple-200 text-purple-800 text-xs rounded-full">
                Em tratamento
              </span>
            )}

            {c.status === "Nova" && (
              <span className="px-3 py-1 bg-blue-200 text-blue-800 text-xs rounded-full">
                Nova
              </span>
            )}
          </a>
        ))}
      </div>

      {/* Botão adicionar cliente */}
      <a
        href="/clientes/perfil"
        className="fixed bottom-6 right-6 bg-[#6A3EA1] text-white p-4 rounded-full shadow-xl hover:scale-105 transition"
      >
        <PlusCircle size={28} />
      </a>
    </div>
  );
}
