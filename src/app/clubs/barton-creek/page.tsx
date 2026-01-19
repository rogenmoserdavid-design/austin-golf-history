import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Users, Award } from "lucide-react";

export const metadata = {
  title: "Barton Creek Resort - Four Championship Courses | Austin Golf History",
  description: "Discover the story of Barton Creek Resort's four legendary courses: Fazio Foothills, Fazio Canyons, Palmer Lakeside, and Crenshaw Cliffside. A golf empire in the Texas Hill Country.",
  openGraph: {
    title: "Barton Creek Resort - Four Championship Courses",
    description: "Four legendary courses. One unforgettable destination.",
    images: [
      {
        url: "/images/clubs/barton-creek-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Barton Creek Resort Golf Courses"
      }
    ]
  }
};

interface CourseDetail {
  name: string;
  tagline: string;
  designer: string;
  year: number;
  par: number;
  signatureHole: string;
  description: string;
  highlights: string[];
  image: string;
  accentColor: string;
}

const courses: CourseDetail[] = [
  {
    name: "Fazio Foothills",
    tagline: "The Flagship",
    designer: "Tom Fazio",
    year: 1986,
    par: 72,
    signatureHole: "18th - Dramatic canyon finish",
    description: "Tom Fazio's original masterpiece launched Barton Creek into the national spotlight. Carved through dramatic Hill Country canyons, the Foothills course combines breathtaking beauty with strategic challenge. Every hole offers stunning vistas, while the routing makes brilliant use of elevation changes and natural rock formations.",
    highlights: [
      "Host to PGA Tour Champions events",
      "Dramatic elevation changes throughout",
      "Natural limestone canyon features",
      "Consistently ranked among Texas' best"
    ],
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=80",
    accentColor: "from-amber-900 via-orange-800 to-amber-900"
  },
  {
    name: "Fazio Canyons",
    tagline: "The Dramatic Sequel",
    designer: "Tom Fazio",
    year: 1987,
    par: 72,
    signatureHole: "14th - Cliffside par 3",
    description: "Building on the success of Foothills, Fazio returned to create an even more dramatic companion course. Canyons lives up to its name with deep gorges, towering limestone cliffs, and holes that seem to defy gravity. The back nine features some of the most memorable holes in Texas golf.",
    highlights: [
      "Even more dramatic terrain than Foothills",
      "Unforgettable cliffside holes",
      "Strategic bunkering and green complexes",
      "A true test of championship golf"
    ],
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&q=80",
    accentColor: "from-stone-800 via-zinc-700 to-stone-800"
  },
  {
    name: "Palmer Lakeside",
    tagline: "The King's Touch",
    designer: "Arnold Palmer",
    year: 1986,
    par: 71,
    signatureHole: "9th - Island green par 3",
    description: "Arnold Palmer brought his signature style to the shores of Lake Travis. While more accessible than the Fazio courses, Lakeside offers its own unique challenges with water in play on multiple holes and strategic shot values throughout. The King's design philosophy shines through in risk-reward opportunities that reward aggressive play.",
    highlights: [
      "Arnold Palmer's only Austin design",
      "Lake Travis shoreline holes",
      "More player-friendly layout",
      "Perfect for resort guests"
    ],
    image: "https://images.unsplash.com/photo-1592919505780-303950717480?w=1920&q=80",
    accentColor: "from-blue-900 via-cyan-800 to-blue-900"
  },
  {
    name: "Crenshaw Cliffside",
    tagline: "A Local Legend's Design",
    designer: "Ben Crenshaw",
    year: 1991,
    par: 72,
    signatureHole: "7th - Canyon carry par 4",
    description: "Ben Crenshaw, Austin's favorite golfing son, returned home to create a course that reflects his deep understanding of the game. Cliffside combines his reverence for classic design with the dramatic Hill Country landscape. The course rewards strategic thinking and creative shot-making, hallmarks of Crenshaw's playing career.",
    highlights: [
      "Designed by Austin's own Ben Crenshaw",
      "Classic strategic design principles",
      "Natural routing through Hill Country",
      "Honors the game's traditions"
    ],
    image: "https://images.unsplash.com/photo-1591491653056-4e9d563a42de?w=1920&q=80",
    accentColor: "from-emerald-900 via-green-800 to-emerald-900"
  }
];

