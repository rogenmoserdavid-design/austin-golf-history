# The History of Austin Golf

Immersive storytelling website covering 125+ years of Austin golf history.

**Live URL:** TBD (Vercel deployment pending)
**GitHub:** `rogenmoserdavid-design/austin-golf-history`

---

## Tech Stack

| Component | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.x | App Router |
| React | 19.x | UI framework |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling (inline @theme) |
| GSAP + ScrollTrigger | 3.12.x | Scroll-based animations |
| Lenis | 1.0.x | Smooth scrolling |
| Framer Motion | 12.x | Basic animations |
| Three.js + React Three Fiber | - | Future 360° course views |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Fonts, metadata, Header
│   ├── page.tsx           # Main experience (7 chapters)
│   ├── globals.css        # Tailwind + @theme colors
│   └── clubs/
│       ├── page.tsx                  # Club gallery index
│       ├── austin-country-club/      # Deep-dive (ACC)
│       ├── lions-municipal/          # Deep-dive (Muny)
│       ├── austin-golf-club/         # Deep-dive (AGC)
│       ├── spanish-oaks/             # Deep-dive
│       └── barton-creek/             # Deep-dive
├── components/
│   ├── core/              # Reusable scroll components
│   │   ├── ParallaxImage.tsx
│   │   ├── PinnedSection.tsx
│   │   ├── HorizontalScroll.tsx
│   │   ├── AnimatedText.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── FloatingNav.tsx
│   │   └── Header.tsx
│   ├── chapters/          # 7 era components
│   │   ├── Prologue.tsx
│   │   ├── Era1Pioneer.tsx
│   │   ├── Era2Teacher.tsx
│   │   ├── Era3Breakthrough.tsx
│   │   ├── Era4Champions.tsx
│   │   ├── Era5Renaissance.tsx
│   │   └── Epilogue.tsx
│   └── interactive/
│       ├── InteractiveMap.tsx
│       ├── CourseGallery.tsx
│       └── CourseCard.tsx
├── hooks/
│   ├── useGSAP.ts
│   └── useLenis.ts
└── lib/
    ├── images.ts          # Unsplash placeholder URLs
    └── content/
        ├── eras.ts
        └── courses.ts
```

---

## Design System

### Colors (Tailwind @theme)
- `golf-navy` - Primary dark (#1a2a3a)
- `golf-gold` - Accent (#c9a962)
- `golf-cream` - Light background (#f5f1e8)
- `golf-charcoal` - Text (#2d3436)

### Fonts
- **Playfair Display** - Headings (serif, elegant)
- **Inter** - Body text (clean, readable)

---

## Content Structure (7 Chapters)

| Chapter | Title | Focus |
|---------|-------|-------|
| Prologue | The Land Before Golf | Hill Country landscape |
| Era 1 | The Pioneer | Lewis Hancock, ACC founding (1899) |
| Era 2 | The Teacher | Harvey Penick, Little Red Book |
| Era 3 | The Breakthrough | Civil rights, Muny desegregates (1950) |
| Era 4 | The Champions | Crenshaw & Kite, 1995 Masters |
| Era 5 | The Renaissance | Modern courses (AGC, Spanish Oaks, Barton Creek) |
| Epilogue | The Legacy Continues | Muny at 100, Mackenzie connection |

---

## Key Patterns

### Server vs Client Components
- **Club pages** use server components (for SEO metadata)
- **Cannot use** `motion.div` in server components - use regular `<div>`
- Interactive animations in client components only

### Images
- Using Unsplash placeholders (see `src/lib/images.ts`)
- Configured in `next.config.ts` for remote images

---

## Development

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint check
```

---

## Accessibility Features

- **Reduced Motion Support:** `useReducedMotion` hook respects user preferences (disables animations when `prefers-reduced-motion: reduce`)
- **ARIA Labels:** Navigation components include proper aria-label attributes for screen readers
- **Image Error Handling:** ParallaxImage includes onError handlers with fallback gradient
- **Semantic HTML:** Proper heading hierarchy, landmark regions, accessible navigation

---

## Navigation System

**Breadcrumbs:** All 5 club pages include breadcrumb navigation (Home > Clubs > [Club Name])

**Navigation Config:** Centralized in `src/lib/content/navigation.ts`:
- Single source of truth for chapters and clubs
- Used by Header, FloatingNav, and Breadcrumb components

---

## Lenis Smooth Scroll

**Critical:** Club pages require `ScrollProvider` to manage Lenis lifecycle.

**Problem:** Lenis classes persisted across route transitions, blocking scroll on club pages.

**Solution:** Created `src/components/providers/ScrollProvider.tsx` that:
- Cleans up `lenis`, `lenis-smooth`, `lenis-stopped` classes on route change
- Resets scroll position on navigation
- Wraps entire app in layout.tsx

---

## Recent Enhancements (Jan 2026)

**Stats Grid Polish:**
- Background containers with subtle borders
- Icons in circular backgrounds (w-14 h-14)
- Hover effects with border color change
- Consistent spacing and alignment

**Component Architecture:**
- `src/hooks/useReducedMotion.ts` - accessibility hook
- `src/components/providers/ScrollProvider.tsx` - Lenis lifecycle
- `src/components/core/Breadcrumb.tsx` - navigation breadcrumbs
- `src/lib/content/navigation.ts` - centralized nav config

---

## Next Steps

- [ ] Deploy to Vercel (history.mackenzieclub.com)
- [ ] Source actual historic photography
- [ ] Add 360° course views (React Three Fiber)
- [ ] Performance optimization (Lighthouse 90+)
