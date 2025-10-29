import { Button } from '@/react-app/components/ui/Button';
import { useCalculator } from '@/react-app/contexts/CalculatorContext';

export function ScientificButtonGrid() {
  const { state, dispatch } = useCalculator();

  const handleScientificFunction = (func: string) => {
    dispatch({ type: 'SCIENTIFIC_FUNCTION', func });
  };

  const toggleAngleMode = () => {
    dispatch({ type: 'TOGGLE_ANGLE_MODE' });
  };

  return (
    <div className="space-y-3 mb-4">
      {/* Angle Mode Toggle */}
      <div className="flex justify-center">
        <Button 
          variant={state.angleMode === 'deg' ? 'operation' : 'default'} 
          onClick={toggleAngleMode}
          className="w-full"
          aria-label={`Angle mode: ${state.angleMode === 'deg' ? 'Degrees' : 'Radians'}`}
        >
          {state.angleMode === 'deg' ? 'DEG' : 'RAD'}
        </Button>
      </div>

      <div className="grid grid-cols-5 gap-3">
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
        <Button variant="function" onClick={() => handleScientificFunction('|x|')} aria-label="Absolute Value">
          |x|
        </Button>

        {/* Second Row - Inverse Trig Functions */}
        <Button variant="function" onClick={() => handleScientificFunction('asin')} aria-label="Arc Sine">
          sin⁻¹
        </Button>
        <Button variant="function" onClick={() => handleScientificFunction('acos')} aria-label="Arc Cosine">
          cos⁻¹
        </Button>
        <Button variant="function" onClick={() => handleScientificFunction('atan')} aria-label="Arc Tangent">
          tan⁻¹
        </Button>
        <Button variant="function" onClick={() => handleScientificFunction('cbrt')} aria-label="Cube Root">
          ∛x
        </Button>
        <Button variant="function" onClick={() => handleScientificFunction('x³')} aria-label="Cube">
          x³
        </Button>

        {/* Third Row - Logarithmic Functions */}
        <Button variant="function" onClick={() => handleScientificFunction('log')} aria-label="Logarithm base 10">
          log
        </Button>
        <Button variant="function" onClick={() => handleScientificFunction('ln')} aria-label="Natural logarithm">
          ln
        </Button>
        <Button variant="function" onClick={() => handleScientificFunction('10^x')} aria-label="10 to the power of x">
          10ˣ
        </Button>
        <Button variant="function" onClick={() => handleScientificFunction('e^x')} aria-label="e to the power of x">
          eˣ
        </Button>
        <Button variant="function" onClick={() => handleScientificFunction('1/x')} aria-label="Reciprocal">
          1/x
        </Button>

        {/* Fourth Row - Constants and Functions */}
        <Button variant="function" onClick={() => handleScientificFunction('π')} aria-label="Pi">
          π
        </Button>
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
    </div>
  );
}