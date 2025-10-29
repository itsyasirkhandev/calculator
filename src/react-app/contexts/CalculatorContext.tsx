import { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { CalculatorState, CalculatorAction, CalculationEntry } from '@/shared/types';

const initialState: CalculatorState = {
  display: '0',
  previousValue: null,
  operation: null,
  waitingForNewValue: false,
  memory: 0,
  history: [],
  isScientificMode: false,
  decimalPlaces: 10,
  angleMode: 'deg',
  lastResult: null,
};

function addToHistory(state: CalculatorState, expression: string, result: string): CalculationEntry[] {
  const entry: CalculationEntry = {
    id: Date.now().toString(),
    expression,
    result,
    timestamp: new Date(),
  };
  return [entry, ...state.history.slice(0, 99)]; // Keep last 100 calculations
}

function formatNumber(num: number, decimalPlaces: number): string {
  if (isNaN(num)) return 'Error';
  if (!isFinite(num)) return num > 0 ? 'Infinity' : '-Infinity';
  
  const rounded = Number(num.toFixed(decimalPlaces));
  if (rounded === 0) return '0';
  
  // Remove trailing zeros after decimal point
  return rounded.toString();
}

function calculate(prev: number, current: number, operation: string): number {
  switch (operation) {
    case '+': return prev + current;
    case '-': return prev - current;
    case '×': return prev * current;
    case '÷': return current !== 0 ? prev / current : NaN;
    case '%': return prev * (current / 100);
    case '^': return Math.pow(prev, current);
    default: return current;
  }
}

function scientificFunction(value: number, func: string, angleMode: 'deg' | 'rad'): number {
  const radians = angleMode === 'deg' ? value * (Math.PI / 180) : value;
  
  switch (func) {
    case 'sin': return Math.sin(radians);
    case 'cos': return Math.cos(radians);
    case 'tan': return Math.tan(radians);
    case 'asin': return angleMode === 'deg' ? Math.asin(value) * (180 / Math.PI) : Math.asin(value);
    case 'acos': return angleMode === 'deg' ? Math.acos(value) * (180 / Math.PI) : Math.acos(value);
    case 'atan': return angleMode === 'deg' ? Math.atan(value) * (180 / Math.PI) : Math.atan(value);
    case 'log': return Math.log10(value);
    case 'ln': return Math.log(value);
    case 'sqrt': return Math.sqrt(value);
    case 'cbrt': return Math.cbrt(value);
    case 'x²': return value * value;
    case 'x³': return value * value * value;
    case '1/x': return 1 / value;
    case '10^x': return Math.pow(10, value);
    case 'e^x': return Math.exp(value);
    case 'π': return Math.PI;
    case 'e': return Math.E;
    case '|x|': return Math.abs(value);
    case '!': {
      if (value < 0 || value !== Math.floor(value)) return NaN;
      if (value > 170) return Infinity; // Prevent overflow
      let result = 1;
      for (let i = 2; i <= value; i++) {
        result *= i;
      }
      return result;
    }
    default: return value;
  }
}

function calculatorReducer(state: CalculatorState, action: CalculatorAction): CalculatorState {
  switch (action.type) {
    case 'INPUT_DIGIT':
      if (state.display === 'Error' || state.display === 'Infinity' || state.display === '-Infinity') {
        return {
          ...state,
          display: action.digit,
          waitingForNewValue: false,
        };
      }
      if (state.waitingForNewValue) {
        return {
          ...state,
          display: action.digit,
          waitingForNewValue: false,
        };
      }
      if (state.display.length >= 15) return state; // Limit display length
      return {
        ...state,
        display: state.display === '0' ? action.digit : state.display + action.digit,
      };

    case 'INPUT_DECIMAL':
      if (state.display === 'Error' || state.display === 'Infinity' || state.display === '-Infinity') {
        return {
          ...state,
          display: '0.',
          waitingForNewValue: false,
        };
      }
      if (state.waitingForNewValue) {
        return {
          ...state,
          display: '0.',
          waitingForNewValue: false,
        };
      }
      if (state.display.includes('.')) return state;
      return {
        ...state,
        display: state.display + '.',
      };

    case 'TOGGLE_SIGN':
      if (state.display === 'Error' || state.display === 'Infinity' || state.display === '-Infinity') {
        return state;
      }
      const currentNum = parseFloat(state.display);
      return {
        ...state,
        display: (-currentNum).toString(),
      };

    case 'SET_OPERATION':
      const currentValue = parseFloat(state.display);
      
      if (isNaN(currentValue)) {
        return state;
      }
      
      if (state.previousValue === null) {
        return {
          ...state,
          previousValue: currentValue,
          operation: action.operation,
          waitingForNewValue: true,
        };
      }
      
      if (state.operation && !state.waitingForNewValue) {
        const result = calculate(state.previousValue, currentValue, state.operation);
        const formattedResult = formatNumber(result, state.decimalPlaces);
        const expression = `${state.previousValue} ${state.operation} ${currentValue}`;
        
        return {
          ...state,
          display: formattedResult,
          previousValue: result,
          operation: action.operation,
          waitingForNewValue: true,
          lastResult: result,
          history: addToHistory(state, expression, formattedResult),
        };
      }
      
      return {
        ...state,
        operation: action.operation,
        waitingForNewValue: true,
      };

    case 'CALCULATE':
      if (state.operation && state.previousValue !== null && !state.waitingForNewValue) {
        const currentValue = parseFloat(state.display);
        if (isNaN(currentValue)) return state;
        
        const result = calculate(state.previousValue, currentValue, state.operation);
        const formattedResult = formatNumber(result, state.decimalPlaces);
        const expression = `${state.previousValue} ${state.operation} ${currentValue}`;
        
        return {
          ...state,
          display: formattedResult,
          previousValue: null,
          operation: null,
          waitingForNewValue: true,
          lastResult: result,
          history: addToHistory(state, expression, formattedResult),
        };
      }
      return state;

    case 'CLEAR':
      return {
        ...state,
        display: '0',
        previousValue: null,
        operation: null,
        waitingForNewValue: false,
      };

    case 'CLEAR_ENTRY':
      return {
        ...state,
        display: '0',
        waitingForNewValue: false,
      };

    case 'BACKSPACE':
      if (state.waitingForNewValue || state.display === 'Error' || state.display === 'Infinity' || state.display === '-Infinity') {
        return state;
      }
      const newDisplay = state.display.length > 1 ? state.display.slice(0, -1) : '0';
      return {
        ...state,
        display: newDisplay === '-' ? '0' : newDisplay,
      };

    case 'MEMORY_STORE':
      const storeValue = parseFloat(state.display);
      if (isNaN(storeValue)) return state;
      return {
        ...state,
        memory: storeValue,
      };

    case 'MEMORY_RECALL':
      return {
        ...state,
        display: state.memory.toString(),
        waitingForNewValue: true,
      };

    case 'MEMORY_CLEAR':
      return {
        ...state,
        memory: 0,
      };

    case 'MEMORY_ADD':
      const addValue = parseFloat(state.display);
      if (isNaN(addValue)) return state;
      return {
        ...state,
        memory: state.memory + addValue,
      };

    case 'MEMORY_SUBTRACT':
      const subtractValue = parseFloat(state.display);
      if (isNaN(subtractValue)) return state;
      return {
        ...state,
        memory: state.memory - subtractValue,
      };

    case 'TOGGLE_MODE':
      return {
        ...state,
        isScientificMode: !state.isScientificMode,
      };

    case 'TOGGLE_ANGLE_MODE':
      return {
        ...state,
        angleMode: state.angleMode === 'deg' ? 'rad' : 'deg',
      };

    case 'SET_DECIMAL_PLACES':
      return {
        ...state,
        decimalPlaces: action.places,
      };

    case 'CLEAR_HISTORY':
      return {
        ...state,
        history: [],
      };

    case 'USE_LAST_RESULT':
      if (state.lastResult === null) return state;
      return {
        ...state,
        display: state.lastResult.toString(),
        waitingForNewValue: true,
      };

    case 'SCIENTIFIC_FUNCTION':
      const value = parseFloat(state.display);
      if (isNaN(value)) return state;
      
      const result = scientificFunction(value, action.func, state.angleMode);
      const formattedResult = formatNumber(result, state.decimalPlaces);
      const expression = `${action.func}(${value})`;
      
      return {
        ...state,
        display: formattedResult,
        waitingForNewValue: true,
        lastResult: result,
        history: addToHistory(state, expression, formattedResult),
      };

    default:
      return state;
  }
}

interface CalculatorContextType {
  state: CalculatorState;
  dispatch: React.Dispatch<CalculatorAction>;
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export function CalculatorProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  // Keyboard event handler
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const { key } = event;
      
      if (key >= '0' && key <= '9') {
        dispatch({ type: 'INPUT_DIGIT', digit: key });
      } else if (key === '.') {
        dispatch({ type: 'INPUT_DECIMAL' });
      } else if (key === '+') {
        dispatch({ type: 'SET_OPERATION', operation: '+' });
      } else if (key === '-') {
        dispatch({ type: 'SET_OPERATION', operation: '-' });
      } else if (key === '*') {
        dispatch({ type: 'SET_OPERATION', operation: '×' });
      } else if (key === '/') {
        event.preventDefault();
        dispatch({ type: 'SET_OPERATION', operation: '÷' });
      } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        dispatch({ type: 'CALCULATE' });
      } else if (key === 'Escape') {
        dispatch({ type: 'CLEAR' });
      } else if (key === 'Backspace') {
        dispatch({ type: 'BACKSPACE' });
      } else if (key === '%') {
        dispatch({ type: 'SET_OPERATION', operation: '%' });
      } else if (key === '^') {
        dispatch({ type: 'SET_OPERATION', operation: '^' });
      } else if (key.toLowerCase() === 'a') {
        dispatch({ type: 'USE_LAST_RESULT' });
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  );
}

export function useCalculator() {
  const context = useContext(CalculatorContext);
  if (context === undefined) {
    throw new Error('useCalculator must be used within a CalculatorProvider');
  }
  return context;
}