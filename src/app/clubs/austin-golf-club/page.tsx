import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Users, Trophy } from "lucide-react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/core";

export const metadata: Metadata = {
  title: "Austin Golf Club - Pete Dye Masterpiece | Austin Golf History",
  description: "Explore the history of Austin Golf Club, Pete Dye's championship masterpiece in the Texas Hill Country. Since 1984, this private club has challenged the best.",
};

// Animation utilities
const fadeInUp = "opacity-0 translate-y-8 transition-all duration-1000 ease-out";
const fadeIn = "opacity-0 transition-opacity duration-1000 ease-out";

export default function AustinGolfClubPage() {

  return (
    <main className="bg-golf-navy min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=80"
            alt="Austin Golf Club - Pete Dye Masterpiece"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-golf-navy/80 via-golf-navy/40 to-golf-navy" />
        </div>

        {/* Navigation */}
        <div className="absolute top-8 left-8 z-20 flex flex-col gap-2">
          <Link
            href="/clubs"
            className="flex items-center gap-2 text-golf-cream/80 hover:text-golf-gold transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-golf-gold rounded"
            aria-label="Back to all clubs"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            <span className="text-sm tracking-wider uppercase">Back to Clubs</span>
          </Link>
          <Breadcrumb
            items={[
              { label: "Clubs", href: "/clubs" },
              { label: "Austin Golf Club" },
            ]}
            className="hidden md:flex"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className={`${fadeInUp} animate-on-scroll`}>
            <div className="inline-block mb-6 px-4 py-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 backdrop-blur-sm">
              <span className="text-emerald-400 text-sm tracking-[0.3em] uppercase font-medium">
                Pete Dye Masterpiece
              </span>
            </div>
          </div>

          <h1 className={`text-6xl md:text-8xl font-playfair text-golf-cream mb-6 ${fadeInUp} animate-on-scroll`} style={{ animationDelay: "200ms" }}>
            Austin Golf Club
          </h1>

          <p className={`text-xl md:text-2xl text-emerald-300/80 max-w-3xl mx-auto mb-8 ${fadeInUp} animate-on-scroll`} style={{ animationDelay: "400ms" }}>
            Where Hill Country drama meets championship golf. Since 1984, Pete Dye's
            strategic brilliance has challenged the best while delighting members.
          </p>

          <div className={`flex items-center justify-center gap-8 text-golf-cream/60 ${fadeIn} animate-on-scroll`} style={{ animationDelay: "600ms" }}>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span className="text-sm">Spicewood Springs Road</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span className="text-sm">Est. 1984</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-400" />
              <span className="text-sm">Private</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-emerald-400/50 flex justify-center p-2">
            <div className="w-1 h-3 bg-emerald-400/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* A New Vision Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-950 via-green-900 to-emerald-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className={`${fadeInUp} animate-on-scroll mb-6`}>
              <span className="text-emerald-400 text-sm tracking-[0.3em] uppercase font-medium">
                Chapter One
              </span>
            </div>

            <h2 className={`text-5xl md:text-6xl font-playfair text-golf-cream mb-8 ${fadeInUp} animate-on-scroll`}>
              A New Vision
            </h2>

            <div className="space-y-6 text-golf-cream/80 text-lg leading-relaxed">
              <p className={`${fadeInUp} animate-on-scroll`}>
                In 1984, when Austin Golf Club opened its gates, it represented more than
                just another golf course. It was a bold statement: Austin deserved
                championship-caliber golf that could rival the nation's finest private clubs.
              </p>

              <p className={`${fadeInUp} animate-on-scroll`}>
                The club's founders turned to Pete Dye, already legendary for his work at
                Harbour Town, the TPC at Sawgrass, and countless other masterpieces. They
                gave him 250 acres of pristine Hill Country terrain and a simple mandate:
                create something extraordinary.
              </p>

              <p className={`${fadeInUp} animate-on-scroll`}>
                What emerged was a course that immediately earned recognition as one of
                Texas's finest. The dramatic elevation changes, strategic bunkering, and
                Dye's signature railroad ties created a layout that was both beautiful and
                brutally honest—rewarding precision while punishing wayward shots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Pete Dye Touch Section */}
      <section className="py-24 bg-golf-navy">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&q=80"
                alt="Pete Dye's Design Philosophy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-golf-navy/80 via-transparent to-transparent" />
            </div>

            <div>
              <div className={`${fadeInUp} animate-on-scroll mb-6`}>
                <span className="text-emerald-400 text-sm tracking-[0.3em] uppercase font-medium">
                  Design Philosophy
                </span>
              </div>

              <h2 className={`text-4xl md:text-5xl font-playfair text-golf-cream mb-8 ${fadeInUp} animate-on-scroll`}>
                The Pete Dye Touch
              </h2>

              <div className="space-y-6 text-golf-cream/70 leading-relaxed">
                <p className={`${fadeInUp} animate-on-scroll`}>
                  Pete Dye's design philosophy was simple but revolutionary: make players think.
                  At Austin Golf Club, every hole presents strategic choices that reward creative
                  shot-making and course management.
                </p>

                <div className={`${fadeInUp} animate-on-scroll space-y-4`}>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-golf-cream font-medium mb-1">Railroad Ties</h4>
                      <p className="text-golf-cream/60">
                        Dye's signature railroad tie bulkheads frame bunkers and water hazards,
                        creating dramatic visual impact while allowing for precise maintenance.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-golf-cream font-medium mb-1">Strategic Bunkering</h4>
                      <p className="text-golf-cream/60">
                        Bunkers placed not just for aesthetics, but to force decisions. Risk-reward
                        options exist on nearly every hole.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-golf-cream font-medium mb-1">Natural Terrain</h4>
                      <p className="text-golf-cream/60">
                        Dye worked with the Hill Country's dramatic elevation changes rather than
                        against them, creating holes that flow naturally through the landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elevation Drama Section */}
      <section className="py-24 bg-gradient-to-br from-golf-charcoal to-golf-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 35px, #c9a962 35px, #c9a962 36px)",
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className={`${fadeInUp} animate-on-scroll mb-6`}>
              <span className="text-emerald-400 text-sm tracking-[0.3em] uppercase font-medium">
                Terrain
              </span>
            </div>

            <h2 className={`text-5xl md:text-6xl font-playfair text-golf-cream mb-8 ${fadeInUp} animate-on-scroll`}>
              Elevation Drama
            </h2>

            <p className={`text-xl text-golf-cream/70 leading-relaxed ${fadeInUp} animate-on-scroll`}>
              The Hill Country's dramatic topography isn't just scenery—it's an integral part
              of the challenge. Elevation changes of over 100 feet create breathtaking vistas
              and demanding shot-making requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className={`bg-emerald-900/30 backdrop-blur-sm border border-emerald-700/30 rounded-xl p-8 ${fadeInUp} animate-on-scroll`}>
              <div className="text-5xl font-playfair text-emerald-400 mb-4">250</div>
              <div className="text-golf-cream font-medium mb-2">Acres</div>
              <div className="text-golf-cream/60 text-sm">
                Of pristine Hill Country terrain with dramatic elevation changes throughout
              </div>
            </div>

            <div className={`bg-emerald-900/30 backdrop-blur-sm border border-emerald-700/30 rounded-xl p-8 ${fadeInUp} animate-on-scroll`} style={{ animationDelay: "200ms" }}>
              <div className="text-5xl font-playfair text-emerald-400 mb-4">100+</div>
              <div className="text-golf-cream font-medium mb-2">Feet</div>
              <div className="text-golf-cream/60 text-sm">
                Of elevation change from lowest to highest points on the course
              </div>
            </div>

            <div className={`bg-emerald-900/30 backdrop-blur-sm border border-emerald-700/30 rounded-xl p-8 ${fadeInUp} animate-on-scroll`} style={{ animationDelay: "400ms" }}>
              <div className="text-5xl font-playfair text-emerald-400 mb-4">18</div>
              <div className="text-golf-cream font-medium mb-2">Unique Holes</div>
              <div className="text-golf-cream/60 text-sm">
                Each with distinct character, strategic challenges, and memorable views
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Holes Section */}
      <section className="py-24 bg-emerald-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className={`${fadeInUp} animate-on-scroll mb-6`}>
              <span className="text-emerald-400 text-sm tracking-[0.3em] uppercase font-medium">
                Memorable Moments
              </span>
            </div>

            <h2 className={`text-5xl md:text-6xl font-playfair text-golf-cream mb-8 ${fadeInUp} animate-on-scroll`}>
              Signature Holes
            </h2>
          </div>

          <div className="space-y-16 max-w-6xl mx-auto">
            {/* Hole 1 */}
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-playfair text-emerald-300">7</span>
                  </div>
                  <div>
                    <div className="text-golf-cream text-2xl font-playfair">The Island Green</div>
                    <div className="text-emerald-400/60 text-sm">Par 3 • 185 Yards</div>
                  </div>
                </div>
                <p className="text-golf-cream/70 leading-relaxed">
                  An homage to Dye's famous 17th at TPC Sawgrass, this island green par 3
                  demands precision. The green is surrounded by water with railroad tie
                  bulkheads, creating one of the most photographed holes in Texas.
                </p>
              </div>
              <div className="md:col-span-3 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1592919505780-303950717480?w=1920&q=80"
                  alt="Signature Hole - Island Green"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
              </div>
            </div>

            {/* Hole 2 */}
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1591491653056-4e9d563a42de?w=1920&q=80"
                  alt="Signature Hole - Downhill Drama"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
              </div>
              <div className="md:col-span-2 space-y-4 order-1 md:order-2">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-playfair text-emerald-300">14</span>
                  </div>
                  <div>
                    <div className="text-golf-cream text-2xl font-playfair">Downhill Drama</div>
                    <div className="text-emerald-400/60 text-sm">Par 4 • 420 Yards</div>
                  </div>
                </div>
                <p className="text-golf-cream/70 leading-relaxed">
                  A dramatic downhill par 4 that plays shorter than its yardage suggests.
                  The tee shot must navigate between bunkers to a fairway that slopes toward
                  a well-protected green with the Hill Country sprawling below.
                </p>
              </div>
            </div>

            {/* Hole 3 */}
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-playfair text-emerald-300">18</span>
                  </div>
                  <div>
                    <div className="text-golf-cream text-2xl font-playfair">The Closer</div>
                    <div className="text-emerald-400/60 text-sm">Par 4 • 450 Yards</div>
                  </div>
                </div>
                <p className="text-golf-cream/70 leading-relaxed">
                  A fitting finale that demands two excellent shots. Water guards the left
                  side of the fairway and green, while strategic bunkering penalizes anything
                  right. Par here feels like a victory.
                </p>
              </div>
              <div className="md:col-span-3 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=80"
                  alt="Signature Hole - The Closer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Experience Section */}
      <section className="py-24 bg-gradient-to-br from-golf-navy via-emerald-950 to-golf-navy">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className={`${fadeInUp} animate-on-scroll mb-6`}>
              <span className="text-emerald-400 text-sm tracking-[0.3em] uppercase font-medium">
                Beyond Golf
              </span>
            </div>

            <h2 className={`text-5xl md:text-6xl font-playfair text-golf-cream mb-8 ${fadeInUp} animate-on-scroll`}>
              The Member Experience
            </h2>

            <p className={`text-xl text-golf-cream/70 leading-relaxed ${fadeInUp} animate-on-scroll`}>
              Austin Golf Club isn't just about the course—it's about community, excellence,
              and the shared passion for golf at its finest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className={`bg-emerald-900/20 backdrop-blur-sm border border-emerald-700/30 rounded-xl p-8 ${fadeInUp} animate-on-scroll`}>
              <Trophy className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-2xl font-playfair text-golf-cream mb-4">Championship Legacy</h3>
              <p className="text-golf-cream/70 leading-relaxed">
                Host to numerous PGA Tour events and prestigious amateur championships.
                The course has tested the world's best players and earned recognition as
                one of Texas's premier championship venues.
              </p>
            </div>

            <div className={`bg-emerald-900/20 backdrop-blur-sm border border-emerald-700/30 rounded-xl p-8 ${fadeInUp} animate-on-scroll`} style={{ animationDelay: "200ms" }}>
              <Users className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-2xl font-playfair text-golf-cream mb-4">Exclusive Community</h3>
              <p className="text-golf-cream/70 leading-relaxed">
                A carefully curated membership of golf enthusiasts who appreciate both the
                challenge of Pete Dye's design and the camaraderie of private club life.
                World-class amenities complement the exceptional golf experience.
              </p>
            </div>

            <div className={`bg-emerald-900/20 backdrop-blur-sm border border-emerald-700/30 rounded-xl p-8 ${fadeInUp} animate-on-scroll`} style={{ animationDelay: "400ms" }}>
              <div className="w-12 h-12 flex items-center justify-center bg-emerald-500/20 rounded-full mb-4">
                <span className="text-emerald-400 text-2xl font-playfair">✓</span>
              </div>
              <h3 className="text-2xl font-playfair text-golf-cream mb-4">Impeccable Conditions</h3>
              <p className="text-golf-cream/70 leading-relaxed">
                Maintained to championship standards year-round. The course is consistently
                ranked among the best-conditioned in Texas, with pristine fairways,
                lightning-fast greens, and meticulous attention to detail.
              </p>
            </div>

            <div className={`bg-emerald-900/20 backdrop-blur-sm border border-emerald-700/30 rounded-xl p-8 ${fadeInUp} animate-on-scroll`} style={{ animationDelay: "600ms" }}>
              <div className="w-12 h-12 flex items-center justify-center bg-emerald-500/20 rounded-full mb-4">
                <span className="text-emerald-400 text-2xl font-playfair">★</span>
              </div>
              <h3 className="text-2xl font-playfair text-golf-cream mb-4">Timeless Design</h3>
              <p className="text-golf-cream/70 leading-relaxed">
                Pete Dye's design has aged beautifully, remaining relevant and challenging
                four decades after opening. The course continues to evolve while staying
                true to Dye's original strategic vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-emerald-950">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className={`${fadeInUp} animate-on-scroll mb-12 text-center`}>
              <span className="text-emerald-400 text-sm tracking-[0.3em] uppercase font-medium">
                Course Details
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-golf-navy/50 backdrop-blur-sm border border-emerald-700/30 rounded-xl p-8 text-center">
                <div className="text-golf-gold text-sm tracking-wider uppercase mb-2">Par</div>
                <div className="text-6xl font-playfair text-golf-cream mb-2">72</div>
                <div className="text-golf-cream/60 text-sm">Championship Standard</div>
              </div>

              <div className="bg-golf-navy/50 backdrop-blur-sm border border-emerald-700/30 rounded-xl p-8 text-center">
                <div className="text-golf-gold text-sm tracking-wider uppercase mb-2">Yardage</div>
                <div className="text-6xl font-playfair text-golf-cream mb-2">7,100</div>
                <div className="text-golf-cream/60 text-sm">Championship Tees</div>
              </div>

              <div className="bg-golf-navy/50 backdrop-blur-sm border border-emerald-700/30 rounded-xl p-8 text-center">
                <div className="text-golf-gold text-sm tracking-wider uppercase mb-2">Slope Rating</div>
                <div className="text-6xl font-playfair text-golf-cream mb-2">142</div>
                <div className="text-golf-cream/60 text-sm">Challenging Layout</div>
              </div>

              <div className="bg-golf-navy/50 backdrop-blur-sm border border-emerald-700/30 rounded-xl p-8 text-center">
                <div className="text-golf-gold text-sm tracking-wider uppercase mb-2">Year Founded</div>
                <div className="text-6xl font-playfair text-golf-cream mb-2">1984</div>
                <div className="text-golf-cream/60 text-sm">40 Years of Excellence</div>
              </div>

              <div className="bg-golf-navy/50 backdrop-blur-sm border border-emerald-700/30 rounded-xl p-8 text-center">
                <div className="text-golf-gold text-sm tracking-wider uppercase mb-2">Designer</div>
                <div className="text-4xl font-playfair text-golf-cream mb-2">Pete Dye</div>
                <div className="text-golf-cream/60 text-sm">Legendary Architect</div>
              </div>

              <div className="bg-golf-navy/50 backdrop-blur-sm border border-emerald-700/30 rounded-xl p-8 text-center">
                <div className="text-golf-gold text-sm tracking-wider uppercase mb-2">Type</div>
                <div className="text-4xl font-playfair text-golf-cream mb-2">Private</div>
                <div className="text-golf-cream/60 text-sm">Exclusive Membership</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-gradient-to-br from-golf-navy via-emerald-950 to-golf-navy text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair text-golf-cream mb-6">
              A Legacy of Excellence
            </h2>
            <p className="text-xl text-golf-cream/70 mb-12 leading-relaxed">
              For four decades, Austin Golf Club has represented the pinnacle of private
              golf in Texas. Pete Dye's masterpiece continues to challenge, inspire, and
              delight members who appreciate golf at its finest.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-golf-cream px-8 py-4 rounded-full transition-colors text-lg font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Explore More Austin Golf History</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-golf-navy py-12 text-center border-t border-emerald-700/20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-golf-cream/60 text-sm mb-4">
            Part of Austin's rich golf heritage
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
