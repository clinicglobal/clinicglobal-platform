export default function NovoClientePage() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Cadastrar Novo Cliente</h1>

      <div className="bg-white shadow-lg rounded-xl p-6 space-y-4">

        <div className="flex flex-col">
          <label className="font-semibold mb-1">Nome Completo</label>
          <input
            type="text"
            className="border p-3 rounded-lg bg-gray-50"
            placeholder="Digite o nome do cliente"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1">Telefone</label>
          <input
            type="text"
            className="border p-3 rounded-lg bg-gray-50"
            placeholder="(00) 00000-0000"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1">E-mail</label>
          <input
            type="text"
            className="border p-3 rounded-lg bg-gray-50"
            placeholder="email@exemplo.com"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1">Data de Nascimento</label>
          <input
            type="date"
            className="border p-3 rounded-lg bg-gray-50"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1">Observações</label>
          <textarea
            rows="4"
            className="border p-3 rounded-lg bg-gray-50"
            placeholder="Anotações importantes sobre o cliente"
          ></textarea>
        </div>

        <button className="w-full bg-purple-600 hover:bg-purple-700 transition text-white font-bold p-3 rounded-lg">
          Salvar Cliente
        </button>
      </div>
    </div>
  );
}
