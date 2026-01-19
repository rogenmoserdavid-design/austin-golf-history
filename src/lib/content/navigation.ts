// Centralized navigation configuration
// Edit this file to add/modify chapters and clubs

export interface Chapter {
  id: string;
  name: string;
  href: string;
  era?: string;
}

export interface Club {
  name: string;
  slug: string;
  href: string;
  year: string;
}

export const navChapters: Chapter[] = [
  { id: "prologue", name: "Prologue", href: "/#prologue", era: "The Land Before Golf" },
  { id: "era-pioneer", name: "The Pioneer", href: "/#era-pioneer", era: "1899-1923" },
  { id: "era-teacher", name: "The Teacher", href: "/#era-teacher", era: "1923-1973" },
  { id: "era-breakthrough", name: "The Breakthrough", href: "/#era-breakthrough", era: "1950s" },
  { id: "era-champions", name: "The Champions", href: "/#era-champions", era: "1984-1995" },
  { id: "era-renaissance", name: "The Renaissance", href: "/#era-renaissance", era: "1990s-Present" },
  { id: "epilogue", name: "Epilogue", href: "/#epilogue", era: "The Legacy Continues" },
];

export const clubs: Club[] = [
  {
    name: "Austin Country Club",
    slug: "austin-country-club",
    href: "/clubs/austin-country-club",
    year: "1899",
  },
  {
    name: "Lions Municipal",
    slug: "lions-municipal",
    href: "/clubs/lions-municipal",
    year: "1924",
  },
  {
    name: "Austin Golf Club",
    slug: "austin-golf-club",
    href: "/clubs/austin-golf-club",
    year: "1984",
  },
  {
    name: "Spanish Oaks",
    slug: "spanish-oaks",
    href: "/clubs/spanish-oaks",
    year: "2007",
  },
  {
    name: "Barton Creek Resort",
    slug: "barton-creek",
    href: "/clubs/barton-creek",
    year: "1986",
  },
];

// Helper to get club by slug
export function getClubBySlug(slug: string): Club | undefined {
  return clubs.find((club) => club.slug === slug);
}

// Helper to get chapter by id
export function getChapterById(id: string): Chapter | undefined {
  return navChapters.find((chapter) => chapter.id === id);
}
