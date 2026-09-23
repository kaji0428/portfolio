import type { ReactNode } from "react";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import ScrollToTopButton from "../../components/layout/ScrollToTopButton";

type SiteLayoutProps = {
  children: ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
