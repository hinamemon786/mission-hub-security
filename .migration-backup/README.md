# Hina Memon — Cybersecurity Portfolio

**Tech Stack:** Next.js 15 · TypeScript · Tailwind CSS v4 · GSAP · Framer Motion · Lenis · Three.js / React Three Fiber · Shadcn UI · Sanity CMS · Vercel

---

## 🚀 Quick Start

```bash
# 1. Clone / download this project
cd hina-portfolio

# 2. Install dependencies
npm install

# 3. Copy env file and fill in your Sanity credentials
cp .env.local.example .env.local

# 4. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
hina-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, fonts, metadata
│   │   └── page.tsx            # Main page — assembles all sections
│   ├── components/
│   │   ├── 3d/
│   │   │   └── ParticleGlobe.tsx   # Three.js rotating globe
│   │   ├── sections/
│   │   │   ├── Navbar.tsx
│   │   │   ├── HeroSection.tsx     # Typing animation + 3D Globe
│   │   │   ├── AboutSection.tsx    # Bio + stats
│   │   │   ├── SkillsSection.tsx   # Categorized skill tabs
│   │   │   ├── AchievementsSection.tsx  # CTF wins + bootcamps
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── CertificationsSection.tsx
│   │   │   ├── ContactSection.tsx  # Contact form
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       └── lenis-provider.tsx  # Smooth scroll wrapper
│   ├── lib/
│   │   ├── data.ts             # All resume data — edit here
│   │   └── utils.ts            # cn() helper
│   └── styles/
│       └── globals.css         # Tailwind v4 + custom variables
├── sanity/
│   ├── schemas/
│   │   ├── project.ts          # Project document schema
│   │   ├── certification.ts    # Certification schema
│   │   └── achievement.ts      # CTF / achievement schema
│   ├── lib/
│   │   └── client.ts           # Sanity client + GROQ queries
│   └── sanity.config.ts        # Sanity studio config
├── public/
│   └── resume.pdf              # Add your CV here
├── .env.local.example
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── vercel.json
└── package.json
```

---

## ✏️ Customization

All content lives in **`src/lib/data.ts`** — edit your name, skills, projects, etc. there.

To update styling, edit **`src/styles/globals.css`** — colors are CSS variables under `@theme`.

---

## 🗄️ Sanity CMS Setup (Optional)

1. Go to [sanity.io](https://sanity.io) → create a new project
2. Copy your `projectId` to `.env.local`
3. Run the Sanity Studio:
   ```bash
   cd sanity
   npx sanity dev
   ```
4. Add projects, certifications, achievements from the Studio UI
5. Update page components to fetch from Sanity using the GROQ queries in `sanity/lib/client.ts`

---

## 🌐 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Add environment variables in Vercel Dashboard → Settings → Environment Variables.

---

## 📦 Key Dependencies

| Package | Purpose |
|---|---|
| `next@15` | Framework with App Router + Turbopack |
| `tailwindcss@v4` | Utility-first CSS with `@theme` variables |
| `framer-motion@12` | Page/section animations |
| `gsap@3` | Advanced scroll/timeline animations |
| `lenis` | Smooth scroll |
| `@react-three/fiber` | Three.js in React |
| `@react-three/drei` | Three.js helpers |
| `react-type-animation` | Typing effect in hero |
| `next-sanity` | Sanity CMS integration |
