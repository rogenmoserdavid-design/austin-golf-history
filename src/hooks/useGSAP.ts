"use client";

import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Use useLayoutEffect on client, useEffect on server
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGSAP() {
  const isInitialized = useRef(false);

  useIsomorphicLayoutEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    // Configure GSAP defaults
    gsap.defaults({
      ease: "power3.out",
      duration: 1,
    });

    // Configure ScrollTrigger
    ScrollTrigger.defaults({
      toggleActions: "play none none reverse",
    });

    return () => {
      // Cleanup all ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return { gsap, ScrollTrigger };
}

// Hook for creating scroll-triggered animations
export function useScrollAnimation(
  ref: React.RefObject<HTMLElement | null>,
  animation: (element: HTMLElement, gsap: typeof import("gsap").gsap) => void,
  deps: unknown[] = []
) {
  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      animation(ref.current!, gsap);
    }, ref);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, ...deps]);
}

// Hook for parallax effect
export function useParallax(
  ref: React.RefObject<HTMLElement | null>,
  speed: number = 0.5
) {
  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [ref, speed]);
}

// Hook for pinned sections
export function usePinned(
  containerRef: React.RefObject<HTMLElement | null>,
  contentRef: React.RefObject<HTMLElement | null>,
  duration: number = 2 // Multiplier for pin duration
) {
  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${window.innerHeight * duration}`,
        pin: contentRef.current,
        pinSpacing: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, contentRef, duration]);
}

// Hook for text reveal animations
export function useTextReveal(
  ref: React.RefObject<HTMLElement | null>,
  options?: {
    stagger?: number;
    duration?: number;
    delay?: number;
  }
) {
  const { stagger = 0.05, duration = 0.8, delay = 0 } = options || {};

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const words = ref.current!.querySelectorAll(".word");
      if (words.length === 0) return;

      gsap.fromTo(
        words,
        {
          opacity: 0,
          y: 20,
          rotateX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration,
          stagger,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [ref, stagger, duration, delay]);
}
