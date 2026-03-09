"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { modules } from "@/lib/modules";
import { useStore } from "@/lib/store";

export default function ModulePage() {
  const params = useParams();
  const router = useRouter();
  const id = String(params.id);
  const module = modules.find((m) => m.id === id);
  const completeModule = useStore((s) => s.completeModule);

  if (!module) return <div className="p-8">Módulo no encontrado</div>;

  const handleComplete = () => {
    completeModule(id);
    router.push("/quiz");
  };

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <Link href="/modules" className="text-sm text-zinc-400 hover:text-zinc-200">
        ← Volver a módulos
      </Link>
      <h1 className="mt-4 text-2xl font-bold">{module.title}</h1>

      <article className="mt-6 space-y-4">
        {module.content.map((paragraph, i) => (
          <p key={i} className="leading-relaxed text-zinc-300">
            {paragraph}
          </p>
        ))}
      </article>

      {module.code && (
        <pre className="mt-8 overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-900 p-4 text-sm text-zinc-200">
          {module.code}
        </pre>
      )}

      <div className="mt-10 flex gap-4">
        <button
          onClick={handleComplete}
          className="rounded-lg bg-emerald-600 px-6 py-2 font-medium text-white hover:bg-emerald-500"
        >
          Marcar completado
        </button>
        <Link
          href="/quiz"
          className="rounded-lg border border-zinc-600 px-6 py-2 font-medium hover:bg-zinc-800"
        >
          Ir al Quiz
        </Link>
      </div>
    </main>
  );
}
