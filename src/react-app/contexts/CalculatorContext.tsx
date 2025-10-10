import { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';

interface CalculationEntry {
  id: string;
  expression: string;
  result: string;
  timestamp: Date;
}

interface CalculatorState {
  display: string;
  previousValue: number | null;
  operation: string | null;
  waitingForNewValue: boolean;
  memory: number;
  history: CalculationEntry[];
  isScientificMode: boolean;
  decimalPlaces: number;
}

type CalculatorAction =
  | { type: 'INPUT_DIGIT'; digit: string }
  | { type: 'INPUT_DECIMAL' }
  | { type: 'SET_OPERATION'; operation: string }
  | { type: 'CALCULATE' }
  | { type: 'CLEAR' }
  | { type: 'CLEAR_ENTRY' }
  | { type: 'BACKSPACE' }
  | { type: 'MEMORY_STORE' }
  | { type: 'MEMORY_RECALL' }
  | { type: 'MEMORY_CLEAR' }
  | { type: 'MEMORY_ADD' }
  | { type: 'MEMORY_SUBTRACT' }
  | { type: 'TOGGLE_MODE' }
  | { type: 'SET_DECIMAL_PLACES'; places: number }
  | { type: 'CLEAR_HISTORY' }
  | { type: 'SCIENTIFIC_FUNCTION'; func: string };

const initialState: CalculatorState = {
  display: '0',
  previousValue: null,
  operation: null,
  waitingForNewValue: false,
  memory: 0,
  history: [],
  isScientificMode: false,
  decimalPlaces: 10,
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
  if (isNaN(num) || !isFinite(num)) return 'Error';
  
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
    case '%': return (prev * current) / 100;
    case '^': return Math.pow(prev, current);
    default: return current;
  }
}

function scientificFunction(value: number, func: string): number {
  const radians = value * (Math.PI / 180); // Convert to radians for trig functions
  
  switch (func) {
    case 'sin': return Math.sin(radians);
    case 'cos': return Math.cos(radians);
    case 'tan': return Math.tan(radians);
    case 'log': return Math.log10(value);
    case 'ln': return Math.log(value);
    case 'sqrt': return Math.sqrt(value);
    case 'x²': return value * value;
    case '1/x': return 1 / value;
    case 'π': return Math.PI;
    case 'e': return Math.E;
    case '!': {
      if (value < 0 || value !== Math.floor(value)) return NaN;
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
      if (state.waitingForNewValue) {
        return {
          ...state,
          display: action.digit,
          waitingForNewValue: false,
        };
      }
      return {
        ...state,
        display: state.display === '0' ? action.digit : state.display + action.digit,
      };

    case 'INPUT_DECIMAL':
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

    case 'SET_OPERATION':
      const currentValue = parseFloat(state.display);
      
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
        const result = calculate(state.previousValue, currentValue, state.operation);
        const formattedResult = formatNumber(result, state.decimalPlaces);
        const expression = `${state.previousValue} ${state.operation} ${currentValue}`;
        
        return {
          ...state,
          display: formattedResult,
          previousValue: null,
          operation: null,
          waitingForNewValue: true,
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
      if (state.waitingForNewValue) return state;
      const newDisplay = state.display.length > 1 ? state.display.slice(0, -1) : '0';
      return {
        ...state,
        display: newDisplay,
      };

    case 'MEMORY_STORE':
      return {
        ...state,
        memory: parseFloat(state.display),
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
      return {
        ...state,
        memory: state.memory + parseFloat(state.display),
      };

    case 'MEMORY_SUBTRACT':
      return {
        ...state,
        memory: state.memory - parseFloat(state.display),
      };

    case 'TOGGLE_MODE':
      return {
        ...state,
        isScientificMode: !state.isScientificMode,
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

    case 'SCIENTIFIC_FUNCTION':
      const value = parseFloat(state.display);
      const result = scientificFunction(value, action.func);
      const formattedResult = formatNumber(result, state.decimalPlaces);
      const expression = `${action.func}(${value})`;
      
      return {
        ...state,
        display: formattedResult,
        waitingForNewValue: true,
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
