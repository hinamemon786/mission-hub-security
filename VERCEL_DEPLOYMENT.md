# 🚀 Deploy Mission Hub to Vercel - Step by Step

Your code is ready for deployment! Follow these steps to deploy your cybersecurity website to Vercel in minutes.

## Prerequisites

You'll need:
1. **GitHub Account** - https://github.com (Free)
2. **Vercel Account** - https://vercel.com (Free)

---

## Step 1: Create a GitHub Repository

### A. Go to GitHub
1. Open https://github.com in your browser
2. Click the **+** icon in the top right corner
3. Select **"New repository"**

### B. Create the Repository
- **Repository name:** `mission-hub-security` (or any name you prefer)
- **Description:** Mission Hub Digital Solution - Cybersecurity Services Website
- **Visibility:** Public (required for free Vercel deployment)
- **Initialize:** Leave unchecked
- Click **Create repository**

### C. You'll see a screen with git commands. Copy the commands for your new repository.

---

## Step 2: Push Code to GitHub

Run these commands in your terminal (replace `YOUR_USERNAME` with your GitHub username):

```bash
cd /home/hina/Downloads/hina-portfolio

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/mission-hub-security.git

# Rename branch to main
git branch -M main

# Push code to GitHub
git push -u origin main
```

**What to do if you get an error:**

If you get an authentication error, GitHub now uses **Personal Access Tokens** instead of passwords:

1. Go to: https://github.com/settings/tokens/new
2. Click **Generate new token (classic)**
3. In "Select scopes": Check ✅ **repo** (Full control of private repositories)
4. Click **Generate token**
5. Copy the token (it won't show again!)
6. When git asks for password, paste this token instead

---

## Step 3: Deploy to Vercel

### A. Sign Up for Vercel
1. Go to https://vercel.com
2. Click **Sign Up**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

### B. Import Your Project
1. After signing in, click **Add New** → **Project**
2. Under "Import Git Repository", paste your GitHub repo URL or select it from the list:
   ```
   https://github.com/YOUR_USERNAME/mission-hub-security
   ```
3. Click **Import**

### C. Configure Environment Variables
Vercel will show you configuration options. Set these:

1. **Project Name:** `mission-hub-security` (or your preference)
2. **Framework Preset:** Next.js (should auto-detect)
3. **Root Directory:** `./` (leave default)

### D. Add Environment Variables
Click **Environment Variables** and add these from your `.env.local`:

```
NEXT_PUBLIC_APP_NAME=Mission Hub Digital Solution
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
NEXT_PUBLIC_CONTACT_PHONE=+92-300-1234567
NEXT_PUBLIC_WHATSAPP=923001234567
NEXT_PUBLIC_EMERGENCY_HOTLINE=+92-21-1234567
```

*(Optional: Add admin credentials and encryption key if needed)*

### E. Deploy
1. Click **Deploy**
2. Wait for the build to complete (~3 minutes)
3. Once done, you'll see your live URL! 🎉

---

## Step 4: Access Your Website

Your website will be live at:
```
https://mission-hub-security.vercel.app
```

(Or your custom domain if you set one up)

---

## Step 5: Custom Domain (Optional)

To use a custom domain like `mission-hub.com`:

1. Buy a domain from:
   - Namecheap
   - GoDaddy
   - Route53
   - Any domain registrar

2. In Vercel Dashboard:
   - Go to your project → **Settings** → **Domains**
   - Click **Add Domain**
   - Enter your domain name
   - Follow instructions to configure DNS

---

## Step 6: Continuous Deployment

From now on, whenever you push code to GitHub:

```bash
git add .
git commit -m "Your message here"
git push origin main
```

**Vercel will automatically redeploy** your website! No need to do anything else. ✨

---

## Troubleshooting

### Build fails with TypeScript errors
- Make sure all files are committed: `git status`
- Files in `.gitignore` won't be deployed
- Check build logs in Vercel dashboard

### Environment variables not working
- Make sure you added them in Vercel Dashboard (not just locally)
- They take effect after redeploy
- Use `NEXT_PUBLIC_` prefix for browser-accessible vars only

### Website shows old version
- Clear browser cache (Ctrl+Shift+Delete)
- Vercel might need 30 seconds to update

### 404 errors on pages
- Make sure all files are pushed to GitHub
- Check that file paths match in code and filesystem

---

## Next Steps

After deployment:

1. **Test all pages:**
   - Home page
   - Services page
   - Case Studies
   - About page
   - Contact form
   - Quote form
   - Admin login

2. **Update content:**
   - Edit `src/lib/constants/services.ts` - Update your services
   - Edit `src/lib/constants/team.ts` - Add team photos
   - Edit `src/lib/constants/caseStudies.ts` - Add real projects
   - Push changes: `git add . && git commit -m "Update content" && git push`

3. **Add images:**
   - Place images in `public/images/`
   - Update imports in components
   - Push and redeploy

4. **Optional: Set up features**
   - Email notifications (nodemailer)
   - Payment gateway (JazzCash/EasyPaisa)
   - Sanity CMS for blog
   - WhatsApp Business API

---

## Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **GitHub Help:** https://docs.github.com

---

**Questions?** Your website is ready to go! Just follow the steps above and it'll be live in minutes. 🚀
