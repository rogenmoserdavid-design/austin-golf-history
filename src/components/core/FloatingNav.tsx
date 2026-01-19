"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "@/hooks/useLenis";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Chapter {
  id: string;
  title: string;
  era?: string;
}

interface FloatingNavProps {
  chapters: Chapter[];
}

export function FloatingNav({ chapters }: FloatingNavProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { scrollTo } = useLenis();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Show nav after scrolling past first section
      setIsVisible(scrollTop > window.innerHeight * 0.5);

      // Determine active chapter
      chapters.forEach((chapter, index) => {
        const element = document.getElementById(chapter.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const threshold = window.innerHeight * 0.4;
          if (rect.top <= threshold && rect.bottom > threshold) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [chapters]);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      scrollTo(element, { offset: 0 });
    }
    setIsExpanded(false);
  };

  // Simplified static navigation for reduced motion
  if (prefersReducedMotion) {
    if (!isVisible) return null;

    return (
      <nav
        className="floating-nav hidden md:block"
        role="navigation"
        aria-label="Chapter navigation"
      >
        <div className="flex flex-col items-end gap-4">
          {chapters.map((chapter, index) => (
            <button
              key={chapter.id}
              onClick={() => handleNavClick(chapter.id)}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-golf-gold focus-visible:ring-offset-2 focus-visible:ring-offset-golf-navy rounded-full"
              aria-label={`Go to ${chapter.title}`}
              aria-current={activeIndex === index ? "true" : undefined}
            >
              <span className="text-sm text-golf-cream/80 whitespace-nowrap bg-golf-navy/90 px-3 py-1 rounded-full backdrop-blur-sm">
                {chapter.title}
              </span>
              <div className="relative">
                <div
                  className={`nav-dot ${activeIndex === index ? "active" : ""}`}
                />
              </div>
            </button>
          ))}
        </div>
      </nav>
    );
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="floating-nav hidden md:block"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          role="navigation"
          aria-label="Chapter navigation"
        >
          <div className="flex flex-col items-end gap-4">
            {chapters.map((chapter, index) => (
              <motion.button
                key={chapter.id}
                onClick={() => handleNavClick(chapter.id)}
                className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-golf-gold focus-visible:ring-offset-2 focus-visible:ring-offset-golf-navy rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Go to ${chapter.title}`}
                aria-current={activeIndex === index ? "true" : undefined}
              >
                {/* Label (expanded state) */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2, delay: index * 0.03 }}
                      className="text-sm text-golf-cream/80 whitespace-nowrap bg-golf-navy/90 px-3 py-1 rounded-full backdrop-blur-sm"
                    >
                      {chapter.title}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Dot */}
                <div className="relative">
                  <div
                    className={`nav-dot ${
                      activeIndex === index ? "active" : ""
                    }`}
                  />
                  {activeIndex === index && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-golf-gold/30"
                      style={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

// Simple mobile progress indicator
export function MobileProgress({
  chapters,
}: {
  chapters: { id: string; title: string }[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      chapters.forEach((chapter, index) => {
        const element = document.getElementById(chapter.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom > 0) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [chapters]);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
      <div className="flex items-center gap-2 bg-golf-navy/90 backdrop-blur-sm px-4 py-2 rounded-full">
        <span className="text-golf-cream/60 text-xs">
          {activeIndex + 1}/{chapters.length}
        </span>
        <div className="flex gap-1">
          {chapters.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-golf-gold w-4"
                  : index < activeIndex
                  ? "bg-golf-gold/50"
                  : "bg-golf-cream/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
