import { Button } from '@/react-app/components/ui/Button';
import { useCalculator } from '@/react-app/contexts/CalculatorContext';

export function ScientificButtonGrid() {
  const { dispatch } = useCalculator();

  const handleScientificFunction = (func: string) => {
    dispatch({ type: 'SCIENTIFIC_FUNCTION', func });
  };

  return (
    <div className="grid grid-cols-4 gap-3 mb-4">
      {/* First Row - Trigonometric Functions */}
      <Button variant="function" onClick={() => handleScientificFunction('sin')} aria-label="Sine">
        sin
      </Button>
      <Button variant="function" onClick={() => handleScientificFunction('cos')} aria-label="Cosine">
        cos
      </Button>
      <Button variant="function" onClick={() => handleScientificFunction('tan')} aria-label="Tangent">
        tan
      </Button>
      <Button variant="function" onClick={() => handleScientificFunction('!')} aria-label="Factorial">
        n!
      </Button>

      {/* Second Row - Logarithmic Functions */}
      <Button variant="function" onClick={() => handleScientificFunction('log')} aria-label="Logarithm base 10">
        log
      </Button>
      <Button variant="function" onClick={() => handleScientificFunction('ln')} aria-label="Natural logarithm">
        ln
      </Button>
      <Button variant="function" onClick={() => handleScientificFunction('1/x')} aria-label="Reciprocal">
        1/x
      </Button>
      <Button variant="function" onClick={() => handleScientificFunction('π')} aria-label="Pi">
        π
      </Button>

      {/* Third Row - Constants and Functions */}
      <Button variant="function" onClick={() => handleScientificFunction('e')} aria-label="Euler's number">
        e
      </Button>
      <Button variant="function" onClick={() => dispatch({ type: 'SET_OPERATION', operation: '^' })} aria-label="Power">
        x^y
      </Button>
      <Button variant="function" onClick={() => handleScientificFunction('x²')} aria-label="Square">
        x²
      </Button>
      <Button variant="function" onClick={() => handleScientificFunction('sqrt')} aria-label="Square root">
        √x
      </Button>
    </div>
  );
}
