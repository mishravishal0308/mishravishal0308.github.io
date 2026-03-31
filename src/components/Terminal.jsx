import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { terminalCommands } from '../data';

function TypingText({ text, speed = 30, onComplete }) {
  const [displayed, setDisplayed] = useState('');
  const indexRef = useRef(0);

  useEffect(() => {
    setDisplayed('');
    indexRef.current = 0;
    const interval = setInterval(() => {
      indexRef.current += 1;
      setDisplayed(text.slice(0, indexRef.current));
      if (indexRef.current >= text.length) {
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <>{displayed}</>;
}

export default function Terminal() {
  const [currentCmd, setCurrentCmd] = useState(0);
  const [phase, setPhase] = useState('typing'); // 'typing' | 'output' | 'waiting'
  const [completedCmds, setCompletedCmds] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [completedCmds, phase]);

  const handleCommandTyped = () => {
    setPhase('output');
    setTimeout(() => {
      setCompletedCmds(prev => [...prev, terminalCommands[currentCmd]]);
      if (currentCmd < terminalCommands.length - 1) {
        setCurrentCmd(prev => prev + 1);
        setPhase('typing');
      } else {
        setPhase('waiting');
      }
    }, 400);
  };

  const handleRestart = () => {
    setCompletedCmds([]);
    setCurrentCmd(0);
    setPhase('typing');
  };

  return (
    <div className="rounded-xl overflow-hidden glass border border-slate-200 dark:border-slate-700/50 shadow-2xl dark:shadow-cyan-500/5">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700/50">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
        </div>
        <span className="text-xs text-slate-500 dark:text-slate-400 font-mono ml-2">
          vishal@devops ~ %
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-4 sm:p-6 font-mono text-sm leading-relaxed h-80 overflow-y-auto bg-slate-50 dark:bg-slate-900/50">
        {/* Completed commands */}
        {completedCmds.map((cmd, i) => (
          <div key={i} className="mb-4">
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">$</span>
              <span className="text-slate-800 dark:text-slate-200">{cmd.command}</span>
            </div>
            <pre className="mt-1 text-cyan-600 dark:text-cyan-400 whitespace-pre-wrap text-xs sm:text-sm">
              {cmd.output}
            </pre>
          </div>
        ))}

        {/* Currently typing command */}
        {phase === 'typing' && currentCmd < terminalCommands.length && (
          <div className="flex items-center gap-2">
            <span className="text-emerald-500">$</span>
            <span className="text-slate-800 dark:text-slate-200">
              <TypingText
                text={terminalCommands[currentCmd].command}
                speed={50}
                onComplete={handleCommandTyped}
              />
            </span>
            <span className="cursor-blink text-cyan-500">▋</span>
          </div>
        )}

        {/* Output phase */}
        {phase === 'output' && (
          <div className="flex items-center gap-2">
            <span className="text-emerald-500">$</span>
            <span className="text-slate-800 dark:text-slate-200">
              {terminalCommands[currentCmd].command}
            </span>
          </div>
        )}

        {/* Waiting cursor after all done */}
        {phase === 'waiting' && (
          <div className="mt-4">
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">$</span>
              <span className="cursor-blink text-cyan-500">▋</span>
            </div>
            <button
              onClick={handleRestart}
              className="mt-3 text-xs text-slate-500 hover:text-cyan-500 transition-colors"
            >
              ↻ Replay
            </button>
          </div>
        )}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
