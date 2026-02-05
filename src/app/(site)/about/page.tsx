export default function AboutPage() {
  return (
    <main className="wafuu-pattern relative overflow-hidden bg-[#f7f5ef]">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,#e9e2cf_0%,transparent_70%)]" />
        <div className="absolute right-0 top-0 h-full w-[440px] bg-[linear-gradient(120deg,transparent_0%,rgba(47,62,92,0.05)_45%,transparent_100%)]" />
        <div className="absolute bottom-16 left-10 h-2 w-44 rounded-full bg-[#d8d0bf]" />
      </div>

      <section className="relative mx-auto w-full max-w-6xl px-4 pb-6 pt-6">
        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm">
            <div className="aspect-[16/7] w-full bg-[linear-gradient(135deg,#dfe6f5_0%,#f7f5ef_45%,#e9e2cf_100%)]" />
            <div className="border-t border-black/5 px-5 py-1.5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4c5d87]">
                portrait
              </p>
              <p className="mt-2 text-sm text-black/70">ここにご自身の写真を配置してください。</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4c5d87]">
              about me
            </p>
            <h1 className="text-4xl font-black leading-tight text-[#1f2937] sm:text-5xl">
              私について
            </h1>
            <p className="text-base leading-8 text-black/70">
              <span className="font-semibold text-[#2f3e5c]">野月平快士</span>
              と申します。私は、
              <span className="font-semibold text-[#2f3e5c]">
                「人の心に寄り添いながら価値を形にすること」
              </span>
              を軸にものづくりに取り組むエンジニアです。
              <span className="font-semibold text-[#2f3e5c]">
                私の強みは感受性・対話力・行動力・適応力の4つ
              </span>
              です。地元・岩手で自然と向き合いながら育んだまなざし、漫画や日常の出来事から受け取ってきた感情の細かな動き、そして多様な環境での経験が、私の発想と姿勢の土台になっています。
              <span className="font-semibold text-[#2f3e5c]">SEとしてのアルバイト</span>
              ではサイト改修に携わり、テレビ企業での映像編集・ブログ運用、コンビニでの接客業務では、相手にとって何が
              <span className="font-semibold text-[#2f3e5c]">“心地よい体験”</span>
              なのかを考え続ける習慣が鍛えられました。さらに、学校での企業連携では、クライアントと直接対話しながら企画・提案・制作を行い、現場で使われる視点と、責任を持って形にする実践力を磨きました。
              加えて、学校内外でのハッカソンにも積極的に参加してきました。初めて会うメンバーと短期間でチームを組み、アイデア出しから設計、デザイン、実装までを一貫して進める中で、役割を固定せず
              <span className="font-semibold text-[#2f3e5c]">“必要なところに自分を置く力”</span>
              が育ちました。互いの強みを引き出し合いながら形にしていく過程で、プロジェクトの推進に関わる柔軟性と、前に進ませるための対話力が強化されました。
              また私は、
              <span className="font-semibold text-[#2f3e5c]">AIやUI/UX、開発技術の最新情報</span>
              を日々キャッチアップし、興味を持ったものはすぐに手を動かして試すことを習慣としています。技術を知識として蓄えるだけではなく、
              <span className="font-semibold text-[#2f3e5c]">「人の体験をどう良くできるか」</span>
              という視点で応用し、実際の企画やアウトプットに反映しています。
              私は単に技術を学ぶのではなく、
              <span className="font-semibold text-[#2f3e5c]">
                “人にとって意味のある価値を生み出せる、対話のできるエンジニア”
              </span>
              でありたいと考えています。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="rounded-[28px] border border-[#2f3e5c]/12 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4c5d87]">
              origin of my sensibility
            </p>
            <h2 className="mt-3 text-2xl font-bold text-[#1f2937]">感性の原点</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-black/70">
                <p>
                  ─ いろいろな “感情の景色” を受け取り続けてきた人間として
                </p>
                <p>
                  私の創造力は、ひとつの体験だけで成り立っているわけではありません。漫画、音楽、写真、会話、
                  季節の匂い──さまざまな「心が揺れた瞬間」を丁寧に受け取ってきたことが、今の私を形づくっています。
                </p>
                <p>
                  漫画は、登場人物の感情の機微や人間関係の距離感から、「人はどうして心が動くのか」を考えるきっかけになりました。
                  言葉にできない感情や、それぞれの“葛藤”が物語の中で解けていく瞬間に、私はいつも深い共感を覚えます。
                </p>
                <p>
                  音楽は、情景と感情をつなぐ“空気”のような存在です。歌詞だけではなく、音の質感、余白、テンポの揺らぎ……
                  心の形に寄り添って変化する音楽に触れることで、「同じものでも、受け取る人や状況で意味が変わる」ということを学びました。
                </p>
                <p>
                  写真は、そうした心の動きをそっと掬い上げる手段として機能しています。写真そのものが中心なのではなく、
                  “感じ取ったものを残しておける場所が欲しかった”というのが本当の動機です。
                </p>
                <p>
                  これらは全て、私の中で「世界をどう見るか」という軸へと統合されました。
                </p>
                <p>私が持っている“世界観”</p>
                <p>
                  感情には形はないけれど、確かにそこに存在している
                  <br />
                  心が動く瞬間は、いつだって日常の中に潜んでいる
                  <br />
                  小さな変化に気づけることが、思いやりやデザインに繋がる
                </p>
                <p>
                  私はその“見えないもの”を大切にしたいと考えています。だからこそ、UIのわずかな余白、ボタンの動き方、
                  言葉の語尾、チームミーティングで誰かが少し言い淀んだ瞬間──そういった細部に宿る“気持ち”を置き去りにしない
                  ものづくりを心がけています。
                </p>
                <p>
                  これが、私にしか作れないデザイン・発想へつながっている。複数の文化・体験からインスピレーションを受け、
                  それを自分の中で「ひとつの感性」として統合できていること。これは、知識や技術だけでは身につかない、
                  生きてきた時間が生み出した世界観そのものです。
                </p>
                <p>
                  そしてそれは、AIには生み出せない“人としての感性の積層”だと感じています。
                </p>
              </div>
            </div>

        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-20">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4c5d87]">
          values and what I cherish
        </p>
        <h2 className="mt-3 text-2xl font-bold text-[#1f2937]">価値観と大切にしていること</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-[26px] border border-[#2f3e5c]/12 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2f3e5c]/20 bg-[#eef1f7]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 text-[#2f3e5c]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M12 21s-6.5-4.2-8.3-7.5C1.8 10.2 3.1 7 6.4 7c2 0 3.4 1.2 4.2 2.6C11.4 8.2 12.9 7 15 7c3.3 0 4.6 3.2 2.7 6.5C18.5 16.8 12 21 12 21Z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-bold text-[#1f2937]">共感と理解</h3>
            <p className="mt-2 text-sm leading-7 text-black/70">
              相手の立場や気持ちを想像し、目的と温度感を丁寧にすり合わせることを心がけています。
            </p>
          </div>

          <div className="rounded-[26px] border border-[#2f3e5c]/12 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2f3e5c]/20 bg-[#eef1f7]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 text-[#2f3e5c]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M4 20h16M7 20V7l5-3 5 3v13" />
                <path d="M9 12h6M9 15h6" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-bold text-[#1f2937]">丁寧さと精度</h3>
            <p className="mt-2 text-sm leading-7 text-black/70">
              伝わる理由を揃えるために、余白・行間・構造の一貫性にこだわります。
            </p>
          </div>

          <div className="rounded-[26px] border border-[#2f3e5c]/12 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2f3e5c]/20 bg-[#eef1f7]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 text-[#2f3e5c]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M4 12h4l2 4 4-8 2 4h4" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-bold text-[#1f2937]">調和と協働</h3>
            <p className="mt-2 text-sm leading-7 text-black/70">
              チームの空気や役割を大切にし、心地よいリズムで進行することを重視しています。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-20">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4c5d87]">
          skillset
        </p>
        <h2 className="mt-3 text-2xl font-bold text-[#1f2937]">スキルセット</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4c5d87]">
              design & craft
            </p>
            <h3 className="mt-2 text-lg font-bold text-[#1f2937]">デザイン</h3>
            <div className="mt-5 space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-[#2f3e5c]">
                  <span>Figma</span>
                  <span>85%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-[#e3e6ee]">
                  <div className="h-2 rounded-full bg-[#2f3e5c]" style={{ width: "85%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-[#2f3e5c]">
                  <span>Adobe CC</span>
                  <span>75%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-[#e3e6ee]">
                  <div className="h-2 rounded-full bg-[#2f3e5c]" style={{ width: "75%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-[#2f3e5c]">
                  <span>UI Design</span>
                  <span>80%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-[#e3e6ee]">
                  <div className="h-2 rounded-full bg-[#2f3e5c]" style={{ width: "80%" }} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4c5d87]">
              code & build
            </p>
              <h3 className="mt-2 text-lg font-bold text-[#1f2937]">開発言語</h3>
            <div className="mt-5 space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-[#2f3e5c]">
                    <span>JavaScript</span>
                    <span>80%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-[#e3e6ee]">
                    <div className="h-2 rounded-full bg-[#2f3e5c]" style={{ width: "80%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-[#2f3e5c]">
                    <span>Java</span>
                    <span>60%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-[#e3e6ee]">
                    <div className="h-2 rounded-full bg-[#2f3e5c]" style={{ width: "60%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-[#2f3e5c]">
                    <span>PHP</span>
                    <span>70%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-[#e3e6ee]">
                    <div className="h-2 rounded-full bg-[#2f3e5c]" style={{ width: "70%" }} />
                  </div>
                </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4c5d87]">
              tools & workflow
            </p>
            <h3 className="mt-2 text-lg font-bold text-[#1f2937]">ツール</h3>
            <div className="mt-5 space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-[#2f3e5c]">
                  <span>Git</span>
                  <span>70%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-[#e3e6ee]">
                  <div className="h-2 rounded-full bg-[#2f3e5c]" style={{ width: "70%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-[#2f3e5c]">
                  <span>Notion</span>
                  <span>80%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-[#e3e6ee]">
                  <div className="h-2 rounded-full bg-[#2f3e5c]" style={{ width: "80%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-[#2f3e5c]">
                  <span>Slack</span>
                  <span>75%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-[#e3e6ee]">
                  <div className="h-2 rounded-full bg-[#2f3e5c]" style={{ width: "75%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-24">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4c5d87]">
          future goals and vision
        </p>
        <h2 className="mt-3 text-2xl font-bold text-[#1f2937]">将来の目標とビジョン</h2>
        <div className="relative mt-10">
          <div className="absolute left-0 right-0 top-6 h-px bg-[#2f3e5c]/30" />
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4c5d87]">
                1年後
              </span>
              <div className="mt-3 h-3 w-3 rounded-full bg-[#2f3e5c]" />
              <h3 className="mt-5 text-base font-bold text-[#1f2937]">メンターとして知見共有</h3>
              <p className="mt-2 text-sm leading-7 text-black/70">
                学びを言語化し、チーム内の知識循環をつくります。
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4c5d87]">
                5年後
              </span>
              <div className="mt-3 h-3 w-3 rounded-full bg-[#2f3e5c]" />
              <h3 className="mt-5 text-base font-bold text-[#1f2937]">プロジェクトを牽引</h3>
              <p className="mt-2 text-sm leading-7 text-black/70">
                企画から実装まで、成果に向けてディレクションします。
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4c5d87]">
                10年後
              </span>
              <div className="mt-3 h-3 w-3 rounded-full bg-[#2f3e5c]" />
              <h3 className="mt-5 text-base font-bold text-[#1f2937]">新技術の探究</h3>
              <p className="mt-2 text-sm leading-7 text-black/70">
                AR/VR・AIデザインなど、体験の幅を広げる領域に挑戦します。
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

