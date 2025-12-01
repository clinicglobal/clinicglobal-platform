import Cards from "./components/Cards";

export default function DashboardPage() {
  return (
    <div className="space-y-10">

      {/* CARDS PREMIUM */}
      <Cards />

      {/* EM BREVE: GRÁFICOS, TABELAS, RESUMOS */}
      <div className="text-gray-500 text-center mt-20">
        Gráficos Premium serão carregados aqui…
      </div>

    </div>
  );
}
