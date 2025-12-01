export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white px-4">
      <div className="backdrop-blur-xl bg-white/40 border border-white/30 shadow-xl rounded-3xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          BonitaDerme <span className="text-purple-600">Global</span>
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Acesse sua conta e gerencie sua clínica
        </p>

        <form className="flex flex-col space-y-5">
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 
                       focus:ring-2 focus:ring-purple-400 outline-none"
          />

          <input
            type="password"
            placeholder="Sua senha"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 
                       focus:ring-2 focus:ring-purple-400 outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-purple-600 text-white font-semibold 
                       hover:bg-purple-700 transition-all duration-300 shadow-lg"
          >
            Entrar
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          © 2025 BonitaDerme Clinic Global
        </p>
      </div>
    </div>
  );
}
