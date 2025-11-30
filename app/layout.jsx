export const metadata = {
  title: "Clinic Global Platform",
  description: "Sistema Oficial da Clinic Global",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
