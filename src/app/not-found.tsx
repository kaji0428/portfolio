import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-start justify-center gap-4 px-4 py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4c5d87]">404</p>
      <h1 className="text-3xl font-bold text-[#1f2937]">ページが見つかりません</h1>
      <p className="text-black/70">URLをご確認のうえ、もう一度お試しください。</p>
      <Link
        href="/"
        className="mt-2 inline-flex items-center rounded-full bg-[#2f3e5c] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-95"
      >
        TOPに戻る
      </Link>
    </main>
  );
}
