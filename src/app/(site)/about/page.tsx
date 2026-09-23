const techStack = [
  {
    category: "フロントエンド",
    items: ["TypeScript", "Next.js", "HTML", "CSS"],
  },
  {
    category: "バックエンド",
    items: ["Java (Spring Boot)", "Python (Flask / FastAPI)"],
  },
  {
    category: "インフラ・DB",
    items: ["PostgreSQL", "Docker"],
  },
  {
    category: "デザイン",
    items: ["Figma"],
  },
];

const strengths = [
  {
    title: "チームでのものづくり経験",
    body: "複数のハッカソンや企業連携プロジェクトに参加し、要件定義から設計・開発まで一連の工程をチームで進めてきました。協働を通じ、相手の意図を正確に理解するコミュニケーション力や、周囲の技術を吸収する姿勢を身につけました。サービス化を通じ、技術面だけでなくユーザー視点での開発の重要性も学びました。",
  },
  {
    title: "現場で培った対応力",
    body: "テレビ局とWeb開発会社でのアルバイト経験があります。テレビ局では現場のルールや指示を理解し、限られた時間で確実に行動する判断力を身につけました。Web開発会社では、実務でのコーディングを通じ、進捗や課題を適切に共有しながら業務を進めることや、開発フローを学びました。双方で、プロの現場で責任を持って動く姿勢を培いました。",
  },
  {
    title: "巻き込み力とコミュニケーション",
    body: "人とすぐ仲良くなれることが強みです。周囲を見て困っている人がいれば知っていることを教えたり、わからないことがあればすぐに聞いたりできます。筋トレ・ギター・旅行など豊富な趣味を通じて、コミュニケーションのきっかけを多く持っています。",
  },
];

const career = [
  { date: "2023年3月", title: "岩手県立盛岡商業高校 卒業" },
  { date: "2023年4月", title: "盛岡情報ビジネス＆デザイン専門学校 入学" },
  { date: "2027年3月", title: "同校 卒業予定" },
];

const qualifications = [
  { date: "2023年5月", title: "普通自動車免許 取得" },
  { date: "2023年10月", title: "基本情報技術者試験 合格" },
  { date: "2026年8月〜", title: "応用情報技術者試験 受験に向け学習中" },
];

const hobbies = [
  { title: "筋トレ", body: "ベンチプレス80kgに到達しました。" },
  { title: "ギター", body: "3年ぶりに再チャレンジ中です(2026年8月〜)。Fコードに苦戦しています。" },
  {
    title: "旅行",
    body: "北海道・大阪・仙台・東京・神奈川など、学生のうちに行けるときにと思い、年4回ほど旅行しています。",
  },
  {
    title: "HIPHOP",
    body: "ラップスタア、POPYOURS、BATTLE SUMMITなどをヘッズとして見てきました。心が揺れ、しびれるのが最高です。",
  },
  { title: "F1観戦", body: "角田選手が大好きです。いつか鈴鹿サーキットに観戦しに行きたいです。" },
  { title: "ゲーム", body: "FPSが好きで、ほとんどのタイトルでダイヤランク帯にいます。" },
];

const EMAIL = "k.notsukitaira.sys23@morijyobi.ac.jp";

