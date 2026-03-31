import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding pt-24">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-slate-600 dark:text-slate-400">Available for opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
        >
          Hi, I&apos;m{' '}
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500" />
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-600 dark:text-slate-300">
            {personalInfo.role}
          </p>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-500" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="btn-primary inline-flex items-center gap-2">
            View Projects
            <ChevronRight className="w-4 h-4" />
          </a>
          <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
          <a
            href={personalInfo.resumeUrl}
            download
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-5 h-5 text-slate-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
