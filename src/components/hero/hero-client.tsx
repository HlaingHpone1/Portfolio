"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  showArrow?: boolean;
}

export const HeroClient = ({ showArrow }: Props) => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  if (showArrow) {
    return (
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="text-white/60 hover:text-white transition-colors"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    );
  }

  return (
    <Button
      onClick={scrollToAbout}
      size="lg"
      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8"
    >
      View My Work
    </Button>
  );
};
