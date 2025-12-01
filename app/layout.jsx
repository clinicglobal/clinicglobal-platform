import "./globals.css";

export const metadata = {
  title: "BonitaDerme Clinic Global",
  description: "Sistema profissional de estética e saúde baseado em IA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="h-full">
      <body
        className="min-h-screen bg-gradient-to-b from-white to-purple-50 text-gray-800 
                   antialiased transition-all duration-300"
      >
        {children}
      </body>
    </html>
  );
}
