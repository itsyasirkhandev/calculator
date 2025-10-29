import { Button } from '@/react-app/components/ui/Button';
import { useCalculator } from '@/react-app/contexts/CalculatorContext';
import { RotateCcw, Delete } from 'lucide-react';

export function BasicButtonGrid() {
  const { state, dispatch } = useCalculator();

  const handleDigit = (digit: string) => {
    dispatch({ type: 'INPUT_DIGIT', digit });
  };

  const handleOperation = (operation: string) => {
    dispatch({ type: 'SET_OPERATION', operation });
  };

  const handleDecimal = () => {
    dispatch({ type: 'INPUT_DECIMAL' });
  };

  const handleEquals = () => {
    dispatch({ type: 'CALCULATE' });
  };

  const handleClear = () => {
    dispatch({ type: 'CLEAR' });
  };

  const handleClearEntry = () => {
    dispatch({ type: 'CLEAR_ENTRY' });
  };

  const handleBackspace = () => {
    dispatch({ type: 'BACKSPACE' });
  };

  const handleToggleSign = () => {
    dispatch({ type: 'TOGGLE_SIGN' });
  };

  const handleMemoryStore = () => {
    dispatch({ type: 'MEMORY_STORE' });
  };

  const handleMemoryRecall = () => {
    dispatch({ type: 'MEMORY_RECALL' });
  };

  const handleMemoryClear = () => {
    dispatch({ type: 'MEMORY_CLEAR' });
  };

  const handleMemoryAdd = () => {
    dispatch({ type: 'MEMORY_ADD' });
  };

  const handleMemorySubtract = () => {
    dispatch({ type: 'MEMORY_SUBTRACT' });
  };

  const handleAns = () => {
    dispatch({ type: 'USE_LAST_RESULT' });
  };

  return (
    <div className="grid grid-cols-5 gap-3">
      {/* Memory Functions Row */}
      <Button variant="memory" onClick={handleMemoryClear} aria-label="Memory Clear">
        MC
      </Button>
      <Button variant="memory" onClick={handleMemoryRecall} aria-label="Memory Recall">
        MR
      </Button>
      <Button variant="memory" onClick={handleMemoryAdd} aria-label="Memory Add">
        M+
      </Button>
      <Button variant="memory" onClick={handleMemorySubtract} aria-label="Memory Subtract">
        M-
      </Button>
      <Button variant="memory" onClick={handleMemoryStore} aria-label="Memory Store">
        MS
      </Button>

      {/* First Row */}
      <Button variant="operation" onClick={() => handleOperation('%')} aria-label="Percentage">
        %
      </Button>
      <Button variant="default" onClick={handleClearEntry} aria-label="Clear Entry">
        CE
      </Button>
      <Button variant="default" onClick={handleClear} aria-label="Clear All">
        <RotateCcw size={20} />
      </Button>
      <Button variant="default" onClick={handleBackspace} aria-label="Backspace">
        <Delete size={20} />
      </Button>
      <Button variant="operation" onClick={() => handleOperation('÷')} aria-label="Divide">
        ÷
      </Button>

      {/* Second Row */}
      <Button variant="number" onClick={() => handleDigit('7')} aria-label="Seven">
        7
      </Button>
      <Button variant="number" onClick={() => handleDigit('8')} aria-label="Eight">
        8
      </Button>
      <Button variant="number" onClick={() => handleDigit('9')} aria-label="Nine">
        9
      </Button>
      <Button variant="operation" onClick={() => handleOperation('×')} aria-label="Multiply">
        ×
      </Button>
      <Button variant="operation" onClick={() => handleOperation('^')} aria-label="Power">
        x^y
      </Button>

      {/* Third Row */}
      <Button variant="number" onClick={() => handleDigit('4')} aria-label="Four">
        4
      </Button>
      <Button variant="number" onClick={() => handleDigit('5')} aria-label="Five">
        5
      </Button>
      <Button variant="number" onClick={() => handleDigit('6')} aria-label="Six">
        6
      </Button>
      <Button variant="operation" onClick={() => handleOperation('-')} aria-label="Subtract">
        −
      </Button>
      <Button variant="function" onClick={() => dispatch({ type: 'SCIENTIFIC_FUNCTION', func: 'sqrt' })} aria-label="Square Root">
        √x
      </Button>

      {/* Fourth Row */}
      <Button variant="number" onClick={() => handleDigit('1')} aria-label="One">
        1
      </Button>
      <Button variant="number" onClick={() => handleDigit('2')} aria-label="Two">
        2
      </Button>
      <Button variant="number" onClick={() => handleDigit('3')} aria-label="Three">
        3
      </Button>
      <Button variant="operation" onClick={() => handleOperation('+')} aria-label="Add">
        +
      </Button>
      <Button variant="function" onClick={() => dispatch({ type: 'SCIENTIFIC_FUNCTION', func: 'x²' })} aria-label="Square">
        x²
      </Button>

      {/* Fifth Row */}
      <Button variant="number" onClick={handleToggleSign} aria-label="Toggle Sign">
        +/−
      </Button>
      <Button variant="number" onClick={() => handleDigit('0')} aria-label="Zero">
        0
      </Button>
      <Button variant="number" onClick={handleDecimal} aria-label="Decimal Point">
        .
      </Button>
      <Button 
        variant="function" 
        onClick={handleAns} 
        disabled={state.lastResult === null}
        aria-label="Use Last Result"
      >
        ANS
      </Button>
      <Button variant="equals" onClick={handleEquals} aria-label="Equals">
        =
      </Button>
    </div>
  );
}