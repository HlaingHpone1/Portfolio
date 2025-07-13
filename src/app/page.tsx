import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <Experience /> */}
      {/* <Education /> */}
      <Contact />
    </div>
  );
}
