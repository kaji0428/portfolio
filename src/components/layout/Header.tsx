import Nav from "./Nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2f3e5c]/10 bg-[#f7f5ef]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <a href="/" className="text-base font-black tracking-[0.08em] text-[#1f2937]">
          MY PORTFOLIO
        </a>
        <Nav />
      </div>
    </header>
  );
}
