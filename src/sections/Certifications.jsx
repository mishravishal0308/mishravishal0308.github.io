import { motion } from 'framer-motion';
import { Award, Download } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { certifications } from '../data';

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <div className="text-center mb-12">
        <h2 className="section-title">
          <span className="gradient-text">Certifications</span>
        </h2>
        <p className="section-subtitle">Industry-recognized credentials validating cloud & DevOps expertise.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group glass rounded-xl p-5 card-hover"
          >
            <div className="flex items-start gap-4">
              <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}>
                <span className="text-white font-bold text-sm">{cert.abbr}</span>
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-sm leading-tight mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-cyan-500" />
                    <span className="text-xs font-medium text-cyan-600 dark:text-cyan-400">{cert.year}</span>
                  </div>
                  {cert.certUrl && (
                    <a
                      href={cert.certUrl}
                      download
                      className="flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                      title={`Download ${cert.title} certificate`}
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Cert</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
