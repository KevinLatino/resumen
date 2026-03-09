"use client";

import Link from "next/link";
import { modules } from "@/lib/modules";
import { useStore } from "@/lib/store";

export default function ModulesPage() {
  const completedModules = useStore((s) => s.completedModules);

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl font-bold">Módulos</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {modules.map((m) => (
          <Link
            key={m.id}
            href={`/modules/${m.id}`}
            className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition hover:border-zinc-600 hover:bg-zinc-800/50"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium">{m.title}</span>
              {completedModules.includes(m.id) && (
                <span className="text-xs text-emerald-500">✓</span>
              )}
            </div>
            <p className="mt-2 text-sm text-zinc-400">{m.desc}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
