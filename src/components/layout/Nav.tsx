type NavItem = {
  href: string;
  label: string;
};

const items: NavItem[] = [
  { href: "#top", label: "TOP" },
  { href: "#about", label: "私について" },
  { href: "#works", label: "作品" },
  { href: "#news", label: "お知らせ" },
  { href: "#contact", label: "お問い合わせ" },
];

export default function Nav() {
  return (
    <nav aria-label="グローバルナビゲーション">
      <ul className="flex flex-wrap items-center gap-5 text-sm font-semibold text-[#2f3e5c]">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="transition hover:text-[#1f2a44] focus-visible:text-[#1f2a44]"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
