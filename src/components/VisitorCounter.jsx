import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import useVisitorCounter from '../hooks/useVisitorCounter';

export default function VisitorCounter() {
  const count = useVisitorCounter();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-sm"
    >
      <Eye className="w-3.5 h-3.5 text-cyan-500" />
      <motion.span
        key={count}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-slate-600 dark:text-slate-400 font-mono"
      >
        {count.toLocaleString()} visits
      </motion.span>
    </motion.div>
  );
}
