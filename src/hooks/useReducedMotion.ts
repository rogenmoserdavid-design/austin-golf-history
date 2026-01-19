"use client";

import { useState, useEffect } from "react";

/**
 * Hook to detect user's reduced motion preference.
 * Returns true if the user prefers reduced motion (for accessibility).
 *
 * Usage:
 * const prefersReducedMotion = useReducedMotion();
 * if (!prefersReducedMotion) {
 *   // Run animations
 * }
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if window is available (SSR safety)
    if (typeof window === "undefined") return;

    // Get the media query
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return prefersReducedMotion;
}
