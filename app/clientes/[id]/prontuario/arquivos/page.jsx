"use client";

import { useState } from "react";
import { Upload, File, ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

export default function ArquivosClientePage({ params }) {
  const { id } = params;

  // Mock temporário — depois vamos conectar ao Supabase
  const [arquivos, setArquivos] = useState([
    { id: 1, nome: "Avaliação Facial.pdf", tipo: "PDF" },
    { id: 2, nome: "Foto - Frente.jpg", tipo: "Imagem" },
  ]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const novoArquivo = {
      id: arquivos.length + 1,
      nome: file.name,
      tipo: file.type.includes("image") ? "Imagem" : "Documento",
    };

    setArquivos([...arquivos, novoArquivo]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-6">
      {/* Topo */}
      <div className="flex items-center gap-3 mb-6">
        <Link href={`/clientes/${id}/prontuario`}>
          <ArrowLeftCircle className="w-8 h-8 text-purple-700" />
        </Link>
        <h1 className="text-3xl font-bold text-purple-900">
          Arquivos do Cliente
        </h1>
      </div>

      {/* Upload */}
      <label className="flex items-center gap-3 cursor-pointer bg-purple-100 hover:bg-purple-200 p-4 rounded-xl border border-purple-300 mb-6">
        <Upload className="w-6 h-6 text-purple-700" />
        <span className="text-purple-900 font-semibold">
          Enviar novo arquivo
        </span>
        <input
          type="file"
          className="hidden"
          onChange={handleUpload}
        />
