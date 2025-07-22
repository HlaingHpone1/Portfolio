import Link from "next/link";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroClient } from "./hero-client";
import BlurText from "../animation/BlurText";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-500 animate-gradient-flow">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I&apos;m{" "}
          </h1>
          <BlurText
            text="Hlaing Hpone"
            delay={100}
            animateBy="letters"
            direction="bottom"
            className="justify-center"
            textClassName="mb-8 text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
          />
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Frontend Developer Enthusiast crafting responsive, interactive user
            interfaces that engage and inspire.
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about building modern, performant web applications with
            clean code and intuitive design. I transform ideas into seamless
            digital experiences.
          </p>

          {/* Buttons + Icons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <HeroClient />
            <Link href="/hlainghpone_resume.pdf" download>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 bg-white/5 text-white hover:text-white hover:bg-white/10 px-8"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </Link>
          </div>

          <div className="flex justify-center space-x-6">
            <Link
              href="https://github.com/HlaingHpone1"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/hlainghpone/"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="mailto:hlainghpone1@gmail.com"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <Mail size={24} />
            </Link>
          </div>
        </div>

        {/* Scroll down bounce arrow */}
        <HeroClient showArrow />
      </div>
    </section>
  );
};
