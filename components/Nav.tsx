import Link from "next/link";

export function Nav() {
  return (
    <nav className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center gap-6 px-4 py-3">
        <Link href="/" className="font-semibold text-zinc-100">DB Learn</Link>
        <Link href="/modules" className="text-sm text-zinc-400 hover:text-zinc-200">Módulos</Link>
        <Link href="/quiz" className="text-sm text-zinc-400 hover:text-zinc-200">Quiz</Link>
        <Link href="/dashboard" className="text-sm text-zinc-400 hover:text-zinc-200">Dashboard</Link>
      </div>
    </nav>
  );
}
