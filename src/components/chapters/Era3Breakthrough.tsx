"use client";

import { ParallaxImage } from "@/components/core/ParallaxImage";
import {
  AnimatedText,
  SectionHeading,
  DisplayHeading,
  BodyText,
  AnimatedQuote,
} from "@/components/core/AnimatedText";
import { PinnedSection, PinnedReveal } from "@/components/core/PinnedSection";

export function Era3Breakthrough() {
  return (
    <section
      id="era-breakthrough"
      data-era="breakthrough"
      className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Hero Image - Dark and Powerful */}
      <div className="relative h-screen">
        <ParallaxImage
          src="/images/eras/breakthrough/muny-historic.jpg"
          alt="Lions Municipal Golf Course historic view"
          speed={0.5}
          overlay={true}
          overlayOpacity={0.4}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-900" />

        {/* Era Title - Centered and Dramatic */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <AnimatedText as="span" className="text-blue-400 mb-4 block text-sm uppercase tracking-widest">
              1950
            </AnimatedText>
            <DisplayHeading className="text-white max-w-4xl">
              The Breakthrough
            </DisplayHeading>
            <BodyText className="text-slate-300 mt-6 text-xl max-w-2xl mx-auto">
              Four years before Brown v. Board of Education, Austin, Texas did
              something revolutionary.
            </BodyText>
          </div>
        </div>
      </div>

      {/* Pinned Reveal Storytelling */}
      <PinnedReveal
        sections={[
          {
            content: (
              <div className="text-white max-w-3xl px-6">
                <SectionHeading className="text-blue-300 mb-8">
                  The Petition
                </SectionHeading>
                <BodyText className="text-2xl md:text-3xl leading-relaxed text-slate-200">
                  In 1950, Dr. Everett Givens and a group of Black golfers did
                  something that required immense courage.
                </BodyText>
                <BodyText className="text-2xl md:text-3xl leading-relaxed text-slate-200 mt-6">
                  They petitioned the City of Austin to open Lions Municipal
                  Golf Course to all players, regardless of race.
                </BodyText>
              </div>
            ),
            background: (
              <ParallaxImage
                src="/images/eras/breakthrough/desegregation.jpg"
                alt="Civil rights era"
                speed={0.2}
                overlay={true}
                overlayOpacity={0.7}
              />
            ),
          },
          {
            content: (
              <div className="text-white max-w-3xl px-6">
                <BodyText className="text-2xl md:text-3xl leading-relaxed text-slate-200">
                  This wasn't a small ask. This was 1950s Texas.
                </BodyText>
                <BodyText className="text-2xl md:text-3xl leading-relaxed text-slate-200 mt-6">
                  The American South was deeply segregated. Jim Crow laws were
                  the norm. The Supreme Court's Brown v. Board of Education
                  decision was still four years away.
                </BodyText>
                <BodyText className="text-3xl md:text-4xl leading-relaxed text-blue-300 mt-8 font-semibold">
                  And yet, Austin said yes.
                </BodyText>
              </div>
            ),
            background: (
              <ParallaxImage
                src="/images/eras/breakthrough/muny-historic.jpg"
                alt="Historic Muny"
                speed={0.2}
                overlay={true}
                overlayOpacity={0.7}
              />
            ),
          },
          {
            content: (
              <div className="text-white max-w-3xl px-6">
                <SectionHeading className="text-blue-300 mb-8">
                  A Historic Decision
                </SectionHeading>
                <BodyText className="text-2xl md:text-3xl leading-relaxed text-slate-200">
                  Lions Municipal Golf Course became the first desegregated
                  public golf course in the American South.
                </BodyText>
                <BodyText className="text-3xl md:text-4xl leading-relaxed text-white mt-8 font-semibold">
                  Not just in Texas. In the entire South.
                </BodyText>
              </div>
            ),
            background: (
              <ParallaxImage
                src="/images/eras/breakthrough/muny-historic.jpg"
                alt="Muny historic view"
                speed={0.2}
                overlay={true}
                overlayOpacity={0.7}
              />
            ),
          },
          {
            content: (
              <div className="text-white max-w-3xl px-6">
                <BodyText className="text-2xl md:text-3xl leading-relaxed text-slate-200">
                  The course that began as a symbol of Depression-era hope
                  became a beacon of civil rights progress.
                </BodyText>
                <BodyText className="text-2xl md:text-3xl leading-relaxed text-slate-200 mt-6">
                  Muny wasn't just a place to play golf anymore. It was a
                  statement.
                </BodyText>
                <BodyText className="text-3xl md:text-4xl leading-relaxed text-blue-300 mt-8 font-semibold">
                  A symbol that change was possible.
                </BodyText>
              </div>
            ),
            background: (
              <ParallaxImage
                src="/images/eras/breakthrough/desegregation.jpg"
                alt="Symbol of progress"
                speed={0.2}
                overlay={true}
                overlayOpacity={0.7}
              />
            ),
          },
        ]}
      />

      {/* Quote Section - Powerful and Centered */}
      <div className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedQuote>
            Golf courses became battlegrounds for equality. And Austin fired
            the first shot.
          </AnimatedQuote>
          <p className="text-slate-400 text-center mt-8 text-lg">
            — Civil Rights Historian
          </p>
        </div>
      </div>

      {/* Context Section */}
      <div className="relative py-24 px-6 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <SectionHeading className="text-blue-300 mb-12 text-center">
            Understanding the Moment
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-12 text-slate-300">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                The Context
              </h3>
              <BodyText className="leading-relaxed">
                The 1950s South was deeply segregated. Public facilities were
                divided by race, enforced by law and custom. Golf courses were
                no exception.
              </BodyText>
              <BodyText className="leading-relaxed mt-4">
                Black golfers were confined to poorly maintained courses or
                forced to travel long distances to play. The idea of integrated
                public golf was considered radical, even dangerous.
              </BodyText>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                The Courage
              </h3>
              <BodyText className="leading-relaxed">
                Dr. Everett Givens and his fellow petitioners weren't just
                asking for access to a golf course. They were challenging the
                entire structure of segregation.
              </BodyText>
              <BodyText className="leading-relaxed mt-4">
                They faced real danger. Social ostracism. Economic retaliation.
                Physical violence. And yet they persisted, knowing that
                progress demanded courage.
              </BodyText>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                The Significance
              </h3>
              <BodyText className="leading-relaxed">
                This decision predated Brown v. Board of Education by four
                years. It showed that change was possible, even in the South.
              </BodyText>
              <BodyText className="leading-relaxed mt-4">
                Lions Municipal became a model for other cities, proving that
                integration could work peacefully and successfully.
              </BodyText>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                The Legacy
              </h3>
              <BodyText className="leading-relaxed">
                Today, we take integrated public golf courses for granted. But
                in 1950, it was revolutionary.
              </BodyText>
              <BodyText className="leading-relaxed mt-4">
                The courage of Dr. Givens and others, combined with Austin's
                willingness to lead, created a lasting legacy of progress and
                inclusion.
              </BodyText>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading className="text-blue-300 mb-16 text-center">
            Timeline of Change
          </SectionHeading>

          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="text-blue-400 font-bold text-2xl min-w-[100px]">
                1950
              </div>
              <div className="text-slate-300">
                <h3 className="text-xl font-bold text-white mb-2">
                  The Petition
                </h3>
                <BodyText>
                  Dr. Everett Givens and other Black golfers petition the City
                  of Austin to desegregate Lions Municipal Golf Course.
                </BodyText>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="text-blue-400 font-bold text-2xl min-w-[100px]">
                1950
              </div>
              <div className="text-slate-300">
                <h3 className="text-xl font-bold text-white mb-2">
                  The Decision
                </h3>
                <BodyText>
                  Austin City Council votes to open Muny to all players,
                  becoming the first desegregated public golf course in the
                  American South.
                </BodyText>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="text-blue-400 font-bold text-2xl min-w-[100px]">
                1954
              </div>
              <div className="text-slate-300">
                <h3 className="text-xl font-bold text-white mb-2">
                  Brown v. Board
                </h3>
                <BodyText>
                  Four years later, the Supreme Court rules school segregation
                  unconstitutional. Austin's golf course had already shown the
                  way.
                </BodyText>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="text-blue-400 font-bold text-2xl min-w-[100px]">
                Present
              </div>
              <div className="text-slate-300">
                <h3 className="text-xl font-bold text-white mb-2">
                  The Legacy
                </h3>
                <BodyText>
                  Lions Municipal continues to serve Austin golfers of all
                  backgrounds, a living monument to courage and progress.
                </BodyText>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Image */}
      <div className="relative h-[60vh]">
        <ParallaxImage
          src="/images/eras/breakthrough/muny-historic.jpg"
          alt="Lions Municipal Golf Course - A Symbol of Progress"
          speed={0.3}
          overlay={true}
          overlayOpacity={0.5}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-3xl">
            <BodyText className="text-slate-300 text-2xl">
              A golf course became a battleground. And Austin won a victory
              that would echo through history.
            </BodyText>
          </div>
        </div>
      </div>
    </section>
  );
}
