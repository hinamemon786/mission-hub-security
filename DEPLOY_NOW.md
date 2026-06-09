# 🚀 Quick Deploy Commands

## 1️⃣ Create GitHub Repository
Go to https://github.com/new and create a new public repository named `mission-hub-security`

## 2️⃣ Push Your Code to GitHub

Replace `YOUR_USERNAME` with your GitHub username:

```bash
cd /home/hina/Downloads/hina-portfolio

git remote add origin https://github.com/YOUR_USERNAME/mission-hub-security.git
git branch -M main
git push -u origin main
```

## 3️⃣ Deploy to Vercel

1. Go to https://vercel.com
2. Click **Sign Up** → **Continue with GitHub**
3. Click **Add New** → **Project**
4. Select or paste your GitHub repo: `https://github.com/YOUR_USERNAME/mission-hub-security`
5. Click **Import**
6. Click **Deploy**
7. Wait ~3 minutes ⏳
8. Visit your live site! 🎉

Your website will be at: `https://mission-hub-security.vercel.app`

---

## 📋 What You'll See

After you finish these steps, you'll have:
- ✅ Live website on Vercel
- ✅ Automatic HTTPS/SSL
- ✅ Fast global CDN
- ✅ Automatic redeploys when you push to GitHub
- ✅ Free tier (up to 100GB bandwidth/month)

---

## 🔄 Future Updates

Whenever you want to update your website:

```bash
# Make changes in VS Code
# Then run:
git add .
git commit -m "Update [what changed]"
git push origin main

# Vercel automatically redeploys! ✨
```

---

## 📧 Need Help with GitHub?

GitHub now requires **Personal Access Tokens** instead of passwords:

1. Go to: https://github.com/settings/tokens/new
2. Click **Generate new token (classic)**
3. Check ✅ **repo** under scopes
4. Click **Generate token**
5. Copy the token
6. When git asks for password, paste this token

See full details in: **VERCEL_DEPLOYMENT.md** in this folder

---

**Current Status:** Your code is ready! 🎯
