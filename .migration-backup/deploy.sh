#!/bin/bash

# Mission Hub Direct Deployment Script
# This script automatically pushes to GitHub and prepares Vercel deployment

set -e  # Exit on any error

echo "🚀 Mission Hub Direct Deployment Script"
echo "=========================================="
echo ""

GITHUB_USERNAME="hinamemon786"
REPO_NAME="mission-hub-security"
GITHUB_URL="https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"

echo "📋 Configuration:"
echo "  GitHub Username: $GITHUB_USERNAME"
echo "  Repository: $REPO_NAME"
echo "  Full URL: $GITHUB_URL"
echo ""

# Step 1: Check if remote exists
echo "1️⃣ Setting up Git remote..."
if git remote | grep -q origin; then
    echo "   ✅ Remote 'origin' already exists"
    git remote set-url origin "$GITHUB_URL"
    echo "   ✅ Updated remote URL"
else
    echo "   ➕ Adding new remote..."
    git remote add origin "$GITHUB_URL"
    echo "   ✅ Remote added"
fi
echo ""

# Step 2: Switch to main branch
echo "2️⃣ Switching to main branch..."
if git rev-parse --verify main > /dev/null 2>&1; then
    git checkout main
    echo "   ✅ Already on main branch"
else
    git branch -M main
    echo "   ✅ Renamed branch to main"
fi
echo ""

# Step 3: Push to GitHub
echo "3️⃣ Pushing code to GitHub..."
echo "   Note: If asked for password, use a Personal Access Token from:"
echo "   https://github.com/settings/tokens/new"
echo "   (Select 'repo' scope)"
echo ""

git push -u origin main --force
echo ""
echo "   ✅ Code pushed to GitHub!"
echo ""

# Step 4: Show next steps
echo "✨ DEPLOYMENT READY!"
echo "===================="
echo ""
echo "Your code is now on GitHub! 🎉"
echo ""
echo "📍 GitHub Repository:"
echo "   $GITHUB_URL"
echo ""
echo "🚀 Next: Deploy to Vercel"
echo ""
echo "Visit: https://vercel.com/new"
echo ""
echo "Steps:"
echo "  1. Click 'Add New' → 'Project'"
echo "  2. Click 'Continue with GitHub'"
echo "  3. Select or paste: mission-hub-security"
echo "  4. Click 'Import'"
echo "  5. Click 'Deploy'"
echo ""
echo "Your live website will be at:"
echo "  https://mission-hub-security.vercel.app"
echo ""
echo "💡 Need help? Check DEPLOY_NOW.md or VERCEL_DEPLOYMENT.md"
