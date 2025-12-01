export const metadata = {
  title: "ClinicGlobal Platform",
  description: "Sistema Inteligente para Clínicas de Estética e Saúde",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ fontFamily: "Arial, sans-serif", padding: "0", margin: "0" }}>
        {children}
      </body>
    </html>
  );
}
