#!/bin/bash

# Clean previous build
rm -rf dist

# Install dependencies
npm install

# Build the project
npm run build

# Verify build output
echo "Build completed. Checking dist folder..."
ls -la dist/

echo "Build script completed successfully!" 