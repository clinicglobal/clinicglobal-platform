import "./globals.css";

export const metadata = {
  title: "BonitaDerme Clinic Global",
  description: "Sistema Premium para Clínicas Estéticas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
