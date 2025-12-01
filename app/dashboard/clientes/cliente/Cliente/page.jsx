'use client';

export default function PerfilCliente() {
  return (
    <div className="p-6">
      {/* TÍTULO */}
      <h1 className="text-2xl font-bold mb-4">Perfil do Cliente</h1>

      {/* DADOS PRINCIPAIS */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-3">Dados Principais</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-medium text-gray-700">Nome:</p>
            <p>Maria Souza</p>
          </div>

          <div>
            <p className="font-medium text-gray-700">Idade:</p>
            <p>29 anos</p>
          </div>

          <div>
            <p className="font-medium text-gray-700">Telefone:</p>
            <p>(11) 99999-0000</p>
          </div>

          <div>
            <p className="font-medium text-gray-700">Email:</p>
            <p>maria@gmail.com</p>
          </div>
        </div>
      </div>

      {/* DADOS DO PROCEDIMENTO */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-3">Informações do Procedimento</h2>

        <div className="space-y-2">
          <p><strong>Tratamento:</strong> Skinbooster</p>
          <p><strong>Data:</strong> 12/01/2025</p>
          <p><strong>Status:</strong> Concluído</p>
        </div>
      </div>
    </div>
  );
}
