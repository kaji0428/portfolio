export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-black/5">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-10 text-sm text-black/70">
        <p className="font-semibold text-black">MY PORTFOLIO</p>
        <p>© {year} All rights reserved.</p>
      </div>
    </footer>
  );
}
