import { motion } from 'framer-motion';
import { Copy } from 'lucide-react';
import { useCalculator } from '@/react-app/contexts/CalculatorContext';
import { Button } from '@/react-app/components/ui/Button';

export function Display() {
  const { state } = useCalculator();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(state.display);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="relative">
      <motion.div
        className="bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 mb-4 border border-neutral-200 dark:border-neutral-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <motion.div
            key={state.display}
            className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 font-mono truncate"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.1 }}
          >
            {state.display}
          </motion.div>
          <Button
            variant="default"
            size="sm"
            onClick={copyToClipboard}
            className="ml-4 opacity-60 hover:opacity-100"
            aria-label="Copy result to clipboard"
          >
            <Copy size={16} />
          </Button>
        </div>
        
        {state.operation && state.previousValue !== null && (
          <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 font-mono">
            {state.previousValue} {state.operation}
          </div>
        )}
        
        <div className="flex items-center gap-2 mt-2">
          {state.memory !== 0 && (
            <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
              M
            </div>
          )}
          {state.isScientificMode && (
            <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              {state.angleMode.toUpperCase()}
            </div>
          )}
          {state.lastResult !== null && (
            <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              ANS
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}