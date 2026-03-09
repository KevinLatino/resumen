"use client";

import { useState } from "react";
import Link from "next/link";
import { quizQuestions } from "@/lib/quiz";
import { useStore } from "@/lib/store";

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const setQuizScore = useStore((s) => s.setQuizScore);

  const q = quizQuestions[step];

  const handleAnswer = () => {
    if (selected === null) return;
    const isCorrect = selected === q.correct;
    const newScore = isCorrect ? score + 1 : score;
    if (step + 1 >= quizQuestions.length) {
      setQuizScore(newScore);
      setScore(newScore);
      setDone(true);
    } else {
      setScore(newScore);
      setStep((s) => s + 1);
      setSelected(null);
    }
  };

  if (done) {
    const total = quizQuestions.length;
    const finalScore = score;
    return (
      <main className="mx-auto max-w-md px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Resultado</h1>
        <p className="mt-4 text-4xl font-bold text-emerald-500">
          {finalScore}/{total}
        </p>
        <Link href="/dashboard" className="mt-6 inline-block rounded-lg bg-emerald-600 px-6 py-2 font-medium text-white hover:bg-emerald-500">
          Ver Dashboard
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-md px-4 py-12">
      <p className="text-sm text-zinc-500">{step + 1} / {quizQuestions.length}</p>
      <h2 className="mt-2 text-xl font-semibold">{q.q}</h2>
      <ul className="mt-6 space-y-2">
        {q.opts.map((opt, i) => (
          <li key={i}>
            <button
              onClick={() => setSelected(i)}
              className={`w-full rounded-lg border p-3 text-left transition ${
                selected === i
                  ? "border-emerald-500 bg-emerald-500/20"
                  : "border-zinc-700 hover:bg-zinc-800"
              }`}
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={handleAnswer}
        disabled={selected === null}
        className="mt-6 w-full rounded-lg bg-emerald-600 py-2 font-medium text-white disabled:opacity-50 hover:bg-emerald-500 disabled:hover:bg-emerald-600"
      >
        Siguiente
      </button>
    </main>
  );
}
