export const metadata = {
  title: "ClinicGlobal",
  description: "Sistema Inteligente para Clínicas de Estética",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#fafafa" }}>
        {children}
      </body>
    </html>
  );
}
