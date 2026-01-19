"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PinnedSectionProps {
  children: ReactNode;
  duration?: number; // How many viewport heights to pin for
  className?: string;
  onProgress?: (progress: number) => void;
}

export function PinnedSection({
  children,
  duration = 2,
  className = "",
  onProgress,
}: PinnedSectionProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: `+=${window.innerHeight * duration}`,
        pin: contentRef.current,
        pinSpacing: true,
        onUpdate: (self) => {
          onProgress?.(self.progress);
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, [duration, onProgress]);

  return (
    <div
      ref={wrapperRef}
      className={`pinned-wrapper ${className}`}
      style={{ height: `${(duration + 1) * 100}vh` }}
    >
      <div ref={contentRef} className="pinned-content">
        {children}
      </div>
    </div>
  );
}

// Pinned section with scroll-driven content reveals
interface PinnedRevealProps {
  sections: {
    content: ReactNode;
    background?: ReactNode;
  }[];
  className?: string;
}

export function PinnedReveal({ sections, className = "" }: PinnedRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the main content
      const trigger = ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: `+=${window.innerHeight * sections.length}`,
        pin: contentRef.current,
        pinSpacing: true,
      });

      // Animate each section based on scroll progress
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        const startProgress = index / sections.length;
        const endProgress = (index + 1) / sections.length;

        // Fade in
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: `top+=${startProgress * window.innerHeight * sections.length} top`,
              end: `top+=${(startProgress + 0.2) * window.innerHeight * sections.length} top`,
              scrub: true,
            },
          }
        );

        // Fade out (except last section)
        if (index < sections.length - 1) {
          gsap.to(section, {
            opacity: 0,
            y: -30,
            ease: "power2.in",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: `top+=${(endProgress - 0.1) * window.innerHeight * sections.length} top`,
              end: `top+=${endProgress * window.innerHeight * sections.length} top`,
              scrub: true,
            },
          });
        }
      });

      return () => trigger.kill();
    }, wrapperRef);

    return () => ctx.revert();
  }, [sections]);

  return (
    <div
      ref={wrapperRef}
      className={`pinned-wrapper ${className}`}
      style={{ height: `${(sections.length + 1) * 100}vh` }}
    >
      <div ref={contentRef} className="pinned-content relative">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => { sectionRefs.current[index] = el; }}
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: index === 0 ? 1 : 0 }}
          >
            {section.background && (
              <div className="absolute inset-0 -z-10">{section.background}</div>
            )}
            {section.content}
          </div>
        ))}
      </div>
    </div>
  );
}
