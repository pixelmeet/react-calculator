# 🧮 Engineering Calculator

A comprehensive, modern engineering calculator built with React and Vite. Features multiple calculation modes, scientific functions, unit conversions, and a beautiful responsive UI.

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
   git clone <your-repo-url>
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

### Netlify Deployment

This project is configured for easy deployment on Netlify:

1. **Connect your repository** to Netlify
2. **Build settings** (automatically detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

3. **Deploy** - Netlify will automatically build and deploy your site

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your hosting provider

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

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Math.js** - Mathematical library
- **Lucide React** - Icon library
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

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Built with ❤️ using React and Vite**
