export const metadata = {
  title: "Avaliação Facial • BonitaDerme",
};

export default function AvaliacaoLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        {children}
      </div>
    </div>
  );
}
