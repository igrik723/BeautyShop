import { Link } from "react-router-dom";
import { House } from 'lucide-react'

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-800 to-purple-900 flex flex-col items-center justify-center text-white p-4 font-sans relative overflow-hidden">
      <div className="absolute top-0 -left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-10 animate-blob mix-blend-screen filter blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500 rounded-full opacity-10 animate-blob mix-blend-screen filter blur-3xl animation-delay-2000"></div>
      <div className="absolute bottom-0 -right-1/4 w-80 h-80 bg-pink-500 rounded-full opacity-10 animate-blob mix-blend-screen filter blur-3xl animation-delay-4000"></div>

      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-8xl md:text-9xl font-extrabold text-indigo-300 drop-shadow-lg mb-4 leading-none">
          404
        </h1>
        <p className="text-4xl md:text-5xl font-bold text-white mb-6">
          Страница не найдена
        </p>
        <Link
          className="inline-flex gap-2 items-center justify-center px-8 py-4 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 group"
          to="/"
        >
          Вернуться на главную <House size={25}/>
        </Link>
      </div>
    </div>
  );
}
