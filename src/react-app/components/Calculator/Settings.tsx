import { Settings as SettingsIcon, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/react-app/contexts/ThemeContext';
import { useCalculator } from '@/react-app/contexts/CalculatorContext';
import { Button } from '@/react-app/components/ui/Button';
import * as Dialog from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';

export function Settings() {
  const { theme, toggleTheme } = useTheme();
  const { state, dispatch } = useCalculator();

  const decimalOptions = [2, 4, 6, 8, 10, 12];

  const toggleMode = () => {
    dispatch({ type: 'TOGGLE_MODE' });
  };

  const setDecimalPlaces = (places: number) => {
    dispatch({ type: 'SET_DECIMAL_PLACES', places });
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="default" size="sm" aria-label="Open settings">
          <SettingsIcon size={18} />
          <span className="ml-2 hidden sm:inline">Settings</span>
        </Button>
      </Dialog.Trigger>
      
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 bg-white dark:bg-neutral-900 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg border border-neutral-200 dark:border-neutral-700">
          
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              Settings
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="default" size="sm" aria-label="Close settings">
                ×
              </Button>
            </Dialog.Close>
          </div>

          <Tabs.Root defaultValue="display" className="w-full">
            <Tabs.List className="grid w-full grid-cols-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg p-1">
              <Tabs.Trigger
                value="display"
                className="px-3 py-1.5 text-sm font-medium rounded-md transition-all text-neutral-600 hover:text-neutral-900 data-[state=active]:bg-white data-[state=active]:text-neutral-900 data-[state=active]:shadow-sm dark:text-neutral-400 dark:hover:text-neutral-100 dark:data-[state=active]:bg-neutral-700 dark:data-[state=active]:text-neutral-100"
              >
                Display
              </Tabs.Trigger>
              <Tabs.Trigger
                value="calculator"
                className="px-3 py-1.5 text-sm font-medium rounded-md transition-all text-neutral-600 hover:text-neutral-900 data-[state=active]:bg-white data-[state=active]:text-neutral-900 data-[state=active]:shadow-sm dark:text-neutral-400 dark:hover:text-neutral-100 dark:data-[state=active]:bg-neutral-700 dark:data-[state=active]:text-neutral-100"
              >
                Calculator
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="display" className="space-y-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Theme
                </label>
                <Button
                  variant="default"
                  onClick={toggleTheme}
                  className="w-full justify-start"
                  aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                >
                  {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                  <span className="ml-2">
                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                  </span>
                </Button>
              </div>
            </Tabs.Content>

            <Tabs.Content value="calculator" className="space-y-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Calculator Mode
                </label>
                <Button
                  variant="default"
                  onClick={toggleMode}
                  className="w-full justify-start"
                  aria-label={`Switch to ${state.isScientificMode ? 'basic' : 'scientific'} mode`}
                >
                  <span>
                    {state.isScientificMode ? 'Switch to Basic' : 'Switch to Scientific'}
                  </span>
                </Button>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Decimal Places
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {decimalOptions.map((places) => (
                    <Button
                      key={places}
                      variant={state.decimalPlaces === places ? 'operation' : 'default'}
                      size="sm"
                      onClick={() => setDecimalPlaces(places)}
                      aria-label={`Set decimal places to ${places}`}
                    >
                      {places}
                    </Button>
                  ))}
                </div>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
