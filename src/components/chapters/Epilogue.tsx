"use client";

import { useRef } from "react";
import { ParallaxImage } from "@/components/core/ParallaxImage";
import { AnimatedText, DisplayHeading, SectionHeading, BodyText } from "@/components/core/AnimatedText";
import { motion } from "framer-motion";

export function Epilogue() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="epilogue"
      ref={sectionRef}
      data-era="epilogue"
      className="relative min-h-screen bg-golf-navy text-golf-cream"
    >
      {/* Hero Image - Muny Today */}
      <div className="relative h-screen">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=80"
          alt="Lions Municipal Golf Course - 100 Years Strong"
          speed={0.4}
          scale={1.15}
          overlay={true}
          overlayOpacity={0.6}
          kenBurns={true}
          priority={false}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <DisplayHeading className="text-golf-gold mb-6">
              The Legacy Continues
            </DisplayHeading>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-xl md:text-2xl text-golf-cream/80 font-light">
                A Century of Austin Golf • 2 Minute Read
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* 100th Anniversary */}
          <div className="space-y-6">
            <SectionHeading className="text-golf-gold">
              One Hundred Years Strong
            </SectionHeading>
            <BodyText className="text-golf-cream/90 leading-relaxed">
              In 2024, Lions Municipal Golf Course celebrated a remarkable milestone: 100 years of service to the Austin community. The course that Leon Howard Young envisioned as a democratic gathering place for all has remained true to that promise for an entire century.
            </BodyText>
            <BodyText className="text-golf-cream/90 leading-relaxed">
              Through economic depressions and booms, through world wars and peacetime, through the evolution of the game itself, Muny has endured. Generations of Austin families have learned the game on its fairways. Thousands of rounds have been played. Countless memories have been made.
            </BodyText>
            <BodyText className="text-golf-cream/90 leading-relaxed">
              The centennial celebration wasn't just about looking back. It was about honoring a promise kept: that quality golf would always be accessible to everyone, regardless of means.
            </BodyText>
          </div>

          {/* Gold Divider */}
          <div className="w-24 h-px bg-golf-gold/30 mx-auto"></div>

          {/* The Tradition Lives On */}
          <div className="space-y-6">
            <SectionHeading className="text-golf-gold">
              A Living Tradition
            </SectionHeading>
            <BodyText className="text-golf-cream/90 leading-relaxed">
              Today, Austin's golf landscape is richer than Young could have imagined. From the historic fairways of Muny to modern facilities throughout the city, the game thrives in the Hill Country. But the spirit remains unchanged: golf as a path to community, to excellence, to the simple joy of the game itself.
            </BodyText>
            <BodyText className="text-golf-cream/90 leading-relaxed">
              Young golfers still chase their dreams on public courses. Families still bond over weekend rounds. The traditions of honor, integrity, and sportsmanship that define golf continue to shape character and build community.
            </BodyText>
          </div>

          {/* Gold Divider */}
          <div className="w-24 h-px bg-golf-gold/30 mx-auto"></div>

          {/* The Future */}
          <div className="space-y-6">
            <SectionHeading className="text-golf-gold">
              New Chapters
            </SectionHeading>
            <BodyText className="text-golf-cream/90 leading-relaxed">
              As Austin grows, so too does its golf story. New chapters are being written in the Hill Country, honoring the traditions of the past while embracing the possibilities of the future. The legacy of Leon Howard Young, Harvey Penick, Ben Crenshaw, and countless others lives on in every swing, every round, every moment spent on these hallowed grounds.
            </BodyText>
            <BodyText className="text-golf-cream/90 leading-relaxed">
              The game that Young brought to Austin in 1924 has become woven into the fabric of the city. It has shaped neighborhoods, built friendships, and created a shared heritage that spans generations. And as long as there are fairways to walk and greens to read, that story will continue.
            </BodyText>
          </div>

        </div>
      </div>

      {/* Future Image Section */}
      <div className="relative h-[70vh]">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&q=80"
          alt="The Future of Austin Golf"
          speed={0.3}
          scale={1.2}
          overlay={true}
          overlayOpacity={0.5}
          kenBurns={true}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-3xl md:text-5xl font-playfair text-golf-gold italic">
                "The best rounds are yet to be played."
              </h3>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <BodyText className="text-golf-cream/90 text-lg leading-relaxed">
            Austin's golf legacy continues in the rolling hills where tradition meets innovation, where every round honors the past while embracing the future.
          </BodyText>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href="https://mackenzieclub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-golf-gold text-golf-navy font-semibold tracking-wide hover:bg-golf-gold/90 transition-colors duration-300"
            >
              Discover Mackenzie Club
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-golf-cream/60 italic mt-8">
              Where Austin's golf story continues
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </section>
  );
}
