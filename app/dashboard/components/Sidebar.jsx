"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, FileText, BarChart3, Calendar, Settings } from "lucide-react";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Clientes", icon: Users, href: "/clientes" },
  { name: "Avaliações", icon: FileText, href: "/avaliacao" },
  { name: "Gráficos", icon: BarChart3, href: "/dashboard/graficos" },
  { name: "Agenda", icon: Calendar, href: "/agenda" },
  { name: "Configurações", icon: Settings, href: "/config" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col fixed h-full shadow-sm">
      <h1 className="text-2xl font-bold text-purple-600 mb-10 tracking-tight">
        Clinic Global
      </h1>

      <nav className="flex flex-col gap-2">
        {menu.map((item) => {
          const active = pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all 
                ${active ? "bg-purple-600 text-white shadow-md" : "text-gray-700 hover:bg-gray-100"}
              `}
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
