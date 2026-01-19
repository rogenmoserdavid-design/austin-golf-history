"use client";

import { useRef } from "react";
import { ParallaxImage } from "@/components/core/ParallaxImage";
import { AnimatedText, SectionHeading, BodyText, AnimatedQuote } from "@/components/core/AnimatedText";
import { PinnedSection } from "@/components/core/PinnedSection";

export function Era2Teacher() {
  return (
    <section
      id="era-teacher"
      data-era="teacher"
      className="relative min-h-screen bg-gradient-to-b from-golf-navy via-emerald-950 to-golf-navy"
    >
      {/* Hero Section - Harvey's Philosophy */}
      <div className="relative h-screen">
        <ParallaxImage
          src="/images/eras/teacher/penick-teaching.jpg"
          alt="Harvey Penick teaching at Austin Country Club"
          speed={0.4}
          overlay={true}
          overlayOpacity={0.6}
          kenBurns={true}
          priority={true}
          className="absolute inset-0"
        />

        <div className="relative z-10 container mx-auto px-6 h-full flex items-center justify-center">
          <div className="max-w-4xl text-center">
            <AnimatedText
              as="h1"
              className="text-6xl md:text-8xl font-playfair text-golf-cream mb-8"
              animation="chars"
              stagger={0.03}
            >
              The Teacher
            </AnimatedText>

            <BodyText className="text-xl md:text-2xl text-golf-cream/80 mb-4">
              4 min read
            </BodyText>

            <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Opening Quote */}
      <div className="relative py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <AnimatedQuote author="Harvey Penick">
            Take dead aim.
          </AnimatedQuote>
        </div>
      </div>

      {/* The Young Pro */}
      <div className="relative py-24 px-6">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading className="text-emerald-400 mb-8">
              A Young Pro at Nineteen
            </SectionHeading>

            <div className="space-y-6">
              <BodyText className="text-golf-cream/90">
                In 1923, at just nineteen years old, Harvey Penick became the head professional
                at Austin Country Club. It was a position he would hold for fifty years, becoming
                one of the most influential teachers in golf history.
              </BodyText>

              <BodyText className="text-golf-cream/90">
                But Harvey never saw himself as a guru or innovator. He was simply a student of
                the game who loved to help others discover their own potential. His teaching
                philosophy was remarkably simple: observe, encourage, and keep it natural.
              </BodyText>

              <BodyText className="text-golf-cream/90">
                While other teachers of his era promoted complex theories and mechanical systems,
                Harvey believed in the wisdom of keeping golf simple. "The woods are full of
                long hitters," he would say, pointing instead to the importance of the short game
                and course management.
              </BodyText>
            </div>
          </div>

          <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
            <ParallaxImage
              src="/images/eras/teacher/penick-teaching.jpg"
              alt="Harvey Penick instructing a student"
              speed={0.2}
              overlay={true}
              overlayOpacity={0.3}
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>

      {/* The Little Red Book */}
      <PinnedSection duration={2} className="py-24">
        <div className="relative min-h-screen flex items-center">
          <ParallaxImage
            src="/images/eras/teacher/little-red-book.jpg"
            alt="Harvey Penick's Little Red Book"
            speed={0.3}
            overlay={true}
            overlayOpacity={0.7}
            className="absolute inset-0"
          />

          <div className="relative z-10 container mx-auto px-6 max-w-4xl">
            <SectionHeading className="text-emerald-400 mb-12">
              The Little Red Book
            </SectionHeading>

            <div className="space-y-8 bg-golf-navy/80 p-12 rounded-lg backdrop-blur-sm">
              <BodyText className="text-golf-cream/90 text-xl">
                For decades, Harvey kept a small red notebook where he jotted down observations
                about the golf swing, teaching tips, and stories from his lessons. He never
                intended to publish it—it was simply his personal reference.
              </BodyText>

              <BodyText className="text-golf-cream/90 text-xl">
                But in 1992, at age 87 and facing serious health problems, Harvey was persuaded
                to turn his notes into a book. "Harvey Penick's Little Red Book" became an
                instant sensation, spending months on the New York Times bestseller list and
                eventually becoming the best-selling sports book of all time.
              </BodyText>

              <BodyText className="text-golf-cream/90 text-xl">
                The book's success wasn't due to revolutionary swing theory or secret tips.
                Instead, it offered timeless wisdom delivered with humility and warmth. Lessons
                like "Take dead aim" and "Clip the tee" became mantras for golfers worldwide.
              </BodyText>

              <div className="border-l-4 border-emerald-500 pl-6 mt-8">
                <p className="text-2xl font-playfair italic text-emerald-300">
                  "The more I practice, the luckier I get."
                </p>
                <p className="text-golf-gold mt-2">— Harvey Penick</p>
              </div>
            </div>
          </div>
        </div>
      </PinnedSection>

      {/* University of Texas Golf */}
      <div className="relative py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <SectionHeading className="text-emerald-400 mb-8">
              Building Champions at Texas
            </SectionHeading>

            <BodyText className="text-golf-cream/80 max-w-3xl mx-auto">
              Beyond his work at Austin Country Club, Harvey served as the coach of the
              University of Texas golf team, leading the Longhorns to unprecedented success.
            </BodyText>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-emerald-950/50 p-8 rounded-lg border border-emerald-800/30">
              <div className="text-5xl font-bold text-emerald-400 mb-4">3</div>
              <h3 className="text-xl font-semibold text-golf-cream mb-2">
                NCAA Championships
              </h3>
              <p className="text-golf-cream/70">
                Leading Texas to national titles in 1971, 1972, and 1984
              </p>
            </div>

            <div className="bg-emerald-950/50 p-8 rounded-lg border border-emerald-800/30">
              <div className="text-5xl font-bold text-emerald-400 mb-4">22</div>
              <h3 className="text-xl font-semibold text-golf-cream mb-2">
                Southwest Conference Titles
              </h3>
              <p className="text-golf-cream/70">
                Dominating college golf in the region for decades
              </p>
            </div>

            <div className="bg-emerald-950/50 p-8 rounded-lg border border-emerald-800/30">
              <div className="text-5xl font-bold text-emerald-400 mb-4">∞</div>
              <h3 className="text-xl font-semibold text-golf-cream mb-2">
                PGA Tour Winners
              </h3>
              <p className="text-golf-cream/70">
                Including major champions Ben Crenshaw, Tom Kite, and Betsy Rawls
              </p>
            </div>
          </div>

          <div className="bg-golf-navy/60 p-12 rounded-lg">
            <BodyText className="text-golf-cream/90 text-xl mb-6">
              Harvey's influence on University of Texas golf transformed Austin into a
              destination for aspiring champions. Students came not just for a college
              education, but for the chance to learn from a master teacher who had helped
              shape some of the game's greatest players.
            </BodyText>

            <BodyText className="text-golf-cream/90 text-xl">
              His success wasn't measured only in trophies and titles, but in the lasting
              impact he had on his students' lives. Many would later say that Harvey taught
              them not just how to play golf, but how to live with integrity and grace.
            </BodyText>
          </div>
        </div>
      </div>

      {/* Ben and Tom */}
      <div className="relative py-24 px-6 bg-gradient-to-b from-transparent to-emerald-950/50">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading className="text-emerald-400 mb-16 text-center">
            The Ultimate Success Story
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-playfair text-golf-gold">Ben Crenshaw</h3>

              <BodyText className="text-golf-cream/90">
                Harvey first met Ben Crenshaw when Ben was just eight years old. Over the
                decades that followed, their relationship evolved from teacher and student to
                lifelong friends. Ben would go on to win two Masters championships and become
                one of golf's most beloved figures.
              </BodyText>

              <BodyText className="text-golf-cream/90">
                In 1995, Harvey passed away on the Sunday before the Masters. Ben served as
                a pallbearer at his funeral, then flew to Augusta where he won the tournament
                in an emotional tribute to his mentor.
              </BodyText>

              <div className="border-l-4 border-emerald-500 pl-6 mt-8">
                <p className="text-xl font-playfair italic text-emerald-300">
                  "I loved Harvey Penick. He was like a second father to me."
                </p>
                <p className="text-golf-gold mt-2">— Ben Crenshaw</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-playfair text-golf-gold">Tom Kite</h3>

              <BodyText className="text-golf-cream/90">
                Tom Kite also began working with Harvey as a child, developing the consistent,
                fundamentally sound game that would make him one of golf's most reliable
                competitors. He won the 1992 U.S. Open and became the all-time leading money
                winner on the PGA Tour (a record that stood until Tiger Woods).
              </BodyText>

              <BodyText className="text-golf-cream/90">
                Both Ben and Tom credit Harvey not just with teaching them the mechanics of
                golf, but with instilling a love for the game and a commitment to continuous
                improvement that sustained their careers for decades.
              </BodyText>

              <div className="border-l-4 border-emerald-500 pl-6 mt-8">
                <p className="text-xl font-playfair italic text-emerald-300">
                  "Harvey taught me that golf is a game to be played, not conquered."
                </p>
                <p className="text-golf-gold mt-2">— Tom Kite</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legacy */}
      <div className="relative py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <SectionHeading className="text-emerald-400 mb-12">
            A Teaching Legacy
          </SectionHeading>

          <div className="space-y-8">
            <BodyText className="text-golf-cream/90 text-xl">
              Harvey Penick never sought fame or fortune. He charged modest fees for lessons,
              often teaching juniors for free. When his Little Red Book became a bestseller and
              earned him royalties in the millions, he was genuinely surprised.
            </BodyText>

            <BodyText className="text-golf-cream/90 text-xl">
              His philosophy of teaching—gentle, encouraging, focused on each student's unique
              needs—revolutionized golf instruction. Where other teachers imposed rigid systems,
              Harvey helped students discover their natural swing.
            </BodyText>

            <BodyText className="text-golf-cream/90 text-xl">
              Today, Austin's golf culture still bears Harvey's imprint. The emphasis on
              accessibility, the welcoming spirit toward new golfers, the belief that anyone
              can improve with patient practice—these values trace directly back to the humble
              pro who spent fifty years at Austin Country Club.
            </BodyText>

            <div className="mt-16 pt-16 border-t border-emerald-800/30">
              <AnimatedQuote author="Harvey Penick">
                The most important thing in golf is to enjoy it.
              </AnimatedQuote>
            </div>
          </div>
        </div>
      </div>

      {/* Transition to Next Era */}
      <div className="relative h-32 bg-gradient-to-b from-emerald-950/50 to-golf-navy"></div>
    </section>
  );
}
