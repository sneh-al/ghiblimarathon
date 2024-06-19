import About from "@/components/About";
import Fetures from "@/components/Fetures";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import Ready from "@/components/Ready";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Fetures />
      <Ready />
      <Footer />
    </main>
  );
}
