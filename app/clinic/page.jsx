"use client";

export default function ClinicPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-purple-50 px-6 py-10">
      <div className="max-w-3xl mx-auto text-center">
        {/* TÍTULO */}
        <h1 className="text-4xl font-bold text-purple-700 mb-3">
          BonitaDerme Clinic Pro
        </h1>

        <p className="text-gray-600 text-lg mb-10">
          Plataforma Inteligente para Clínicas de Estética e Saúde
        </p>

        {/* CARD PRINCIPAL */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-purple-200">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">
            Seja bem-vinda, Dra. Aline ✨
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Esta é a página principal da sua plataforma.  
            Aqui você poderá adicionar:
            <br />✔️ Dashboard  
            <br />✔️ Agenda  
            <br />✔️ Gestão de Pacientes  
            <br />✔️ Protocolos  
            <br />✔️ Financeiro  
            <br />✔️ E muito mais…
          </p>

          {/* BOTÕES */}
          <div className="flex flex-col gap-4 mt-6">
            <a
              href="/avaliacao"
              className="w-full bg-purple-600 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-purple-700 transition"
            >
              Acessar Avaliação Facial
            </a>

            <a
              href="/"
              className="w-full bg-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-300 transition"
            >
              Voltar ao Início
            </a>
          </div>
        </div>

        {/* RODAPÉ */}
        <footer className="text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} BonitaDerme Clinic Global — Todos os direitos reservados.
        </footer>
      </div>
    </main>
  );
}
