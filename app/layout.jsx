import "./globals.css";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";

export const metadata = {
  title: "BonitaDerme Clinic Global",
  description: "Sistema Premium para Clínicas Estéticas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900">
        <div className="flex h-screen w-full">
          {/* Sidebar fixa */}
          <Sidebar />

          {/* Conteúdo principal */}
          <div className="flex flex-col flex-1 overflow-hidden">
            <Topbar />

            {/* Conteúdo das páginas */}
            <main className="p-6 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
