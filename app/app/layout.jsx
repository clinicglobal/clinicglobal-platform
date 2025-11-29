export const metadata = {
  title: "ClinicGlobal",
  description: "Sistema instalado com sucesso!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ fontFamily: "Arial, sans-serif", padding: "40px" }}>
        {children}
      </body>
    </html>
  );
}
