# 🚀 Deployment Guide

## Netlify Deployment Steps

### 1. Prerequisites
- Node.js 18+ installed
- Git repository with your code

### 2. Build Locally (Optional but Recommended)
```bash
# Install dependencies
npm install

# Build the project
npm run build

# Check the dist folder
ls -la dist/
```

### 3. Deploy to Netlify

#### Option A: Git Integration (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://app.netlify.com/)
3. Click "Add new site" > "Import an existing project"
4. Connect your repository
5. Build settings should auto-detect:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

#### Option B: Manual Upload
1. Run `npm run build` locally
2. Upload the contents of the `dist` folder to Netlify

### 4. Troubleshooting MIME Type Error

If you see this error:
```
Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "application/octet-stream"
```

#### Solutions:

1. **Check Build Output**
   - Ensure `dist/index.html` exists and contains proper script tags
   - Script tags should reference `.js` files, not `.jsx` files

2. **Verify Netlify Settings**
   - Publish directory: `dist` (not `public` or root)
   - Build command: `npm run build`

3. **Check File Headers**
   - The `netlify.toml` file includes proper MIME type headers
   - JavaScript files should be served as `application/javascript`

4. **Clear Cache**
   - Clear Netlify cache in the deploy settings
   - Trigger a new deployment

5. **Check Build Logs**
   - Look for any build errors in Netlify deploy logs
   - Ensure all dependencies are installed correctly

### 5. Common Issues

#### Issue: Files not found
- **Solution**: Make sure you're deploying from the `dist` folder, not the source code

#### Issue: Build fails
- **Solution**: Check that all dependencies are in `package.json` and run `npm install` before build

#### Issue: Routing doesn't work
- **Solution**: The `_redirects` file and `netlify.toml` redirects should handle this

### 6. Verification

After deployment, your site should:
- Load without MIME type errors
- Display the calculator interface
- Have working JavaScript functionality
- Be responsive on mobile devices

### 7. Custom Domain (Optional)

1. Go to your site settings in Netlify
2. Click "Domain settings"
3. Add your custom domain
4. Configure DNS as instructed

---

## Support

If you continue to have issues:
1. Check the Netlify deploy logs
2. Verify your build output locally
3. Ensure all files are properly committed to your repository 