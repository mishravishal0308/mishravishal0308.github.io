import { motion } from 'framer-motion';
import { Briefcase, ChevronRight } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { experiences } from '../data';

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="text-center mb-12">
        <h2 className="section-title">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-subtitle">
          A timeline of impact — building reliable infrastructure and accelerating delivery.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-violet-500 opacity-30" />

        {experiences.map((exp, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative flex items-start mb-10 ${
                isLeft ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot on timeline */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-500 ring-4 ring-white dark:ring-slate-950 z-10 mt-6" />

              {/* Spacer for mobile */}
              <div className="w-10 flex-shrink-0 md:hidden" />

              {/* Card */}
              <div className={`flex-1 ${isLeft ? 'md:pr-10' : 'md:pl-10'}`}>
                <div className="glass rounded-xl p-5 card-hover">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                    <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                      {exp.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-0.5">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <ChevronRight className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty half for desktop alignment */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
