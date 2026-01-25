import { X, ShieldAlert } from "lucide-react";

interface ModalErrorProps {
  title: string;
  description?: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ModalError({
  title,
  description,
  isOpen,
  onClose,
}: ModalErrorProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"></div>

      <div className="relative w-full max-w-sm text-left rounded-2xl bg-slate-900/90 border border-white/10 p-6 shadow-2xl transition-all animate-in zoom-in-95 duration-300">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500 rounded-full opacity-20 blur-3xl"></div>
        <button
          className="absolute right-4 top-4 text-slate-400 hover:text-white transition-colors"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        <div className="flex flex-col items-center text-center relative z-10">
          <ShieldAlert size={50} className="text-white mb-2" />
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-sm text-slate-300 mb-6 leading-relaxed">
            {description ||
              "Непредвиденная ошибка, пожалуйста повторите попытку."}
          </p>

          <button
            onClick={onClose}
            className="w-full rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-500/20 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all active:scale-[0.98]"
          >
            Понятно
          </button>
        </div>
      </div>
    </div>
  );
}
