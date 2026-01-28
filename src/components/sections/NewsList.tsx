type NewsItem = {
  date: string;
  title: string;
  href: string;
};

const news: NewsItem[] = [
  { date: "2026-01-20", title: "TOPページのデザインを更新しました", href: "#" },
  { date: "2026-01-12", title: "作品の見せ方を調整しました", href: "#" },
  { date: "2025-12-28", title: "Aboutページの構成を追加しました", href: "#" },
];

export default function NewsList() {
  return (
    <section id="news" className="wafuu-pattern mx-auto w-full max-w-6xl px-4 py-24">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4c5d87]">news</p>
          <h2 className="text-3xl font-bold text-[#1f2937] sm:text-4xl">お知らせ</h2>
          <p className="max-w-3xl text-base leading-8 text-black/70">
            更新情報を軽く残しておくと、サイトが育っていることが伝わります（不要なら後で外せます）。
          </p>
        </div>

        <ul className="overflow-hidden rounded-[28px] border border-[#2f3e5c]/10 bg-white shadow-sm">
          {news.map((item) => (
            <li key={`${item.date}-${item.title}`} className="border-t border-black/5 first:border-t-0">
              <a
                href={item.href}
                className="flex flex-col gap-2 px-6 py-5 transition hover:bg-[#f7f5ef] sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-sm font-semibold text-[#4c5d87]">{item.date}</span>
                <span className="text-base font-semibold text-[#1f2937]">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
