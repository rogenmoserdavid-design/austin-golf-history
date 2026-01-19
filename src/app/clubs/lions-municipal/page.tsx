import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ParallaxImage, Breadcrumb } from "@/components/core";
import {
  AnimatedText,
  SectionHeading,
  DisplayHeading,
  BodyText,
  AnimatedQuote,
} from "@/components/core/AnimatedText";

export default function LionsMunicipalPage() {
  return (
    <main className="relative bg-slate-950">
      {/* Navigation */}
      <div className="fixed top-6 left-6 z-50 flex flex-col gap-2">
        <Link
          href="/clubs"
          className="flex items-center gap-2 px-4 py-2 bg-slate-900/90 backdrop-blur-sm text-slate-200 rounded-full hover:bg-slate-800 transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-label="Back to all clubs"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
          <span className="text-sm font-medium">Back to Clubs</span>
        </Link>
        <Breadcrumb
          items={[
            { label: "Clubs", href: "/clubs" },
            { label: "Lions Municipal" },
          ]}
          className="hidden md:flex bg-slate-900/90 backdrop-blur-sm px-4 py-2 rounded-full"
        />
      </div>

      {/* Hero Section - Dramatic and Powerful */}
      <section className="relative h-screen">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=80"
          alt="Lions Municipal Golf Course - The People's Course"
          speed={0.5}
          overlay={true}
          overlayOpacity={0.5}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-5xl">
            <AnimatedText
              as="span"
              className="text-blue-400 mb-6 block text-sm uppercase tracking-[0.3em]"
            >
              Lions Municipal Golf Course
            </AnimatedText>
            <DisplayHeading className="text-white mb-8">
              The People's Course
            </DisplayHeading>
            <BodyText className="text-slate-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Born during the Great Depression, transformed into a civil rights
              landmark, celebrating 100 years of serving every Austin golfer.
            </BodyText>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-400 animate-bounce">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Depression-Era Hope */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto">
          <SectionHeading className="text-blue-300 mb-12">
            Depression-Era Hope
          </SectionHeading>

          <BodyText className="text-slate-300 text-xl leading-relaxed mb-6">
            In 1924, as the nation reeled from economic uncertainty, Austin
            built something remarkable: a municipal golf course for the people.
          </BodyText>

          <BodyText className="text-slate-300 text-xl leading-relaxed mb-6">
            Lions Municipal wasn't designed for the wealthy or the elite. It was
            built for everyday Austinites who loved golf but couldn't afford
            country club dues.
          </BodyText>

          <BodyText className="text-slate-200 text-2xl leading-relaxed font-semibold">
            From the beginning, Muny was about accessibility and hope.
          </BodyText>
        </div>
      </section>

      {/* The 1950 Breakthrough - Most Important Section */}
      <section className="relative py-32 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <AnimatedText
              as="span"
              className="text-blue-400 mb-4 block text-sm uppercase tracking-widest"
            >
              1950
            </AnimatedText>
            <SectionHeading className="text-white mb-8">
              The Breakthrough
            </SectionHeading>
          </div>

          <BodyText className="text-slate-300 text-xl leading-relaxed mb-8">
            In 1950, Dr. Everett Givens and a group of Black golfers did
            something that required immense courage.
          </BodyText>

          <BodyText className="text-slate-300 text-xl leading-relaxed mb-8">
            They petitioned the City of Austin to open Lions Municipal Golf
            Course to all players, regardless of race.
          </BodyText>

          <p className="text-slate-300 text-xl leading-relaxed mb-8">
            This wasn't a small ask. This was 1950s Texas. The American South
            was deeply segregated. Jim Crow laws were the norm. The Supreme
            Court's Brown v. Board of Education decision was still{" "}
            <span className="text-white font-semibold">four years away</span>.
          </p>

          <div className="my-16 py-12 px-8 bg-slate-900/50 border-l-4 border-blue-400">
            <BodyText className="text-blue-300 text-3xl md:text-4xl leading-relaxed font-bold text-center">
              And yet, Austin said yes.
            </BodyText>
          </div>

          <BodyText className="text-slate-300 text-xl leading-relaxed mb-8">
            Lions Municipal Golf Course became the first desegregated public
            golf course in the American South.
          </BodyText>

          <BodyText className="text-white text-2xl leading-relaxed font-bold mb-8">
            Not just in Texas. In the entire South.
          </BodyText>

          <BodyText className="text-slate-300 text-xl leading-relaxed">
            The course that began as a symbol of Depression-era hope became a
            beacon of civil rights progress.
          </BodyText>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto">
          <AnimatedQuote>
            Golf courses became battlegrounds for equality. And Austin fired the
            first shot.
          </AnimatedQuote>
          <p className="text-slate-400 text-center mt-8 text-lg">
            — Civil Rights Historian
          </p>
        </div>
      </section>

      {/* First in the South - Historical Context */}
      <section className="relative py-32 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <SectionHeading className="text-blue-300 mb-16 text-center">
            First in the South
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-12 text-slate-300">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">The Context</h3>
              <BodyText className="leading-relaxed">
                The 1950s South was deeply segregated. Public facilities were
                divided by race, enforced by law and custom. Golf courses were
                no exception.
              </BodyText>
              <BodyText className="leading-relaxed">
                Black golfers were confined to poorly maintained courses or
                forced to travel long distances to play. The idea of integrated
                public golf was considered radical, even dangerous.
              </BodyText>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">The Courage</h3>
              <BodyText className="leading-relaxed">
                Dr. Everett Givens and his fellow petitioners weren't just
                asking for access to a golf course. They were challenging the
                entire structure of segregation.
              </BodyText>
              <BodyText className="leading-relaxed">
                They faced real danger. Social ostracism. Economic retaliation.
                Physical violence. And yet they persisted, knowing that progress
                demanded courage.
              </BodyText>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                The Significance
              </h3>
              <BodyText className="leading-relaxed">
                This decision predated Brown v. Board of Education by four
                years. It showed that change was possible, even in the South.
              </BodyText>
              <BodyText className="leading-relaxed">
                Lions Municipal became a model for other cities, proving that
                integration could work peacefully and successfully.
              </BodyText>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">The Legacy</h3>
              <BodyText className="leading-relaxed">
                Today, we take integrated public golf courses for granted. But
                in 1950, it was revolutionary.
              </BodyText>
              <BodyText className="leading-relaxed">
                The courage of Dr. Givens and others, combined with Austin's
                willingness to lead, created a lasting legacy of progress and
                inclusion.
              </BodyText>
            </div>
          </div>
        </div>
      </section>

      {/* 100 Years Strong - Centennial Celebration */}
      <section className="relative py-32 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <SectionHeading className="text-blue-300 mb-12 text-center">
            100 Years Strong
          </SectionHeading>

          <BodyText className="text-slate-300 text-xl leading-relaxed mb-8 text-center">
            In 2024, Lions Municipal celebrated its centennial—100 years of
            serving Austin golfers.
          </BodyText>

          <div className="grid md:grid-cols-3 gap-8 my-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-4">1924</div>
              <BodyText className="text-slate-400">Founded</BodyText>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-4">1950</div>
              <BodyText className="text-slate-400">Desegregated</BodyText>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-4">2024</div>
              <BodyText className="text-slate-400">Centennial</BodyText>
            </div>
          </div>

          <BodyText className="text-slate-300 text-xl leading-relaxed text-center">
            From Depression-era hope to civil rights landmark to beloved
            community institution—Muny's journey mirrors Austin's evolution.
          </BodyText>
        </div>
      </section>

      {/* Where Everyone Plays */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto">
          <SectionHeading className="text-blue-300 mb-12">
            Where Everyone Plays
          </SectionHeading>

          <BodyText className="text-slate-300 text-xl leading-relaxed mb-6">
            A century later, Lions Municipal remains true to its founding
            mission: accessible golf for all.
          </BodyText>

          <BodyText className="text-slate-300 text-xl leading-relaxed mb-6">
            Weekday mornings see retirees teeing off at dawn. Afternoons bring
            juniors learning the game. Evenings welcome workers getting in nine
            holes after the office.
          </BodyText>

          <BodyText className="text-slate-300 text-xl leading-relaxed mb-6">
            Students, families, first-timers, lifelong players—Muny welcomes
            them all.
          </BodyText>

          <BodyText className="text-white text-2xl leading-relaxed font-semibold">
            This is the people's course. Always has been. Always will be.
          </BodyText>
        </div>
      </section>

      {/* Stats & Facts */}
      <section className="relative py-32 px-6 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <SectionHeading className="text-blue-300 mb-16 text-center">
            By the Numbers
          </SectionHeading>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-slate-900/50 rounded-lg">
              <div className="text-4xl font-bold text-blue-400 mb-3">1924</div>
              <BodyText className="text-slate-400">Year Founded</BodyText>
            </div>

            <div className="text-center p-6 bg-slate-900/50 rounded-lg">
              <div className="text-4xl font-bold text-blue-400 mb-3">1st</div>
              <BodyText className="text-slate-400">
                Desegregated Course in the South
              </BodyText>
            </div>

            <div className="text-center p-6 bg-slate-900/50 rounded-lg">
              <div className="text-4xl font-bold text-blue-400 mb-3">
                75,000+
              </div>
              <BodyText className="text-slate-400">Rounds per Year</BodyText>
            </div>

            <div className="text-center p-6 bg-slate-900/50 rounded-lg">
              <div className="text-4xl font-bold text-blue-400 mb-3">$25</div>
              <BodyText className="text-slate-400">
                Weekday Green Fee (Approx.)
              </BodyText>
            </div>
          </div>

          <div className="mt-12 text-center">
            <BodyText className="text-slate-400 italic">
              Historic designation: Site of first desegregated public golf
              course in the American South
            </BodyText>
          </div>
        </div>
      </section>

      {/* Final Quote Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto">
          <AnimatedQuote>
            Muny isn't just a golf course. It's a monument to courage, progress,
            and the enduring belief that the game belongs to everyone.
          </AnimatedQuote>
          <p className="text-slate-400 text-center mt-8 text-lg">
            — Austin Golf Historian
          </p>
        </div>
      </section>

      {/* Closing Image with CTA */}
      <section className="relative h-[70vh]">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=80"
          alt="Lions Municipal Golf Course - A Century of Service"
          speed={0.3}
          overlay={true}
          overlayOpacity={0.6}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <BodyText className="text-slate-300 text-2xl md:text-3xl max-w-3xl mb-8 leading-relaxed">
            A golf course became a symbol of hope, then a landmark of progress.
            Today, it stands as proof that courage and inclusion create lasting
            legacies.
          </BodyText>

          <Link
            href="/clubs"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Explore More Austin Golf Clubs
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-slate-400 text-sm mb-4">
            Part of the History of Austin Golf series
          </p>
          <p className="text-blue-400 font-playfair text-lg">
            Lions Municipal Golf Course
          </p>
          <p className="text-slate-500 text-xs mt-6">
            © {new Date().getFullYear()} Mackenzie Club. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
