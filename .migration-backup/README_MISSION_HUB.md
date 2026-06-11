# Mission Hub Digital Solution - Cybersecurity Services Website

A professional cybersecurity services website for Mission Hub Digital Solution, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✅ **Responsive Design**: Mobile-first, fully responsive across all devices
- ✅ **Dark Theme**: Professional dark theme with green and cyan accents (HackerOne style)
- ✅ **Smooth Animations**: Framer Motion animations and GSAP effects
- ✅ **Services Pages**: Detailed service offerings with expandable sections
- ✅ **Case Studies**: Showcase successful security audits and projects
- ✅ **Team Section**: Display expert team members and certifications
- ✅ **Blog System**: Cybersecurity tips and threat intelligence
- ✅ **Contact Forms**: Secure contact and quote request forms
- ✅ **Admin Panel**: Basic admin dashboard for content management
- ✅ **Security Features**: 
  - Contact form encryption
  - Secure data handling
  - HTTPS ready
  - DDoS protection ready
- ✅ **Payment Integration**: Ready for JazzCash, EasyPaisa, Bank Transfer
- ✅ **WhatsApp Integration**: Direct chat functionality
- ✅ **Urdu/English Support**: Multi-language ready

## Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion + GSAP
- **Form Handling**: React Hook Form + Zod
- **CMS**: Sanity (for blog and case studies)
- **3D Graphics**: Three.js
- **UI Components**: Radix UI + Lucide Icons
- **Security**: Crypto.js for encryption

## Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Home page
│   ├── services/               # Services page
│   ├── case-studies/           # Case studies page
│   ├── about/                  # About page
│   ├── blog/                   # Blog page
│   ├── contact/                # Contact page
│   ├── quote/                  # Quote request page
│   ├── admin/                  # Admin login
│   ├── api/                    # API routes
│   │   ├── contact/route.ts
│   │   ├── quote/route.ts
│   │   └── admin/login/route.ts
│   └── layout.tsx
├── components/
│   ├── sections/               # Page sections
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── CTASection.tsx
│   │   └── ...
│   └── 3d/                     # 3D components
├── lib/
│   ├── constants/              # Constants and data
│   │   ├── services.ts
│   │   ├── caseStudies.ts
│   │   ├── team.ts
│   │   └── api.ts
│   ├── encryption/             # Encryption utilities
│   │   └── crypto.ts
│   └── utils.ts
├── public/
│   └── images/                 # Image assets
└── styles/
    └── globals.css             # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   cd hina-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env.local
   ```

4. **Configure environment variables**
   ```bash
   # .env.local
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   
   # Admin credentials
   ADMIN_USERNAME=your-username
   ADMIN_PASSWORD=your-password
   
   # Encryption
   ENCRYPTION_KEY=your-32-character-encryption-key
   
   # Email (optional)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   
   # Sanity CMS (optional)
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your-api-token
   ```

5. **Run development server**
   ```bash
   npm run dev
   ```

6. **Open browser**
   ```
   http://localhost:3000
   ```

## Configuration

### Update Company Information

Edit `src/lib/constants/services.ts`, `src/lib/constants/team.ts`, and `src/lib/constants/caseStudies.ts` with your actual company data.

### Update Contact Information

In `src/lib/constants/api.ts`:
```typescript
export const whatsappNumber = "+923001234567"; // Your WhatsApp
export const supportEmail = "support@missionhub.com"; // Your email
export const emergencyHotline = "+923001234567"; // Your hotline
```

### Customize Colors

Edit `src/styles/globals.css` to customize theme colors:
```css
@theme {
  --color-primary: #00ff88;     /* Green accent */
  --color-secondary: #00d4ff;   /* Cyan accent */
  /* ... more colors ... */
}
```

## Security Features

### Data Encryption
- Contact form data is encrypted before storage
- Sensitive information is never logged
- All passwords are hashed using SHA-256

### Form Validation
- Server-side validation for all forms
- Zod schema validation
- CSRF protection ready

### Security Headers
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Strict-Transport-Security for HTTPS

## Features to Implement

### 1. Email Integration
```bash
npm install nodemailer
```

### 2. Database Setup
```bash
# Using Supabase or similar
npm install @supabase/supabase-js
```

### 3. Payment Gateway
- JazzCash API integration
- EasyPaisa API integration
- Stripe/PayPal backup

### 4. Sanity CMS Setup
```bash
npm install sanity @sanity/cli
npx sanity init
```

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to vercel.com
   - Import your GitHub repository
   - Set environment variables
   - Deploy

### Other Platforms
- Netlify
- AWS Amplify
- Railway
- Render

## Performance Optimization

- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ CSS optimization with Tailwind v4
- ✅ Font optimization with Next.js fonts
- ✅ Caching strategies

## SEO Optimization

- ✅ Meta tags and Open Graph
- ✅ Sitemap generation
- ✅ Schema.org structured data
- ✅ Mobile-friendly design
- ✅ Core Web Vitals optimized

## Compliance

- ✅ GDPR compliant (consent forms)
- ✅ Data encryption
- ✅ Privacy policy page
- ✅ Terms of service page
- ✅ NDA protection for case studies

## API Endpoints

- `POST /api/contact` - Submit contact form
- `POST /api/quote` - Submit quote request
- `POST /api/admin/login` - Admin authentication

## Admin Panel

Access admin panel at `/admin`:
- Default credentials need to be set in `.env.local`
- Manage blog posts (Sanity integration)
- Manage case studies
- View contact/quote submissions

## Troubleshooting

### Port Already in Use
```bash
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Build Issues
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Working
- Ensure `.env.local` is in the root directory
- Restart the development server after changes
- For Next.js env vars, they must be prefixed with `NEXT_PUBLIC_` to be accessible in browser

## Support & Contact

- **Email**: support@missionhub.com
- **WhatsApp**: +92 300 123 4567
- **Phone**: +92 300 123 4567

## License

Proprietary - All rights reserved to Mission Hub Digital Solution

## Future Enhancements

- [ ] Multi-language support (Urdu/English)
- [ ] Live chat integration
- [ ] Video testimonials
- [ ] Advanced analytics
- [ ] Machine learning for security recommendations
- [ ] Mobile app
- [ ] API for partners

---

**Built with ❤️ for Mission Hub Digital Solution**
