"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const clubs = [
  { name: "Austin Country Club", href: "/clubs/austin-country-club", year: "1899" },
  { name: "Lions Municipal", href: "/clubs/lions-municipal", year: "1924" },
  { name: "Austin Golf Club", href: "/clubs/austin-golf-club", year: "1984" },
  { name: "Spanish Oaks", href: "/clubs/spanish-oaks", year: "2007" },
  { name: "Barton Creek Resort", href: "/clubs/barton-creek", year: "1986" },
];

const chapters = [
  { name: "Prologue", href: "/#prologue" },
  { name: "The Pioneer", href: "/#era-pioneer" },
  { name: "The Teacher", href: "/#era-teacher" },
  { name: "The Breakthrough", href: "/#era-breakthrough" },
  { name: "The Champions", href: "/#era-champions" },
  { name: "The Renaissance", href: "/#era-renaissance" },
  { name: "Epilogue", href: "/#epilogue" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClubsOpen, setIsClubsOpen] = useState(false);
  const [isChaptersOpen, setIsChaptersOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-golf-navy/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-golf-cream font-playfair text-lg md:text-xl font-semibold hover:text-golf-gold transition-colors"
          >
            Austin Golf History
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Chapters Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsChaptersOpen(true)}
              onMouseLeave={() => setIsChaptersOpen(false)}
            >
              <button className="flex items-center gap-1 text-golf-cream/80 hover:text-golf-gold transition-colors text-sm">
                The Story
                <ChevronDown className={`w-4 h-4 transition-transform ${isChaptersOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {isChaptersOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-golf-navy/95 backdrop-blur-md rounded-lg shadow-xl border border-golf-gold/20 overflow-hidden"
                  >
                    {chapters.map((chapter) => (
                      <Link
                        key={chapter.href}
                        href={chapter.href}
                        className="block px-4 py-2 text-sm text-golf-cream/80 hover:text-golf-gold hover:bg-golf-gold/10 transition-colors"
                      >
                        {chapter.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Clubs Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsClubsOpen(true)}
              onMouseLeave={() => setIsClubsOpen(false)}
            >
              <button className="flex items-center gap-1 text-golf-cream/80 hover:text-golf-gold transition-colors text-sm">
                The Clubs
                <ChevronDown className={`w-4 h-4 transition-transform ${isClubsOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {isClubsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-golf-navy/95 backdrop-blur-md rounded-lg shadow-xl border border-golf-gold/20 overflow-hidden"
                  >
                    <Link
                      href="/clubs"
                      className="block px-4 py-2 text-sm text-golf-gold font-semibold border-b border-golf-gold/20"
                    >
                      All Clubs →
                    </Link>
                    {clubs.map((club) => (
                      <Link
                        key={club.href}
                        href={club.href}
                        className="flex items-center justify-between px-4 py-2 text-sm text-golf-cream/80 hover:text-golf-gold hover:bg-golf-gold/10 transition-colors"
                      >
                        <span>{club.name}</span>
                        <span className="text-golf-gold/50 text-xs">{club.year}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <Link
              href="https://mackenzieclub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-golf-gold text-golf-navy text-sm font-semibold rounded-full hover:bg-golf-gold/90 transition-colors"
            >
              Mackenzie Club
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-golf-cream p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-golf-navy/95 backdrop-blur-md border-t border-golf-gold/20"
          >
            <div className="container mx-auto px-6 py-6 space-y-6">
              {/* Chapters */}
              <div>
                <h3 className="text-golf-gold text-xs uppercase tracking-wider mb-3">The Story</h3>
                <div className="grid grid-cols-2 gap-2">
                  {chapters.map((chapter) => (
                    <Link
                      key={chapter.href}
                      href={chapter.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-golf-cream/80 hover:text-golf-gold text-sm py-1"
                    >
                      {chapter.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Clubs */}
              <div>
                <h3 className="text-golf-gold text-xs uppercase tracking-wider mb-3">The Clubs</h3>
                <div className="space-y-2">
                  <Link
                    href="/clubs"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-golf-gold font-semibold text-sm py-1"
                  >
                    View All Clubs →
                  </Link>
                  {clubs.map((club) => (
                    <Link
                      key={club.href}
                      href={club.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between text-golf-cream/80 hover:text-golf-gold text-sm py-1"
                    >
                      <span>{club.name}</span>
                      <span className="text-golf-gold/50 text-xs">{club.year}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link
                href="https://mackenzieclub.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-3 bg-golf-gold text-golf-navy font-semibold rounded-full"
              >
                Visit Mackenzie Club
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
