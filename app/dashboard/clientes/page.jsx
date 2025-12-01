"use client";

import { useState } from "react";
import { Search, UserPlus, Phone, Calendar, ChevronRight } from "lucide-react";

export default function Clientes() {
  const [search, setSearch] = useState("");

  const clientes = [
    { nome: "Milena Santos", telefone: "(17) 99999-2222", ultima: "12/01/2025", status: "Ativa" },
    { nome: "Carla Medeiros", telefone: "(17) 98888-4444", ultima: "09/01/2025", status: "Avaliação" },
    { nome: "Larissa Alves", telefone: "(17) 97777-6666", ultima: "05/01/2025", status: "Inativa" },
  ];

  const filtrados = clientes.filter((c) =>
    c.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      
      {/* Cabeçalho */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Clientes
        </h1>

        <button className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-lg shadow hover:bg-purple-700 transition">
          <UserPlus size={20} />
          Novo Cliente
        </button>
      </div>

      {/* Barra de busca */}
      <div className="flex items-center bg-white p-3 rounded-xl shadow mb-6">
        <Search className="text-gray-500" />
        <input
          type="text"
          placeholder="Buscar cliente..."
          className="ml-3 w-full outline-none text-gray-700"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Lista */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        {filtrados.map((c, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-5 border-b hover:bg-gray-50 transition"
          >
            {/* Nome */}
            <div>
              <p className="text-lg font-semibold text-gray-700">{c.nome}</p>
              <p className="text-sm flex items-center gap-1 text-gray-500">
                <Phone size={16} /> {c.telefone}
              </p>
            </div>

            {/* Última avaliação */}
            <div className="flex items-center gap-1 text-gray-500">
              <Calendar size={17} />
              <span>Última avaliação: {c.ultima}</span>
            </div>

            {/* Status */}
            <div
              className={`px-3 py-1 rounded-lg text-sm font-bold ${
                c.status === "Ativa"
                  ? "bg-green-100 text-green-700"
                  : c.status === "Avaliação"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {c.status}
            </div>

            {/* Acesse */}
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
              <ChevronRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
