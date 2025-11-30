export const metadata = {
  title: "ClinicGlobal Platform",
  description: "Sistema inteligente para clínicas de estética e saúde.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        style={{
          margin: 0,
          fontFamily: "'Poppins', sans-serif",
          backgroundColor: "#f8f8ff",
        }}
      >
        {children}
      </body>
    </html>
  );
}
