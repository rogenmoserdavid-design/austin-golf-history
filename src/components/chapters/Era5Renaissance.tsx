"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ParallaxImage } from "@/components/core/ParallaxImage";
import { AnimatedText, SectionHeading, BodyText } from "@/components/core/AnimatedText";
import { HorizontalScroll, GalleryCard, HorizontalProgress } from "@/components/core/HorizontalScroll";

interface Course {
  name: string;
  subtitle: string;
  description: string;
  image: string;
  details: {
    opened?: string;
    designer?: string;
    type: string;
    notable?: string;
  };
}

const courses: Course[] = [
  {
    name: "Austin Golf Club",
    subtitle: "Pete Dye Masterpiece",
    description: "When Austin Golf Club opened in 1984, it brought championship-caliber golf to the Hill Country. Pete Dye's strategic design became an instant classic, challenging the best players while remaining enjoyable for members.",
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=80",
    details: {
      opened: "1984",
      designer: "Pete Dye",
      type: "Private",
      notable: "Site of numerous PGA Tour events"
    }
  },
  {
    name: "Spanish Oaks Golf Club",
    subtitle: "Natural Perfection",
    description: "Bobby Weed's design philosophy shines at Spanish Oaks, where the course flows naturally through dramatic Hill Country terrain. Each hole offers breathtaking views while demanding thoughtful shot-making.",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&q=80",
    details: {
      designer: "Bobby Weed",
      type: "Private",
      notable: "Ranked among Texas' finest courses"
    }
  },
  {
    name: "Driftwood Golf Club",
    subtitle: "Hill Country Gem",
    description: "Set in the picturesque Texas Hill Country, Driftwood offers an accessible yet challenging experience. The semi-private club provides a taste of championship golf with stunning natural beauty at every turn.",
    image: "https://images.unsplash.com/photo-1592919505780-303950717480?w=1920&q=80",
    details: {
      type: "Semi-Private",
      notable: "Named for the historic Driftwood community"
    }
  },
  {
    name: "Barton Creek Resort",
    subtitle: "Four Signature Courses",
    description: "Barton Creek's collection of four championship courses, including the renowned Fazio Foothills, established Austin as a true golf destination. Each layout offers unique challenges and showcases the region's natural beauty.",
    image: "https://images.unsplash.com/photo-1591491653056-4e9d563a42de?w=1920&q=80",
    details: {
      designer: "Tom Fazio, Arnold Palmer, Ben Crenshaw",
      type: "Resort",
      notable: "Host to PGA Tour Champions events"
    }
  }
];

export function Era5Renaissance() {
  const [currentCourse, setCurrentCourse] = useState(0);

  return (
    <section
      id="era-renaissance"
      data-era="renaissance"
      className="relative min-h-screen bg-gradient-to-br from-emerald-950 via-green-900 to-emerald-950"
    >
      {/* Header Section */}
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <div className="mb-4">
            <AnimatedText
              as="span"
              className="text-emerald-400 text-sm tracking-[0.3em] uppercase font-medium"
              animation="fade"
            >
              Era Five • 1980s–Present
            </AnimatedText>
          </div>

          <SectionHeading className="text-golf-cream mb-8">
            The Renaissance
          </SectionHeading>

          <BodyText className="text-golf-cream/80 mb-6 text-xl">
            The modern era brought world-class golf course design to Austin.
            Legendary architects created layouts that honored the dramatic Hill
            Country landscape while raising the standard of play.
          </BodyText>

          <BodyText className="text-emerald-300/60 text-base">
            3 min read
          </BodyText>
        </div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div className="relative z-10 py-16">
        <HorizontalScroll className="min-h-[90vh]">
          {/* Intro Card */}
          <GalleryCard width="40vw" className="px-6 flex items-center">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-playfair text-emerald-300">
                A New Standard
              </h3>
              <p className="text-golf-cream/70 text-lg leading-relaxed max-w-md">
                The renaissance era transformed Austin from a golf town into a
                golf destination. Master architects brought their vision to the
                Hill Country, creating courses that challenged professionals
                and delighted amateurs.
              </p>
              <div className="flex items-center gap-3 text-emerald-400">
                <div className="h-px w-12 bg-emerald-400" />
                <span className="text-sm tracking-wider">SCROLL TO EXPLORE</span>
              </div>
            </div>
          </GalleryCard>

          {/* Course Cards */}
          {courses.map((course, index) => (
            <GalleryCard key={course.name} width="80vw" className="px-8">
              <div className="grid md:grid-cols-2 gap-8 items-center h-full">
                {/* Image */}
                <div className="relative h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />

                  {/* Course Number Badge */}
                  <div className="absolute top-6 left-6 w-16 h-16 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center">
                    <span className="text-2xl font-playfair text-emerald-300">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <div className="text-emerald-400 text-sm tracking-wider uppercase mb-2">
                      {course.subtitle}
                    </div>
                    <h3 className="text-4xl md:text-5xl font-playfair text-golf-cream mb-4">
                      {course.name}
                    </h3>
                    <p className="text-golf-cream/70 text-lg leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-emerald-700/30">
                    {course.details.opened && (
                      <div>
                        <div className="text-emerald-400/60 text-xs uppercase tracking-wider mb-1">
                          Opened
                        </div>
                        <div className="text-golf-cream text-sm">
                          {course.details.opened}
                        </div>
                      </div>
                    )}
                    {course.details.designer && (
                      <div>
                        <div className="text-emerald-400/60 text-xs uppercase tracking-wider mb-1">
                          Designer
                        </div>
                        <div className="text-golf-cream text-sm">
                          {course.details.designer}
                        </div>
                      </div>
                    )}
                    <div>
                      <div className="text-emerald-400/60 text-xs uppercase tracking-wider mb-1">
                        Type
                      </div>
                      <div className="text-golf-cream text-sm">
                        {course.details.type}
                      </div>
                    </div>
                    {course.details.notable && (
                      <div className="col-span-2">
                        <div className="text-emerald-400/60 text-xs uppercase tracking-wider mb-1">
                          Notable
                        </div>
                        <div className="text-golf-cream text-sm">
                          {course.details.notable}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </GalleryCard>
          ))}

          {/* Closing Card */}
          <GalleryCard width="40vw" className="px-6 flex items-center">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-playfair text-emerald-300">
                Legacy Lives On
              </h3>
              <p className="text-golf-cream/70 text-lg leading-relaxed max-w-md">
                These modern classics continue to define Austin golf. Each
                course represents the highest standards of design, challenging
                players while showcasing the natural beauty that makes Hill
                Country golf unforgettable.
              </p>
            </div>
          </GalleryCard>
        </HorizontalScroll>

        {/* Progress Indicator */}
        <div className="container mx-auto px-6 mt-12">
          <HorizontalProgress
            total={courses.length + 2}
            current={currentCourse}
            className="justify-center"
          />
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-golf-navy to-transparent" />
    </section>
  );
}
