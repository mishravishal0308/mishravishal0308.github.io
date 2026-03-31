import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe, Network, ArrowRightLeft, Monitor, Cpu, Layers,
  Database, Zap, GitBranch, Activity, FileText, Lock
} from 'lucide-react';
import { architectureNodes } from '../data';

const iconMap = {
  Globe, Network, ArrowRightLeft, Monitor, Cpu, Layers,
  Database, Zap, GitBranch, Activity, FileText, Lock,
};

const groupConfig = {
  edge: { title: 'Edge / Network', color: 'cyan', bg: 'from-cyan-500/10 to-cyan-500/5', border: 'border-cyan-500/30' },
  k8s: { title: 'Kubernetes Cluster', color: 'blue', bg: 'from-blue-500/10 to-blue-500/5', border: 'border-blue-500/30' },
  data: { title: 'Data Layer', color: 'violet', bg: 'from-violet-500/10 to-violet-500/5', border: 'border-violet-500/30' },
  devops: { title: 'DevOps / Platform', color: 'emerald', bg: 'from-emerald-500/10 to-emerald-500/5', border: 'border-emerald-500/30' },
};

const colorVariants = {
  cyan: 'text-cyan-500 bg-cyan-500/20 border-cyan-500/30',
  blue: 'text-blue-500 bg-blue-500/20 border-blue-500/30',
  violet: 'text-violet-500 bg-violet-500/20 border-violet-500/30',
  emerald: 'text-emerald-500 bg-emerald-500/20 border-emerald-500/30',
};

export default function CloudArchitecture() {
  const [hoveredNode, setHoveredNode] = useState(null);

  const groups = Object.entries(groupConfig);

  return (
    <div className="space-y-6">
      {/* Flow direction arrow */}
      <div className="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
        <span>Request Flow</span>
        <ArrowRightLeft className="w-4 h-4" />
        <span>Data Flow</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {groups.map(([groupKey, config], gi) => {
          const nodes = architectureNodes.filter(n => n.group === groupKey);
          return (
            <motion.div
              key={groupKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className={`rounded-xl p-4 sm:p-5 bg-gradient-to-br ${config.bg} border ${config.border} backdrop-blur-sm`}
            >
              <h4 className={`text-sm font-semibold text-${config.color}-500 mb-4 flex items-center gap-2`}>
                <div className={`w-2 h-2 rounded-full bg-${config.color}-500`} />
                {config.title}
              </h4>
              <div className="space-y-2">
                {nodes.map((node) => {
                  const Icon = iconMap[node.icon] || Cpu;
                  const colors = colorVariants[config.color];
                  return (
                    <motion.div
                      key={node.id}
                      whileHover={{ scale: 1.02 }}
                      onMouseEnter={() => setHoveredNode(node.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                      className={`relative flex items-center gap-3 p-3 rounded-lg border transition-all cursor-default ${
                        hoveredNode === node.id
                          ? colors
                          : 'border-slate-200 dark:border-slate-700/50 bg-white/50 dark:bg-slate-800/30'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        hoveredNode === node.id
                          ? colors
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-slate-800 dark:text-slate-200 truncate">{node.label}</p>
                        <p className={`text-xs transition-all ${
                          hoveredNode === node.id
                            ? 'text-slate-600 dark:text-slate-300'
                            : 'text-slate-400 dark:text-slate-500'
                        }`}>
                          {node.description}
                        </p>
                      </div>
                      {/* Live status dot */}
                      <div className="ml-auto flex-shrink-0">
                        <div className={`w-2 h-2 rounded-full ${
                          hoveredNode === node.id
                            ? `bg-${config.color}-500 animate-pulse`
                            : 'bg-emerald-500'
                        }`} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Connection legend */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-slate-500 dark:text-slate-400 pt-2">
        {groups.map(([key, config]) => (
          <div key={key} className="flex items-center gap-1.5">
            <div className={`w-3 h-3 rounded border bg-${config.color}-500/20 border-${config.color}-500/50`} />
            <span>{config.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
