"use client";

import { useRef } from "react";
import { ParallaxImage } from "@/components/core/ParallaxImage";
import { AnimatedText, DisplayHeading, BodyText } from "@/components/core/AnimatedText";
import { PinnedSection } from "@/components/core/PinnedSection";

export function Prologue() {
  return (
    <section
      id="prologue"
      data-era="prologue"
      className="relative bg-golf-navy text-golf-cream"
    >
      {/* Hero - Full viewport parallax opening */}
      <div className="relative h-screen w-full overflow-hidden">
        <ParallaxImage
          src="/images/eras/prologue/hero.jpg"
          alt="Texas Hill Country landscape before golf arrived"
          speed={0.5}
          scale={1.3}
          kenBurns={true}
          overlay={true}
          overlayOpacity={0.5}
          priority={true}
          className="absolute inset-0"
        />

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            <DisplayHeading className="text-golf-cream mb-6">
              The Land Before Golf
            </DisplayHeading>
            <BodyText className="text-golf-cream/80 text-xl md:text-2xl">
              A story of transformation, written in the soil of Central Texas
            </BodyText>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-golf-gold text-sm uppercase tracking-widest">Scroll to begin</span>
          <svg
            className="w-6 h-6 text-golf-gold"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Pinned Section 1 - Setting the scene */}
      <PinnedSection duration={2}>
        <div className="min-h-screen bg-golf-navy flex items-center justify-center px-6">
          <div className="max-w-3xl space-y-8">
            <BodyText className="text-golf-cream text-2xl md:text-3xl leading-relaxed">
              Before the fairways, before the greens, before the first tee shot ever echoed across these hills...
            </BodyText>
            <BodyText className="text-golf-cream/80 text-xl md:text-2xl leading-relaxed" delay={0.3}>
              There was only the land.
            </BodyText>
          </div>
        </div>
      </PinnedSection>

      {/* Pinned Section 2 - The Hill Country */}
      <PinnedSection duration={2}>
        <div className="min-h-screen bg-golf-navy flex items-center justify-center px-6">
          <div className="max-w-3xl space-y-8">
            <BodyText className="text-golf-cream text-2xl md:text-3xl leading-relaxed">
              The Texas Hill Country—a landscape of rolling limestone hills, spring-fed creeks, and endless sky.
            </BodyText>
            <BodyText className="text-golf-cream/80 text-xl md:text-2xl leading-relaxed" delay={0.3}>
              A place where cedar and oak grew wild, where deer roamed freely, and where the Colorado River carved its patient path through ancient rock.
            </BodyText>
          </div>
        </div>
      </PinnedSection>

      {/* Pinned Section 3 - Before Austin */}
      <PinnedSection duration={2}>
        <div className="min-h-screen bg-golf-navy flex items-center justify-center px-6">
          <div className="max-w-3xl space-y-8">
            <BodyText className="text-golf-cream text-2xl md:text-3xl leading-relaxed">
              In the late 1800s, Austin was a frontier capital—rugged, ambitious, and utterly unaware of the Scottish game that would one day captivate its citizens.
            </BodyText>
            <BodyText className="text-golf-cream/80 text-xl md:text-2xl leading-relaxed" delay={0.3}>
              The land waited, unknowing, for its transformation.
            </BodyText>
          </div>
        </div>
      </PinnedSection>

      {/* Pinned Section 4 - The promise */}
      <PinnedSection duration={2}>
        <div className="min-h-screen bg-golf-navy flex items-center justify-center px-6">
          <div className="max-w-3xl space-y-8">
            <BodyText className="text-golf-gold text-3xl md:text-4xl leading-relaxed font-playfair italic">
              But change was coming.
            </BodyText>
            <BodyText className="text-golf-cream/80 text-xl md:text-2xl leading-relaxed" delay={0.3}>
              Soon, this wild terrain would be shaped by human hands and Scottish tradition. Soon, the crack of club against ball would join the sounds of the Hill Country.
            </BodyText>
            <BodyText className="text-golf-cream text-xl md:text-2xl leading-relaxed" delay={0.6}>
              This is the story of how Austin learned to golf.
            </BodyText>
          </div>
        </div>
      </PinnedSection>

      {/* Reading time indicator */}
      <div className="py-12 px-6 border-t border-golf-gold/20">
        <div className="max-w-4xl mx-auto flex justify-between items-center text-sm text-golf-cream/60">
          <span>Prologue</span>
          <span>2 min read</span>
        </div>
      </div>
    </section>
  );
}
