---
name: Mission Hub Next.js to Vite migration
description: Key decisions and patterns from migrating the Mission Hub cybersecurity site from Next.js to Vite + React + wouter
---

# Mission Hub Migration Patterns

## Routing
- Uses `wouter` for routing with `<Switch>` + `<Route>` in App.tsx
- `<WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>` wraps all routes
- `useLocation()` from wouter replaces `useRouter()` from next/navigation; use `const [, setLocation] = useLocation()`

## Component fixes
- Replace `import Link from "next/link"` → `import { Link } from "wouter"`
- Replace `import Image from "next/image"` → use plain `<img>` tags
- Replace `useRouter().push(path)` → `const [, setLocation] = useLocation(); setLocation(path)`
- Remove `"use client"` directives (they cause no errors as string literals in shadcn components, but should be removed from custom components)

## API proxy
- Vite proxy in `vite.config.ts` forwards `/api` → `http://localhost:8080` (api-server)
- API server runs on port 8080 (set via PORT env var)

## Theme
- Dark cybersecurity palette: background `#0a0a0f`, card `#0f0f1a`, border `#1e1e3a`
- Primary neon green `#00ff88`, secondary cyan `#00d4ff`, accent purple `#7c3aed`
- HSL values in CSS: background `240 14% 6%`, primary `151 100% 50%`, secondary `193 100% 42%`
- Fonts: Inter (sans), JetBrains Mono (mono) via Google Fonts in index.html

**Why:** The app uses inline Tailwind color classes (e.g. `bg-[#0a0a0f]`) directly, so the CSS theme variables mostly affect shadcn UI components. The actual site colors come from the Tailwind inline values.
