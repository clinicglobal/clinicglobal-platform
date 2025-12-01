"use client";

import { useState } from "react";
import { Search, UserPlus, Eye } from "lucide-react";
import Link from "next/link";

const clientesMock = [
  { id: 1, nome: "Milena Santos", status: "Ativa" },
  { id: 2, nome: "Larissa Almeida", status: "Em tratamento" },
  { id: 3, nome: "Patrícia Moreira", status: "Consulta agendada" },
];

export default function Clientes() {
  const [busca, setBusca] = useState("");

  const filtrados = clientesMock.filter((c) =>
    c.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">
        Clientes – Bonita Derme
      </h1>

      {/* Barra de busca */}
      <div className="flex items-center gap-4 w-full max-w-xl mb-6">
        <div className="flex items-center bg-white shadow-md px-4 py-2 rounded-xl w-full">
          <Search className="text-gray-400" size={22} />
          <input
            type="text"
            placeholder="Buscar cliente..."
            className="ml-2 outline-none w-full bg-transparent"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        {/* Botão adicionar novo */}
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-xl flex items-center gap-2 transition">
          <UserPlus size={20} />
          Novo Cliente
        </button>
      </div>

      {/* Lista */}
      <div className="grid gap-4">
        {filtrados.map((cliente) => (
          <div
            key={cliente.id}
            className="bg-white shadow-md rounded-xl p-5 flex justify-between items-center border-l-4 border-purple-600"
          >
            <div>
              <p className="text-xl font-semibold">{cliente.nome}</p>
              <p className="text-gray-500 text-sm">{cliente.status}</p>
            </div>

            <Link
              href={`/clientes/${cliente.id}`}
              className="flex items-center gap-2 bg-purple-100 hover:bg-purple-200 text-purple-700 px-4 py-2 rounded-lg font-medium transition"
            >
              <Eye size={18} />
              Ver Perfil
            </Link>
          </div>
        ))}

        {/* Caso não encontre nada */}
        {filtrados.length === 0 && (
          <p className="text-gray-500 italic">Nenhum cliente encontrado...</p>
        )}
      </div>
    </div>
  );
        }
