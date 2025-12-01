export const metadata = {
  title: "BonitaDerme Clinic",
  description: "Sistema profissional da BonitaDerme Clinic Pro",
};

export default function ClinicLayout({ children }) {
  return (
    <section className="min-h-screen bg-white">
      {children}
    </section>
  );
}
