"use client";

import { useState } from "react";

const EMAIL = "k.notsukitaira.sys23@morijyobi.ac.jp";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };
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
        </div>

        <div className="grid gap-6">
          <div className="flex flex-col gap-3 rounded-[28px] border border-[#2f3e5c]/12 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4c5d87]">direct contact</p>
            <h3 className="text-2xl font-bold text-[#1f2937]">連絡先</h3>

            <div className="mt-2 rounded-2xl border border-[#b79b5b]/35 bg-[#b79b5b]/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6b5630]">email</p>
              <div className="mt-1 flex flex-wrap items-center gap-3">
                <p className="min-w-0 break-all text-sm font-bold text-[#6b5630] sm:text-base">
                  {EMAIL}
                </p>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="rounded-full border border-[#6b5630]/35 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b5630] transition hover:bg-white"
                  aria-live="polite"
                >
                  {copied ? "copied" : "copy"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

