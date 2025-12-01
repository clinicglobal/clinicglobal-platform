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
          placeholder
