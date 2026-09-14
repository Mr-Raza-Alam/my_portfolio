# Frontend Architecture - Personal Portfolio

This directory contains the React/Vite source code for my personal portfolio.

## Design System & Theming Architecture

The portfolio utilizes a **custom-built CSS variable architecture** instead of relying on external UI component libraries like Bootstrap or Tailwind. 

### The Terminal Brutalism Aesthetic
The design philosophy intentionally steps away from the trendy "glassmorphism" look (which is often associated with generic SaaS templates and AI-generated designs). 

Instead, it embraces a **Terminal/Brutalism aesthetic**:
- High contrast `#000000` pitch-black backgrounds.
- Hacker Green/Amber accents (`#00ff41`).
- `Monospace` typography for headings.
- Hard, solid drop-shadows with sharp `0px` border radiuses.

This raw, developer-focused aesthetic was chosen specifically to highlight my focus on backend systems, networking, and logical engineering (e.g., the Cyber Escape Room and NCC Selection Portal projects).

### Terminal Color Toggle (Green / Amber)
Instead of a standard light/dark mode (which breaks the immersion of a terminal theme), state management handles a color palette toggle in `Navbar.jsx`. 

Toggling the theme injects an `.amber-mode` class onto the `document.body`. This overrides the CSS variables, seamlessly swapping the "Hacker Green" (`#00ff41`) for a classic retro "Terminal Amber" (`#ffb000`), staying true to the engineering aesthetic.
2. `npm run dev`
