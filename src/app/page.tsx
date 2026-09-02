import About from "@/components/About";
import ArticlesTeaser from "@/components/ArticlesTeaser";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import LineUp from "@/components/LineUp";
import RoundTable from "@/components/RoundTable";
import Answers from "@/components/Answers";

export default function Home() {
  return (
    <main id="top" className="relative isolate overflow-hidden bg-ink">
      {/* Ambient stage glow trailing down the whole page */}
      <div
        className="pointer-events-none absolute inset-x-0 top-[60vh] -z-10 h-[180vh] bg-[radial-gradient(60%_40%_at_50%_0%,rgba(75,17,128,0.35),transparent_70%)]"
        aria-hidden
      />
      <Hero />
      <About />
      <ArticlesTeaser />
      <LineUp />
      <Journey />
      <Answers />
      <RoundTable />
      <Contact />
      <Footer />
    </main>
  );
}
