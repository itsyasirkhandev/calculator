# CalcFlow

**A modern, feature-rich calculator application with beautiful animations and intuitive design for students and professionals**

[![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.1.3-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-Workers-F38020?style=flat-square&logo=cloudflare)](https://workers.cloudflare.com/)

[🚀 Live Demo](https://calcflow-calulator.netlify.app) | [📖 Documentation](#getting-started)

---

## Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
  - [Basic Calculations](#basic-calculations)
  - [Scientific Mode](#scientific-mode)
  - [Memory Functions](#memory-functions)
  - [Keyboard Shortcuts](#keyboard-shortcuts)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## About The Project

CalcFlow is a modern, web-based calculator application that combines powerful functionality with an elegant user interface. Built with React and TypeScript, it offers both basic and scientific calculation modes, making it perfect for students, professionals, and anyone who needs reliable calculations with a beautiful user experience.

The application features smooth animations, dark/light theme support, calculation history, memory functions, and full keyboard accessibility. Whether you're doing simple arithmetic or complex scientific calculations, CalcFlow provides an intuitive and efficient solution.

---

## Key Features

• **Dual Mode Calculator** - Switch between Basic and Scientific modes seamlessly
• **Calculation History** - Track and revisit your previous calculations with timestamps
• **Memory Functions** - Store, recall, and manipulate values in calculator memory (MC, MR, M+, M-, MS)
• **Theme Support** - Toggle between beautiful light and dark themes
• **Keyboard Support** - Full keyboard navigation and input support for faster calculations
• **Scientific Functions** - Trigonometric, logarithmic, and advanced mathematical operations
• **Responsive Design** - Optimized for both desktop and mobile devices
• **Accessibility Compliant** - WCAG guidelines followed for screen reader compatibility
• **Smooth Animations** - Framer Motion powered transitions and interactions
• **Error Handling** - Graceful handling of mathematical errors and edge cases
• **Copy to Clipboard** - Easily copy results for use in other applications
• **Customizable Precision** - Adjust decimal places for calculation results

---

## Tech Stack

### Frontend
- **React 19.0.0** - Modern UI library with latest features
- **TypeScript 5.8.3** - Type-safe JavaScript development
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Framer Motion 12.23.22** - Smooth animations and transitions
- **React Router 7.5.3** - Client-side routing
- **Radix UI** - Accessible, unstyled UI primitives
- **Lucide React** - Beautiful SVG icons

### Backend
- **Hono 4.7.7** - Fast, lightweight web framework
- **Zod 3.24.3** - TypeScript-first schema validation
- **Cloudflare Workers** - Edge computing platform

### Database
- **Cloudflare D1** - SQLite-compatible database

### Development Tools
- **Vite 7.1.3** - Next-generation frontend build tool
- **ESLint 9.25.1** - Code quality and consistency
- **TypeScript ESLint** - TypeScript-specific linting rules

### Deployment
- **Netlify** - Frontend hosting and deployment
- **Cloudflare Workers** - Backend serverless functions

---

## Screenshots

*Screenshots will be added here showcasing the calculator interface, scientific mode, history panel, and theme variations*

---

## Getting Started

To get CalcFlow running locally on your machine, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/itsyasirkhandev/calculator.git
   cd calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

   This will install all required packages including:
   - React 19.0.0
   - TypeScript 5.8.3
   - Vite 7.1.3
   - Tailwind CSS 3.4.17
   - Framer Motion for animations
   - Radix UI components

### Running the Application

**Development Mode**

Start the development server with hot-reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

**Production Build**

Build the application for production:

```bash
npm run build
```

The optimized build will be created in the `dist/` directory.

**Preview Production Build**

Preview the production build locally:

```bash
npm run preview
```

---

## Usage

### Basic Calculations

**Simple Arithmetic**
```
Example: 25 + 15 = 40
1. Click or type '2', '5'
2. Click '+' or press '+'
3. Click or type '1', '5'
4. Click '=' or press 'Enter'
Result: 40
```

**Operations Supported**
- Addition: `+`
- Subtraction: `-`
- Multiplication: `×` or `*`
- Division: `÷` or `/`
- Percentage: `%`
- Power: `x^y`

### Scientific Mode

Toggle scientific mode to access advanced functions:

**Trigonometric Functions**
- `sin(x)` - Sine
- `cos(x)` - Cosine
- `tan(x)` - Tangent
- `asin(x)` - Arc sine
- `acos(x)` - Arc cosine
- `atan(x)` - Arc tangent

**Angle Mode**: Switch between Degrees (DEG) and Radians (RAD)

**Logarithmic Functions**
- `log(x)` - Base-10 logarithm
- `ln(x)` - Natural logarithm (base-e)

**Other Functions**
- `√x` - Square root
- `x²` - Square
- `x!` - Factorial
- `1/x` - Reciprocal
- `π` - Pi constant (3.14159...)
- `e` - Euler's number (2.71828...)

**Example: Calculate sin(45°)**
```
1. Ensure angle mode is set to DEG
2. Type '45'
3. Click 'sin' button
Result: 0.7071067811865475
```

### Memory Functions

Store and recall values for complex calculations:

- **MC** (Memory Clear) - Clear the memory
- **MR** (Memory Recall) - Recall stored value
- **MS** (Memory Store) - Store current display value
- **M+** (Memory Add) - Add current value to memory
- **M-** (Memory Subtract) - Subtract current value from memory

**Example: Using Memory**
```
1. Calculate 25 × 4 = 100
2. Click 'MS' to store 100
3. Calculate 50 ÷ 2 = 25
4. Click 'M+' to add 25 to memory (now 125)
5. Click 'MR' to recall 125
```

### Keyboard Shortcuts

Full keyboard support for efficient calculations:

| Key | Action |
|-----|--------|
| `0-9` | Number input |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `.` | Decimal point |
| `Enter` or `=` | Calculate result |
| `Escape` | Clear all |
| `Backspace` | Delete last digit |
| `%` | Percentage |

### History & Settings

**Calculation History**
- View all previous calculations with timestamps
- Click the History icon to open history panel
- Copy any result to clipboard
- Export history as JSON
- Clear all history

**Theme Toggle**
- Switch between light and dark themes
- Theme preference is saved locally

**Settings**
- Adjust decimal precision (number of decimal places)
- Toggle between angle modes (DEG/RAD)
- Configure display preferences

---

## Project Structure

```
calculator/
├── src/
│   ├── react-app/
│   │   ├── components/
│   │   │   ├── Calculator/
│   │   │   │   ├── BasicButtonGrid.tsx    # Basic calculator buttons
│   │   │   │   ├── Display.tsx            # Calculator display
│   │   │   │   ├── History.tsx            # Calculation history
│   │   │   │   ├── ScientificButtonGrid.tsx
│   │   │   │   └── Settings.tsx
│   │   │   └── ui/
│   │   │       ├── Button.tsx             # Reusable button component
│   │   │       └── ThemeToggle.tsx
│   │   ├── contexts/
│   │   │   └── CalculatorContext.tsx      # State management
│   │   ├── hooks/
│   │   │   └── useCalculator.ts           # Calculator logic
│   │   ├── lib/
│   │   │   └── calculator.ts              # Core calculation functions
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── shared/
│   │   └── types.ts                       # TypeScript types
│   └── styles/
│       └── index.css                      # Global styles
├── public/                                # Static assets
├── dist/                                  # Production build (generated)
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

---

## Available Scripts

### Development

```bash
# Start development server with hot-reload
npm run dev

# Run TypeScript type checking
npm run check

# Run ESLint for code quality
npm run lint
```

### Production

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Type check before building
npm run build:check
```

### Cloudflare Workers (if using)

```bash
# Generate Cloudflare types
npm run cf-typegen

# Deploy to Cloudflare Workers
npm run deploy
```

---

## Deployment

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy!

   Or use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Deploy to GitHub Pages

1. Update `vite.config.ts` with your base URL:
   ```typescript
   export default defineConfig({
     base: '/calculator/',
     // ... rest of config
   })
   ```

2. Build and deploy:
   ```bash
   npm run build
   npx gh-pages -d dist
   ```

### Deploy to Cloudflare Pages

```bash
# Build
npm run build

# Deploy using Wrangler
npx wrangler pages deploy dist
```

---

## Troubleshooting

### Common Issues

**Issue: `npm install` fails**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

**Issue: Port 5173 is already in use**
```bash
# Kill the process using the port (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- --port 3000
```

**Issue: Build fails with TypeScript errors**
```bash
# Run type checking to see specific errors
npm run check

# Check if all dependencies are installed
npm install
```

**Issue: Animations not working**
```bash
# Ensure Framer Motion is installed
npm install framer-motion
```

### Browser Compatibility

CalcFlow works best on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

For older browsers, some features (like animations) may not work as expected.

---

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Clone your Fork**
   ```bash
   git clone https://github.com/your-username/calculator.git
   cd calculator
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

4. **Make your Changes**
   - Write clean, readable code
   - Follow the existing code style
   - Add comments where necessary
   - Test your changes thoroughly

5. **Commit your Changes**
   ```bash
   git add .
   git commit -m 'Add some AmazingFeature'
   ```

6. **Push to your Fork**
   ```bash
   git push origin feature/AmazingFeature
   ```

7. **Open a Pull Request**
   - Go to the original repository
   - Click 'New Pull Request'
   - Provide a clear description of your changes

### Contribution Guidelines

- **Code Style**: Follow the existing TypeScript and React patterns
- **Commits**: Use clear, descriptive commit messages
- **Testing**: Test your changes in both light and dark modes
- **Documentation**: Update README if adding new features
- **Issues**: Check existing issues before creating new ones

### Areas for Contribution

We welcome contributions in these areas:
- 🐛 Bug fixes
- ✨ New features (scientific functions, unit conversions, etc.)
- 🎨 UI/UX improvements
- 📝 Documentation improvements
- 🌐 Internationalization (i18n)
- ♿ Accessibility enhancements
- ⚡ Performance optimizations

---

## License

This project is open source and available under the [MIT License](LICENSE).

```
MIT License

Copyright (c) 2024 Yasir Khan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## Author

**Yasir Khan**

- Portfolio: [https://yasir.qzz.io](https://yasir.qzz.io)
- GitHub: [@yasirkhan](https://github.com/itsyasirkhandev)
- LinkedIn: [Connect with me](https://linkedin.com/in/connectyasir)

---

## Acknowledgments

Special thanks to:

- [React Team](https://react.dev/) for the amazing React library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Radix UI](https://www.radix-ui.com/) for accessible UI components
- [Lucide Icons](https://lucide.dev/) for beautiful icons
- [Vite](https://vitejs.dev/) for lightning-fast build tool
- All contributors who help improve this project

---

## Roadmap

Future features planned:
- [ ] Unit converter (length, weight, temperature, etc.)
- [ ] Currency converter with live exchange rates
- [ ] Graphing calculator mode
- [ ] Custom function definitions
- [ ] Multi-language support (i18n)
- [ ] Calculation export to PDF
- [ ] Mobile apps (iOS/Android)
- [ ] Browser extension
- [ ] Voice input support
- [ ] Collaborative calculation sharing

---

## Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#troubleshooting) section
2. Search [existing issues](https://github.com/itsyasirkhandev/calculator/issues)
3. Create a [new issue](https://github.com/itsyasirkhandev/calculator/issues/new) with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Browser and OS information

---

## Performance

CalcFlow is optimized for performance:
- **Fast Load Time**: < 2 seconds on 3G connection
- **Small Bundle Size**: ~130KB gzipped
- **Smooth Animations**: 60 FPS on modern devices
- **Efficient Re-renders**: React Context with optimized state management
- **Code Splitting**: Lazy loading for optimal initial load

---

## Security

We take security seriously. If you discover a security vulnerability:

1. **Do not** open a public issue
2. Email the details to the maintainer
3. Allow time for the issue to be addressed
4. We'll credit you in the fix (if desired)

---

<div align="center">
  <p>Built with ❤️ using React, TypeScript, and Tailwind CSS</p>
  <p><strong>CalcFlow</strong> - Making calculations beautiful and intuitive</p>
  
  <p>
    <a href="https://calcflow-calulator.netlify.app">Live Demo</a> •
    <a href="https://github.com/itsyasirkhandev/calculator/issues">Report Bug</a> •
    <a href="https://github.com/itsyasirkhandev/calculator/issues">Request Feature</a>
  </p>
  
  <p>If you found this project helpful, please consider giving it a ⭐</p>
</div>
