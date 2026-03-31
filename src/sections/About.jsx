import { motion } from 'framer-motion';
import { Cloud, Container, GitBranch, Activity, Server, Shield } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { aboutSummary, skillCategories } from '../data';

const iconMap = { Cloud, Container, GitBranch, Activity, Server, Shield };

const colorMap = {
  cyan: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 text-cyan-500',
  blue: 'from-blue-500/20 to-blue-500/5 border-blue-500/30 text-blue-500',
  violet: 'from-violet-500/20 to-violet-500/5 border-violet-500/30 text-violet-500',
  emerald: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 text-emerald-500',
  amber: 'from-amber-500/20 to-amber-500/5 border-amber-500/30 text-amber-500',
  rose: 'from-rose-500/20 to-rose-500/5 border-rose-500/30 text-rose-500',
};

const badgeColor = {
  cyan: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
  blue: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  violet: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  amber: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
  rose: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
};

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="text-center mb-12">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle">{aboutSummary}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat, i) => {
          const Icon = iconMap[cat.icon] || Server;
          const colors = colorMap[cat.color] || colorMap.cyan;
          const badge = badgeColor[cat.color] || badgeColor.cyan;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`rounded-xl p-5 bg-gradient-to-br ${colors} border backdrop-blur-sm card-hover`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${colors}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-200">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium border ${badge}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
