import { LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";

export function NavBar() {
  const isAuth = false;
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 flex justify-center p-4">
      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-xl rounded-2xl w-full border border-white/30 flex items-center justify-between px-6 py-3">
        <div className="text-white font-bold">Y-POLI</div>

        <div className="flex gap-6 text text-indigo-100/80 text-sm">
          <span className="hover:text-white cursor-pointer">О нас</span>
          <span className="hover:text-white cursor-pointer">Услуги</span>
          <span className="hover:text-white cursor-pointer">Мастера</span>
        </div>
        {isAuth ? (
          <div className="flex items-center gap-3">
            <Link className="flex items-center gap-1" to="/profile">
              <User size={18} className="text-indigo-300" />
              <span className="text-sm text-purple-300 hover:text-white">
                Профиль
              </span>
            </Link>
            <button
              className="p-2 text-purple-300 hover:text-red-400 transition-colors"
              title="Выйти"
            >
              <LogOut size={20} />
            </button>
          </div>
        ) : (
          <Link
            to="/auth"
            className="py-2 px-4 bg-indigo-600 rounded-xl border border-indigo-500 shadow-3xl shadow-indigo text-purple-300 active:scale-95 hover:text-white hover:bg-indigo-500 transition-all duration-300"
          >
            <span>Войти</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
