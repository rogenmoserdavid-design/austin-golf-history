import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spanish Oaks Golf Club | Where Nature and Golf Unite",
  description:
    "Explore Spanish Oaks Golf Club, Bobby Weed's Hill Country masterpiece. Founded in 2007, this private sanctuary blends championship golf with environmental stewardship in the heart of Austin's Hill Country.",
  keywords: [
    "Spanish Oaks Golf Club",
    "Bobby Weed golf course",
    "Austin Hill Country golf",
    "Bee Cave golf",
    "Texas private golf clubs",
    "environmental golf course",
    "Austin golf history",
    "Hill Country golf courses",
  ],
  authors: [{ name: "Mackenzie Club" }],
  openGraph: {
    title: "Spanish Oaks Golf Club | Where Nature and Golf Unite",
    description:
      "Bobby Weed's Hill Country masterpiece where championship golf meets environmental stewardship.",
    url: "https://history.mackenzieclub.com/clubs/spanish-oaks",
    siteName: "The History of Austin Golf",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spanish Oaks Golf Club | Austin Golf History",
    description:
      "Bobby Weed's Hill Country masterpiece - where nature and golf unite in perfect harmony.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ParallaxImage } from "@/components/core/ParallaxImage";
import { AnimatedText, SectionHeading, BodyText } from "@/components/core/AnimatedText";

export default function SpanishOaksPage() {

  return (
    <main className="relative bg-golf-cream">
      {/* Back Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-golf-navy/90 backdrop-blur-sm text-golf-cream rounded-full hover:bg-golf-navy transition-all group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Back to History</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&q=80"
          alt="Spanish Oaks Golf Club"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-golf-navy/60 via-golf-navy/40 to-golf-cream" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <AnimatedText
            as="span"
            className="text-emerald-400 text-sm tracking-[0.3em] uppercase font-medium mb-4 block"
            animation="fade"
          >
            Founded 2007 • Bobby Weed Design
          </AnimatedText>

          <SectionHeading className="text-golf-cream mb-6 text-6xl md:text-7xl lg:text-8xl">
            Spanish Oaks
          </SectionHeading>

          <BodyText className="text-golf-cream/90 text-xl md:text-2xl max-w-3xl mx-auto">
            Where Nature and Golf Unite
          </BodyText>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 text-golf-cream/60 animate-bounce">
            <span className="text-xs tracking-wider uppercase">Scroll to Explore</span>
            <div className="w-px h-12 bg-golf-cream/40" />
          </div>
        </div>
      </section>

      {/* A Modern Vision */}
      <section className="relative py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <AnimatedText
                as="span"
                className="text-emerald-600 text-sm tracking-[0.3em] uppercase font-medium"
                animation="fade"
              >
                The Beginning
              </AnimatedText>
            </div>

            <SectionHeading className="text-golf-navy mb-8">
              A Modern Vision
            </SectionHeading>

            <BodyText className="text-golf-charcoal/80 text-lg leading-relaxed mb-6">
              When Spanish Oaks opened in 2007, it represented a new approach to Texas golf.
              Rather than imposing upon the Hill Country landscape, the course would flow with it.
              Rather than clearing every tree and leveling every slope, it would celebrate the
              natural contours that made this land special.
            </BodyText>

            <BodyText className="text-golf-charcoal/80 text-lg leading-relaxed mb-6">
              This philosophy attracted members who valued more than just golf—they sought an
              experience that honored the environment while delivering championship-caliber play.
              Spanish Oaks would become known not for what it conquered, but for what it preserved.
            </BodyText>

            <BodyText className="text-golf-charcoal/80 text-lg leading-relaxed">
              From its first day, Spanish Oaks established itself as a sanctuary where the game
              and nature exist in perfect harmony.
            </BodyText>
          </div>
        </div>
      </section>

      {/* Bobby Weed's Philosophy */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200&q=80"
                alt="Bobby Weed's design philosophy at Spanish Oaks"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
            </div>

            {/* Content */}
            <div>
              <div className="mb-6">
                <AnimatedText
                  as="span"
                  className="text-emerald-600 text-sm tracking-[0.3em] uppercase font-medium"
                  animation="fade"
                >
                  The Architect
                </AnimatedText>
              </div>

              <SectionHeading className="text-golf-navy mb-6">
                Bobby Weed&apos;s Philosophy
              </SectionHeading>

              <BodyText className="text-golf-charcoal/80 text-lg leading-relaxed mb-6">
                Bobby Weed, working in collaboration with the Fazio design team, brought a
                distinctive vision to Spanish Oaks. His philosophy was simple: let the land
                dictate the golf holes, not the other way around.
              </BodyText>

              <BodyText className="text-golf-charcoal/80 text-lg leading-relaxed mb-6">
                Every fairway follows the natural elevation changes. Every green site was chosen
                for how it fits into the landscape. Weed&apos;s routing respects century-old oaks,
                preserves native grasses, and works with—not against—the dramatic Hill Country
                topography.
              </BodyText>

              <BodyText className="text-golf-charcoal/80 text-lg leading-relaxed">
                The result is a course that feels timeless, as if it had always been part of
                this land. Players often remark that Spanish Oaks doesn&apos;t feel built—it feels
                discovered.
              </BodyText>
            </div>
          </div>
        </div>
      </section>

      {/* Hill Country Canvas */}
      <section className="relative py-24 md:py-32 bg-golf-navy text-golf-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="mb-6">
              <AnimatedText
                as="span"
                className="text-emerald-400 text-sm tracking-[0.3em] uppercase font-medium"
                animation="fade"
              >
                The Setting
              </AnimatedText>
            </div>

            <SectionHeading className="text-golf-cream mb-8">
              Hill Country Canvas
            </SectionHeading>

            <BodyText className="text-golf-cream/80 text-lg leading-relaxed">
              Nestled in the heart of the Texas Hill Country, Spanish Oaks occupies some of the
              most dramatic golf terrain in Austin. Rolling hills, native limestone outcroppings,
              centuries-old oak trees, and sweeping vistas create a canvas that changes with
              every season and every hole.
            </BodyText>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 bg-golf-navy-light rounded-2xl border border-emerald-700/20">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <span className="text-3xl">🌳</span>
              </div>
              <h3 className="text-xl font-playfair text-emerald-300 mb-4">Ancient Oaks</h3>
              <p className="text-golf-cream/70 leading-relaxed">
                Hundred-year-old oak trees frame fairways and guard greens, providing both
                challenge and breathtaking beauty.
              </p>
            </div>

            <div className="text-center p-8 bg-golf-navy-light rounded-2xl border border-emerald-700/20">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <span className="text-3xl">⛰️</span>
              </div>
              <h3 className="text-xl font-playfair text-emerald-300 mb-4">Elevation Changes</h3>
              <p className="text-golf-cream/70 leading-relaxed">
                Dramatic elevation shifts create visual interest and strategic variety, with
                holes playing both uphill and down through natural valleys.
              </p>
            </div>

            <div className="text-center p-8 bg-golf-navy-light rounded-2xl border border-emerald-700/20">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <span className="text-3xl">🪨</span>
              </div>
              <h3 className="text-xl font-playfair text-emerald-300 mb-4">Native Limestone</h3>
              <p className="text-golf-cream/70 leading-relaxed">
                Limestone outcroppings and natural rock formations add texture and character,
                reminding players they&apos;re in true Hill Country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Stewardship */}
      <section className="relative py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <AnimatedText
                as="span"
                className="text-emerald-600 text-sm tracking-[0.3em] uppercase font-medium"
                animation="fade"
              >
                Sustainability
              </AnimatedText>
            </div>

            <SectionHeading className="text-golf-navy mb-8">
              Environmental Stewardship
            </SectionHeading>

            <BodyText className="text-golf-charcoal/80 text-lg leading-relaxed mb-6">
              Spanish Oaks was designed with environmental responsibility at its core. The course
              protects native habitat, minimizes water usage through careful turf management, and
              preserves wildlife corridors that allow deer, foxes, and birds to thrive alongside
              the golf course.
            </BodyText>

            <BodyText className="text-golf-charcoal/80 text-lg leading-relaxed mb-6">
              Native grasses and wildflowers are encouraged in natural areas, reducing the need
              for intensive maintenance. Irrigation is targeted and efficient, focusing only on
              playing surfaces while allowing surrounding areas to remain wild and natural.
            </BodyText>

            <BodyText className="text-golf-charcoal/80 text-lg leading-relaxed mb-8">
              This commitment to stewardship means that Spanish Oaks isn&apos;t just a golf course—it&apos;s
              a protected sanctuary where Hill Country ecology and championship golf coexist in
              remarkable harmony.
            </BodyText>

            {/* Stats Box */}
            <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-emerald-600 text-sm uppercase tracking-wider mb-2">
                    Acres Protected
                  </div>
                  <div className="text-3xl font-playfair text-golf-navy">200+</div>
                </div>
                <div>
                  <div className="text-emerald-600 text-sm uppercase tracking-wider mb-2">
                    Native Species
                  </div>
                  <div className="text-3xl font-playfair text-golf-navy">50+</div>
                </div>
                <div>
                  <div className="text-emerald-600 text-sm uppercase tracking-wider mb-2">
                    Oak Trees
                  </div>
                  <div className="text-3xl font-playfair text-golf-navy">1,000+</div>
                </div>
                <div>
                  <div className="text-emerald-600 text-sm uppercase tracking-wider mb-2">
                    Water Savings
                  </div>
                  <div className="text-3xl font-playfair text-golf-navy">40%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Moments */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-emerald-900 to-green-900 text-golf-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="mb-6">
              <AnimatedText
                as="span"
                className="text-emerald-400 text-sm tracking-[0.3em] uppercase font-medium"
                animation="fade"
              >
                The Course
              </AnimatedText>
            </div>

            <SectionHeading className="text-golf-cream mb-8">
              Signature Moments
            </SectionHeading>

            <BodyText className="text-golf-cream/80 text-lg leading-relaxed">
              While every hole at Spanish Oaks offers its own character, a few stand out as
              particularly memorable expressions of Weed&apos;s design philosophy.
            </BodyText>
          </div>

          {/* Hole Highlights */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1592919505780-303950717480?w=800&q=80"
                  alt="Spanish Oaks signature par 3"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-4xl font-playfair text-emerald-300">7</div>
                  <div className="text-xs text-golf-cream/60 uppercase tracking-wider">
                    Par 3 • 185 yards
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-playfair text-emerald-300 mb-3">Cliffside Drama</h3>
              <p className="text-golf-cream/70 leading-relaxed text-sm">
                This breathtaking par 3 plays from an elevated tee to a green perched on a
                natural shelf. The view alone is worth the round, but the shot demands precision.
              </p>
            </div>

            <div className="group">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1591491653056-4e9d563a42de?w=800&q=80"
                  alt="Spanish Oaks signature par 5"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-4xl font-playfair text-emerald-300">14</div>
                  <div className="text-xs text-golf-cream/60 uppercase tracking-wider">
                    Par 5 • 575 yards
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-playfair text-emerald-300 mb-3">Risk and Reward</h3>
              <p className="text-golf-cream/70 leading-relaxed text-sm">
                A sweeping dogleg that tempts big hitters to take on the corner. Length players
                can reach in two, but the green complex punishes anything less than perfect.
              </p>
            </div>

            <div className="group">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80"
                  alt="Spanish Oaks finishing hole"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-4xl font-playfair text-emerald-300">18</div>
                  <div className="text-xs text-golf-cream/60 uppercase tracking-wider">
                    Par 4 • 435 yards
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-playfair text-emerald-300 mb-3">Grand Finale</h3>
              <p className="text-golf-cream/70 leading-relaxed text-sm">
                The closing hole frames the clubhouse beautifully, climbing uphill to a green
                guarded by ancient oaks. A worthy finish to an unforgettable round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Spanish Oaks Experience */}
      <section className="relative py-24 md:py-32 bg-golf-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <AnimatedText
                as="span"
                className="text-emerald-600 text-sm tracking-[0.3em] uppercase font-medium"
                animation="fade"
              >
                The Culture
              </AnimatedText>
            </div>

            <SectionHeading className="text-golf-navy mb-8">
              The Spanish Oaks Experience
            </SectionHeading>

            <BodyText className="text-golf-charcoal/80 text-lg leading-relaxed mb-6">
              Spanish Oaks cultivates an intimate member culture built on shared appreciation for
              thoughtful golf and natural beauty. The club attracts those who value substance over
              spectacle—players who understand that the best golf experiences come from harmony
              between course, environment, and community.
            </BodyText>

            <BodyText className="text-golf-charcoal/80 text-lg leading-relaxed mb-6">
              With a limited membership, the course never feels crowded. Rounds proceed at a
              relaxed pace, allowing players to fully absorb the Hill Country setting. The
              atmosphere is welcoming but refined, emphasizing respect for the game, the course,
              and fellow members.
            </BodyText>

            <BodyText className="text-golf-charcoal/80 text-lg leading-relaxed">
              This is golf as it was meant to be: challenging, beautiful, and deeply connected to
              the land. Spanish Oaks doesn&apos;t just offer a round of golf—it offers sanctuary from
              the ordinary.
            </BodyText>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="relative py-24 md:py-32 bg-golf-navy text-golf-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <SectionHeading className="text-golf-cream mb-4">
                By The Numbers
              </SectionHeading>
              <BodyText className="text-golf-cream/60">
                Essential facts about Spanish Oaks Golf Club
              </BodyText>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-8 bg-golf-navy-light rounded-2xl border border-emerald-700/20">
                <div className="text-emerald-400 text-sm uppercase tracking-wider mb-2">
                  Year Opened
                </div>
                <div className="text-4xl font-playfair text-golf-cream mb-2">2007</div>
              </div>

              <div className="text-center p-8 bg-golf-navy-light rounded-2xl border border-emerald-700/20">
                <div className="text-emerald-400 text-sm uppercase tracking-wider mb-2">
                  Designer
                </div>
                <div className="text-2xl font-playfair text-golf-cream mb-2">Bobby Weed</div>
                <div className="text-xs text-golf-cream/50">(Fazio collaboration)</div>
              </div>

              <div className="text-center p-8 bg-golf-navy-light rounded-2xl border border-emerald-700/20">
                <div className="text-emerald-400 text-sm uppercase tracking-wider mb-2">
                  Par / Yardage
                </div>
                <div className="text-4xl font-playfair text-golf-cream mb-2">72</div>
                <div className="text-xl text-golf-cream/70">7,200 yards</div>
              </div>

              <div className="text-center p-8 bg-golf-navy-light rounded-2xl border border-emerald-700/20">
                <div className="text-emerald-400 text-sm uppercase tracking-wider mb-2">
                  Holes
                </div>
                <div className="text-4xl font-playfair text-golf-cream mb-2">18</div>
              </div>

              <div className="text-center p-8 bg-golf-navy-light rounded-2xl border border-emerald-700/20">
                <div className="text-emerald-400 text-sm uppercase tracking-wider mb-2">
                  Type
                </div>
                <div className="text-2xl font-playfair text-golf-cream mb-2">Private</div>
              </div>

              <div className="text-center p-8 bg-golf-navy-light rounded-2xl border border-emerald-700/20">
                <div className="text-emerald-400 text-sm uppercase tracking-wider mb-2">
                  Location
                </div>
                <div className="text-xl font-playfair text-golf-cream mb-2">Bee Cave, TX</div>
              </div>

              <div className="text-center p-8 bg-golf-navy-light rounded-2xl border border-emerald-700/20">
                <div className="text-emerald-400 text-sm uppercase tracking-wider mb-2">
                  Acreage
                </div>
                <div className="text-4xl font-playfair text-golf-cream mb-2">200+</div>
              </div>

              <div className="text-center p-8 bg-golf-navy-light rounded-2xl border border-emerald-700/20">
                <div className="text-emerald-400 text-sm uppercase tracking-wider mb-2">
                  Known For
                </div>
                <div className="text-lg font-playfair text-golf-cream leading-snug">
                  Natural Integration
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Clubs */}
      <section className="relative py-16 bg-golf-cream text-center">
        <div className="container mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-golf-navy text-golf-cream rounded-full hover:bg-emerald-800 transition-all group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Austin Golf History</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-golf-navy py-12 text-center border-t border-emerald-700/20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-golf-cream/60 text-sm mb-4">
            Spanish Oaks Golf Club • Where Nature and Golf Unite
          </p>
          <p className="text-golf-gold font-playfair text-lg">
            The History of Austin Golf
          </p>
          <p className="text-golf-cream/40 text-xs mt-6">
            © {new Date().getFullYear()} Mackenzie Club. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
