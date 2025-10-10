import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ThemeProvider } from "@/react-app/contexts/ThemeContext";
import { CalculatorProvider } from "@/react-app/contexts/CalculatorContext";
import HomePage from "@/react-app/pages/Home";

export default function App() {
  return (
    <ThemeProvider>
      <CalculatorProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </CalculatorProvider>
    </ThemeProvider>
  );
}
