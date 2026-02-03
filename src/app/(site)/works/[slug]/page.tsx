import Link from "next/link";
import { notFound } from "next/navigation";

type WorkLink = { label: string; href: string };

type Work = {
  slug: string;
  title: string;
  summary: string;
  period: string;
  role: string;
  tech: string;
  points: string;
  links: WorkLink[];
};

const works: Work[] = [
  {
    slug: "chrono-voice",
    title: "ChronoVoice",
    summary: "校内のハッカソンで開発したToDo管理カレンダーアプリ",
    period: "2025/9/4〜2025/9/19",
    role: "3人開発 / フロントエンド、画面設計",
    tech: "TypeScript(Next.js)/Python(flask)/PostgreSQL",
    points:
      "「時間が忙しい人を支える」というテーマのもとに開発しました。音声入力や定型文テンプレートを活用することで、入力作業の手間を大幅に削減し、素早く操作できるユーザー体験を実現しています。また、スマートフォンでも快適に利用できるようモバイルファーストで設計し、SPA（Single Page Application）構成を採用することでスムーズな画面遷移と高い操作性を追求しました。",
    links: [
      { label: "GitHub(frontend)", href: "https://github.com/Raiki215/todo_frontend" },
      { label: "GitHub(backend)", href: "https://github.com/Raiki215/todo_backend" },
      { label: "動画リンク", href: "https://youtu.be/ya1asK3vijU" },
      { label: "モバイル", href: "https://youtu.be/S5VumNoxEV8" },
    ],
  },
  {
    slug: "web-design",
    title: "webサイトデザイン作成",
    summary: "校内の企業連携で作成したwebサイトのデザイン",
    period: "2024/2〜2024/3",
    role: "3人開発 / リーダー、ワイヤーフレーム、画面デザイン",
    tech: "figma",
    points:
      "既存サイトの課題を分析し、「直感的に操作できる導線設計」と「一目で内容が伝わるデザイン」を徹底して改善しました。特に遷移のしやすさに重点を置き、ユーザーが迷わず目的の情報へ到達できる構成を実現しています。また、サイト全体の世界観やメッセージ性も大切にし、視覚的な統一感と情報の伝達性を両立させました。チームではリーダーを務め、開発スケジュールの管理や進捗の調整を行い、期限内での成果物完成に貢献しました。さらに企業担当者の方との連絡や要件整理も担当し、プロジェクトを円滑に推進する役割を果たしました。",
    links: [{ label: "figma / デザインLink", href: "" }],
  },
  {
    slug: "advice-app",
    title: "格言アドバイスアプリ",
    summary: "学校課題として開発したアドバイスを表示するアプリ",
    period: "2025/7/20〜2025/7/25",
    role: "1人開発 / 全体設計・実装",
    tech: "JavaScript/Node.js/LocalStorage",
    points:
      "外部サービスを積極的に活用することで機能性と拡張性を高めました。助言機能にはAdvice APIを、文章翻訳にはDeepl APIを連携させ、ユーザーが必要なサポートをスムーズに受けられる仕組みを実装しました。インフラ面では、バックエンドをRender、フロントエンドをVercelにそれぞれデプロイし、安定した稼働とスケーラビリティを確保しています。",
    links: [
      { label: "GitHub", href: "https://github.com/kaji0428/deepl-proxy" },
      { label: "デモ", href: "https://deepl-proxy-nine.vercel.app/" },
    ],
  },
  {
    slug: "cookgod",
    title: "CookGOD",
    summary: "学校課題として開発したレシピ管理アプリ",
    period: "2025/7/10〜2025/8/8",
    role: "1人開発 / 全体設計・実装",
    tech: "Java (SpringBoot)/H2",
    points:
      "バックエンドにはSpring Bootを採用し、そのセキュリティ機能を活かして認証・認可機能を実装することで、安全性の高いアプリケーション構成を実現しました。また、本プロジェクトではフロントエンドからバックエンドまで一貫して開発を担当し、設計から実装、動作検証までを一人で完遂しました。",
    links: [
      { label: "GitHub", href: "https://github.com/kaji0428/cook-manegement" },
      { label: "動画リンク", href: "https://www.youtube.com/watch?v=4VH3UoxWjGk" },
    ],
  },
  {
    slug: "commitscope",
    title: "CommitScope",
    summary: "サポーターズ様のハッカソンで開発したGitHub分析管理アプリ",
    period: "2025/8/1〜2025/8/10",
    role: "4人開発 / 要件定義、フロントエンド、画面設計",
    tech: "TypeScript(Next.js)/Java(SpringBoot)/PostgreSQL",
    points:
      "UI設計では、モダンなデザインを意識し、カードレイアウトやグラフ表示を取り入れることで、視覚的なわかりやすさと情報の整理性を重視しました。また、GitHub APIを活用して外部データを取得・表示する機能を実装し、さらにGemini APIを連携させることで高度な情報処理にも対応できる拡張性のある構成としました。",
    links: [
      { label: "GitHub(frontend)", href: "https://github.com/Sachika1102/spz-hackathon-frontend" },
      { label: "GitHub(backend)", href: "https://github.com/PlasticPlactice/spz-hackathon-backend" },
      { label: "発表スライド", href: "" },
    ],
  },
  {
    slug: "hackidea",
    title: "HackIdea",
    summary: "サポーターズ様のハッカソンで開発したハッカソンのアイデア提案と掲示板アプリ",
    period: "2025/9/25〜2025/10/5",
    role: "2人開発 / フロントエンド、画面設計",
    tech: "TypeScript(Next.js)/Python(FastAPI)/PostgreSQL",
    points:
      "デザイン面ではモダンさと実用性を両立させるため、モバイルファーストを意識したUI設計を採用しました。配色はトレンド性の高いパープル系を基調とし、透明感のあるガラス風デザイン（Glassmorphism）を取り入れることで、スタイリッシュで洗練された世界観を演出しています。",
    links: [
      { label: "GitHub(frontend)", href: "https://github.com/HackIdea/hackidea-frontend" },
      { label: "GitHub(backend)", href: "https://github.com/HackIdea/hackidea-backend" },
      { label: "発表スライド", href: "" },
    ],
  },
];

