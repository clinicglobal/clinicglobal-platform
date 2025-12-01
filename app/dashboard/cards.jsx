export default function Cards() {
  const cards = [
    {
      title: "Faturamento do Mês",
      value: "R$ 12.480",
      description: "+18% este mês",
    },
    {
      title: "Clientes Cadastrados",
      value: "327",
      description: "+12 novos hoje",
    },
    {
      title: "Procedimentos Realizados",
      value: "89",
      description: "Semana atual",
    },
    {
      title: "Avaliações Faciais",
      value: "44",
      description: "Total no mês",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition"
        >
          <h3 className="text-gray-600 text-sm font-medium">{card.title}</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">{card.value}</p>
          <p className="text-purple-600 text-sm font-semibold mt-1">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}