export default function AboutPage() {
  return (
    <main className="wafuu-pattern relative overflow-hidden bg-[#f7f5ef]">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,#e9e2cf_0%,transparent_70%)]" />
        <div className="absolute right-0 top-0 h-full w-[440px] bg-[linear-gradient(120deg,transparent_0%,rgba(47,62,92,0.05)_45%,transparent_100%)]" />
      </div>

      {/* hero */}
      <section className="relative mx-auto w-full max-w-6xl px-4 pb-10 pt-6">
        <div className="grid gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4c5d87]">
              about me
            </p>
            <h1 className="text-4xl font-black leading-tight text-[#1f2937] sm:text-5xl">
              私について
            </h1>
            <p className="text-base leading-8 text-black/70">
              <span className="font-semibold text-[#2f3e5c]">野月平快士</span>
              と申します。盛岡情報ビジネス＆デザイン専門学校 高度情報工学科で学びながら、
              web開発やUIUXについて日々勉強しています。
            </p>
          </div>
        </div>
      </section>

      {/* 自己紹介 */}
      <section id="profile" className="mx-auto w-full max-w-6xl px-4 pb-20">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4c5d87]">
          introduction
        </p>
        <h2 className="mt-3 text-2xl font-bold text-[#1f2937]">自己紹介</h2>
        <div className="mt-6 space-y-4 rounded-[28px] border border-[#2f3e5c]/12 bg-white p-7 text-sm leading-8 text-black/70 shadow-sm sm:p-8">
          <p>
            私は「自分自身に価値のあるエンジニアになりたい」という想いを持ち、常に学び続ける姿勢を
            大切にしています。
          </p>
          <p>
            ハッカソンでは、チームで協力しながら成果を出す経験を重ね、協調性や円滑なコミュニケーション力を
            磨いてきました。また、学校での企業連携では実際の企業担当者と意見交換を行い、現場で求められる
            考え方や姿勢を学びました。さらに、校外ハッカソンやインターンにも積極的に参加し、外部の技術や
            知識を取り入れることで、自身の視野を広げてきました。
          </p>
          <p>
            その中で私は、AIではまだ難しい「ユーザー体験全体を設計する視点」や「動きや操作性まで意識した
            UIデザイン」を強みとして磨いています。加えて、AIや技術の最新動向を日々キャッチアップし、変化の
            激しい環境でも価値を生み出し続けられるエンジニアを目指しています。
          </p>
        </div>
      </section>

      {/* 技術スタック */}
      <section id="stack" className="mx-auto w-full max-w-6xl px-4 pb-20">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4c5d87]">
          tech stack
        </p>
        <h2 className="mt-3 text-2xl font-bold text-[#1f2937]">技術スタック</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((group) => (
            <div
              key={group.category}
              className="rounded-[26px] border border-[#2f3e5c]/12 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4c5d87]">
                {group.category}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[#2f3e5c]/20 bg-[#eef1f7] px-3 py-1 text-xs font-semibold text-[#2f3e5c]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 強み */}
      <section id="strengths" className="mx-auto w-full max-w-6xl px-4 pb-20">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4c5d87]">
          strengths
        </p>
        <h2 className="mt-3 text-2xl font-bold text-[#1f2937]">強み</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {strengths.map((item) => (
            <div
              key={item.title}
              className="rounded-[26px] border border-[#2f3e5c]/12 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-[#1f2937]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-black/70">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-7 text-black/70">
          これらを通して、技術力に加え、コミュニケーション力・現場対応力・学び続ける姿勢を身につけてきました。
        </p>
      </section>

      {/* 経歴 */}
      <section id="career" className="mx-auto w-full max-w-6xl px-4 pb-20">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4c5d87]">career</p>
        <h2 className="mt-3 text-2xl font-bold text-[#1f2937]">経歴</h2>
        <div className="relative mt-10">
          <div className="absolute left-0 right-0 top-1.5 hidden h-px bg-[#2f3e5c]/30 md:block" />
          <div className="grid gap-8 md:grid-cols-3">
            {career.map((item) => (
              <div key={item.title} className="flex flex-col gap-3 md:items-center md:text-center">
                <div className="h-3 w-3 rounded-full bg-[#2f3e5c] md:mx-auto" />
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4c5d87]">
                  {item.date}
                </span>
                <h3 className="text-base font-bold text-[#1f2937]">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 実績（資格） */}
      <section id="qualifications" className="mx-auto w-full max-w-6xl px-4 pb-20">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4c5d87]">
          qualifications
        </p>
        <h2 className="mt-3 text-2xl font-bold text-[#1f2937]">実績・資格</h2>
        <ul className="mt-6 divide-y divide-black/5 overflow-hidden rounded-[28px] border border-[#2f3e5c]/12 bg-white shadow-sm">
          {qualifications.map((item) => (
            <li key={item.title} className="flex flex-wrap items-baseline gap-3 px-6 py-4">
              <span className="text-sm font-semibold text-[#4c5d87]">{item.date}</span>
              <span className="text-sm text-black/80">{item.title}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 趣味 */}
      <section id="hobbies" className="mx-auto w-full max-w-6xl px-4 pb-20">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4c5d87]">hobbies</p>
        <h2 className="mt-3 text-2xl font-bold text-[#1f2937]">趣味</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby) => (
            <div
              key={hobby.title}
              className="rounded-[26px] border border-[#b79b5b]/35 bg-[#b79b5b]/10 p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-[#6b5630]">{hobby.title}</h3>
              <p className="mt-2 text-sm leading-7 text-black/70">{hobby.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* リンク */}
      <section id="links" className="mx-auto w-full max-w-6xl px-4 pb-20">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4c5d87]">links</p>
        <h2 className="mt-3 text-2xl font-bold text-[#1f2937]">リンク</h2>
        <div className="mt-6">
          <a
            href="https://github.com/kaji0428"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-[26px] border border-[#2f3e5c]/12 bg-white px-6 py-4 shadow-sm transition hover:border-[#2f3e5c]/30"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2f3e5c]/20 bg-[#eef1f7]">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 text-[#2f3e5c]" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.26 5.69.42.36.78 1.08.78 2.17 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-[#4c5d87]">
                GitHub
              </span>
              <span className="block text-sm font-bold text-[#1f2937]">github.com/kaji0428</span>
            </span>
          </a>
        </div>
      </section>

      {/* 連絡先 */}
      <section id="contact" className="mx-auto w-full max-w-6xl px-4 pb-24">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4c5d87]">contact</p>
        <h2 className="mt-3 text-2xl font-bold text-[#1f2937]">連絡先</h2>
        <div className="mt-6 rounded-[28px] border border-[#2f3e5c]/12 bg-white p-7 shadow-sm sm:p-8">
          <p className="text-sm leading-7 text-black/70">
            ご連絡はメールが一番確実です。件名に「ポートフォリオの件」と入れていただけると見つけやすく助かります。
          </p>
          <div className="mt-4 inline-flex rounded-2xl border border-[#b79b5b]/35 bg-[#b79b5b]/10 p-5">
            <a href={`mailto:${EMAIL}`} className="text-base font-bold text-[#6b5630] underline-offset-4 hover:underline">
              {EMAIL}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
