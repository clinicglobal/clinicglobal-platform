export default function CardMetric({ title, value, color }) {
  return (
    <div
      className="rounded-3xl p-6 shadow-xl border backdrop-blur-xl bg-white/70
                 hover:scale-[1.03] transition-all cursor-pointer"
      style={{ borderColor: color }}
    >
      <p className="text-gray-600 text-sm">{title}</p>
      <h2 className="text-4xl font-bold mt-2" style={{ color }}>
        {value}
      </h2>
    </div>
  );
}
