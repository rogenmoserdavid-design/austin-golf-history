// Placeholder images using Unsplash golf photography
// These will be replaced with actual Austin golf photography in Phase 0

export const images = {
  // Prologue - Hill Country landscapes
  prologue: {
    hero: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=80", // Texas hill country
    landscape: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&q=80", // Golf course sunrise
  },

  // Era 1 - Pioneer (historic feel, sepia tones)
  pioneer: {
    hancock: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=1920&q=80", // Vintage golf
    earlyAcc: "https://images.unsplash.com/photo-1592919505780-303950717480?w=1920&q=80", // Classic clubhouse
    youngPenick: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&q=80", // Morning golf
    earlyGolfers: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=80", // Golf landscape
  },

  // Era 2 - Teacher (Harvey Penick)
  teacher: {
    penickTeaching: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&q=80", // Teaching scene
    littleRedBook: "https://images.unsplash.com/photo-1591491653056-4e9d563a42de?w=1920&q=80", // Golf instruction
  },

  // Era 3 - Breakthrough (civil rights)
  breakthrough: {
    munyHistoric: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=80", // Public golf course
    desegregation: "https://images.unsplash.com/photo-1592919505780-303950717480?w=1920&q=80", // Historic golf
  },

  // Era 4 - Champions (Crenshaw & Kite)
  champions: {
    crenshawMasters: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&q=80", // Masters green
    kiteUsopen: "https://images.unsplash.com/photo-1591491653056-4e9d563a42de?w=1920&q=80", // Championship golf
    penickCrenshaw: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=1920&q=80", // Mentor moment
  },

  // Era 5 - Renaissance (modern courses)
  renaissance: {
    austinGolfClub: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=80",
    spanishOaks: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&q=80",
    driftwood: "https://images.unsplash.com/photo-1592919505780-303950717480?w=1920&q=80",
    bartonCreek: "https://images.unsplash.com/photo-1591491653056-4e9d563a42de?w=1920&q=80",
  },

  // Epilogue
  epilogue: {
    munyToday: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=80",
    future: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&q=80",
  },

  // Club-specific images
  clubs: {
    austinCountryClub: {
      hero: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=80",
      course: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&q=80",
      clubhouse: "https://images.unsplash.com/photo-1592919505780-303950717480?w=1920&q=80",
    },
    lionsMunicipal: {
      hero: "https://images.unsplash.com/photo-1591491653056-4e9d563a42de?w=1920&q=80",
      course: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=80",
      historic: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=1920&q=80",
    },
    austinGolfClub: {
      hero: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&q=80",
      course: "https://images.unsplash.com/photo-1592919505780-303950717480?w=1920&q=80",
      signature: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=80",
    },
    spanishOaks: {
      hero: "https://images.unsplash.com/photo-1591491653056-4e9d563a42de?w=1920&q=80",
      course: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&q=80",
      vista: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=1920&q=80",
    },
    bartonCreek: {
      hero: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=80",
      fazio: "https://images.unsplash.com/photo-1592919505780-303950717480?w=1920&q=80",
      crenshaw: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&q=80",
      palmer: "https://images.unsplash.com/photo-1591491653056-4e9d563a42de?w=1920&q=80",
    },
  },
};

// Helper to get image URL with fallback
export function getImage(path: string): string {
  const parts = path.split("/");
  let current: unknown = images;

  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = (current as Record<string, unknown>)[part];
    } else {
      // Fallback to a generic golf image
      return "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=80";
    }
  }

  return typeof current === "string"
    ? current
    : "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=80";
}
