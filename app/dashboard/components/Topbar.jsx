"use client";

import { Bell, User } from "lucide-react";

export function Topbar() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
      <h2 className="text-xl font-semibold">Bem-vinda, Dra. Aline 💜</h2>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <Bell size={22} />
        </button>

        <div className="flex items-center gap-2 bg-purple-100 px-3 py-1 rounded-full">
          <User size={18} className="text-purple-700" />
          <span className="text-sm font-medium text-purple-700">
            Aline Norato
          </span>
        </div>
      </div>
    </header>
  );
}
