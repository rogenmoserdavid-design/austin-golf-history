"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

// Alternative: GSAP-based progress with chapter indicators
export function ChapterProgress({
  chapters,
}: {
  chapters: { id: string; title: string }[];
}) {
  const [progress, setProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setProgress(scrollPercent);

      // Determine active chapter
      chapters.forEach((chapter, index) => {
        const element = document.getElementById(chapter.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom > 0) {
            setActiveChapter(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [chapters]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Main progress bar */}
      <div className="h-1 bg-golf-navy/10">
        <div
          ref={progressRef}
          className="h-full bg-golf-gold transition-all duration-100 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Chapter markers */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        {chapters.map((_, index) => (
          <div
            key={index}
            className="flex-1 relative"
            style={{ borderRight: index < chapters.length - 1 ? "1px solid rgba(201, 169, 98, 0.3)" : "none" }}
          >
            {index === activeChapter && (
              <motion.div
                layoutId="chapter-indicator"
                className="absolute inset-0 bg-golf-gold/20"
                transition={{ duration: 0.3 }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
