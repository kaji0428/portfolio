import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="wafuu-pattern relative overflow-hidden border-b border-black/5 bg-[#f7f5ef]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,#e9e2cf_0%,#e9e2cf_45%,transparent_70%)]" />
        <div className="absolute right-10 top-10 h-40 w-40 rounded-full border-[10px] border-[#2f3e5c] opacity-80" />
        <div className="absolute left-0 top-16 h-2 w-40 rounded-full bg-[#b8c3d9]" />
        <div className="absolute left-12 top-24 h-2 w-28 rounded-full bg-[#d0d8e8]" />
        <div className="absolute right-0 bottom-16 h-2 w-56 rounded-full bg-[#c9d2e6]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 py-24 text-center">
        <div className="pointer-events-none absolute left-0 top-10 -z-0 w-full sm:left-6 sm:top-6">
          <Image
            src="/topmoon.png"
            alt="月のイラスト"
            width={1040}
            height={1040}
            priority
            className="h-80 w-auto opacity-90 sm:h-[28rem] lg:h-[32rem]"
          />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4c5d87]">
          portfolio
        </p>

        <div className="relative z-10 flex flex-col items-center gap-4">
          <h1 className="text-4xl font-black leading-tight text-[#1f2937] sm:text-6xl">
            野月平 快士
          </h1>
          <p className="text-lg font-semibold text-[#2f3e5c]">
            web designer / markup engineer
          </p>
        </div>

        <div className="h-16 sm:h-20" aria-hidden="true" />

        <div className="flex flex-wrap gap-3 pt-2 sm:ml-auto sm:w-1/2 sm:justify-end">
          <a
            href="#works"
            className="inline-flex items-center justify-center rounded-full bg-[#2f3e5c] px-7 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:opacity-95"
          >
            作品を見る
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full border border-[#2f3e5c]/20 bg-white/80 px-7 py-3 text-sm font-semibold text-[#2f3e5c] transition hover:border-[#2f3e5c]/40"
          >
            私について
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-[#b79b5b]/40 bg-[#b79b5b]/10 px-7 py-3 text-sm font-semibold text-[#6b5630] transition hover:border-[#b79b5b]/70 hover:bg-[#b79b5b]/15"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
