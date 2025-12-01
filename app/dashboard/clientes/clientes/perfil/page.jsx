"use client";

import { Phone, Mail, Calendar, FileText, User } from "lucide-react";

export default function PerfilCliente() {
  const cliente = {
    nome: "Milena Santos",
    email: "milena@gmail.com",
    telefone: "(17) 99999-2222",
    nascimento: "15/02/1999",
    status: "Ativo",
    historico: [
      { data: "12/01/2025", procedimento: "Avaliação Facial" },
      { data: "05/01/2025", procedimento: "Skinbooster" },
      { data: "22/12/2024", procedimento: "Toxina Botulínica" },
    ],
  };

  return (
    <div className="p-8">

      {/* Título */}
      <h1 className="text-3xl font-bold mb-6">
        Perfil da Cliente
      </h1>

      {/* Card principal */}
      <div className="bg-white shadow rounded-xl p-6 mb-8">

        <div className="flex items-center gap-4 mb-4">
          <div className="bg-purple-200 text-purple-700 rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold">
            {cliente.nome[0]}
          </div>

          <div>
            <h2 className="text-2xl font-bold">{cliente.nome}</h2>
            <p className="text-sm text-gray-500">{cliente.email}</p>
          </div>
        </div>

        {/* Informações */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">

          <div className="p-4 bg-gray-50 rounded-lg border">
            <Phone size={20} />
            <p className="mt-1 text-gray-600">{cliente.telefone}</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border">
            <Calendar size={20} />
            <p className="mt-1 text-gray-600">{cliente.nascimento}</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border">
            <User size={20} />
            <p
              className={`mt-1 font-semibold ${
                cliente.status === "Ativo"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {cliente.status}
            </p>
          </div>
        </div>

        <button className="mt-6 bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-lg font-semibold">
          Gerar Laudo PDF
        </button>

      </div>

      {/* Histórico */}
      <div className="bg-white shadow rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4">Histórico de Procedimentos</h3>

        {cliente.historico.map((item, i) => (
          <div key={i} className="flex justify-between p-4 border-b">
            <span>{item.data}</span>
            <span className="font-medium text-purple-700">{item.procedimento}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
