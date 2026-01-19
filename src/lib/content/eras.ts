export interface Era {
  id: string;
  title: string;
  subtitle: string;
  years: string;
  duration: string; // reading time
  description: string;
  keyFacts: string[];
  quote?: {
    text: string;
    author: string;
  };
  images: {
    hero: string;
    secondary?: string[];
  };
}

export const eras: Era[] = [
  {
    id: "founding-years",
    title: "The Founding Years",
    subtitle: "From Pastures to Putting Greens",
    years: "1899-1920",
    duration: "8 min read",
    description: "Austin's golf story begins at the turn of the century when a small group of enthusiasts transformed a patch of land near Shoal Creek into the city's first golf course. The Austin Country Club, founded in 1899 by Lewis Hancock, represented more than just a sporting venue—it was a statement of civic ambition for a capital city looking to establish itself among Texas's cultural centers.",
    keyFacts: [
      "Austin Country Club established as Texas's second-oldest golf club",
      "Original 9-hole course featured sand greens and pasture fairways",
      "Golf introduced to Austin by returning East Coast college students",
      "Early membership limited to Austin's business and political elite",
      "Women's golf auxiliary formed in 1902, pioneering female participation"
    ],
    quote: {
      text: "The game was foreign to most Austinites, who were more accustomed to baseball and hunting. But those who tried it found themselves utterly captivated.",
      author: "Lewis Hancock, Austin Country Club Founder"
    },
    images: {
      hero: "/images/eras/founding-years-hero.jpg",
      secondary: [
        "/images/eras/founding-years-acc.jpg",
        "/images/eras/founding-years-players.jpg"
      ]
    }
  },
  {
    id: "public-access",
    title: "The Public Course Revolution",
    subtitle: "Making Golf Available to Everyone",
    years: "1924-1945",
    duration: "10 min read",
    description: "The opening of Lions Municipal Golf Course in 1924 democratized golf in Austin. For the first time, the game was accessible beyond country club walls. This municipal course became a crucible of talent, producing generations of skilled golfers who couldn't afford private club memberships. The 'Muny,' as locals called it, became legendary for its challenging layout and the characters who walked its fairways.",
    keyFacts: [
      "Lions Municipal opened as Austin's first public golf course",
      "Green fees: 50 cents weekdays, 75 cents weekends",
      "Course became training ground for future Texas golf champions",
      "First desegregated in 1950, years before many Texas courses",
      "Harvey Penick began teaching lessons at Austin Country Club (1923)",
      "Riverside Golf Course added as second municipal option (1937)"
    ],
    quote: {
      text: "If you could break 80 at the Muny on a windy day, you could play anywhere in the world.",
      author: "Ben Crenshaw"
    },
    images: {
      hero: "/images/eras/public-access-hero.jpg",
      secondary: [
        "/images/eras/public-access-muny.jpg",
        "/images/eras/public-access-players.jpg"
      ]
    }
  },
  {
    id: "penick-era",
    title: "The Harvey Penick Era",
    subtitle: "The Little Red Book and Beyond",
    years: "1946-1995",
    duration: "12 min read",
    description: "Harvey Penick's influence on Austin golf—and golf worldwide—cannot be overstated. As head professional at Austin Country Club for over 50 years, Penick developed a teaching philosophy based on simplicity, observation, and kindness. His students included Ben Crenshaw, Tom Kite, and countless others who carried his wisdom onto professional tours. His 'Little Red Book' became one of the best-selling golf books in history, but his true legacy lives in the teachers and players he inspired.",
    keyFacts: [
      "Penick served as Austin Country Club professional from 1923-1973",
      "Taught Ben Crenshaw from age 6 through his professional career",
      "Tom Kite won 19 PGA Tour events as Penick student",
      "'Harvey Penick's Little Red Book' sold over 1.5 million copies",
      "Penick's teaching emphasized feel over mechanics",
      "Continued teaching from his home until weeks before his death in 1995"
    ],
    quote: {
      text: "Take dead aim.",
      author: "Harvey Penick"
    },
    images: {
      hero: "/images/eras/penick-era-hero.jpg",
      secondary: [
        "/images/eras/penick-era-teaching.jpg",
        "/images/eras/penick-era-crenshaw.jpg",
        "/images/eras/penick-era-book.jpg"
      ]
    }
  },
  {
    id: "championship-era",
    title: "The Championship Era",
    subtitle: "Austin Golfers on the World Stage",
    years: "1970-2000",
    duration: "11 min read",
    description: "The 1970s through 1990s saw Austin-bred golfers dominate at the highest levels. Ben Crenshaw won two Masters titles (1984, 1995), with his emotional victory in 1995—just days after Harvey Penick's death—becoming one of golf's most poignant moments. Tom Kite claimed the 1992 U.S. Open at Pebble Beach. Both became Ryder Cup legends. Their success inspired a generation of young Austin golfers and proved that world-class talent could emerge from Texas Hill Country.",
    keyFacts: [
      "Ben Crenshaw won 1984 Masters in his first major victory",
      "Tom Kite's 1992 U.S. Open ended decades of near-misses in majors",
      "Crenshaw's 1995 Masters victory came one week after Penick's funeral",
      "Both Crenshaw and Kite became successful Ryder Cup captains",
      "University of Texas golf program gained national prominence",
      "Austin became known as a golf talent incubator"
    ],
    quote: {
      text: "I had a 15th club in my bag that week. Harvey was with me.",
      author: "Ben Crenshaw, 1995 Masters Champion"
    },
    images: {
      hero: "/images/eras/championship-era-hero.jpg",
      secondary: [
        "/images/eras/championship-era-crenshaw-masters.jpg",
        "/images/eras/championship-era-kite.jpg"
      ]
    }
  },
  {
    id: "resort-boom",
    title: "The Resort & Development Boom",
    subtitle: "Hill Country Golf Explosion",
    years: "1986-2010",
    duration: "9 min read",
    description: "The opening of Barton Creek Resort in 1986 triggered a golf development explosion in the Austin area. Suddenly, the rocky Hill Country terrain—once considered unsuitable for golf—became the canvas for dramatic, photogenic courses. Tom Fazio, Pete Dye, Ben Crenshaw, and other elite designers created layouts that embraced the natural limestone, live oaks, and elevation changes. Austin transformed from a golf town to a golf destination.",
    keyFacts: [
      "Barton Creek opened with Fazio Foothills (1986) and Palmer Lakeside (1986)",
      "Fazio Canyons (1987) and Crenshaw Cliffside (1991) completed Barton Creek quartet",
      "Austin Golf Club (1984, Pete Dye) set new standard for private clubs",
      "Spanish Oaks (2007) brought Bobby Weed's dramatic design aesthetic",
      "Driftwood Golf Club (2009) showcased Hill Country golf potential",
      "Austin became host to PGA Tour and LPGA events"
    ],
    quote: {
      text: "The Hill Country gave us everything we needed—drama, beauty, and challenge. We just had to learn to work with the rock instead of against it.",
      author: "Tom Fazio"
    },
    images: {
      hero: "/images/eras/resort-boom-hero.jpg",
      secondary: [
        "/images/eras/resort-boom-barton-creek.jpg",
        "/images/eras/resort-boom-spanish-oaks.jpg"
      ]
    }
  },
  {
    id: "modern-renaissance",
    title: "The Modern Renaissance",
    subtitle: "Innovation, Access, and Technology",
    years: "2010-2020",
    duration: "10 min read",
    description: "The 2010s brought a new golf philosophy to Austin: make the game faster, more accessible, and more welcoming. Roy Kizer Golf Course pioneered walking-only policies. TopGolf revolutionized golf entertainment. Simulator facilities brought year-round practice indoors. The city addressed historical segregation through public course improvements and First Tee programs. Austin's golf culture evolved to embrace diversity, sustainability, and innovation while honoring its storied traditions.",
    keyFacts: [
      "TopGolf Austin opened in 2015, attracting new demographics to golf",
      "Roy Kizer became Austin's premier municipal course after renovation",
      "Golf simulators and indoor facilities expanded year-round access",
      "First Tee of Greater Austin reached thousands of underserved youth",
      "Sustainability initiatives addressed water usage and environmental impact",
      "Women's golf participation surged with new leagues and clinics"
    ],
    quote: {
      text: "Golf in Austin isn't what it was in Harvey's day, and that's not a bad thing. The spirit is the same, but the doors are wider.",
      author: "Roy Kizer, Austin Golf Historian"
    },
    images: {
      hero: "/images/eras/modern-renaissance-hero.jpg",
      secondary: [
        "/images/eras/modern-renaissance-topgolf.jpg",
        "/images/eras/modern-renaissance-first-tee.jpg"
      ]
    }
  },
  {
    id: "future-vision",
    title: "The Future of Austin Golf",
    subtitle: "Where Tradition Meets Tomorrow",
    years: "2020-Present",
    duration: "7 min read",
    description: "Austin's golf future is being written by a new generation of players, teachers, and course operators who understand that the game must evolve to survive. Technology-enhanced instruction, eco-friendly course management, flexible membership models, and inclusive programming are reshaping what golf means in Austin. Yet the essence remains: a love for the game, respect for the land, and commitment to passing it forward—lessons learned from Harvey Penick that transcend any era.",
    keyFacts: [
      "Several new daily-fee courses in development around metro area",
      "Launch monitor technology revolutionizing instruction and practice",
      "Sustainability mandates requiring water-efficient course designs",
      "Push for more public course access as city population grows",
      "UT Golf program continues producing PGA Tour talent",
      "Renewed focus on junior golf and First Tee expansion"
    ],
    quote: {
      text: "The next great Austin golfer might be learning the game at a simulator, or at the Muny, or at a private club. Doesn't matter where—just that they're learning.",
      author: "Anonymous Austin Teaching Professional"
    },
    images: {
      hero: "/images/eras/future-vision-hero.jpg",
      secondary: [
        "/images/eras/future-vision-youth.jpg",
        "/images/eras/future-vision-tech.jpg"
      ]
    }
  }
];

export const chapters = eras.map(era => ({
  id: era.id,
  title: era.title,
}));
