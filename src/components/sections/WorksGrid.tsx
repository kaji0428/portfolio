"use client";

import Image from "next/image";
import { useState } from "react";

type Work = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

type WorkGroup = {
  label: string;
  works: Work[];
};

const MOBILE_VISIBLE = 3;

const groups: WorkGroup[] = [
  {
    label: "現在開発中",
    works: [
      {
        slug: "school-festival-dx",
        title: "学園祭システムDX化",
        description: "卒業制作として開発中の学園祭運営システムDX化",
      },
    ],
  },
  {
    label: "企業連携",
    works: [
      {
        slug: "web-design",
        title: "エーデルワインサポートwebサイト",
        description: "企業連携でのWebサイトデザイン制作",
        image: "/images/wain.png",
        imageAlt: "Webサイトデザインの画面",
      },
      {
        slug: "elephant-and-flower",
        title: "象と花プロジェクト",
        description: "さわや書店「文庫X」イベントをDX化する企業連携サイト",
        image: "/images/works/zou&hana.png",
        imageAlt: "象と花プロジェクトの画面",
      },
    ],
  },
  {
    label: "その他の作品",
    works: [
      {
        slug: "chrono-voice",
        title: "ChronoVoice",
        description: "ToDo管理カレンダーアプリ（校内ハッカソン）",
        image: "/images/chro.png",
        imageAlt: "ChronoVoiceの画面",
      },
      {
        slug: "sensorhub",
        title: "SensorHub",
        description: "校内ハッカソンで開発したセンサー管理アプリ",
        image: "/images/SensorHub.png",
        imageAlt: "SensorHubの画面",
      },
      {
        slug: "musicvault",
        title: "MusicVault",
        description: "後輩とアジャイル開発した音楽管理アプリ",
        image: "/images/MusicVault.png",
        imageAlt: "MusicVaultの画面",
      },
      {
        slug: "commitscope",
        title: "CommitScope",
        description: "GitHub分析管理アプリ（サポーターズ様）",
        image: "/images/team.png",
        imageAlt: "CommitScopeの画面",
      },
      {
        slug: "hackidea",
        title: "HackIdea",
        description: "ハッカソンのアイデア提案と掲示板アプリ",
        image: "/images/idea.png",
        imageAlt: "HackIdeaの画面",
      },
      {
        slug: "cookgod",
        title: "CookGOD",
        description: "レシピ管理アプリ（Spring Boot）",
        image: "/images/cook.png",
        imageAlt: "CookGODの画面",
      },
      {
        slug: "advice-app",
        title: "格言アドバイスアプリ",
        description: "Advice API / Deepl API 連携アプリ",
        image: "/images/profile/kakugen.png",
        imageAlt: "格言アドバイスアプリの画面",
      },
    ],
  },
];

const hiddenCount = groups.reduce(
  (total, group) => total + Math.max(group.works.length - MOBILE_VISIBLE, 0),
  0,
);

export default function WorksGrid() {
  const [expanded, setExpanded] = useState(false);

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
        </div>

        {groups.map((group) => (
          <div key={group.label} className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-[#2f3e5c]">{group.label}</h3>

            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.works.map((work, index) => (
                <li
                  key={work.slug}
                  className={
                    !expanded && index >= MOBILE_VISIBLE ? "hidden sm:list-item" : undefined
                  }
                >
                  <a
                    href={`/works/${work.slug}`}
                    className="group flex h-full flex-col gap-4 rounded-[28px] border border-[#2f3e5c]/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#2f3e5c]/20"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-black/5">
                      {work.image ? (
                        <Image
                          src={work.image}
                          alt={work.imageAlt ?? work.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                        />
                      ) : (
                        <div
                          className="h-full w-full"
                          style={{
                            backgroundImage:
                              index % 3 === 0
                                ? "linear-gradient(135deg, #cfd8ee 0%, #f7f5ef 55%, #e9e2cf 100%)"
                                : index % 3 === 1
                                  ? "linear-gradient(135deg, #e9e2cf 0%, #f7f5ef 55%, #dfe6f5 100%)"
                                  : "linear-gradient(135deg, #dfe6f5 0%, #f7f5ef 55%, #cfd8ee 100%)",
                          }}
                        />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <h4 className="text-lg font-semibold text-[#1f2937] transition group-hover:text-[#2f3e5c]">
                        {work.title}
                      </h4>
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
        ))}

        {hiddenCount > 0 ? (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="mx-auto rounded-full border border-[#2f3e5c]/20 bg-white px-6 py-3 text-sm font-semibold text-[#2f3e5c] shadow-sm transition hover:border-[#2f3e5c]/40 sm:hidden"
          >
            {expanded ? "閉じる" : `もっと表示する（+${hiddenCount}）`}
          </button>
        ) : null}
      </div>
    </section>
  );
}
