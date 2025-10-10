import { motion } from 'framer-motion';
import { Calculator as CalculatorIcon } from 'lucide-react';
import { useCalculator } from '@/react-app/contexts/CalculatorContext';
import { Display } from './Display';
import { BasicButtonGrid } from './BasicButtonGrid';
import { ScientificButtonGrid } from './ScientificButtonGrid';
import { History } from './History';
import { Settings } from './Settings';

export function Calculator() {
  const { state } = useCalculator();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="bg-blue-500 p-2 rounded-lg mr-3">
            <CalculatorIcon size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              CalcFlow
            </h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {state.isScientificMode ? 'Scientific Mode' : 'Basic Mode'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <History />
          <Settings />
        </div>
      </div>

      {/* Calculator Body */}
      <motion.div
        className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-xl border border-neutral-200 dark:border-neutral-700"
        layout
        transition={{ duration: 0.3 }}
      >
        <Display />
        
        {state.isScientificMode && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ScientificButtonGrid />
          </motion.div>
        )}
        
        <BasicButtonGrid />
      </motion.div>

      {/* Keyboard Shortcuts Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="mt-4 text-center text-xs text-neutral-500 dark:text-neutral-400"
      >
        Use your keyboard for quick calculations • Press Esc to clear
      </motion.div>
    </motion.div>
  );
}
