# 🚀 GitHub Deployment Guide

## Prerequisites

### 1. Install Git
Download and install Git from: https://git-scm.com/downloads

### 2. Install Node.js
Download and install Node.js from: https://nodejs.org/ (version 18 or higher)

### 3. GitHub Account
Make sure you have a GitHub account at: https://github.com

## Step-by-Step Deployment

### Step 1: Initialize Git Repository

```bash
# Initialize Git repository
git init

# Add all files to Git
git add .

# Create initial commit
git commit -m "Initial commit: Engineering Calculator"

# Add remote repository
git remote add origin https://github.com/pixelmeet/react-calculator.git

# Push to GitHub
git push -u origin main
```

### Step 2: Verify GitHub Repository

1. Go to https://github.com/pixelmeet/react-calculator
2. Verify all files are uploaded correctly
3. Check that the README.md is displayed properly

### Step 3: Deploy to Netlify

#### Option A: Connect GitHub to Netlify (Recommended)

1. **Go to Netlify**: https://app.netlify.com/
2. **Click "Add new site"** > **"Import an existing project"**
3. **Connect to GitHub** and authorize Netlify
4. **Select your repository**: `pixelmeet/react-calculator`
5. **Build settings** (should auto-detect):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. **Click "Deploy site"**

#### Option B: Manual Deployment

1. **Build locally**:
   ```bash
   npm install
   npm run build
   ```
2. **Upload `dist` folder** to Netlify

### Step 4: Configure Custom Domain (Optional)

1. In Netlify dashboard, go to **Site settings** > **Domain management**
2. Add your custom domain
3. Configure DNS as instructed

## File Structure for GitHub

Your repository should contain:

```
react-calculator/
├── src/
│   ├── App.jsx          # Main calculator component
│   ├── App.css          # Calculator styles
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── public/
│   ├── _redirects       # Netlify redirects
│   └── vite.svg         # App icon
├── netlify.toml         # Netlify configuration
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies and scripts
├── README.md           # Project documentation
├── DEPLOYMENT.md       # Deployment guide
└── GITHUB_DEPLOYMENT.md # This file
```

## GitHub Actions (Optional)

If you want automatic deployment, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Netlify

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build project
      run: npm run build
      
    - name: Deploy to Netlify
      uses: nwtgck/actions-netlify@v1.2
      with:
        publish-dir: './dist'
        production-branch: main
        github-token: ${{ secrets.GITHUB_TOKEN }}
        deploy-message: "Deploy from GitHub Actions"
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## Troubleshooting

### Git Issues
- **Authentication**: Use GitHub CLI or Personal Access Token
- **Large files**: Ensure `.gitignore` excludes `node_modules` and `dist`

### Build Issues
- **Dependencies**: Run `npm install` before building
- **Node version**: Ensure Node.js 18+ is installed
- **Build errors**: Check console for specific error messages

### Netlify Issues
- **MIME type errors**: Check `netlify.toml` configuration
- **Build failures**: Verify build command and publish directory
- **Routing issues**: Ensure `_redirects` file is in `public` folder

## Verification Checklist

- [ ] Git repository is initialized
- [ ] All files are committed and pushed to GitHub
- [ ] Repository is public and accessible
- [ ] Netlify build completes successfully
- [ ] Calculator loads without errors
- [ ] All features work correctly
- [ ] Mobile responsiveness works
- [ ] Custom domain is configured (if applicable)

## Support

If you encounter issues:
1. Check the [DEPLOYMENT.md](DEPLOYMENT.md) for detailed troubleshooting
2. Review Netlify build logs
3. Verify GitHub repository settings
4. Check browser console for JavaScript errors

---

**Your Engineering Calculator will be live at:**
`https://your-site-name.netlify.app`

**GitHub Repository:**
`https://github.com/pixelmeet/react-calculator` 