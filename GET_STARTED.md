# 🚀 QUICK START - Get Your Website Running in 5 Minutes

## Step 1: Install Dependencies (2 minutes)

```bash
cd /home/hina/Downloads/hina-portfolio
npm install
```

Wait for npm to finish installing all packages.

## Step 2: Setup Environment (1 minute)

```bash
cp .env.example .env.local
```

This creates your environment configuration file.

## Step 3: Run Development Server (1 minute)

```bash
npm run dev
```

Your terminal should show:
```
> ready started server on 0.0.0.0:3000, url: http://localhost:3000
```

## Step 4: Open Your Browser (1 minute)

Visit: **http://localhost:3000**

🎉 Your website is now running locally!

---

## 📝 What You See

- **Home Page**: Hero section with services overview
- **Services**: All 6 cybersecurity services
- **Case Studies**: Professional portfolio examples
- **About**: Team and company information
- **Blog**: Security tips and articles
- **Contact**: Easy contact form
- **Quote**: Request security services
- **Admin**: Admin login panel

---

## ✏️ Quick Customization

### 1. Update Company Name & Info
Edit: `src/lib/constants/api.ts`
```typescript
export const whatsappNumber = "+92YOUR_NUMBER"; // Change this
export const supportEmail = "your@email.com";    // Change this
export const emergencyHotline = "+92YOUR_NUMBER"; // Change this
```

### 2. Update Services
Edit: `src/lib/constants/services.ts`
- Update service names, prices, descriptions

### 3. Update Team
Edit: `src/lib/constants/team.ts`
- Add/remove team members
- Update certifications

### 4. Update Admin Credentials
Edit: `.env.local`
```env
ADMIN_USERNAME=your-username
ADMIN_PASSWORD=your-password
```

---

## 🌐 Deploy to Live (Online)

### Option 1: Vercel (Recommended - Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Mission Hub website"
   git remote add origin <your-github-repo>
   git push -u origin main
   ```

2. **Go to vercel.com**
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Wait ~2-3 minutes

3. **Your site is live!** 🎉

### Option 2: Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Go to netlify.com**
   - Drag and drop the `.next` folder
   - Your site is live!

---

## 🔑 Environment Variables Needed

Create `.env.local` with:

```env
# Admin Access
ADMIN_USERNAME=admin
ADMIN_PASSWORD=change_me_please

# Encryption
ENCRYPTION_KEY=your_32_character_encryption_key_here

# Contact Info (Update these!)
NEXT_PUBLIC_WHATSAPP=+923001234567
NEXT_PUBLIC_EMAIL=support@missionhub.com
```

**To generate encryption key:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## 📋 Important Files to Edit

| File | What to Edit | Why |
|------|-------------|-----|
| `src/lib/constants/services.ts` | Your services | Visitors see this |
| `src/lib/constants/team.ts` | Your team info | About page shows this |
| `src/lib/constants/caseStudies.ts` | Your projects | Portfolio page shows this |
| `src/lib/constants/api.ts` | Contact info | How clients reach you |
| `.env.local` | Admin & secrets | Security & setup |

---

## ✅ Verification Checklist

- [ ] Website loads at http://localhost:3000
- [ ] Home page looks good
- [ ] All navigation links work
- [ ] Contact form works
- [ ] Quote form works
- [ ] Admin login page visible
- [ ] Mobile view looks good
- [ ] No console errors

---

## 🆘 Troubleshooting

**Port 3000 already in use?**
```bash
kill -9 $(lsof -t -i:3000)
npm run dev
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Website not loading?**
- Check terminal for errors
- Refresh browser (Ctrl+Shift+R)
- Make sure port 3000 is free

**Environment variables not working?**
- Make sure `.env.local` is in the root folder
- Variables should have no spaces: `KEY=value`
- Restart dev server after changes

---

## 🎯 Next Steps

1. ✅ Run `npm install`
2. ✅ Copy `.env.example` to `.env.local`
3. ✅ Update contact information
4. ✅ Run `npm run dev`
5. ✅ Preview at http://localhost:3000
6. ✅ Customize content
7. ✅ Push to GitHub
8. ✅ Deploy to Vercel
9. ✅ Setup custom domain
10. ✅ Launch! 🚀

---

## 📚 Full Documentation

- **README_MISSION_HUB.md** - Complete overview
- **SETUP_DEPLOYMENT_GUIDE.md** - Detailed setup
- **IMPLEMENTATION_CHECKLIST.md** - Before launch checklist
- **QUICK_REFERENCE.md** - Quick commands
- **PROJECT_SUMMARY.md** - What was built

---

## 💬 Support

**Need help?**
- Check the documentation files
- Read the inline code comments
- Check browser console for errors
- Verify environment variables are set

---

## 🎉 Ready?

```bash
# Let's go!
cd /home/hina/Downloads/hina-portfolio
npm install
npm run dev
```

Then visit: http://localhost:3000

**Enjoy your professional cybersecurity website! 🛡️**

---

*Built for Mission Hub Digital Solution - Cybersecurity Services, Pakistan*
