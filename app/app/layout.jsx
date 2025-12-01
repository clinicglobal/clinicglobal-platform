export const metadata = {
  title: "ClinicGlobal Platform",
  description: "Sistema inteligente para clínicas de estética e saúde.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f4f5fb",
        }}
      >
        {children}
      </body>
    </html>
  );
}
