"use client";

import { useState } from "react";
import { User, Phone, Mail, MapPin, Calendar, FileText, CreditCard, PlusCircle, ChevronRight } from "lucide-react";

export default function PerfilCliente() {
  const [cliente] = useState({
    nome: "Maria Fernanda Silva",
    idade: 32,
    telefone: "(11) 98765-4321",
    email: "maria.fernanda@email.com",
    endereco: "Av. Brasil, 123 - Penápolis, SP",
    totalInvestido: 4820,
  });

  const historico = [
    { data: "12/01/2025", procedimento: "Harmonização Labial", valor: "R$ 890" },
    { data: "05/01/2025", procedimento: "Skinbooster", valor: "R$ 690" },
    { data: "22/12/2024", procedimento: "Bioestimulador", valor: "R$ 1.400" },
  ];

  const proximos = [
    { data: "28/01/2025", procedimento: "Retoque Labial", status: "Confirmado" },
    { data: "05/02/2025", procedimento: "Laser Facial", status: "Pendente" },
  ];

  const documentos = [
    { nome: "Termo Skinbooster.pdf" },
    { nome: "Avaliação Facial – 12.01.pdf" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-10">

      {/* HEADER */}
      <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Perfil do Cliente</h1>

        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-pink-200 flex items-center justify-center">
            <User size={36} className="text-pink-700" />
          </div>

          <div className="space-y-1">
            <p className="text-xl font-semibold">{cliente.nome}</p>
            <p className="text-gray-600 text-sm">{cliente.idade} anos</p>
          </div>
        </div>
      </div>

      {/* DADOS PRINCIPAIS */}
      <div className
