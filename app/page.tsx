import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Aprende Fundamentos de BD</h1>
        <p className="mt-4 text-lg text-zinc-400">
          Entiende cómo los sistemas almacenan, organizan y gestionan datos.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link
            href="/modules"
            className="rounded-lg bg-emerald-600 px-6 py-2 font-medium text-white hover:bg-emerald-500"
          >
            Empezar
          </Link>
          <Link
            href="/modules"
            className="rounded-lg border border-zinc-600 px-6 py-2 font-medium hover:bg-zinc-800"
          >
            Ver Módulos
          </Link>
        </div>
      </section>

      <section className="mt-20 grid gap-6 sm:grid-cols-3">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-semibold">¿Qué es una BD?</h3>
          <p className="mt-2 text-sm text-zinc-400">
            Permite almacenar, organizar y gestionar grandes cantidades de datos de forma eficiente.
          </p>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-semibold">¿Por qué importan?</h3>
          <p className="mt-2 text-sm text-zinc-400">
            Apps web, sistemas empresariales y servicios digitales dependen de BD para operar.
          </p>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <h3 className="font-semibold">Datos en apps modernas</h3>
          <p className="mt-2 text-sm text-zinc-400">
            Usuarios, transacciones y registros se gestionan mediante bases de datos.
          </p>
        </div>
      </section>
    </main>
  );
}
