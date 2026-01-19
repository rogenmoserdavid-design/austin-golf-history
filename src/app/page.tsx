"use client";

import { useEffect } from "react";
import { useLenis } from "@/hooks/useLenis";
import { useGSAP } from "@/hooks/useGSAP";
import { ScrollProgress } from "@/components/core/ScrollProgress";
import { FloatingNav, MobileProgress } from "@/components/core/FloatingNav";

// Chapter components
import { Prologue } from "@/components/chapters/Prologue";
import { Era1Pioneer } from "@/components/chapters/Era1Pioneer";
import { Era2Teacher } from "@/components/chapters/Era2Teacher";
import { Era3Breakthrough } from "@/components/chapters/Era3Breakthrough";
import { Era4Champions } from "@/components/chapters/Era4Champions";
import { Era5Renaissance } from "@/components/chapters/Era5Renaissance";
import { Epilogue } from "@/components/chapters/Epilogue";

// Chapter navigation data
const chapters = [
  { id: "prologue", title: "Prologue", era: "The Land Before Golf" },
  { id: "era-pioneer", title: "The Pioneer", era: "1899-1920" },
  { id: "era-teacher", title: "The Teacher", era: "Harvey Penick" },
  { id: "era-breakthrough", title: "The Breakthrough", era: "1950" },
  { id: "era-champions", title: "The Champions", era: "Crenshaw & Kite" },
  { id: "era-renaissance", title: "The Renaissance", era: "Modern Era" },
  { id: "epilogue", title: "Epilogue", era: "The Legacy Continues" },
];

export default function Home() {
  // Initialize smooth scrolling and GSAP
  useLenis();
  useGSAP();

  // Preload critical fonts
  useEffect(() => {
    document.fonts.ready.then(() => {
      document.body.classList.add("fonts-loaded");
    });
  }, []);

  return (
    <main className="relative">
      {/* Progress indicator */}
      <ScrollProgress />

      {/* Navigation */}
      <FloatingNav chapters={chapters} />
      <MobileProgress chapters={chapters} />

      {/* Chapters */}
      <Prologue />
      <Era1Pioneer />
      <Era2Teacher />
      <Era3Breakthrough />
      <Era4Champions />
      <Era5Renaissance />
      <Epilogue />

      {/* Footer */}
      <footer className="bg-golf-navy py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-golf-cream/60 text-sm mb-4">
            A journey through 125 years of Austin golf history
          </p>
          <p className="text-golf-gold font-playfair text-lg">
            The History of Austin Golf
          </p>
          <p className="text-golf-cream/40 text-xs mt-6">
            © {new Date().getFullYear()} Mackenzie Club. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
