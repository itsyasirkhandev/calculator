import { motion } from 'framer-motion';
import { Calculator } from '@/react-app/components/Calculator/Calculator';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-neutral-50 to-purple-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 py-8 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <main role="main" aria-label="CalcFlow Calculator Application">
          <Calculator />
        </main>
        
        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            CalcFlow - Modern calculator for students and professionals
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </motion.footer>
      </motion.div>
    </div>
  );
}
