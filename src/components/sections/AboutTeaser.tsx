export default function AboutTeaser() {
  return (
    <section id="about" className="wafuu-pattern relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,#e9e2cf_0%,transparent_70%)]" />
        <div className="absolute right-0 top-0 h-full w-[420px] bg-[linear-gradient(120deg,transparent_0%,rgba(47,62,92,0.04)_45%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 py-24 md:grid-cols-2 md:items-start">
        <div className="flex flex-col gap-6">
          <div className="flex min-h-24 flex-col justify-end gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4c5d87]">
              about me
            </p>
            <h2 className="text-3xl font-bold text-[#1f2937] sm:text-4xl">私について</h2>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm">
            <div className="aspect-[16/10] w-full bg-[linear-gradient(135deg,#dfe6f5_0%,#f7f5ef_45%,#e9e2cf_100%)]" />
          </div>

          <div className="px-1">
            <p className="text-sm font-semibold text-[#2f3e5c]">自己紹介（仮）</p>
            <p className="mt-3 text-sm leading-7 text-black/70">
              ここにプロフィール写真の説明や自己紹介文が入ります。就活向けに、得意なこと・取り組み方・
              強みが伝わる文章に差し替える想定で、いまは読みやすい密度だけ整えています。
            </p>
          </div>

          <div>
            <a
              href="/about"
              className="inline-flex items-center rounded-full border border-[#2f3e5c]/20 bg-white px-6 py-3 text-sm font-semibold text-[#2f3e5c] transition hover:border-[#2f3e5c]/40"
            >
              もっと詳しく見る
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="hidden min-h-24 md:block" aria-hidden />

          <div className="rounded-[28px] border border-[#2f3e5c]/12 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4c5d87]">Design & Craft</p>
            <h3 className="mt-2 text-lg font-bold text-[#1f2937]">デザイン</h3>
            <p className="mt-2 text-sm leading-7 text-black/70">
              見た目の整え方だけでなく、意図が伝わる情報の置き方や余白の設計を大切にしています。
            </p>
          </div>

          <div className="rounded-[28px] border border-[#2f3e5c]/12 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4c5d87]">Code & Build</p>
            <h3 className="mt-2 text-lg font-bold text-[#1f2937]">マークアップ</h3>
            <p className="mt-2 text-sm leading-7 text-black/70">
              HTML/CSSを中心に、あとから読み返しても意図が分かる構造と命名を意識して実装します。
            </p>
          </div>

          <div className="rounded-[28px] border border-[#b79b5b]/35 bg-[#b79b5b]/10 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6b5630]">Approach</p>
            <h3 className="mt-2 text-lg font-bold text-[#1f2937]">取り組み方</h3>
            <p className="mt-2 text-sm leading-7 text-black/70">
              課題の整理→構成→見た目→実装の順に考え、目的に効く順番で進めることを重視しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
