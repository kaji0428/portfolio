"use client";

import { usePathname } from "next/navigation";
import { useState, type MouseEvent } from "react";

type NavItem = {
  href: string;
  label: string;
  matchPath?: string;
};

const items: NavItem[] = [
  { href: "/", label: "TOP" },
  { href: "/about", label: "私について", matchPath: "/about" },
  { href: "/#works", label: "作品" },
  { href: "/#news", label: "お知らせ" },
  { href: "/#contact", label: "お問い合わせ" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isItemActive = (item: NavItem) =>
    item.matchPath ? pathname === item.matchPath : item.href === "/" && pathname === "/";

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false);
    if (href !== "/") return;
    if (typeof window === "undefined") return;

    if (window.location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav aria-label="グローバルナビゲーション">
      <ul className="hidden flex-wrap items-center gap-5 text-sm font-semibold text-[#2f3e5c] md:flex">
        {items.map((item) => {
          const isActive = isItemActive(item);
          return (
            <li key={item.href}>
              <a
                href={item.href}
                className={`transition hover:text-[#1f2a44] focus-visible:text-[#1f2a44] ${
                  isActive ? "text-[#1f2a44] underline underline-offset-4" : ""
                }`}
                aria-current={isActive ? "page" : undefined}
                onClick={(event) => handleAnchorClick(event, item.href)}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2f3e5c]/20 text-[#2f3e5c] transition hover:border-[#2f3e5c]/40 md:hidden"
        aria-label="メニューを開く"
        aria-expanded={open}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      {open ? (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            aria-label="メニューを閉じる"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/30"
          />
          <div className="absolute right-0 top-0 flex h-full w-72 max-w-[80vw] flex-col gap-6 border-l border-black/5 bg-[#f7f5ef] p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-sm font-black tracking-[0.08em] text-[#1f2937]">MENU</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2f3e5c]/20 text-[#2f3e5c]"
                aria-label="メニューを閉じる"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col gap-4 text-base font-semibold text-[#2f3e5c]">
              {items.map((item) => {
                const isActive = isItemActive(item);
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`transition hover:text-[#1f2a44] ${
                        isActive ? "text-[#1f2a44] underline underline-offset-4" : ""
                      }`}
                      aria-current={isActive ? "page" : undefined}
                      onClick={(event) => handleAnchorClick(event, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
