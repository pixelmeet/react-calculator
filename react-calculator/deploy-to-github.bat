@echo off
echo ========================================
echo    Engineering Calculator - GitHub Deployment
echo ========================================
echo.

echo Checking if Git is installed...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed!
    echo Please download and install Git from: https://git-scm.com/downloads
    pause
    exit /b 1
)

echo Checking if Node.js is installed...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please download and install Node.js from: https://nodejs.org/
    pause
    exit /b 1
)

echo.
echo Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies!
    pause
    exit /b 1
)

echo.
echo Building project...
npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)

echo.
echo Initializing Git repository...
git init
if %errorlevel% neq 0 (
    echo ERROR: Failed to initialize Git repository!
    pause
    exit /b 1
)

echo.
echo Adding files to Git...
git add .
if %errorlevel% neq 0 (
    echo ERROR: Failed to add files to Git!
    pause
    exit /b 1
)

echo.
echo Creating initial commit...
git commit -m "Initial commit: Engineering Calculator"
if %errorlevel% neq 0 (
    echo ERROR: Failed to create commit!
    pause
    exit /b 1
)

echo.
echo Adding remote repository...
git remote add origin https://github.com/pixelmeet/react-calculator.git
if %errorlevel% neq 0 (
    echo WARNING: Remote repository already exists or failed to add!
)

echo.
echo Pushing to GitHub...
git push -u origin main
if %errorlevel% neq 0 (
    echo ERROR: Failed to push to GitHub!
    echo Please check your GitHub credentials and repository access.
    pause
    exit /b 1
)

echo.
echo ========================================
echo    Deployment Successful!
echo ========================================
echo.
echo Your project has been deployed to:
echo https://github.com/pixelmeet/react-calculator
echo.
echo Next steps to enable GitHub Pages:
echo 1. Go to https://github.com/pixelmeet/react-calculator
echo 2. Click "Settings" tab
echo 3. Scroll down to "Pages" section
echo 4. Under "Source", select "Deploy from a branch"
echo 5. Select branch: gh-pages
echo 6. Click "Save"
echo.
echo Your calculator will be live at:
echo https://pixelmeet.github.io/react-calculator
echo.
echo GitHub Actions will automatically build and deploy your site!
echo.
pause 