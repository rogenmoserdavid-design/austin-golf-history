import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Austin's Legendary Golf Clubs | The History of Austin Golf",
  description: "Explore the iconic golf clubs that shaped Austin's rich golf heritage. From the historic Austin Country Club to modern masterpieces.",
};

// Club data with taglines and images
const clubs = [
  {
    id: "austin-country-club",
    name: "Austin Country Club",
    founded: 1899,
    tagline: "Where it all began",
    description: "The birthplace of Austin golf",
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&q=80",
  },
  {
    id: "lions-municipal",
    name: "Lions Municipal",
    founded: 1924,
    tagline: "The people's course",
    description: "Where champions learned to play",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80",
  },
  {
    id: "austin-golf-club",
    name: "Austin Golf Club",
    founded: 1984,
    tagline: "Pete Dye masterpiece",
    description: "Precision carved into the Hill Country",
    image: "https://images.unsplash.com/photo-1593111774240-d529f12bf219?w=800&q=80",
  },
  {
    id: "spanish-oaks",
    name: "Spanish Oaks",
    founded: 2007,
    tagline: "Hill Country sanctuary",
    description: "Where luxury meets legacy",
    image: "https://images.unsplash.com/photo-1592919505780-303950717480?w=800&q=80",
  },
  {
    id: "barton-creek",
    name: "Barton Creek Resort",
    founded: 1986,
    tagline: "The resort empire",
    description: "Four courses, endless tradition",
    image: "https://images.unsplash.com/photo-1587174489223-0f4a3b5b4c1a?w=800&q=80",
  },
];

export default function ClubsPage() {
  return (
    <main className="min-h-screen bg-golf-cream">
      {/* Hero Section */}
      <section className="relative bg-golf-navy text-golf-cream py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-golf-gold hover:text-golf-gold-light transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-wider">Back to History</span>
          </Link>

          {/* Hero Title */}
          <div>
            <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-6">
              Austin&apos;s Legendary{" "}
              <span className="text-golf-gold">Courses</span>
            </h1>
            <p className="text-xl md:text-2xl text-golf-cream/80 max-w-3xl leading-relaxed">
              From the pioneer days of 1899 to the modern renaissance,
              these five clubs have shaped the story of golf in Austin.
            </p>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-golf-gold to-transparent" />
      </section>

      {/* Clubs Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club, index) => (
              <div
                key={club.id}
                className={`group relative bg-golf-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={club.image}
                    alt={club.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-golf-navy/90 via-golf-navy/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Founded Year Badge */}
                  <div className="absolute top-4 right-4 bg-golf-gold/90 backdrop-blur-sm text-golf-navy px-4 py-2 rounded-full">
                    <span className="font-playfair font-bold text-sm">
                      Est. {club.founded}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-golf-white">
                  <h2 className="font-playfair text-2xl font-bold text-golf-navy mb-2">
                    {club.name}
                  </h2>
                  <p className="text-golf-gold font-medium text-sm uppercase tracking-wider mb-3">
                    {club.tagline}
                  </p>
                  <p className="text-golf-charcoal/70 mb-6 leading-relaxed">
                    {club.description}
                  </p>

                  {/* Explore Button */}
                  <Link
                    href={`/clubs/${club.id}`}
                    className="inline-flex items-center gap-2 text-golf-navy font-medium group/btn"
                  >
                    <span className="relative">
                      Explore the Story
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-golf-gold group-hover/btn:w-full transition-all duration-300" />
                    </span>
                    <svg
                      className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-golf-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-golf-navy text-golf-cream py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            125 Years of{" "}
            <span className="text-golf-gold">Texas Golf</span>
          </h2>
          <p className="text-xl text-golf-cream/80 mb-10 leading-relaxed">
            Each course tells a chapter in the remarkable story of how
            Austin became one of America&apos;s great golf cities.
          </p>
          <Link
            href="/"
            className="inline-block bg-golf-gold hover:bg-golf-gold-light text-golf-navy px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Read the Full History
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-golf-navy border-t border-golf-gold/20 py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-golf-cream/60 text-sm mb-4">
            A journey through 125 years of Austin golf history
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
