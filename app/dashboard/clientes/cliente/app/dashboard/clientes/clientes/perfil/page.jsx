"use client";

export default function ClientePerfil() {
  return (
    <div className="dados-principais flex flex-col gap-4 p-4 bg-white rounded-xl shadow-md">
      {/* DADOS PRINCIPAIS */}
      <h2 className="text-xl font-bold text-gray-800">Dados do Cliente</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-semibold text-gray-600">Nome</p>
          <p className="text-gray-800">Carregando...</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-600">Idade</p>
          <p className="text-gray-800">Carregando...</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-600">Telefone</p>
          <p className="text-gray-800">Carregando...</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-600">Status</p>
          <p className="text-gray-800">Ativo</p>
        </div>
      </div>

      {/* NOTAS */}
      <div className="mt-6">
        <h3 className="text-lg font-bold text-gray-800">Observações</h3>
        <p className="text-gray-700">Nenhuma anotação adicionada ainda.</p>
      </div>
    </div>
  );
}
