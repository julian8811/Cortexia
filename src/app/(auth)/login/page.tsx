"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Credenciales inválidas.");
    } else {
      router.push("/tools");
      router.refresh();
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-950">
      <div className="w-full max-w-md rounded-xl border border-slate-800 bg-slate-900/50 p-8 shadow-xl">
        <h1 className="mb-2 text-2xl font-bold text-white">Iniciar Sesión</h1>
        <p className="mb-6 text-slate-400">Accede a Cortexia para guardar tus herramientas favoritas.</p>
        
        {error && <div className="mb-4 text-sm text-red-500 bg-red-500/10 p-3 rounded">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-300">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 py-2 font-medium text-white hover:bg-indigo-500 transition-colors"
          >
            Ingresar
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          ¿No tienes cuenta? <Link href="/register" className="text-indigo-400 hover:text-indigo-300">Regístrate</Link>
        </p>
      </div>
    </div>
  );
}
