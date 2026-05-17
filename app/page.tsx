import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { BuiltBy } from "@/components/sections/BuiltBy";
import { Capabilities } from "@/components/sections/Capabilities";
import { Process } from "@/components/sections/Process";
import { OldWay } from "@/components/sections/OldWay";
import { Thesis } from "@/components/sections/Thesis";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <BuiltBy />
        <Capabilities />
        <Process />
        <OldWay />
        <Thesis />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
