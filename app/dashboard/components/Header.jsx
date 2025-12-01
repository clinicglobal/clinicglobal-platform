"use client";
import { BellIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="w-full h-20 bg-white shadow-sm flex items-center justify-between px-10">

      {/* TÍTULO DO PAINEL */}
      <h1 className="text-2xl font-semibold text-gray-800">
        Dashboard
      </h1>

      {/* ÁREA DIREITA */}
      <div className="flex items-center gap-6">

        {/* NOTIFICAÇÕES */}
        <button className="relative">
          <BellIcon className="h-7 w-7 text-gray-600 hover:text-purple-600 transition" />
          <span className="absolute top-0 right-0 w-3 h-3 bg-purple-600 rounded-full"></span>
        </button>

        {/* PERFIL */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col text-right leading-tight">
            <span className="font-semibold text-gray-800">Aline Norato</span>
            <span className="text-sm text-gray-500">Admin</span>
          </div>

          <img
            src="https://i.imgur.com/5cQZyP6.png"
            alt="perfil"
            className="w-12 h-12 rounded-full object-cover shadow"
          />
        </div>

      </div>
    </header>
  );
}
