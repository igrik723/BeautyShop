import { useState } from "react";

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [isSmsSent, setIsSmsSent] = useState(false);

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-800 to-purple-900 flex flex-col items-center justify-center p-4 font-sans overflow-hidden">
      <div className="max-w-md w-full bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white border-opacity-20 text-white">
        <div className="text-center mb-8">
          <h2 className=" text-3xl font-bold text-indigo-300">
            {isLogin ? "С возвращение" : "Создать аккаунт"}
          </h2>
          <p className="text-purple-300 mt-2">
            {isLogin
              ? "Введите данные для входа"
              : "Заполните форму для регистрации"}
          </p>
        </div>

        <form className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-indigo-300">Имя и фамилия</label>
              <input
                className="w-full mt-2 px-4 py-2 text-slate-500 border border-purple-400 rounded-lg focus:ring-1 focus:ring-blue-400 focus:outline-none transition-all duration-200"
                type="text"
                placeholder="Иван Иванов"
              />
              <label className="block text-indigo-300 mt-2">
                Номер телефона
              </label>
              <input
                className="w-full mt-2 px-4 py-2 text-slate-500 border border-purple-400 rounded-lg focus:ring-1 focus:ring-blue-400 focus:outline-none transition-all duration-200"
                type="tel"
                placeholder="Номер телефона"
              />
            </div>
          )}
          <div>
            <label className="block text-indigo-300 mt-2">Email</label>
            <input
              className="w-full mt-2 px-4 py-2 text-slate-500 border border-purple-400 rounded-lg focus:ring-1 focus:ring-blue-400 ficus:outline-none transition-all duration-200"
              type="email"
              placeholder="mail@exampple.com"
            />
          </div>

          <div>
            <label className="block text-indigo-300 mt-2">Пароль</label>
            <input
              className="w-full mt-2 px-4 py-2 text-slate-500 border border-purple-400 rounded-lg focus:ring-1 focus:ring-blue-400 ficus:outline-none transition-all duration-200"
              type="password"
              placeholder="********"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-indigo-300 mt-2">
                Подтвердить пароль
              </label>
              <input
                className="w-full mt-2 px-4 py-2 text-slate-500 border border-purple-400 rounded-lg focus:ring-1 focus:ring-blue-400 ficus:outline-none transition-all duration-200"
                type="password"
                placeholder="********"
              />
            </div>
          )}
          <button className="w-full mt-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-bold transition-all transform active:scale-95 shadow-lg">
            {isLogin ? "Войти" : "Получить код"}
          </button>
        </form>

        <div className="mt-6 text-center border-r border-white bordere-opacite-10 pt-6">
          <button
            className="text-indigo-400 text-sm hover:border-b transition-all"
            onClick={toggleMode}
          >
            {isLogin
              ? "Нет аккаунта? Запегистрироваться"
              : "Уже есть аккаунт? Войти"}
          </button>
        </div>
      </div>
    </div>
  );
}
