"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, [speed, scale, kenBurns]);

  return (
    <div
      ref={containerRef}
      className={`parallax-container ${className}`}
    >
      <div
        ref={imageRef}
        className="absolute inset-0"
        style={{ willChange: "transform" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
          sizes="100vw"
        />
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

  useEffect(() => {
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
  }, [layers]);

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
