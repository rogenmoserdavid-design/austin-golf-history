export interface Course {
  id: string;
  name: string;
  type: "public" | "private" | "semi-private" | "resort";
  yearFounded: number;
  designer?: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
  image: string;
  features?: string[];
}

export const courses: Course[] = [
  {
    id: "austin-country-club",
    name: "Austin Country Club",
    type: "private",
    yearFounded: 1899,
    designer: "Lewis Hancock (original), Pete Dye (renovation 1984)",
    description: "Texas's second-oldest golf club and the birthplace of Austin golf. Home to Harvey Penick for over 50 years, this historic club has been the training ground for champions including Ben Crenshaw and Tom Kite. The Pete Dye renovation in 1984 modernized the course while preserving its classic character.",
    location: {
      lat: 30.3072,
      lng: -97.7945
    },
    image: "/images/courses/austin-country-club.jpg",
    features: [
      "Harvey Penick's home course for 50+ years",
      "Trained Ben Crenshaw and Tom Kite",
      "Pete Dye renovation (1984)",
      "Host to numerous Texas amateur championships",
      "Historic clubhouse dating to early 1900s"
    ]
  },
  {
    id: "lions-municipal",
    name: "Lions Municipal Golf Course",
    type: "public",
    yearFounded: 1924,
    designer: "Unknown (original)",
    description: "The legendary 'Muny' opened Austin golf to the public. This challenging course earned a reputation for producing great players who honed their skills on its demanding layout. First desegregated in 1950, it became a symbol of accessible golf in Austin.",
    location: {
      lat: 30.2850,
      lng: -97.7380
    },
    image: "/images/courses/lions-municipal.jpg",
    features: [
      "Austin's first public golf course",
      "First desegregated course in Austin (1950)",
      "Training ground for generations of Austin golfers",
      "Challenging layout tests even experienced players",
      "Historic affordable green fees"
    ]
  },
  {
    id: "austin-golf-club",
    name: "Austin Golf Club",
    type: "private",
    yearFounded: 1984,
    designer: "Pete Dye",
    description: "Pete Dye's masterpiece in the Hill Country set a new standard for Austin golf. The dramatic routing takes full advantage of the rugged terrain, with bold bunkering and strategic design that rewards creative shotmaking. Consistently ranked among Texas's top courses.",
    location: {
      lat: 30.3850,
      lng: -97.9200
    },
    image: "/images/courses/austin-golf-club.jpg",
    features: [
      "Pete Dye signature design",
      "Dramatic Hill Country routing",
      "Strategic bunkering and hazards",
      "Host to elite amateur events",
      "Walking-encouraged traditional golf culture"
    ]
  },
  {
    id: "barton-creek-fazio-foothills",
    name: "Barton Creek - Fazio Foothills",
    type: "resort",
    yearFounded: 1986,
    designer: "Tom Fazio",
    description: "The course that launched Austin's resort golf boom. Fazio's Foothills design weaves through Hill Country terrain with dramatic elevation changes, stunning vistas, and immaculate conditioning. Home to PGA Tour and LPGA events over the years.",
    location: {
      lat: 30.2540,
      lng: -97.9350
    },
    image: "/images/courses/barton-creek-fazio-foothills.jpg",
    features: [
      "First course at Barton Creek Resort",
      "Host to PGA Tour events",
      "Dramatic elevation changes",
      "Signature Tom Fazio design elements",
      "Consistently ranked among Texas's best resort courses"
    ]
  },
  {
    id: "barton-creek-fazio-canyons",
    name: "Barton Creek - Fazio Canyons",
    type: "resort",
    yearFounded: 1987,
    designer: "Tom Fazio",
    description: "Fazio's second Barton Creek masterpiece plays through even more dramatic terrain than the Foothills. Deep canyons, limestone outcroppings, and century-old live oaks create a stunning setting for championship golf.",
    location: {
      lat: 30.2520,
      lng: -97.9380
    },
    image: "/images/courses/barton-creek-fazio-canyons.jpg",
    features: [
      "Most dramatic terrain at Barton Creek",
      "Spectacular canyon views",
      "Challenging risk-reward holes",
      "Immaculate Tom Fazio conditioning standards",
      "Popular venue for corporate and charity events"
    ]
  },
  {
    id: "barton-creek-palmer-lakeside",
    name: "Barton Creek - Palmer Lakeside",
    type: "resort",
    yearFounded: 1986,
    designer: "Arnold Palmer",
    description: "Arnold Palmer's contribution to Barton Creek plays along Lake Travis with stunning water views. More forgiving than the Fazio courses, the Lakeside offers a traditional Palmer design with generous fairways and strategic bunkering.",
    location: {
      lat: 30.2560,
      lng: -97.9320
    },
    image: "/images/courses/barton-creek-palmer-lakeside.jpg",
    features: [
      "Lake Travis views",
      "Classic Arnold Palmer design philosophy",
      "More playable than sister Fazio courses",
      "Beautiful lakeside setting",
      "Popular with resort guests"
    ]
  },
  {
    id: "barton-creek-crenshaw-cliffside",
    name: "Barton Creek - Crenshaw Cliffside",
    type: "resort",
    yearFounded: 1991,
    designer: "Ben Crenshaw & Bill Coore",
    description: "Ben Crenshaw's love letter to Austin golf. The Cliffside showcases Crenshaw and Coore's design philosophy of working with the land rather than against it. Natural contours, strategic options, and an emphasis on ground game make this a thinking player's course.",
    location: {
      lat: 30.2500,
      lng: -97.9400
    },
    image: "/images/courses/barton-creek-crenshaw-cliffside.jpg",
    features: [
      "Designed by hometown hero Ben Crenshaw",
      "Emphasis on strategic options and ground game",
      "Works with natural terrain contours",
      "Rewards creative shotmaking",
      "Most 'old-school' feel of Barton Creek quartet"
    ]
  },
  {
    id: "spanish-oaks",
    name: "Spanish Oaks Golf Club",
    type: "private",
    yearFounded: 2007,
    designer: "Bobby Weed",
    description: "Bobby Weed's dramatic design showcases the Hill Country at its most spectacular. Massive elevation changes, bold bunkering, and stunning vistas make Spanish Oaks one of Austin's most challenging and photogenic courses. Quickly established itself among Texas's elite private clubs.",
    location: {
      lat: 30.2100,
      lng: -97.9800
    },
    image: "/images/courses/spanish-oaks.jpg",
    features: [
      "Dramatic Hill Country elevation changes",
      "Bobby Weed signature bold design",
      "Spectacular views throughout",
      "Challenging from championship tees",
      "Modern amenities and practice facilities"
    ]
  },
  {
    id: "driftwood",
    name: "Driftwood Golf Club",
    type: "semi-private",
    yearFounded: 2009,
    designer: "Unknown",
    description: "Located in the heart of the Hill Country, Driftwood offers stunning views and challenging golf in a relaxed atmosphere. The course features dramatic elevation changes, strategic bunkering, and well-conditioned bent grass greens.",
    location: {
      lat: 30.1200,
      lng: -98.0500
    },
    image: "/images/courses/driftwood.jpg",
    features: [
      "Hill Country views",
      "Bent grass greens",
      "Semi-private accessibility",
      "Championship-caliber layout",
      "Popular destination for Austin golfers"
    ]
  },
  {
    id: "roy-kizer",
    name: "Roy Kizer Golf Course",
    type: "public",
    yearFounded: 1974,
    designer: "Leon Howard (original), renovation 2015",
    description: "Austin's premier municipal course after extensive renovations. Named for a pioneering African American golfer, Roy Kizer emphasizes walking golf and traditional values while offering excellent conditions and a challenging layout accessible to the public.",
    location: {
      lat: 30.1950,
      lng: -97.7920
    },
    image: "/images/courses/roy-kizer.jpg",
    features: [
      "Walking-encouraged municipal course",
      "Named for African American golf pioneer",
      "Renovated to championship standards",
      "Excellent conditioning for public course",
      "Host to Austin City Championship"
    ]
  },
  {
    id: "riverside",
    name: "Riverside Golf Course",
    type: "public",
    yearFounded: 1937,
    designer: "Unknown",
    description: "Austin's second municipal course has served the community for over 80 years. A straightforward, playable layout that welcomes beginners while still challenging experienced players. Historic course that has introduced thousands to the game.",
    location: {
      lat: 30.2380,
      lng: -97.7050
    },
    image: "/images/courses/riverside.jpg",
    features: [
      "Historic municipal course since 1937",
      "Beginner-friendly layout",
      "Affordable green fees",
      "Easy access from downtown",
      "Popular with local leagues"
    ]
  },
  {
    id: "grey-rock",
    name: "Grey Rock Golf Club",
    type: "semi-private",
    yearFounded: 2000,
    designer: "Beau Welling",
    description: "Located north of Austin, Grey Rock offers dramatic Hill Country golf with creative routing and risk-reward opportunities. The course features excellent practice facilities and has become a popular venue for tournaments and member play.",
    location: {
      lat: 30.5100,
      lng: -97.8200
    },
    image: "/images/courses/grey-rock.jpg",
    features: [
      "Creative Hill Country routing",
      "Risk-reward strategic options",
      "Excellent practice facilities",
      "Tournament host venue",
      "Semi-private accessibility"
    ]
  },
  {
    id: "avery-ranch",
    name: "Avery Ranch Golf Club",
    type: "semi-private",
    yearFounded: 2001,
    designer: "Andy Raugust",
    description: "A popular semi-private course in northwest Austin featuring a links-style front nine and Hill Country back nine. The dual personality offers variety and challenge, with excellent conditioning and a welcoming atmosphere.",
    location: {
      lat: 30.4650,
      lng: -97.8100
    },
    image: "/images/courses/avery-ranch.jpg",
    features: [
      "Links-style front nine",
      "Hill Country back nine",
      "Dual-personality routing",
      "Excellent practice range",
      "Active membership community"
    ]
  },
  {
    id: "wolfdancer",
    name: "Wolfdancer Golf Club",
    type: "resort",
    yearFounded: 2001,
    designer: "Roy Bechtol & Randy Russell",
    description: "Part of the Hyatt Regency Lost Pines Resort, Wolfdancer features dramatic changes in elevation and stunning Hill Country views. The course winds through native terrain with strategic design that rewards accurate shotmaking.",
    location: {
      lat: 30.0850,
      lng: -97.4200
    },
    image: "/images/courses/wolfdancer.jpg",
    features: [
      "Part of Lost Pines Resort",
      "Dramatic elevation changes",
      "Native Hill Country terrain",
      "Strategic design elements",
      "Resort amenities and service"
    ]
  }
];
