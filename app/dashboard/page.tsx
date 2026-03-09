"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";
import { modules } from "@/lib/modules";

export default function DashboardPage() {
  const completedModules = useStore((s) => s.completedModules);
  const quizScore = useStore((s) => s.quizScore);
  const progress = (completedModules.length / modules.length) * 100;

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl font-bold">Tu progreso</h1>

      <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <h3 className="font-semibold">Módulos completados</h3>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-emerald-600 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-zinc-400">
          {completedModules.length} / {modules.length}
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <h3 className="font-semibold">Quiz</h3>
        <p className="mt-2 text-2xl font-bold text-emerald-500">
          {quizScore !== null ? `${quizScore} / 5` : "—"}
        </p>
        {quizScore === null && (
          <Link href="/quiz" className="mt-2 inline-block text-sm text-emerald-500 hover:underline">
            Realizar quiz
          </Link>
        )}
      </div>

      <Link
        href="/modules"
        className="mt-8 inline-block rounded-lg border border-zinc-600 px-6 py-2 font-medium hover:bg-zinc-800"
      >
        Continuar aprendiendo
      </Link>
    </main>
  );
}
