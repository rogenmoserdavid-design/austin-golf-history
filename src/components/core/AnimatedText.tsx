"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedTextProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  animation?: "words" | "lines" | "chars" | "fade";
  stagger?: number;
  duration?: number;
  delay?: number;
  triggerStart?: string;
}

export function AnimatedText({
  children,
  as: Component = "p",
  className = "",
  animation = "words",
  stagger = 0.03,
  duration = 0.8,
  delay = 0,
  triggerStart = "top 85%",
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);

  // Split text into animated units
  const splitText = () => {
    if (animation === "chars") {
      return children.split("").map((char, i) => (
        <span key={i} className="char inline-block" style={{ display: char === " " ? "inline" : "inline-block" }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ));
    }

    if (animation === "words") {
      return children.split(" ").map((word, i) => (
        <span key={i} className="word inline-block mr-[0.25em]">
          {word}
        </span>
      ));
    }

    if (animation === "lines") {
      return children.split("\n").map((line, i) => (
        <span key={i} className="line block overflow-hidden">
          <span className="line-inner block">{line}</span>
        </span>
      ));
    }

    return children;
  };

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const elements =
        animation === "chars"
          ? ref.current!.querySelectorAll(".char")
          : animation === "words"
          ? ref.current!.querySelectorAll(".word")
          : animation === "lines"
          ? ref.current!.querySelectorAll(".line-inner")
          : [ref.current!];

      if (elements.length === 0) return;

      if (animation === "fade") {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: triggerStart,
              toggleActions: "play none none reverse",
            },
          }
        );
      } else {
        gsap.fromTo(
          elements,
          {
            opacity: 0,
            y: animation === "lines" ? "100%" : 20,
            rotateX: animation === "chars" ? -90 : 0,
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
              start: triggerStart,
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, ref);

    return () => ctx.revert();
  }, [animation, stagger, duration, delay, triggerStart]);

  return (
    <Component
      ref={ref as React.RefObject<HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement>}
      className={`${className} ${animation !== "fade" ? "overflow-hidden" : ""}`}
    >
      {splitText()}
    </Component>
  );
}

// Pre-styled heading variants
export function DisplayHeading({
  children,
  className = "",
  ...props
}: Omit<AnimatedTextProps, "as">) {
  return (
    <AnimatedText
      as="h1"
      className={`text-display text-5xl md:text-7xl lg:text-8xl ${className}`}
      animation="chars"
      stagger={0.02}
      {...props}
    >
      {children}
    </AnimatedText>
  );
}

export function SectionHeading({
  children,
  className = "",
  ...props
}: Omit<AnimatedTextProps, "as">) {
  return (
    <AnimatedText
      as="h2"
      className={`text-heading text-3xl md:text-5xl lg:text-6xl ${className}`}
      animation="words"
      stagger={0.05}
      {...props}
    >
      {children}
    </AnimatedText>
  );
}

export function BodyText({
  children,
  className = "",
  ...props
}: Omit<AnimatedTextProps, "as">) {
  return (
    <AnimatedText
      as="p"
      className={`text-body text-lg md:text-xl ${className}`}
      animation="fade"
      {...props}
    >
      {children}
    </AnimatedText>
  );
}

// Quote component with special styling
interface QuoteProps {
  children: string;
  author?: string;
  className?: string;
}

export function AnimatedQuote({ children, author, className = "" }: QuoteProps) {
  const ref = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate the quote mark
      const quoteMark = ref.current?.querySelector(".quote-mark");
      if (quoteMark) {
        gsap.fromTo(
          quoteMark,
          { opacity: 0, x: -20 },
          {
            opacity: 0.2,
            x: 0,
            duration: 0.8,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <blockquote ref={ref} className={`relative ${className}`}>
      <span className="quote-mark absolute -left-8 -top-4 text-8xl font-playfair text-golf-gold opacity-0">
        &ldquo;
      </span>
      <p className="text-2xl md:text-3xl lg:text-4xl font-playfair italic text-golf-cream/90 leading-relaxed">
        {children}
      </p>
      {author && (
        <footer className="mt-6 text-lg text-golf-gold">— {author}</footer>
      )}
    </blockquote>
  );
}
