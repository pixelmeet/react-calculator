# 🧮 Engineering Calculator

A comprehensive, modern engineering calculator built with React and Vite. Features multiple calculation modes, scientific functions, unit conversions, and a beautiful responsive UI.

![Engineering Calculator](https://img.shields.io/badge/React-18.3.1-blue) ![Vite](https://img.shields.io/badge/Vite-6.3.5-purple) ![Netlify](https://img.shields.io/badge/Netlify-Ready-green)

## ✨ Features

### 🎯 Multiple Calculator Modes
- **Standard Mode**: Basic arithmetic operations with memory functions
- **Scientific Mode**: Advanced mathematical functions including trigonometry, logarithms, and more
- **Unit Converter**: Convert between different units of length, temperature, and weight

### 🔬 Scientific Functions
- **Trigonometric**: sin, cos, tan (with degree/radian toggle)
- **Logarithmic**: log (base 10), ln (natural log)
- **Power Functions**: square (x²), cube (x³), power (xʸ)
- **Other**: square root (√), factorial (x!), inverse (1/x), absolute value (|x|)
- **Constants**: π (pi), e (Euler's number)

### 💾 Memory Functions
- MC (Memory Clear)
- MR (Memory Recall)
- M+ (Memory Add)
- M- (Memory Subtract)

### 🎨 Advanced Features
- **Calculation History**: View and track previous calculations
- **Keyboard Support**: Full keyboard input support
- **Responsive Design**: Works on all screen sizes
- **Modern UI**: Beautiful gradient design with smooth animations

### 🔄 Unit Conversions
- **Length**: Meters, Feet, Kilometers, Miles
- **Temperature**: Celsius, Fahrenheit, Kelvin
- **Weight**: Kilograms, Pounds

## 🚀 Quick Start

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pixelmeet/react-calculator.git
   cd react-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Netlify Deployment (Recommended)

This project is configured for easy deployment on Netlify with proper MIME type handling:

#### Option A: Git Integration
1. **Push your code** to GitHub/GitLab/Bitbucket
2. **Go to [Netlify](https://app.netlify.com/)**
3. **Click "Add new site" > "Import an existing project"**
4. **Connect your repository**
5. **Build settings** (automatically detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18
6. **Click "Deploy site"**

#### Option B: Manual Upload
1. **Build the project**
   ```bash
   npm run build
   ```
2. **Upload the `dist` folder** to Netlify

### Troubleshooting Deployment Issues

#### MIME Type Error Fix
If you encounter this error:
```
Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "application/octet-stream"
```

**Solutions:**
1. **Verify Netlify Settings**:
   - Publish directory: `dist` (not `public` or root)
   - Build command: `npm run build`
2. **Check Build Output**: Ensure `dist/index.html` exists
3. **Clear Cache**: Clear Netlify cache and redeploy
4. **Check Headers**: The `netlify.toml` includes proper MIME type headers

#### Common Issues
- **Files not found**: Deploy from `dist` folder, not source code
- **Build fails**: Ensure all dependencies are in `package.json`
- **Routing issues**: `_redirects` file handles SPA routing

## 🎯 Usage

### Keyboard Shortcuts
- **Numbers**: 0-9 keys
- **Operators**: +, -, *, /
- **Decimal**: . (period)
- **Equals**: Enter or =
- **Clear**: Escape
- **Backspace**: Backspace key

### Calculator Modes
- **Standard**: Basic arithmetic with memory functions
- **Scientific**: Advanced mathematical functions
- **Units**: Convert between different measurement units

### Memory Operations
- **MC**: Clear memory
- **MR**: Recall memory value
- **M+**: Add current value to memory
- **M-**: Subtract current value from memory

## 🛠️ Technology Stack

- **React 18.3.1** - UI framework
- **Vite 6.3.5** - Build tool and dev server
- **Math.js 12.4.0** - Mathematical library
- **Lucide React 0.263.1** - Icon library
- **CSS3** - Styling with modern features

## 📱 Responsive Design

The calculator is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🎨 UI Features

- **Glassmorphism design** with backdrop blur effects
- **Smooth animations** and transitions
- **Professional color scheme**
- **Intuitive navigation** with icons
- **Accessibility features** with proper focus management

## 🔧 Project Structure

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
└── README.md           # This file
```

## 🔧 Customization

### Adding New Functions
To add new scientific functions, modify the `scientificFunction` method in `App.jsx`:

```javascript
case 'newFunction':
  result = yourCalculation(numValue);
  break;
```

### Adding New Unit Conversions
To add new unit conversions, modify the `unitConversion` function:

```javascript
else if (fromUnit === 'newUnit' && toUnit === 'targetUnit') 
  result = conversionFormula(numValue);
```

## 📋 Development

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Code Quality
```bash
# Run ESLint
npm run lint
```

## 🐛 Troubleshooting

### Build Issues
1. **Clear node_modules**: `rm -rf node_modules && npm install`
2. **Clear cache**: `npm run build -- --force`
3. **Check Node version**: Ensure Node.js 18+ is installed

### Runtime Issues
1. **Check browser console** for JavaScript errors
2. **Verify dependencies** are properly installed
3. **Clear browser cache** and reload

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Check the [DEPLOYMENT.md](DEPLOYMENT.md) for deployment help
- Review the troubleshooting section above

---

**Built with ❤️ using React and Vite**

[![Demo](https://6858782a70bccbb139a00188--musical-croissant-e969ee.netlify.app/)
