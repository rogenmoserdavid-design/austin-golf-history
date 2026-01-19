"use client";

import { ParallaxImage } from "@/components/core/ParallaxImage";
import { AnimatedText, SectionHeading, BodyText, AnimatedQuote } from "@/components/core/AnimatedText";
import { PinnedSection } from "@/components/core/PinnedSection";

export function Era1Pioneer() {
  return (
    <section
      id="era-pioneer"
      data-era="pioneer"
      className="relative bg-golf-cream"
    >
      {/* Opening: Lewis Hancock's Vision */}
      <div className="relative min-h-screen flex items-center">
        <ParallaxImage
          src="/images/eras/pioneer/hancock.jpg"
          alt="Lewis Hancock and the founding of Austin Country Club"
          speed={0.5}
          kenBurns={true}
          overlay={true}
          overlayOpacity={0.3}
        />
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <AnimatedText
              as="span"
              className="text-sm uppercase tracking-widest text-era-pioneer font-semibold mb-4 block"
            >
              Chapter One: 1899-1920
            </AnimatedText>
            <SectionHeading className="text-golf-charcoal mb-6">
              The Pioneer
            </SectionHeading>
            <BodyText className="text-golf-charcoal/80 text-lg mb-4">
              In 1899, Lewis Hancock brought a dream to the Texas capital—a vision of manicured fairways and genteel competition that would transform Austin into a golf destination.
            </BodyText>
            <BodyText className="text-golf-charcoal/70 text-sm italic">
              4 min read
            </BodyText>
          </div>
        </div>
      </div>

      {/* Austin Country Club Founded */}
      <PinnedSection duration={2}>
        <div className="relative min-h-screen flex items-center">
          <ParallaxImage
            src="/images/eras/pioneer/early-acc.jpg"
            alt="Early Austin Country Club"
            speed={0.3}
            kenBurns={true}
            overlay={true}
            overlayOpacity={0.5}
          />
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-2xl bg-golf-navy/80 p-12 rounded-lg backdrop-blur-sm">
              <SectionHeading className="text-golf-cream mb-6">
                A Course in the Wilderness
              </SectionHeading>
              <BodyText className="text-golf-cream/90 mb-4">
                The Austin Country Club, founded by Lewis Hancock in 1899, was more than a golf course. It was a statement of civic ambition—a place where Austin's leaders could gather, compete, and build the city's future.
              </BodyText>
              <BodyText className="text-golf-cream/90 mb-4">
                Carved from rugged Texas terrain, the early course was primitive by modern standards. Yet it captured imaginations. Members walked dusty fairways under the hot sun, dreaming of birdies and better lies.
              </BodyText>
              <BodyText className="text-golf-cream/80 text-sm">
                1899 • Austin Country Club established
              </BodyText>
            </div>
          </div>
        </div>
      </PinnedSection>

      {/* Harvey Penick's Beginning */}
      <div className="relative min-h-screen flex items-center">
        <ParallaxImage
          src="/images/eras/pioneer/young-penick.jpg"
          alt="Young Harvey Penick as a caddie"
          speed={0.5}
          kenBurns={true}
          overlay={true}
          overlayOpacity={0.3}
        />
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="max-w-3xl ml-auto">
            <SectionHeading className="text-golf-charcoal mb-6">
              The Caddie Who Would Change Everything
            </SectionHeading>
            <BodyText className="text-golf-charcoal/80 mb-4">
              Among the caddies at Austin Country Club was an eight-year-old boy named Harvey Penick. Small for his age, he carried bags twice his size and studied every swing with quiet intensity.
            </BodyText>
            <BodyText className="text-golf-charcoal/80 mb-4">
              No one could have known then that this boy would become one of golf's greatest teachers—a man whose Little Red Book would sell millions and whose students would win major championships.
            </BodyText>
            <BodyText className="text-golf-charcoal/80">
              But even then, Harvey was learning. Every round he caddied was a lesson. Every golfer he watched became a teacher.
            </BodyText>
          </div>
        </div>
      </div>

      {/* Quote from the Era */}
      <div className="relative py-32 bg-era-pioneer/10">
        <div className="container mx-auto px-6">
          <AnimatedQuote author="Harvey Penick">
            Take dead aim.
          </AnimatedQuote>
        </div>
      </div>

      {/* The Early Days */}
      <PinnedSection duration={2}>
        <div className="relative min-h-screen flex items-center">
          <ParallaxImage
            src="/images/eras/pioneer/early-golfers.jpg"
            alt="Early Austin golfers"
            speed={0.3}
            kenBurns={true}
            overlay={true}
            overlayOpacity={0.5}
          />
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-2xl bg-golf-navy/80 p-12 rounded-lg backdrop-blur-sm">
              <SectionHeading className="text-golf-cream mb-6">
                A Game Takes Root
              </SectionHeading>
              <BodyText className="text-golf-cream/90 mb-4">
                Golf in early Austin was a gentleman's pursuit. Players wore ties and jackets even in the Texas heat. Caddies lugged leather bags filled with hickory-shafted clubs.
              </BodyText>
              <BodyText className="text-golf-cream/90 mb-4">
                The game was slow to spread beyond Austin Country Club, but its influence was undeniable. Here, in this unlikely place, golf was becoming part of the city's identity.
              </BodyText>
              <BodyText className="text-golf-cream/80">
                And Harvey Penick, still just a boy, was soaking it all in—learning the game that would define his life and transform Austin into a cradle of champions.
              </BodyText>
            </div>
          </div>
        </div>
      </PinnedSection>

      {/* Closing Transition */}
      <div className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-golf-cream to-golf-charcoal/5">
        <div className="text-center">
          <AnimatedText
            as="p"
            className="text-golf-charcoal/60 text-sm uppercase tracking-widest"
          >
            Next: The Teacher
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}