function extractYouTubeId(url: string) {
  const trimmed = url.trim();
  const shortMatch = trimmed.match(/youtu\.be\/([\w-]+)/i);
  if (shortMatch) return shortMatch[1];
  const longMatch = trimmed.match(/[?&]v=([\w-]+)/i);
  if (longMatch) return longMatch[1];
  return null;
}

function findYouTubeId(links: WorkLink[]) {
  for (const link of links) {
    if (!link.href) continue;
    const id = extractYouTubeId(link.href);
    if (id) return id;
  }
  return null;
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = works.find((item) => item.slug === slug);
  if (!work) notFound();

  const youtubeId = findYouTubeId(work.links);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16">
      <div className="mx-auto w-full max-w-4xl">
        {youtubeId ? (
          <div className="aspect-video w-full overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-sm">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={work.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="aspect-video w-full overflow-hidden rounded-[24px] border border-black/5 bg-[linear-gradient(135deg,#dfe6f5_0%,#f7f5ef_55%,#e9e2cf_100%)] shadow-sm" />
        )}
      </div>

      <div className="mt-8 rounded-[24px] border border-black/5 bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-2xl font-bold text-[#1f2937] sm:text-3xl">{work.title}</h1>

          <div className="mt-6 space-y-4 text-sm leading-7 text-black/70">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#4c5d87]">概要</p>
              <p className="mt-2 pl-4">{work.summary}</p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#4c5d87]">URL</p>
              <ul className="mt-2 space-y-2 pl-4">
              {work.links.map((link, index) => (
                <li key={`${work.slug}-url-${index}`} className="flex flex-wrap items-baseline gap-2">
                  {link.href ? (
                    <>
                      <a
                        className="font-semibold text-[#2f3e5c] underline-offset-4 hover:underline"
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                      <span className="text-xs text-black/50">{link.href}</span>
                    </>
                  ) : (
                    <span className="text-black/50">{link.label}（後日追加）</span>
                  )}
                </li>
              ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#4c5d87]">開発期間</p>
              <p className="mt-2 pl-4">{work.period}</p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#4c5d87]">開発人数 / 担当</p>
              <p className="mt-2 pl-4">{work.role}</p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#4c5d87]">使用技術</p>
              <p className="mt-2 pl-4">{work.tech}</p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#4c5d87]">工夫点</p>
              <p className="mt-2 pl-4">{work.points}</p>
            </div>
          </div>

        <div className="mt-8">
          <Link
            href="/#works"
            className="text-sm font-semibold text-[#4c5d87] underline-offset-4 hover:underline"
          >
            ← TOPの作品セクションへ戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
