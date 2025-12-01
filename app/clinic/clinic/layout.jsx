export const metadata = {
  title: "Clinic | BonitaDerme Global",
  description: "Plataforma profissional da BonitaDerme Clinic",
};

export default function ClinicLayout({ children }) {
  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      {children}
    </div>
  );
}
