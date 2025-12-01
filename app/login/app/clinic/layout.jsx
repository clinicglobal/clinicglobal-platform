export const metadata = {
  title: "BonitaDerme Clinic – Dashboard",
  description: "Painel premium da BonitaDerme Clinic Global",
};

export default function ClinicLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f8f5f9"
        }}
      >
        {children}
      </body>
    </html>
  );
}
