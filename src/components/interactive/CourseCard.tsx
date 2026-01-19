"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface CourseCardProps {
  name: string;
  yearFounded: number;
  designer: string;
  description: string;
  imagePath?: string;
  has360View?: boolean;
  onViewClick?: () => void;
}

export function CourseCard({
  name,
  yearFounded,
  designer,
  description,
  imagePath,
  has360View = false,
  onViewClick,
}: CourseCardProps) {
  return (
    <motion.div
      className="group relative bg-golf-cream rounded-lg overflow-hidden shadow-lg border border-golf-gold/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Section */}
      <div className="relative aspect-[16/10] overflow-hidden bg-golf-green/10">
        {imagePath ? (
          <Image
            src={imagePath}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-golf-green/20 to-golf-navy/10">
            <svg
              className="w-16 h-16 text-golf-gold/30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}

        {/* Year Badge */}
        <motion.div
          className="absolute top-3 right-3 bg-golf-navy/90 backdrop-blur-sm text-golf-gold px-3 py-1.5 rounded-full text-sm font-bold"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Est. {yearFounded}
        </motion.div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-golf-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-2xl font-playfair font-bold text-golf-navy mb-2 group-hover:text-golf-green transition-colors">
          {name}
        </h3>

        <div className="flex items-center gap-2 mb-3 text-sm text-golf-charcoal/70">
          <svg
            className="w-4 h-4 text-golf-gold"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
          <span className="font-medium">{designer}</span>
        </div>

        <p className="text-golf-charcoal/80 leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <motion.button
            className="flex-1 bg-golf-navy text-golf-cream px-4 py-2.5 rounded-md font-medium hover:bg-golf-green transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </motion.button>

          {has360View && (
            <motion.button
              onClick={onViewClick}
              className="px-4 py-2.5 bg-golf-gold/10 text-golf-navy rounded-md hover:bg-golf-gold/20 transition-colors border border-golf-gold/30"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="View 360° tour"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </motion.button>
          )}
        </div>
      </div>

      {/* Decorative corner accent */}
      <motion.div
        className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-golf-gold/0 group-hover:border-golf-gold/40 transition-colors rounded-tl-lg"
        initial={false}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-golf-gold/0 group-hover:border-golf-gold/40 transition-colors rounded-br-lg"
        initial={false}
      />
    </motion.div>
  );
}
