"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";

export function DeleteAccountBtn() {
  const [isConfirming, setIsConfirming] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/user/delete", { method: "DELETE" });
      if (res.ok) {
        await signOut({ callbackUrl: "/" });
      } else {
        alert("Algo salió mal al intentar eliminar la cuenta.");
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión.");
    } finally {
      setLoading(false);
    }
  };

  if (isConfirming) {
    return (
      <div className="flex flex-col gap-4 p-6 bg-red-950/30 border border-red-500/30 rounded-2xl animate-in fade-in zoom-in duration-300">
        <p className="text-white font-bold text-sm">¿Estás seguro de eliminar el acceso neural permanentemente?</p>
        <div className="flex gap-4">
          <button
            onClick={() => setIsConfirming(false)}
            className="flex-1 px-4 py-2 bg-surface-container border border-outline-variant/20 rounded-lg text-xs font-bold text-white hover:bg-surface-container-high transition-all"
          >
            Cancelar
          </button>
          <button
            onClick={handleDelete}
            disabled={loading}
            className="flex-1 px-4 py-2 bg-red-600 text-on-error rounded-lg text-xs font-black shadow-lg shadow-red-900/40 hover:bg-red-500 transition-all active:scale-95 disabled:opacity-50"
          >
            {loading ? "Desactivando..." : "SÍ, ELIMINAR"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => setIsConfirming(true)}
      className="px-6 py-2 bg-red-600/10 border border-red-500/20 text-red-500 rounded-lg font-bold hover:bg-red-600/20 transition-all flex items-center gap-2 text-sm"
    >
      <span className="material-symbols-outlined text-[18px]">person_remove</span> Eliminar Cuenta
    </button>
  );
}
