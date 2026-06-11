# Mission Hub Digital Solution - Setup & Deployment Guide

## Quick Start (5 minutes)

### 1. Install Dependencies
```bash
cd /home/hina/Downloads/hina-portfolio
npm install
```

### 2. Setup Environment
```bash
cp .env.example .env.local
```

Edit `.env.local` and update with your details:
- `ADMIN_USERNAME` and `ADMIN_PASSWORD`
- `ENCRYPTION_KEY` (generate a random 32-character string)
- Contact information
- Optional: Payment gateway credentials

### 3. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see your site.

---

## Detailed Setup

### Step 1: Environment Configuration

1. **Create .env.local file**
   ```bash
   cp .env.example .env.local
   ```

2. **Generate Encryption Key**
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

3. **Update .env.local**
   ```env
   # Admin credentials (CHANGE THESE!)
   ADMIN_USERNAME=your-admin-username
   ADMIN_PASSWORD=your-secure-password
   ENCRYPTION_KEY=<paste-the-generated-key>
   
   # Contact info
   NEXT_PUBLIC_WHATSAPP=+923001234567
   NEXT_PUBLIC_EMAIL=support@missionhub.com
   ```

### Step 2: Customize Content

1. **Update Services** - Edit `src/lib/constants/services.ts`
2. **Update Team** - Edit `src/lib/constants/team.ts`
3. **Update Case Studies** - Edit `src/lib/constants/caseStudies.ts`
4. **Update Contact Info** - Edit `src/lib/constants/api.ts`

### Step 3: Design Customization

**Colors** - Edit `src/styles/globals.css`:
```css
@theme {
  --color-primary: #00ff88;        /* Main green */
  --color-secondary: #00d4ff;      /* Cyan accent */
  --color-accent: #7c3aed;         /* Purple */
  --color-danger: #ff3860;         /* Red */
  --color-warning: #ffdd57;        /* Yellow */
}
```

**Typography** - Already configured with Space Grotesk and JetBrains Mono

### Step 4: Add Images

Place company images in `public/images/`:
- Logo
- Team member photos
- Case study screenshots
- Testimonial images

Update image URLs in constants files.

---

## Feature Implementation

### Enable Email Notifications

1. **Install email package**
   ```bash
   npm install nodemailer
   ```

2. **Create email handler** - `src/app/api/email/route.ts`
   ```typescript
   import nodemailer from 'nodemailer';
   
   const transporter = nodemailer.createTransport({
     host: process.env.SMTP_HOST,
     port: process.env.SMTP_PORT,
     auth: {
       user: process.env.SMTP_USER,
       pass: process.env.SMTP_PASSWORD,
     },
   });
   ```

### Enable Payment Gateway

#### JazzCash Integration
1. Get merchant credentials
2. Update `.env.local` with credentials
3. Create `src/lib/jazzcash.ts` for payment processing

#### EasyPaisa Integration
1. Get store credentials
2. Update `.env.local`
3. Create `src/lib/easypay.ts` for payment processing

### Enable Blog with Sanity CMS

1. **Install Sanity CLI**
   ```bash
   npm install -g @sanity/cli
   ```

2. **Create Sanity project**
   ```bash
   sanity init
   ```

3. **Setup schemas** in `sanity/schemas/`
   - blog.ts
   - caseStudy.ts

4. **Update credentials in .env.local**

### Enable WhatsApp Integration

1. **Setup WhatsApp Business API**
   - Register at developers.facebook.com
   - Create WhatsApp Business App
   - Get credentials

2. **Add to .env.local**
   ```env
   WHATSAPP_BUSINESS_PHONE_NUMBER_ID=your-id
   WHATSAPP_BUSINESS_ACCESS_TOKEN=your-token
   ```

3. **Create WhatsApp handler** - `src/app/api/whatsapp/route.ts`

---

## Deployment

### Deploy on Vercel (Recommended)

**Step 1: Push to GitHub**
```bash
git add .
git commit -m "Mission Hub cybersecurity website"
git push origin main
```

**Step 2: Connect to Vercel**
1. Go to vercel.com
2. Click "New Project"
3. Select your GitHub repository
4. Configure:
   - Framework: Next.js
   - Node version: 18+

**Step 3: Add Environment Variables**
```
ADMIN_USERNAME=your-username
ADMIN_PASSWORD=your-password
ENCRYPTION_KEY=your-key
...
```

**Step 4: Deploy**
- Click Deploy
- Wait for build completion
- Your site is live!

### Deploy on Other Platforms

#### Netlify
```bash
npm run build
# Deploy the .next folder
```

#### Docker (Self-hosted)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

#### AWS Amplify
```bash
amplify init
amplify publish
```

---

## Security Hardening

### 1. Enable HTTPS
- Use Vercel (automatic)
- Or configure SSL on your server

### 2. Add Security Headers
Already configured in `next.config.ts`:
```typescript
headers: [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  // More headers...
]
```

### 3. Setup DDoS Protection
- Cloudflare (recommended)
- AWS Shield
- Azure DDoS Protection

### 4. Database Security
- Use encrypted connections
- Implement rate limiting
- Add query validation

### 5. API Security
- Enable CORS properly
- Implement API authentication
- Add request signing

---

## Performance Optimization

### Current Setup
- ✅ Code splitting
- ✅ Image optimization
- ✅ CSS minification
- ✅ Font optimization

### Further Optimization
```bash
# Generate performance report
npm run analyze
```

### Monitoring
- Google Analytics
- Vercel Analytics
- Sentry for error tracking

---

## Troubleshooting

### Issue: Port 3000 already in use
```bash
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Issue: Module not found errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Build fails
```bash
npm run lint
npm run type-check
npm run build
```

### Issue: Environment variables not loading
1. Check `.env.local` exists in root
2. Ensure variables don't have spaces around `=`
3. Restart dev server: `npm run dev`

### Issue: Form submissions not working
1. Check API routes exist
2. Verify environment variables set
3. Check browser console for errors
4. Test with curl:
   ```bash
   curl -X POST http://localhost:3000/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@test.com","message":"Test"}'
   ```

---

## Maintenance & Updates

### Regular Tasks
- Check for npm updates: `npm outdated`
- Update dependencies: `npm update`
- Review security advisories: `npm audit`
- Monitor error tracking (Sentry)
- Backup database
- Update blog content

### Monthly Checklist
- [ ] Review analytics
- [ ] Check security reports
- [ ] Test all forms
- [ ] Test payment gateway
- [ ] Review server logs
- [ ] Update case studies

### Quarterly Checklist
- [ ] Security audit
- [ ] Performance optimization
- [ ] SEO audit
- [ ] User feedback review
- [ ] Dependency updates

---

## Contact & Support

- **Support Email**: support@missionhub.com
- **Emergency Hotline**: +92 300 123 4567
- **WhatsApp**: +92 300 123 4567

---

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Setup custom domain
3. ✅ Add SSL certificate
4. ✅ Setup email notifications
5. ✅ Configure payment gateway
6. ✅ Setup analytics
7. ✅ Launch marketing campaign

---

**Last Updated**: June 2026
**Version**: 1.0.0
