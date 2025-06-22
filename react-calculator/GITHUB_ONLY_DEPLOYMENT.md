# 🚀 GitHub Pages Deployment Guide

## Prerequisites

### 1. Install Git
Download and install Git from: https://git-scm.com/downloads

### 2. Install Node.js
Download and install Node.js from: https://nodejs.org/ (version 18 or higher)

### 3. GitHub Account
Make sure you have a GitHub account at: https://github.com

## Step-by-Step Deployment

### Step 1: Deploy to GitHub Repository

#### Option A: Automated Deployment (Recommended)
1. **Install Git and Node.js** (if not already installed)
2. **Run the batch script**:
   ```bash
   # Double-click on deploy-to-github.bat
   # OR run in PowerShell:
   .\deploy-to-github.bat
   ```

#### Option B: Manual Deployment
```bash
# 1. Install dependencies
npm install

# 2. Build the project
npm run build

# 3. Initialize Git
git init

# 4. Add all files
git add .

# 5. Create initial commit
git commit -m "Initial commit: Engineering Calculator"

# 6. Add remote repository
git remote add origin https://github.com/pixelmeet/react-calculator.git

# 7. Push to GitHub
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. **Go to your repository**: https://github.com/pixelmeet/react-calculator
2. **Click "Settings"** tab
3. **Scroll down to "Pages"** section
4. **Under "Source"**, select **"Deploy from a branch"**
5. **Select branch**: `gh-pages`
6. **Click "Save"**

### Step 3: Verify Deployment

After pushing to GitHub:
1. **GitHub Actions** will automatically build and deploy your site
2. **Wait 2-3 minutes** for the deployment to complete
3. **Your site will be live at**: `https://pixelmeet.github.io/react-calculator`

## File Structure

Your repository contains:

```
react-calculator/
├── src/
│   ├── App.jsx          # Main calculator component
│   ├── App.css          # Calculator styles
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── public/
│   └── vite.svg         # App icon
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions workflow
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies and scripts
├── README.md           # Project documentation
└── .gitignore          # Git ignore rules
```

## GitHub Actions Workflow

The `.github/workflows/deploy.yml` file automatically:
- ✅ Builds your project when you push to main branch
- ✅ Deploys to GitHub Pages
- ✅ Updates your live site automatically

## Troubleshooting

### Build Issues
1. **Check GitHub Actions**: Go to Actions tab in your repository
2. **View build logs**: Click on the latest workflow run
3. **Common fixes**:
   - Ensure all dependencies are in `package.json`
   - Check for syntax errors in your code
   - Verify Node.js version compatibility

### Deployment Issues
1. **GitHub Pages not showing**: Wait 2-3 minutes for deployment
2. **404 errors**: Check that the base path is correct in `vite.config.js`
3. **Assets not loading**: Verify the `base: '/react-calculator/'` setting

### Git Issues
- **Authentication**: Use GitHub CLI or Personal Access Token
- **Large files**: Ensure `.gitignore` excludes `node_modules` and `dist`

## Updating Your Site

To update your live site:
1. **Make changes** to your code
2. **Commit and push** to GitHub:
   ```bash
   git add .
   git commit -m "Update calculator features"
   git push origin main
   ```
3. **GitHub Actions** will automatically rebuild and deploy
4. **Your site updates** in 2-3 minutes

## Verification Checklist

- [ ] Git repository is initialized
- [ ] All files are committed and pushed to GitHub
- [ ] Repository is public and accessible
- [ ] GitHub Pages is enabled in repository settings
- [ ] GitHub Actions workflow completes successfully
- [ ] Calculator loads without errors at `https://pixelmeet.github.io/react-calculator`
- [ ] All features work correctly
- [ ] Mobile responsiveness works

## Support

If you encounter issues:
1. Check the GitHub Actions tab for build errors
2. Verify repository settings and GitHub Pages configuration
3. Check browser console for JavaScript errors
4. Ensure all files are properly committed

---

**Your Engineering Calculator will be live at:**
`https://pixelmeet.github.io/react-calculator`

**GitHub Repository:**
`https://github.com/pixelmeet/react-calculator` 