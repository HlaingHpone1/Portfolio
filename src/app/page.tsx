import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero/hero";
import { Navigation } from "@/components/navigation";
import { Skills } from "@/components/skill";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      {/* <Experience /> */}
      {/* <Education /> */}
      <Contact />
    </div>
  );
}
