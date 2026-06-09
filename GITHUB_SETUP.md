# ⚡ GitHub Repository Setup - 2 Minutes

Your code is ready! Just need to create the repository on GitHub first.

## Step 1: Create Repository on GitHub (Takes 1 minute)

### Open in Browser:
https://github.com/new

### Or Manual Steps:
1. Go to https://github.com
2. Click **+** icon (top right)
3. Click **New repository**

### Fill in:
- **Repository name:** `mission-hub-security`
- **Description:** Mission Hub Digital Solution - Cybersecurity Services Website
- **Visibility:** ✅ **Public** (important for Vercel!)
- **Don't** check "Initialize with README"
- Click **Create repository**

---

## Step 2: Push Your Code (Copy-Paste These Commands)

After creating the repo, you'll see a page with commands. 

**Copy and paste in your terminal:**

```bash
cd /home/hina/Downloads/hina-portfolio

git remote add origin https://github.com/hinamemon786/mission-hub-security.git
git branch -M main
git push -u origin main
```

**If you already ran the deploy script, use:**

```bash
cd /home/hina/Downloads/hina-portfolio

git remote remove origin  # Remove old remote first
git remote add origin https://github.com/hinamemon786/mission-hub-security.git
git branch -M main
git push -u origin main
```

### GitHub will ask for password:
- Don't use your GitHub password!
- Use a **Personal Access Token** instead:
  1. Go to: https://github.com/settings/tokens/new
  2. Click **"Generate new token (classic)"**
  3. Check ✅ **repo** (Full control)
  4. Scroll down → **Generate token**
  5. Copy the token (shown only once!)
  6. Paste when Git asks for password

---

## Step 3: Deploy to Vercel (Takes 3 minutes)

Once code is on GitHub:

1. Go to https://vercel.com
2. Click **Sign Up** → **Continue with GitHub**
3. Authorize Vercel
4. Click **Add New** → **Project**
5. Find `mission-hub-security` or paste:
   ```
   https://github.com/hinamemon786/mission-hub-security
   ```
6. Click **Import**
7. Click **Deploy**
8. Wait for build (~3 minutes)

### Your live website:
```
https://mission-hub-security.vercel.app
```

---

## ✨ That's it!

Once you see your live website, you're done! 🎉

From now on, just push code and it deploys automatically:
```bash
git add .
git commit -m "Your message"
git push origin main
```

---

**Need the exact commands? Go to https://github.com/new first, then copy the commands from there!**
