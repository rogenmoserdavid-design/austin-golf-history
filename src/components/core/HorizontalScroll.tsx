"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
  speed?: number; // Scroll speed multiplier
}

export function HorizontalScroll({
  children,
  className = "",
  speed = 1,
}: HorizontalScrollProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const scrollWidth = container.scrollWidth;
    const viewportWidth = window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(container, {
        x: -(scrollWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${(scrollWidth - viewportWidth) * speed}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={sectionRef} className={`overflow-hidden ${className}`}>
      <div
        ref={containerRef}
        className="horizontal-scroll-container flex items-center"
        style={{ willChange: "transform" }}
      >
        {children}
      </div>
    </div>
  );
}

// Pre-built card for horizontal scroll galleries
interface GalleryCardProps {
  children: ReactNode;
  className?: string;
  width?: string;
}

export function GalleryCard({
  children,
  className = "",
  width = "80vw",
}: GalleryCardProps) {
  return (
    <div
      className={`flex-shrink-0 ${className}`}
      style={{ width, maxWidth: "1200px" }}
    >
      {children}
    </div>
  );
}

// Horizontal scroll with snap points
interface SnapScrollProps {
  items: {
    id: string;
    content: ReactNode;
  }[];
  className?: string;
  itemWidth?: string;
}

export function SnapScroll({
  items,
  className = "",
  itemWidth = "90vw",
}: SnapScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={`flex overflow-x-auto snap-x snap-mandatory scrollbar-hide ${className}`}
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="flex-shrink-0 snap-center px-4"
          style={{ width: itemWidth }}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}

// Progress indicator for horizontal scroll
interface HorizontalProgressProps {
  total: number;
  current: number;
  className?: string;
}

export function HorizontalProgress({
  total,
  current,
  className = "",
}: HorizontalProgressProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`h-1 rounded-full transition-all duration-300 ${
            index === current
              ? "w-8 bg-golf-gold"
              : index < current
              ? "w-4 bg-golf-gold/50"
              : "w-4 bg-golf-cream/30"
          }`}
        />
      ))}
    </div>
  );
}
