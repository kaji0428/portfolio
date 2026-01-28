import AboutTeaser from "../../components/sections/AboutTeaser";
import ContactSection from "../../components/sections/ContactSection";
import Hero from "../../components/sections/Hero";
import NewsList from "../../components/sections/NewsList";
import WorksGrid from "../../components/sections/WorksGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <WorksGrid />
      <NewsList />
      <ContactSection />
    </>
  );
}
