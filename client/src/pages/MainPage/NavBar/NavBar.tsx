import { LogOut, User, Menu, X, Scissors } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  const isAuth = false;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 flex justify-center p-4">
      <div className="w-full max-w-6xl relative">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center justify-between px-6 py-3 shadow-2xl">
          <Link to="/" className="flex items-center gap-2 group">
            <Scissors
              size={20}
              className="text-indigo-400 group-hover:rotate-12 transition-transform"
            />
            <div className="text-white font-bold tracking-tight">Y-POLI</div>
          </Link>

          {/* Desktop Меню (скрыто на мобилках) */}
          <div className="hidden sm:flex gap-8 text-indigo-100/80 text-sm font-medium">
            <Link to="/about" className="hover:text-white transition-colors">
              О нас
            </Link>
            <Link to="/services" className="hover:text-white transition-colors">
              Услуги
            </Link>
            <Link to="/masters" className="hover:text-white transition-colors">
              Мастера
            </Link>
          </div>

     
          <div className="flex items-center gap-4">
        
            <div className="hidden sm:block">
              {isAuth ? (
                <div className="flex items-center gap-3">
                  <Link className="flex items-center gap-1 group" to="/profile">
                    <User size={18} className="text-indigo-300" />
                    <span className="text-sm text-purple-200 group-hover:text-white">
                      Профиль
                    </span>
                  </Link>
                  <button className="text-purple-300 hover:text-red-400 transition-colors">
                    <LogOut size={20} />
                  </button>
                </div>
              ) : (
                <Link
                  to="/auth"
                  className="py-2 px-5 bg-indigo-600 rounded-xl border border-indigo-500 text-white text-sm font-semibold hover:bg-indigo-500 transition-all active:scale-95 shadow-lg shadow-indigo-500/20"
                >
                  Войти
                </Link>
              )}
            </div>


            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-indigo-100 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute top-20 left-0 right-0 bg-slate-900/95 backdrop-blur-2xl rounded-2xl border border-white/10 p-6 flex flex-col gap-6 md:hidden animate-fade-in animate-slide-in-top shadow-3xl">
            <Link
              onClick={() => setIsOpen(false)}
              to="/about"
              className="text-lg text-indigo-100 border-b border-white/5 pb-2"
            >
              О нас
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/services"
              className="text-lg text-indigo-100 border-b border-white/5 pb-2"
            >
              Услуги
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/masters"
              className="text-lg text-indigo-100 border-b border-white/5 pb-2"
            >
              Мастера
            </Link>

            {!isAuth && (
              <Link
                onClick={() => setIsOpen(false)}
                to="/auth"
                className="w-full py-3 bg-indigo-600 text-center rounded-xl font-bold"
              >
                Войти в кабинет
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
