"use client";

import { useState } from "react";
import { Search, UserPlus, Filter } from "lucide-react";

export default function ClientesPage() {
  const [busca, setBusca] = useState("");

  // Lista inicial fictícia (pode ser integrada ao banco no futuro)
  const clientes = [
    { nome: "Fernanda Lopes", email: "fernanda@gmail.com", telefone: "(17) 99122-3344", status: "Ativo" },
    { nome: "Camila Martins", email: "camila@hotmail.com", telefone: "(17) 99788-1122", status: "Inativo" },
    { nome: "João Ricardo", email: "joaoricardo@gmail.com", telefone: "(17) 99244-5566", status: "Ativo" }
  ];

  const filtrados = clientes.filter(c =>
    c.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-lg w-full max-w-md">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Buscar clientes..."
            value={busca}
            onChange={e => setBusca(e.target.value)}
            className="bg-transparent outline-none w-full text-gray-700"
          />
        </div>

        <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg shadow transition">
          <UserPlus size={18} />
          Novo Cliente
        </button>
      </div>

      {/* Tabela */}
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full border-collapse">
          <thead className="bg-purple-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Nome</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">E-mail</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Telefone</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
            </tr>
          </thead>

          <tbody>
            {filtrados.map((c, index) => (
              <tr key={index} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 border-t">{c.nome}</td>
                <td className="px-4 py-3 border-t">{c.email}</td>
                <td className="px-4 py-3 border-t">{c.telefone}</td>
                <td className="px-4 py-3 border-t">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      c.status === "Ativo"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}

            {filtrados.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  Nenhum cliente encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
