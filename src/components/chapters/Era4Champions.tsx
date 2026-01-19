"use client";

import { ParallaxImage } from "@/components/core/ParallaxImage";
import { AnimatedText, SectionHeading, BodyText, AnimatedQuote } from "@/components/core/AnimatedText";
import { PinnedSection } from "@/components/core/PinnedSection";

export function Era4Champions() {
  return (
    <section
      id="era-champions"
      data-era="champions"
      className="relative bg-gradient-to-b from-golf-cream to-amber-50"
    >
      {/* Hero Image - Crenshaw's Emotional Victory */}
      <div className="relative h-screen">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&q=80"
          alt="Ben Crenshaw's emotional 1995 Masters victory"
          speed={0.5}
          overlay={true}
          overlayOpacity={0.4}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <AnimatedText
              as="h1"
              className="font-playfair text-6xl md:text-8xl mb-6 drop-shadow-2xl"
            >
              The Champions
            </AnimatedText>
            <AnimatedText
              as="p"
              className="text-xl md:text-2xl font-light tracking-wide drop-shadow-lg"
              delay={0.2}
            >
              Two Boys, One Teacher, Eternal Glory
            </AnimatedText>
            <p className="text-golf-cream/70 mt-4">3 min read</p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-6 py-24">
        <SectionHeading className="text-golf-charcoal mb-8">Austin's Greatest Students</SectionHeading>

        <BodyText className="text-golf-charcoal/80 mb-6">
          They came to Austin Country Club as young boys, barely tall enough to
          swing a golf club properly. Harvey Penick saw something special in both
          of them—not just talent, but character, humility, and a love for the
          game that would carry them to the pinnacle of professional golf.
        </BodyText>

        <BodyText className="text-golf-charcoal/80">
          Ben Crenshaw and Tom Kite would become more than champions. They would
          become living testaments to Penick's philosophy that golf, played right,
          reveals the best in us.
        </BodyText>
      </div>

      {/* Tom Kite Section */}
      <PinnedSection duration={2}>
        <div className="relative min-h-screen flex items-center">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1591491653056-4e9d563a42de?w=1920&q=80"
            alt="Tom Kite winning the 1992 US Open"
            speed={0.3}
            overlay={true}
            overlayOpacity={0.5}
          />
          <div className="relative z-10 container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="hidden md:block" />
              <div className="bg-golf-navy/90 p-10 rounded-lg backdrop-blur-sm">
                <SectionHeading className="text-golf-cream mb-6">The Grinder</SectionHeading>

                <BodyText className="text-golf-cream/90 mb-4">
                  Tom Kite embodied everything Harvey Penick taught about steady,
                  methodical improvement. No flash, no ego—just relentless dedication
                  to getting better every single day.
                </BodyText>

                <BodyText className="text-golf-cream/90 mb-6">
                  By 1992, Kite had won 19 PGA Tour events and been the tour's leading
                  money winner. But one thing eluded him: a major championship.
                </BodyText>

                <div className="border-l-4 border-golf-gold pl-6 my-8">
                  <p className="text-xl font-playfair italic text-golf-cream/90">
                    "Harvey taught me that golf is a game of recovery. Not how well you hit
                    perfect shots, but how well you handle the imperfect ones."
                  </p>
                  <p className="text-golf-gold mt-2">— Tom Kite</p>
                </div>

                <BodyText className="text-golf-cream/90">
                  At Pebble Beach in June 1992, in brutal wind and rain, Kite shot a
                  final-round 72—the only player to break par. At 42 years old, he
                  finally claimed his major.
                </BodyText>
              </div>
            </div>
          </div>
        </div>
      </PinnedSection>

      {/* Ben Crenshaw - First Masters */}
      <div className="max-w-4xl mx-auto px-6 py-24 bg-golf-cream">
        <SectionHeading className="text-golf-charcoal mb-8">Gentle Ben</SectionHeading>

        <BodyText className="text-golf-charcoal/80 mb-6">
          If Tom Kite was the grinder, Ben Crenshaw was the artist. His swing
          was pure poetry, his putting stroke a thing of beauty. But more than
          technique, Crenshaw possessed something deeper—an almost spiritual
          connection to golf's history and tradition.
        </BodyText>

        <BodyText className="text-golf-charcoal/80 mb-6">
          In 1984, at age 32, Crenshaw won his first Masters. It was a moment
          of triumph, but also validation of everything Harvey Penick had taught
          him about patience, touch, and trusting your natural gifts.
        </BodyText>

        <BodyText className="text-golf-charcoal/80">
          But it was his second Masters, eleven years later, that would become
          the most emotional victory in golf history.
        </BodyText>
      </div>

      {/* The 1995 Masters - Emotional Centerpiece */}
      <div className="relative min-h-screen bg-gradient-to-b from-amber-800 to-amber-950">
        <div className="max-w-6xl mx-auto px-6 py-32">
          <div className="text-center mb-16">
            <AnimatedText
              as="h2"
              className="font-playfair text-5xl md:text-7xl text-amber-100 mb-4"
            >
              April 1995
            </AnimatedText>
            <AnimatedText
              as="p"
              className="text-xl md:text-2xl text-amber-200/80"
              delay={0.2}
            >
              A Victory Written in Heaven
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=1920&q=80"
                alt="Harvey Penick and Ben Crenshaw"
                speed={0.2}
                overlay={true}
                overlayOpacity={0.2}
              />
            </div>

            <div className="space-y-6 text-amber-100">
              <BodyText className="text-amber-100/90">
                On April 2, 1995, Harvey Penick died at age 90. Ben Crenshaw,
                already in Augusta preparing for the Masters, flew home to Austin
                to serve as a pallbearer at his beloved teacher's funeral.
              </BodyText>

              <BodyText className="text-amber-100/90">
                The funeral was Sunday. The Masters began Thursday. Crenshaw,
                exhausted and grief-stricken, stood on the first tee not knowing
                if he could even compete.
              </BodyText>

              <div className="border-l-4 border-amber-400 pl-6">
                <p className="text-2xl font-playfair italic text-amber-50">
                  "I had a 15th club in my bag that week."
                </p>
                <p className="text-golf-gold mt-2">— Ben Crenshaw</p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-amber-100/90">
            <BodyText className="text-amber-100/90">
              What happened that week defied logic. Crenshaw, 43 years old and
              winless in nearly three years, played with a serene confidence that
              seemed to come from somewhere beyond himself.
            </BodyText>

            <BodyText className="text-amber-100/90">
              His putting—always his strength—became otherworldly. He made
              everything. Long putts. Short putts. Breaking putts that seemed
              impossible. It was as if Harvey Penick himself was guiding the ball.
            </BodyText>

            <BodyText className="text-amber-100/90">
              Coming to the 18th hole Sunday with a one-shot lead, Crenshaw hit
              a perfect approach to 15 feet. The putt for victory rolled true,
              and when it dropped, Crenshaw collapsed in tears on the green.
            </BodyText>

            <div className="border-l-4 border-amber-400 pl-6 my-8">
              <p className="text-2xl font-playfair italic text-amber-50">
                "I had a 15th club in my bag. Harvey was with me all week. I could
                feel him. I'm sure he was with me today. This is for Harvey."
              </p>
              <p className="text-golf-gold mt-2">— Ben Crenshaw, moments after winning</p>
            </div>

            <BodyText className="text-amber-100/90 text-xl">
              It remains the most emotionally charged victory in Masters history—
              a student's final tribute to his teacher, played out on golf's
              grandest stage.
            </BodyText>
          </div>
        </div>
      </div>

      {/* Legacy */}
      <div className="max-w-4xl mx-auto px-6 py-24 bg-golf-cream">
        <SectionHeading className="text-golf-charcoal mb-8">The Little Red Book Lives On</SectionHeading>

        <BodyText className="text-golf-charcoal/80 mb-6">
          Between them, Ben Crenshaw and Tom Kite won three major championships,
          38 PGA Tour events, and countless hearts. But their greatest
          achievement wasn't measured in trophies.
        </BodyText>

        <BodyText className="text-golf-charcoal/80 mb-6">
          They proved that Harvey Penick's simple wisdom—"Take dead aim,"
          "The player who expects bad lies and gets them doesn't get upset"—
          could carry two boys from Austin all the way to golf immortality.
        </BodyText>

        <BodyText className="text-golf-charcoal/80 mb-8">
          They showed that character matters as much as talent, that humility
          is strength, and that a teacher's influence can echo through
          generations.
        </BodyText>

        <AnimatedQuote author="Harvey Penick, The Little Red Book">
          A good teacher will find a way to help each student understand. But
          the best students—the ones who become champions—they teach us too.
        </AnimatedQuote>
      </div>

      {/* Closing Image */}
      <div className="relative h-96">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&q=80"
          alt="Champions forever"
          speed={0.3}
          overlay={true}
          overlayOpacity={0.4}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-golf-cream to-transparent" />
      </div>
    </section>
  );
}
