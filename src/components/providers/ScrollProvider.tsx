"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollProvider ensures native scrolling works on all pages.
 * Cleans up any Lenis scroll classes when navigating away from the main page.
 */
export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // On route change, ensure scroll is enabled
    // Remove any lingering Lenis classes that might block scroll
    const html = document.documentElement;

    // If we're not on the home page, remove Lenis classes
    if (pathname !== "/") {
      html.classList.remove("lenis", "lenis-smooth", "lenis-stopped");
      // Ensure scroll is possible
      html.style.overflow = "";
      document.body.style.overflow = "";
    }

    // Reset scroll position on navigation
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
}
