export default function ContactSection() {
  return (
    <section
      id="contact"
      className="wafuu-pattern relative overflow-hidden border-t border-black/5 bg-[#f7f5ef]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,#e9e2cf_0%,transparent_70%)]" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,#dfe6f5_0%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-24">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#4c5d87]">contact</p>
          <h2 className="text-3xl font-bold text-[#1f2937] sm:text-4xl">お問い合わせ</h2>
          <p className="max-w-3xl text-base leading-8 text-black/70">
            就活用のポートフォリオのため、フォームではなく連絡先の案内を置いています。必要があれば
            文言や連絡手段をあとから差し替えます。
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-3 rounded-[28px] border border-[#2f3e5c]/12 bg-white p-6 shadow-sm lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4c5d87]">direct contact</p>
            <h3 className="text-2xl font-bold text-[#1f2937]">連絡先</h3>
            <p className="text-sm leading-7 text-black/70">
              連絡はメールが一番確実です。件名に「ポートフォリオの件」と入れていただけると
              見つけやすく助かります。
            </p>

            <div className="mt-2 rounded-2xl border border-[#b79b5b]/35 bg-[#b79b5b]/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6b5630]">email</p>
              <p className="mt-1 text-base font-bold text-[#6b5630]">k.notsukitaira.sys23@morijyobi.ac.jp</p>
            </div>

            <div className="grid gap-2 rounded-2xl border border-black/5 bg-[#f7f5ef] p-4 text-sm text-black/70 sm:grid-cols-3">
              <p>対応: Webデザイン / マークアップ</p>
              <p>返信: 2〜4営業日以内</p>
              <p>形式: テキストでOKです</p>
            </div>
          </div>

          <aside className="flex flex-col gap-3 rounded-[28px] border border-[#2f3e5c]/12 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4c5d87]">note</p>
            <h3 className="text-lg font-bold text-[#1f2937]">補足</h3>
            <ul className="grid gap-2 text-sm leading-7 text-black/70">
              <li>学習・制作中の内容も含めて、正直にお話しします。</li>
              <li>使用技術や担当範囲も整理してお伝えします。</li>
              <li>ポートフォリオの感想もとても嬉しいです。</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