export default function BartonCreekPage() {
  return (
    <main className="min-h-screen bg-golf-navy">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=80"
            alt="Barton Creek Resort"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-golf-navy/60 via-golf-navy/40 to-golf-navy" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="mb-6">
            <span className="text-golf-gold text-sm tracking-[0.3em] uppercase font-medium">
              Austin Golf History
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-playfair text-golf-cream mb-6 leading-tight">
            Barton Creek Resort
          </h1>

          <p className="text-2xl md:text-3xl text-golf-gold font-light mb-8">
            Four Courses, One Legendary Destination
          </p>

          <div className="flex items-center justify-center gap-8 text-golf-cream/70">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Est. 1986</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">West Austin Hills</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="text-sm">Resort</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-golf-gold/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-golf-gold rounded-full" />
          </div>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="py-24 bg-gradient-to-br from-golf-charcoal to-golf-navy">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair text-golf-cream mb-6">
              The Vision
            </h2>
            <div className="w-24 h-1 bg-golf-gold mx-auto mb-8" />
            <p className="text-xl text-golf-cream/80 leading-relaxed mb-6">
              In the mid-1980s, a bold vision emerged: create a world-class golf destination
              in the Texas Hill Country. Not just one championship course, but an entire
              collection that would showcase the region's natural beauty and establish
              Austin as a premier golf destination.
            </p>
            <p className="text-lg text-golf-cream/60 leading-relaxed">
              The result exceeded all expectations. Barton Creek Resort brought together
              legendary designers Tom Fazio, Arnold Palmer, and Ben Crenshaw to craft
              four distinct masterpieces, each offering its own character and challenge.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-golf-navy/50 rounded-lg border border-golf-gold/20">
              <div className="text-5xl font-playfair text-golf-gold mb-2">4</div>
              <div className="text-golf-cream/60 text-sm uppercase tracking-wider">
                Championship Courses
              </div>
            </div>
            <div className="text-center p-6 bg-golf-navy/50 rounded-lg border border-golf-gold/20">
              <div className="text-5xl font-playfair text-golf-gold mb-2">72</div>
              <div className="text-golf-cream/60 text-sm uppercase tracking-wider">
                Total Holes
              </div>
            </div>
            <div className="text-center p-6 bg-golf-navy/50 rounded-lg border border-golf-gold/20">
              <div className="text-5xl font-playfair text-golf-gold mb-2">3</div>
              <div className="text-golf-cream/60 text-sm uppercase tracking-wider">
                Master Designers
              </div>
            </div>
            <div className="text-center p-6 bg-golf-navy/50 rounded-lg border border-golf-gold/20">
              <div className="text-5xl font-playfair text-golf-gold mb-2">312</div>
              <div className="text-golf-cream/60 text-sm uppercase tracking-wider">
                Resort Rooms
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Deep Dives */}
      {courses.map((course, index) => (
        <section
          key={course.name}
          className={`py-24 bg-gradient-to-br ${course.accentColor}`}
        >
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Image - Alternating sides */}
              <div className={`relative h-[500px] rounded-2xl overflow-hidden shadow-2xl ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <Image
                  src={course.image}
                  alt={course.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Course Number Badge */}
                <div className="absolute top-6 left-6 w-16 h-16 rounded-full bg-golf-gold/20 backdrop-blur-sm border border-golf-gold/30 flex items-center justify-center">
                  <span className="text-2xl font-playfair text-golf-gold">
                    {index + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div>
                  <div className="text-golf-gold text-sm tracking-wider uppercase mb-2">
                    {course.tagline}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-playfair text-golf-cream mb-2">
                    {course.name}
                  </h3>
                  <div className="text-golf-cream/60 text-lg mb-4">
                    Designed by {course.designer}
                  </div>
                </div>

                <p className="text-golf-cream/80 text-lg leading-relaxed">
                  {course.description}
                </p>

                {/* Course Details Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-golf-cream/10">
                  <div>
                    <div className="text-golf-gold/60 text-xs uppercase tracking-wider mb-1">
                      Opened
                    </div>
                    <div className="text-golf-cream text-sm">{course.year}</div>
                  </div>
                  <div>
                    <div className="text-golf-gold/60 text-xs uppercase tracking-wider mb-1">
                      Par
                    </div>
                    <div className="text-golf-cream text-sm">{course.par}</div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-golf-gold/60 text-xs uppercase tracking-wider mb-1">
                      Signature Hole
                    </div>
                    <div className="text-golf-cream text-sm">{course.signatureHole}</div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-4">
                  {course.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Award className="w-4 h-4 text-golf-gold mt-1 flex-shrink-0" />
                      <span className="text-golf-cream/70 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Course Comparison Grid */}
      <section className="py-24 bg-golf-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair text-golf-cream text-center mb-4">
              Compare the Courses
            </h2>
            <div className="w-24 h-1 bg-golf-gold mx-auto mb-16" />

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-golf-gold/30">
                    <th className="pb-4 text-golf-gold text-sm uppercase tracking-wider">Course</th>
                    <th className="pb-4 text-golf-gold text-sm uppercase tracking-wider">Designer</th>
                    <th className="pb-4 text-golf-gold text-sm uppercase tracking-wider">Year</th>
                    <th className="pb-4 text-golf-gold text-sm uppercase tracking-wider">Par</th>
                    <th className="pb-4 text-golf-gold text-sm uppercase tracking-wider">Signature Hole</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, index) => (
                    <tr
                      key={course.name}
                      className={`border-b border-golf-cream/10 ${
                        index % 2 === 0 ? 'bg-golf-navy/30' : ''
                      }`}
                    >
                      <td className="py-4 text-golf-cream font-medium">{course.name}</td>
                      <td className="py-4 text-golf-cream/70">{course.designer}</td>
                      <td className="py-4 text-golf-cream/70">{course.year}</td>
                      <td className="py-4 text-golf-cream/70">{course.par}</td>
                      <td className="py-4 text-golf-cream/70">{course.signatureHole}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* The Resort Experience */}
      <section className="py-24 bg-gradient-to-br from-golf-navy via-golf-charcoal to-golf-navy">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair text-golf-cream mb-6">
              The Resort Experience
            </h2>
            <div className="w-24 h-1 bg-golf-gold mx-auto mb-8" />
            <p className="text-xl text-golf-cream/80 leading-relaxed mb-6">
              Barton Creek Resort offers more than just exceptional golf. The full-service
              resort provides luxurious accommodations, world-class dining, and amenities
              that make it a true destination.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-golf-charcoal/50 rounded-lg border border-golf-gold/20">
              <div className="w-12 h-12 bg-golf-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-golf-gold" />
              </div>
              <h3 className="text-xl font-playfair text-golf-cream mb-3">
                Stay & Play Packages
              </h3>
              <p className="text-golf-cream/60 text-sm leading-relaxed">
                Comprehensive packages combining luxury rooms with rounds on all four courses
              </p>
            </div>

            <div className="text-center p-8 bg-golf-charcoal/50 rounded-lg border border-golf-gold/20">
              <div className="w-12 h-12 bg-golf-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-golf-gold" />
              </div>
              <h3 className="text-xl font-playfair text-golf-cream mb-3">
                Full-Service Spa
              </h3>
              <p className="text-golf-cream/60 text-sm leading-relaxed">
                Relax after your round at the resort's award-winning spa and wellness center
              </p>
            </div>

            <div className="text-center p-8 bg-golf-charcoal/50 rounded-lg border border-golf-gold/20">
              <div className="w-12 h-12 bg-golf-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-golf-gold" />
              </div>
              <h3 className="text-xl font-playfair text-golf-cream mb-3">
                Hill Country Setting
              </h3>
              <p className="text-golf-cream/60 text-sm leading-relaxed">
                Located in the heart of the Texas Hill Country, minutes from downtown Austin
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Crenshaw Connection */}
      <section className="py-24 bg-gradient-to-br from-emerald-950 via-green-900 to-emerald-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-golf-navy/40 backdrop-blur-sm border border-golf-gold/20 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-golf-gold" />
                <span className="text-golf-gold text-sm tracking-wider uppercase">
                  Austin Connection
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-playfair text-golf-cream mb-6">
                Ben Crenshaw's Homecoming
              </h3>

              <p className="text-golf-cream/80 text-lg leading-relaxed mb-6">
                When Ben Crenshaw designed Cliffside in 1991, it marked a special homecoming
                for Austin's favorite son. Having learned the game at Austin Country Club under
                Harvey Penick's watchful eye, Crenshaw brought his reverence for classic design
                principles back to the Hill Country.
              </p>

              <p className="text-golf-cream/60 leading-relaxed">
                The course reflects the strategic thinking that made Crenshaw a two-time Masters
                champion, while honoring the natural landscape that shaped his early years as a golfer.
              </p>

              <Link
                href="/clubs"
                className="inline-flex items-center gap-2 text-golf-gold hover:text-golf-gold-light transition-colors mt-6"
              >
                <span className="text-sm uppercase tracking-wider">Explore More Clubs</span>
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Clubs */}
      <section className="py-16 bg-golf-navy border-t border-golf-gold/20">
        <div className="container mx-auto px-6 text-center">
          <Link
            href="/clubs"
            className="inline-flex items-center gap-3 text-golf-cream hover:text-golf-gold transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-lg">Back to All Clubs</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-golf-navy py-12 border-t border-golf-gold/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-golf-cream/60 text-sm mb-4">
            Part of The History of Austin Golf
          </p>
          <p className="text-golf-gold font-playfair text-lg">
            Barton Creek Resort
          </p>
          <p className="text-golf-cream/40 text-xs mt-6">
            © {new Date().getFullYear()} Mackenzie Club. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
