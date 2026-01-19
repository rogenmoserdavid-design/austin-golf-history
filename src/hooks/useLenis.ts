"use client";

import { useEffect, useRef, useCallback } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let lenisInstance: Lenis | null = null;

export function useLenis() {
  const rafRef = useRef<number | null>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current || typeof window === "undefined") return;
    isInitialized.current = true;

    // Create Lenis instance
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenisInstance.on("scroll", ScrollTrigger.update);

    // Animation frame loop
    function raf(time: number) {
      lenisInstance?.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }
    rafRef.current = requestAnimationFrame(raf);

    // Add lenis class to html
    document.documentElement.classList.add("lenis", "lenis-smooth");

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenisInstance?.destroy();
      lenisInstance = null;
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };
  }, []);

  // Scroll to function
  const scrollTo = useCallback(
    (
      target: string | number | HTMLElement,
      options?: {
        offset?: number;
        duration?: number;
        immediate?: boolean;
      }
    ) => {
      lenisInstance?.scrollTo(target, {
        offset: options?.offset ?? 0,
        duration: options?.duration ?? 1.2,
        immediate: options?.immediate ?? false,
      });
    },
    []
  );

  // Stop scrolling
  const stop = useCallback(() => {
    lenisInstance?.stop();
  }, []);

  // Start scrolling
  const start = useCallback(() => {
    lenisInstance?.start();
  }, []);

  return {
    lenis: lenisInstance,
    scrollTo,
    stop,
    start,
  };
}

// Hook for getting scroll progress
export function useScrollProgress() {
  const progressRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (lenisInstance) {
        progressRef.current = lenisInstance.progress;
      }
    };

    lenisInstance?.on("scroll", handleScroll);

    return () => {
      lenisInstance?.off("scroll", handleScroll);
    };
  }, []);

  return progressRef;
}

// Export getter for Lenis instance
export function getLenis() {
  return lenisInstance;
}
