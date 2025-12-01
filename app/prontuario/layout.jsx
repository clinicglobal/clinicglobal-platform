export const metadata = {
  title: "Prontuário Inteligente | Clinic Global",
  description: "Registro completo com IA para clínicas de estética.",
};

export default function ProntuarioLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">
          Prontuário Inteligente (IA)
        </h1>

        {children}
      </div>
    </div>
  );
}
