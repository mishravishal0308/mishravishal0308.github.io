import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Box, ShieldCheck, Rocket, CheckCircle2, Loader2, XCircle, ChevronRight } from 'lucide-react';

const stages = [
  { name: 'Code', icon: Code2, description: 'Push to main branch' },
  { name: 'Build', icon: Box, description: 'Docker image build' },
  { name: 'Test', icon: ShieldCheck, description: 'Integration tests' },
  { name: 'Deploy', icon: Rocket, description: 'K8s rolling update' },
];

const logMessages = {
  Code: ['Commit abc1234 pushed to main', 'Webhook triggered pipeline run #247'],
  Build: ['Building Docker image...', 'Layer 1/8: FROM node:18-alpine', 'Layer 8/8: CMD ["node", "server.js"]', 'Image built: registry/app:v2.4.1'],
  Test: ['Running 142 test suites...', '✓ Unit tests passed (89/89)', '✓ Integration tests passed (53/53)', 'Code coverage: 94.2%'],
  Deploy: ['Deploying to production cluster...', 'Rolling update: 0/3 pods ready', 'Rolling update: 2/3 pods ready', 'Rolling update: 3/3 pods ready ✓', 'Health checks passing'],
};

export default function PipelineAnimation() {
  const [activeStage, setActiveStage] = useState(-1);
  const [stageStatuses, setStageStatuses] = useState(stages.map(() => 'pending'));
  const [logs, setLogs] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const runPipeline = () => {
    setIsRunning(true);
    setActiveStage(-1);
    setStageStatuses(stages.map(() => 'pending'));
    setLogs([]);

    let stageIndex = 0;

    const runStage = () => {
      if (stageIndex >= stages.length) {
        setIsRunning(false);
        return;
      }

      setActiveStage(stageIndex);
      setStageStatuses(prev => prev.map((s, i) => (i === stageIndex ? 'running' : s)));

      const stageMessages = logMessages[stages[stageIndex].name];
      let msgIndex = 0;

      const logInterval = setInterval(() => {
        if (msgIndex < stageMessages.length) {
          setLogs(prev => [...prev, { stage: stages[stageIndex].name, text: stageMessages[msgIndex] }]);
          msgIndex++;
        } else {
          clearInterval(logInterval);
          setStageStatuses(prev => prev.map((s, i) => (i === stageIndex ? 'success' : s)));
          stageIndex++;
          setTimeout(runStage, 500);
        }
      }, 600);
    };

    setTimeout(runStage, 300);
  };

  useEffect(() => {
    const timer = setTimeout(runPipeline, 1000);
    return () => clearTimeout(timer);
  }, []);

  const StatusIcon = ({ status }) => {
    if (status === 'running') return <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />;
    if (status === 'success') return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
    if (status === 'failed') return <XCircle className="w-4 h-4 text-red-400" />;
    return <div className="w-4 h-4 rounded-full border-2 border-slate-600" />;
  };

  const getStageColor = (status) => {
    if (status === 'running') return 'border-cyan-500 bg-cyan-500/10 shadow-lg shadow-cyan-500/20';
    if (status === 'success') return 'border-emerald-500 bg-emerald-500/10';
    return 'border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50';
  };

  return (
    <div className="space-y-8">
      {/* Pipeline stages */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0 justify-center">
        {stages.map((stage, i) => {
          const Icon = stage.icon;
          return (
            <div key={stage.name} className="flex items-center">
              <motion.div
                animate={stageStatuses[i] === 'running' ? { scale: [1, 1.03, 1] } : {}}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className={`relative flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 rounded-xl border-2 transition-all duration-500 ${getStageColor(stageStatuses[i])}`}
              >
                <Icon className={`w-5 h-5 ${
                  stageStatuses[i] === 'running' ? 'text-cyan-400' :
                  stageStatuses[i] === 'success' ? 'text-emerald-400' :
                  'text-slate-500'
                }`} />
                <div>
                  <p className={`text-sm font-semibold ${
                    stageStatuses[i] === 'running' ? 'text-cyan-400' :
                    stageStatuses[i] === 'success' ? 'text-emerald-400' :
                    'text-slate-500 dark:text-slate-400'
                  }`}>{stage.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 hidden sm:block">{stage.description}</p>
                </div>
                <StatusIcon status={stageStatuses[i]} />
              </motion.div>

              {i < stages.length - 1 && (
                <div className="hidden sm:flex items-center mx-1">
                  <div className={`w-8 h-0.5 transition-colors duration-500 ${
                    stageStatuses[i] === 'success' ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-700'
                  }`}>
                    {stageStatuses[i] === 'success' && stageStatuses[i + 1] === 'running' && (
                      <div className="h-full pipeline-flow rounded" />
                    )}
                  </div>
                  <ChevronRight className={`w-4 h-4 ${
                    stageStatuses[i] === 'success' ? 'text-emerald-500' : 'text-slate-400 dark:text-slate-600'
                  }`} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Logs panel */}
      <div className="rounded-xl glass overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700/50">
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Pipeline Logs</span>
          <button
            onClick={runPipeline}
            disabled={isRunning}
            className="text-xs px-3 py-1 rounded-md bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {isRunning ? 'Running...' : '▶ Re-run'}
          </button>
        </div>
        <div className="p-4 font-mono text-xs h-40 overflow-y-auto bg-slate-50 dark:bg-slate-900/50">
          <AnimatePresence>
            {logs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="py-0.5"
              >
                <span className="text-slate-500">[{log.stage}]</span>{' '}
                <span className="text-slate-700 dark:text-slate-300">{log.text}</span>
              </motion.div>
            ))}
          </AnimatePresence>
          {logs.length === 0 && (
            <span className="text-slate-400">Waiting to start pipeline...</span>
          )}
        </div>
      </div>
    </div>
  );
}
