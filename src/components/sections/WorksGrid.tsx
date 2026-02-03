type Work = {
  slug: string;
  title: string;
  description: string;
};

const works: Work[] = [
  {
    slug: "chrono-voice",
    title: "ChronoVoice",
    description: "ToDo管理カレンダーアプリ（校内ハッカソン）",
  },
  {
    slug: "web-design",
    title: "webサイトデザイン作成",
    description: "企業連携でのWebサイトデザイン制作",
  },
  {
    slug: "advice-app",
    title: "格言アドバイスアプリ",
    description: "Advice API / Deepl API 連携アプリ",
  },
  {
    slug: "cookgod",
    title: "CookGOD",
    description: "レシピ管理アプリ（Spring Boot）",
  },
  {
    slug: "commitscope",
    title: "CommitScope",
    description: "GitHub分析管理アプリ（サポーターズ様）",
  },
  {
    slug: "hackidea",
    title: "HackIdea",
    description: "ハッカソンのアイデア提案と掲示板アプリ",
  },
];

export default function WorksGrid() {
  return (
    <section
      id="works"
      className="wafuu-pattern relative overflow-hidden border-y border-black/5 bg-[#f7f5ef]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-0 h-40 w-[520px] -translate-x-1/2 bg-[radial-gradient(circle,#e9e2cf_0%,transparent_70%)]" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,#dfe6f5_0%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-24">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4c5d87]">works</p>
          <h2 className="text-3xl font-bold text-[#1f2937] sm:text-4xl">作品</h2>
          <p className="max-w-3xl text-base leading-8 text-black/70">
            課題の整理から設計、見た目の整え方まで一貫して考えた実例です。画像や説明文はあとから
            差し替える前提で、いまは見やすい密度に整えています。
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work, index) => (
            <li key={work.slug}>
              <a
                href={`/works/${work.slug}`}
                className="group flex h-full flex-col gap-4 rounded-[28px] border border-[#2f3e5c]/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#2f3e5c]/20"
              >
                <div
                  className="aspect-[16/10] w-full rounded-2xl border border-black/5"
                  style={{
                    backgroundImage:
                      index % 3 === 0
                        ? "linear-gradient(135deg, #cfd8ee 0%, #f7f5ef 55%, #e9e2cf 100%)"
                        : index % 3 === 1
                          ? "linear-gradient(135deg, #e9e2cf 0%, #f7f5ef 55%, #dfe6f5 100%)"
                          : "linear-gradient(135deg, #dfe6f5 0%, #f7f5ef 55%, #cfd8ee 100%)",
                  }}
                />
                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="text-lg font-semibold text-[#1f2937] transition group-hover:text-[#2f3e5c]">
                    {work.title}
                  </h3>
                  <p className="text-sm leading-7 text-black/70">{work.description}</p>
                  <span className="mt-auto pt-2 text-sm font-semibold text-[#4c5d87]">
                    詳細を見る →
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
