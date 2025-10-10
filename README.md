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
- [Local Development Setup](#local-development-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [Author](#author)

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

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yasirkhan/calcflow.git
   cd calcflow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```


3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to see CalcFlow in action!

### Additional Commands

- **Build for production**: `npm run build`
- **Run linting**: `npm run lint`
- **Type checking**: `npm run check`
- **Generate Cloudflare types**: `npm run cf-typegen`

---

## Usage

### Basic Mode
- Use number buttons or keyboard for input
- Perform basic arithmetic operations (+, -, ×, ÷)
- Access memory functions (MC, MR, M+, M-, MS)
- Clear calculations with CE (Clear Entry) or C (Clear All)

### Scientific Mode
- Toggle scientific mode in settings
- Access trigonometric functions (sin, cos, tan)
- Use logarithmic functions (log, ln)
- Calculate powers, square roots, and factorials
- Work with mathematical constants (π, e)

### Keyboard Shortcuts
- **Numbers**: 0-9 keys
- **Operations**: +, -, *, / keys
- **Equals**: Enter or = key
- **Clear**: Escape key
- **Decimal**: Period (.) key
- **Backspace**: Backspace key

### History & Settings
- View calculation history with timestamps
- Copy results to clipboard
- Switch between light and dark themes
- Adjust decimal precision settings
- Clear calculation history

---

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## Author

**Yasir Khan**

- Portfolio: [https://yasir.qzz.io](https://yasir.qzz.io)
- GitHub: [@yasirkhan](https://github.com/itsyasirkhandev)
- LinkedIn: [Connect with me](https://linkedin.com/in/connectyasir)

---

<div align="center">
  <p>Built with ❤️ using React, TypeScript, and Tailwind CSS</p>
  <p><strong>CalcFlow</strong> - Making calculations beautiful and intuitive</p>
</div>
