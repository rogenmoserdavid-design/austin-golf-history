import { ArrowLeft, MapPin, Calendar, Users, Trophy, Flag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Metadata
export const metadata = {
  title: "Austin Country Club - The Birthplace of Austin Golf | Austin Golf History",
  description: "Founded in 1899 by Lewis Hancock, Austin Country Club is where it all began. Harvey Penick's 50-year home and the training ground of champions.",
  openGraph: {
    title: "Austin Country Club - The Birthplace of Austin Golf",
    description: "Founded in 1899 by Lewis Hancock. Harvey Penick's 50-year home. The training ground of champions.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070",
        width: 2070,
        height: 1380,
        alt: "Austin Country Club",
      },
    ],
  },
};

export default function AustinCountryClubPage() {
  return (
    <div className="min-h-screen bg-golf-cream">
      {/* Back button */}
      <Link
        href="/clubs"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-golf-navy/90 backdrop-blur-sm text-golf-cream rounded-full hover:bg-golf-navy transition-all group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Back to Clubs</span>
      </Link>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070"
            alt="Austin Country Club"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-golf-navy/40 via-golf-navy/20 to-golf-navy/80" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            <p className="text-golf-gold font-inter text-sm tracking-[0.2em] uppercase mb-4">
              Est. 1899
            </p>
            <h1 className="font-playfair text-6xl md:text-8xl font-bold text-golf-cream mb-6 leading-none">
              Austin Country Club
            </h1>
            <p className="text-golf-cream/90 text-xl md:text-2xl font-light max-w-2xl mx-auto">
              The birthplace of Austin golf. Where Harvey Penick taught for 50
              years and champions were made.
            </p>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <span className="text-golf-cream/60 text-xs tracking-wider uppercase">
                Scroll
              </span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-golf-gold to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-20 bg-golf-navy">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Calendar, label: "Founded", value: "1899" },
              { icon: MapPin, label: "Location", value: "Lake Austin" },
              { icon: Users, label: "Type", value: "Private" },
              { icon: Flag, label: "Holes", value: "18" },
              { icon: Trophy, label: "Par", value: "71" },
              { icon: Users, label: "Designer", value: "Pete Dye" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-golf-gold" />
                <p className="text-3xl font-playfair font-bold text-golf-cream mb-1">
                  {stat.value}
                </p>
                <p className="text-golf-cream/60 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Founding */}
      <section className="py-32 bg-golf-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div>
            <p className="text-golf-gold font-inter text-sm tracking-[0.2em] uppercase mb-4">
              Chapter One
            </p>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-golf-navy mb-8">
              The Founding
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-golf-charcoal/80 text-xl leading-relaxed mb-6">
                In 1899, Lewis Hancock had a vision that would change Austin
                forever. He established Austin Country Club in Hyde Park,
                creating the city's first golf course and social club.
              </p>
              <p className="text-golf-charcoal/80 text-xl leading-relaxed mb-6">
                At a time when Austin was still a frontier town, Hancock brought
                the refined sport of golf to the Texas capital. His nine-hole
                course in Hyde Park became the gathering place for Austin's
                elite and the foundation of the city's golf culture.
              </p>
              <p className="text-golf-charcoal/80 text-xl leading-relaxed">
                The club quickly became more than just a place to play golf—it
                was where Austin's leaders discussed business, politics, and the
                future of their growing city. The seeds of a golf tradition were
                planted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Harvey's Home - Full Width Image */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070"
          alt="Harvey Penick teaching"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-golf-navy/40 to-golf-navy/90" />

        <div className="relative h-full flex items-end">
          <div className="max-w-4xl mx-auto px-6 pb-20">
            <div>
              <p className="text-golf-gold font-inter text-sm tracking-[0.2em] uppercase mb-4">
                1923-1973
              </p>
              <h2 className="font-playfair text-5xl md:text-7xl font-bold text-golf-cream mb-6">
                Harvey's Home
              </h2>
              <p className="text-golf-cream/90 text-xl md:text-2xl leading-relaxed max-w-2xl">
                For 50 years, Harvey Penick made Austin Country Club his home.
                The legendary teacher spent his entire professional career here,
                quietly becoming one of golf's greatest instructors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Harvey's Legacy */}
      <section className="py-32 bg-golf-navy">
        <div className="max-w-4xl mx-auto px-6">
          <div>
            <div className="prose prose-lg max-w-none">
              <p className="text-golf-cream/80 text-xl leading-relaxed mb-6">
                Harvey Penick didn't seek the spotlight. He simply loved
                teaching golf and helping people improve. But his methods—rooted
                in simplicity, patience, and individual attention—produced
                extraordinary results.
              </p>
              <p className="text-golf-cream/80 text-xl leading-relaxed mb-6">
                From his small office at Austin Country Club, he taught Ben
                Crenshaw, Tom Kite, and countless others. His Little Red Book
                would eventually become the best-selling golf instruction book
                of all time.
              </p>
              <blockquote className="border-l-4 border-golf-gold pl-6 my-8">
                <p className="text-golf-cream/90 text-2xl italic font-playfair">
                  "Take dead aim."
                </p>
                <footer className="text-golf-cream/60 text-sm mt-2 uppercase tracking-wider">
                  Harvey Penick
                </footer>
              </blockquote>
              <p className="text-golf-cream/80 text-xl leading-relaxed">
                His legacy at Austin Country Club is immeasurable. For half a
                century, this was where golf wisdom was quietly passed down,
                where champions learned not just to swing a club, but to love
                the game.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Move */}
      <section className="py-32 bg-golf-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div>
            <p className="text-golf-gold font-inter text-sm tracking-[0.2em] uppercase mb-4">
              A New Chapter
            </p>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-golf-navy mb-8">
              The Move
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-golf-charcoal/80 text-xl leading-relaxed mb-6">
                In 1984, after 85 years in Hyde Park, Austin Country Club made a
                bold decision. The club relocated to a spectacular site on Lake
                Austin, where the Texas Hill Country meets the water.
              </p>
              <p className="text-golf-charcoal/80 text-xl leading-relaxed mb-6">
                The move represented both preservation and progress—honoring the
                club's storied history while embracing a new era. The new
                location offered dramatic elevation changes, stunning lake
                views, and the space to create something truly special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pete Dye's Vision */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1592919505780-303950717480?q=80&w=2070"
          alt="Pete Dye golf course design"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-golf-navy/70" />

        <div className="relative h-full flex items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            <div>
              <p className="text-golf-gold font-inter text-sm tracking-[0.2em] uppercase mb-4">
                Pete Dye Design
              </p>
              <h2 className="font-playfair text-5xl md:text-7xl font-bold text-golf-cream mb-6">
                A Spectacular Vision
              </h2>
              <p className="text-golf-cream/90 text-xl md:text-2xl leading-relaxed">
                Legendary architect Pete Dye was chosen to design the new
                course. His vision: a challenging, strategic layout that would
                honor the club's championship pedigree while showcasing the
                natural beauty of the Hill Country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pete Dye Details */}
      <section className="py-32 bg-golf-navy">
        <div className="max-w-4xl mx-auto px-6">
          <div>
            <div className="prose prose-lg max-w-none">
              <p className="text-golf-cream/80 text-xl leading-relaxed mb-6">
                Pete Dye brought his signature style to Lake Austin—dramatic
                bunkering, strategic water hazards, and holes that demand both
                power and precision. The course winds through the Hill Country
                terrain, with elevation changes of over 200 feet.
              </p>
              <p className="text-golf-cream/80 text-xl leading-relaxed mb-6">
                The par-3 7th hole, playing downhill to a green perched above
                the lake, became an instant classic. The finishing holes,
                running along the water's edge, provide a dramatic conclusion to
                each round.
              </p>
              <p className="text-golf-cream/80 text-xl leading-relaxed">
                Dye's design ensured that Austin Country Club would remain what
                it had always been—a championship course worthy of the champions
                it had produced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Champions Made Here */}
      <section className="py-32 bg-golf-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div>
            <p className="text-golf-gold font-inter text-sm tracking-[0.2em] uppercase mb-4">
              Hall of Champions
            </p>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-golf-navy mb-12">
              Champions Made Here
            </h2>

            <div className="space-y-12">
              {/* Ben Crenshaw */}
              <div className="border-l-4 border-golf-gold pl-8">
                <h3 className="font-playfair text-3xl font-bold text-golf-navy mb-3">
                  Ben Crenshaw
                </h3>
                <p className="text-golf-charcoal/60 text-sm uppercase tracking-wider mb-4">
                  2× Masters Champion (1984, 1995)
                </p>
                <p className="text-golf-charcoal/80 text-lg leading-relaxed">
                  Started lessons with Harvey Penick at age 6. Crenshaw's
                  silky-smooth putting stroke and deep understanding of course
                  strategy were forged on these grounds. His emotional victory
                  at the 1995 Masters, just days after Harvey's death, remains
                  one of golf's most poignant moments.
                </p>
              </div>

              {/* Tom Kite */}
              <div className="border-l-4 border-golf-gold pl-8">
                <h3 className="font-playfair text-3xl font-bold text-golf-navy mb-3">
                  Tom Kite
                </h3>
                <p className="text-golf-charcoal/60 text-sm uppercase tracking-wider mb-4">
                  U.S. Open Champion (1992)
                </p>
                <p className="text-golf-charcoal/80 text-lg leading-relaxed">
                  Another Penick protégé, Kite became one of golf's most
                  consistent performers. His work ethic and attention to detail,
                  instilled during countless hours at Austin Country Club, led
                  to 19 PGA Tour victories and a U.S. Open title.
                </p>
              </div>

              {/* Others */}
              <div className="border-l-4 border-golf-gold pl-8">
                <h3 className="font-playfair text-3xl font-bold text-golf-navy mb-3">
                  And Many More
                </h3>
                <p className="text-golf-charcoal/80 text-lg leading-relaxed">
                  Terry Jastrow, Kathy Whitworth, Betsy Rawls—the list of
                  champions who honed their games at Austin Country Club reads
                  like a golf Hall of Fame roster. Each learned Harvey's
                  timeless lessons about the game and life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Image */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1593111774240-d529f12a7ab6?q=80&w=2071"
          alt="Austin Country Club today"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-golf-navy/90" />

        <div className="relative h-full flex items-end">
          <div className="max-w-4xl mx-auto px-6 pb-20">
            <div>
              <h2 className="font-playfair text-5xl md:text-7xl font-bold text-golf-cream mb-6">
                The Legacy Continues
              </h2>
              <p className="text-golf-cream/90 text-xl md:text-2xl leading-relaxed max-w-2xl">
                Today, Austin Country Club remains what it has always been—the
                heart of Austin golf. Where history began in 1899, and where
                champions are still made.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-golf-navy py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link
            href="/clubs"
            className="inline-flex items-center gap-2 text-golf-gold hover:text-golf-gold-light transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm uppercase tracking-wider">
              Explore More Clubs
            </span>
          </Link>
          <p className="text-golf-cream/40 text-xs mt-8">
            © {new Date().getFullYear()} Mackenzie Club. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
