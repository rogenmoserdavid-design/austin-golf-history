"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Course {
  id: string;
  name: string;
  yearFounded: number;
  x: number; // percentage position
  y: number; // percentage position
  description: string;
  designer?: string;
}

const courses: Course[] = [
  {
    id: "acc",
    name: "Austin Country Club",
    yearFounded: 1899,
    x: 45,
    y: 40,
    description: "Austin's first golf club, founded by a group of pioneers who laid the groundwork for the game in Central Texas.",
    designer: "Unknown",
  },
  {
    id: "lions",
    name: "Lions Municipal Golf Course",
    yearFounded: 1924,
    x: 42,
    y: 48,
    description: "The people's course that democratized golf in Austin, making the game accessible to everyone.",
    designer: "Unknown",
  },
  {
    id: "agc",
    name: "Austin Golf Club",
    yearFounded: 1984,
    x: 35,
    y: 55,
    description: "A modern classic that raised the bar for championship golf in Austin.",
    designer: "Pete Dye",
  },
  {
    id: "spanish-oaks",
    name: "Spanish Oaks Golf Club",
    yearFounded: 2005,
    x: 30,
    y: 62,
    description: "Where luxury meets championship golf in the Texas Hill Country.",
    designer: "Jack Nicklaus",
  },
  {
    id: "driftwood",
    name: "Driftwood Golf Club",
    yearFounded: 2002,
    x: 25,
    y: 70,
    description: "A hidden gem carved into the rugged Hill Country landscape.",
    designer: "Tom Kite",
  },
  {
    id: "barton-creek",
    name: "Barton Creek Resort",
    yearFounded: 1986,
    x: 38,
    y: 52,
    description: "Four championship courses that put Austin on the national golf map.",
    designer: "Tom Fazio, Arnold Palmer, Ben Crenshaw",
  },
];

export function InteractiveMap() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Map Container */}
      <div className="relative aspect-[4/3] bg-golf-cream border-2 border-golf-gold rounded-lg overflow-hidden shadow-2xl">
        {/* Austin Map Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-golf-green/10 via-golf-cream to-golf-green/5">
          {/* Simplified Austin shape/roads */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Colorado River representation */}
            <path
              d="M 0 45 Q 20 42, 40 45 T 80 48 L 100 50"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-golf-navy/30"
            />
            {/* MoPac representation */}
            <line
              x1="35"
              y1="0"
              x2="35"
              y2="100"
              stroke="currentColor"
              strokeWidth="1"
              className="text-golf-navy/20"
            />
            {/* I-35 representation */}
            <line
              x1="50"
              y1="0"
              x2="50"
              y2="100"
              stroke="currentColor"
              strokeWidth="1"
              className="text-golf-navy/20"
            />
          </svg>

          {/* Austin label */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-golf-navy/40 font-playfair text-2xl italic">
            Austin & Hill Country
          </div>
        </div>

        {/* Course Pins */}
        {courses.map((course) => (
          <motion.div
            key={course.id}
            className="absolute"
            style={{
              left: `${course.x}%`,
              top: `${course.y}%`,
              transform: "translate(-50%, -100%)",
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 * courses.indexOf(course), duration: 0.4 }}
          >
            <motion.button
              className="relative group"
              onClick={() =>
                setSelectedCourse(
                  selectedCourse?.id === course.id ? null : course
                )
              }
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Pin */}
              <svg
                width="32"
                height="40"
                viewBox="0 0 32 40"
                className={`drop-shadow-lg transition-colors ${
                  selectedCourse?.id === course.id
                    ? "fill-golf-gold"
                    : "fill-golf-navy group-hover:fill-golf-gold"
                }`}
              >
                <path d="M16 0C7.2 0 0 7.2 0 16c0 12 16 24 16 24s16-12 16-24c0-8.8-7.2-16-16-16z" />
                <circle
                  cx="16"
                  cy="16"
                  r="6"
                  className="fill-golf-cream"
                />
              </svg>

              {/* Hover label */}
              <AnimatePresence>
                {hoveredCourse === course.id && !selectedCourse && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: -10 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap"
                  >
                    <div className="bg-golf-navy text-golf-cream px-3 py-1.5 rounded text-sm font-medium shadow-lg">
                      {course.name}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        ))}

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-golf-cream/90 backdrop-blur-sm border border-golf-gold/30 rounded-lg p-3 text-xs">
          <div className="font-medium text-golf-navy mb-1">
            Click pins to explore
          </div>
          <div className="text-golf-charcoal/70">
            {courses.length} historic courses
          </div>
        </div>
      </div>

      {/* Course Details Panel */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              className="mt-4 bg-golf-navy text-golf-cream rounded-lg p-6 shadow-xl"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-golf-gold">
                    {selectedCourse.name}
                  </h3>
                  <p className="text-golf-cream/70 mt-1">
                    Founded {selectedCourse.yearFounded}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="text-golf-cream/60 hover:text-golf-gold transition-colors p-2"
                  aria-label="Close details"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <p className="text-golf-cream/90 mb-4 leading-relaxed">
                {selectedCourse.description}
              </p>

              {selectedCourse.designer && (
                <div className="border-t border-golf-gold/20 pt-3">
                  <span className="text-golf-gold/70 text-sm">Designer: </span>
                  <span className="text-golf-cream">
                    {selectedCourse.designer}
                  </span>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
