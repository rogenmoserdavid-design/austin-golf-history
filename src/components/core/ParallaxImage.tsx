"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number; // -1 to 1, negative = opposite direction
  scale?: number; // Starting scale (> 1 for Ken Burns effect)
  overlay?: boolean;
  overlayOpacity?: number;
  className?: string;
  priority?: boolean;
  kenBurns?: boolean;
  unoptimized?: boolean;
}

export function ParallaxImage({
  src,
  alt,
  speed = 0.3,
  scale = 1.2,
  overlay = true,
  overlayOpacity = 0.4,
  className = "",
  priority = false,
  kenBurns = false,
  unoptimized = false,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Skip animations if user prefers reduced motion
    if (prefersReducedMotion) return;
    if (!containerRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax effect
      gsap.fromTo(
        imageRef.current,
        {
          yPercent: -speed * 50,
          scale: scale,
        },
        {
          yPercent: speed * 50,
          scale: kenBurns ? scale * 1.1 : scale,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [speed, scale, kenBurns, prefersReducedMotion]);

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div
      ref={containerRef}
      className={`parallax-container ${className}`}
    >
      {/* Loading placeholder */}
      {isLoading && !imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-golf-navy to-golf-charcoal animate-pulse" />
      )}

      {/* Error fallback */}
      {imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-golf-navy via-golf-navy-light to-golf-charcoal flex items-center justify-center">
          <div className="text-center text-golf-cream/40">
            <svg
              className="w-16 h-16 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}

      <div
        ref={imageRef}
        className="absolute inset-0"
        style={{ willChange: prefersReducedMotion ? "auto" : "transform" }}
      >
        {!imageError && (
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-cover transition-opacity duration-300 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            priority={priority}
            sizes="100vw"
            unoptimized={unoptimized}
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        )}
      </div>

      {overlay && (
        <div
          className="absolute inset-0 bg-golf-navy"
          style={{ opacity: overlayOpacity }}
        />
      )}
    </div>
  );
}

// Multi-layer parallax for depth effect
interface ParallaxLayerProps {
  layers: {
    src: string;
    alt: string;
    speed: number;
    zIndex?: number;
  }[];
  className?: string;
}

export function ParallaxLayers({ layers, className = "" }: ParallaxLayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Skip animations if user prefers reduced motion
    if (prefersReducedMotion) return;
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      layerRefs.current.forEach((layer, index) => {
        if (!layer) return;

        gsap.fromTo(
          layer,
          {
            yPercent: -layers[index].speed * 30,
          },
          {
            yPercent: layers[index].speed * 30,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [layers, prefersReducedMotion]);

  return (
    <div ref={containerRef} className={`parallax-container ${className}`}>
      {layers.map((layer, index) => (
        <div
          key={index}
          ref={(el) => { layerRefs.current[index] = el; }}
          className="absolute inset-0"
          style={{ zIndex: layer.zIndex ?? index }}
        >
          <Image
            src={layer.src}
            alt={layer.alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}
    </div>
  );
}
