import { motion, AnimatePresence } from 'framer-motion';
import { History as HistoryIcon, Trash2, Copy, Download } from 'lucide-react';
import { useCalculator } from '@/react-app/contexts/CalculatorContext';
import { Button } from '@/react-app/components/ui/Button';
import * as Dialog from '@radix-ui/react-dialog';

export function History() {
  const { state, dispatch } = useCalculator();

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const clearHistory = () => {
    dispatch({ type: 'CLEAR_HISTORY' });
  };

  const exportHistory = () => {
    const historyData = JSON.stringify(state.history, null, 2);
    const blob = new Blob([historyData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `calculator-history-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="default" size="sm" aria-label="View calculation history">
          <HistoryIcon size={18} />
          <span className="ml-2 hidden sm:inline">History</span>
          {state.history.length > 0 && (
            <span className="ml-1 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              {state.history.length}
            </span>
          )}
        </Button>
      </Dialog.Trigger>
      
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 bg-white dark:bg-neutral-900 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg border border-neutral-200 dark:border-neutral-700">
          
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              Calculation History
            </Dialog.Title>
            <div className="flex items-center gap-2">
              <Button
                variant="default"
                size="sm"
                onClick={exportHistory}
                disabled={state.history.length === 0}
                aria-label="Export history"
              >
                <Download size={16} />
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={clearHistory}
                disabled={state.history.length === 0}
                aria-label="Clear all history"
              >
                <Trash2 size={16} />
              </Button>
              <Dialog.Close asChild>
                <Button variant="default" size="sm" aria-label="Close history">
                  ×
                </Button>
              </Dialog.Close>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {state.history.length === 0 ? (
              <div className="text-center py-8 text-neutral-500 dark:text-neutral-400">
                No calculations yet
              </div>
            ) : (
              <div className="space-y-2">
                <AnimatePresence>
                  {state.history.map((entry) => (
                    <motion.div
                      key={entry.id}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-neutral-600 dark:text-neutral-400 font-mono truncate">
                            {entry.expression}
                          </div>
                          <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 font-mono truncate">
                            = {entry.result}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 ml-3">
                          <span className="text-xs text-neutral-500 dark:text-neutral-400">
                            {formatTime(entry.timestamp)}
                          </span>
                          <Button
                            variant="default"
                            size="sm"
                            onClick={() => copyToClipboard(entry.result)}
                            className="opacity-60 hover:opacity-100"
                            aria-label={`Copy result ${entry.result}`}
                          >
                            <Copy size={14} />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}