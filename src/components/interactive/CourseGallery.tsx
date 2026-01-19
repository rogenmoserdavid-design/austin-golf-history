"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  courseName: string;
  year?: number;
}

interface CourseGalleryProps {
  images?: GalleryImage[];
}

// Default sample images if none provided
const defaultImages: GalleryImage[] = [
  {
    id: "1",
    src: "/images/courses/acc-vintage.jpg",
    alt: "Austin Country Club historic clubhouse",
    caption: "The original clubhouse, circa 1920s",
    courseName: "Austin Country Club",
    year: 1925,
  },
  {
    id: "2",
    src: "/images/courses/lions-opening.jpg",
    alt: "Lions Municipal opening day",
    caption: "Opening day celebrations",
    courseName: "Lions Municipal",
    year: 1924,
  },
  {
    id: "3",
    src: "/images/courses/barton-creek-aerial.jpg",
    alt: "Barton Creek Resort aerial view",
    caption: "The Fazio Foothills course",
    courseName: "Barton Creek Resort",
    year: 1986,
  },
  {
    id: "4",
    src: "/images/courses/spanish-oaks-18th.jpg",
    alt: "Spanish Oaks 18th hole",
    caption: "The signature 18th hole",
    courseName: "Spanish Oaks",
    year: 2005,
  },
  {
    id: "5",
    src: "/images/courses/driftwood-landscape.jpg",
    alt: "Driftwood Golf Club landscape",
    caption: "Hill Country beauty",
    courseName: "Driftwood",
    year: 2002,
  },
  {
    id: "6",
    src: "/images/courses/austin-golf-club.jpg",
    alt: "Austin Golf Club signature hole",
    caption: "Pete Dye's masterpiece",
    courseName: "Austin Golf Club",
    year: 1984,
  },
];

export function CourseGallery({ images = defaultImages }: CourseGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const navigatePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer bg-golf-navy/5"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => openLightbox(image, index)}
          >
            {/* Image */}
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-golf-navy/80 via-golf-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Info overlay */}
              <motion.div
                className="absolute inset-x-0 bottom-0 p-4 text-golf-cream translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                initial={false}
              >
                <div className="text-sm font-medium mb-1">
                  {image.courseName}
                </div>
                {image.caption && (
                  <div className="text-xs text-golf-cream/80">
                    {image.caption}
                  </div>
                )}
                {image.year && (
                  <div className="text-xs text-golf-gold mt-1">
                    {image.year}
                  </div>
                )}
              </motion.div>

              {/* Expand icon */}
              <motion.div
                className="absolute top-3 right-3 bg-golf-navy/70 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              >
                <svg
                  className="w-5 h-5 text-golf-cream"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-golf-navy/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <motion.button
              className="absolute top-4 right-4 md:top-8 md:right-8 text-golf-cream hover:text-golf-gold transition-colors p-2 z-10"
              onClick={closeLightbox}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close lightbox"
            >
              <svg
                className="w-8 h-8"
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
            </motion.button>

            {/* Navigation buttons */}
            <motion.button
              className="absolute left-4 md:left-8 text-golf-cream hover:text-golf-gold transition-colors p-2 z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigatePrev();
              }}
              whileHover={{ scale: 1.1, x: -4 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous image"
            >
              <svg
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            <motion.button
              className="absolute right-4 md:right-8 text-golf-cream hover:text-golf-gold transition-colors p-2 z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateNext();
              }}
              whileHover={{ scale: 1.1, x: 4 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next image"
            >
              <svg
                className="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>

            {/* Image container */}
            <motion.div
              className="relative max-w-7xl max-h-[90vh] mx-4"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full max-w-5xl">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>

              {/* Image info */}
              <motion.div
                className="mt-4 text-center text-golf-cream"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-playfair font-bold text-golf-gold mb-2">
                  {selectedImage.courseName}
                </h3>
                {selectedImage.caption && (
                  <p className="text-golf-cream/90 mb-1">
                    {selectedImage.caption}
                  </p>
                )}
                {selectedImage.year && (
                  <p className="text-sm text-golf-cream/70">
                    {selectedImage.year}
                  </p>
                )}
                <p className="text-xs text-golf-cream/50 mt-2">
                  {currentIndex + 1} / {images.length}
                </p>
              </motion.div>
            </motion.div>

            {/* Keyboard hint */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-golf-cream/50 text-xs">
              Use arrow keys to navigate • ESC to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
