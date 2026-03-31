import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, Copy, Check, Paperclip, X } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { personalInfo } from '../data';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [attachment, setAttachment] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY);
      formData.append('subject', `Portfolio Contact: ${form.name}`);
      formData.append('from_name', form.name);
      formData.append('email', form.email);
      formData.append('message', form.message);
      if (attachment) {
        formData.append('attachment', attachment);
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
        setAttachment(null);
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch {
      setError('Network error. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-12">
        <h2 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subtitle">
          Have a project in mind or just want to connect? Let&apos;s talk.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6 sm:p-8"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full py-10 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                <Check className="w-7 h-7 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                Message Sent!
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-sm"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Attachment <span className="text-slate-400 font-normal">(optional, max 5MB)</span>
                </label>
                {attachment ? (
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm">
                    <Paperclip className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 truncate">{attachment.name}</span>
                    <span className="text-slate-400 text-xs flex-shrink-0">({(attachment.size / 1024).toFixed(0)} KB)</span>
                    <button
                      type="button"
                      onClick={() => setAttachment(null)}
                      className="ml-auto p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <label className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-dashed border-slate-300 dark:border-slate-600 text-sm text-slate-500 dark:text-slate-400 cursor-pointer hover:border-cyan-500 hover:text-cyan-500 transition-colors">
                    <Paperclip className="w-4 h-4" />
                    <span>Attach a file</span>
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.txt,.zip"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file && file.size > 5 * 1024 * 1024) {
                          setError('File size must be under 5MB.');
                          return;
                        }
                        if (file) setAttachment(file);
                      }}
                    />
                  </label>
                )}
              </div>
              {error && (
                <p className="text-sm text-red-500 bg-red-50 dark:bg-red-950/30 rounded-lg px-3 py-2">{error}</p>
              )}
              <button
                type="submit"
                disabled={sending}
                className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Email card */}
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-cyan-500" />
              Email
            </h3>
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-600 dark:text-slate-300 font-mono">
                {personalInfo.email}
              </span>
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 hover:text-cyan-500"
                aria-label="Copy email"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            {copied && (
              <p className="text-xs text-emerald-500 mt-1">Copied to clipboard!</p>
            )}
          </div>

          {/* Social links */}
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
              Connect
            </h3>
            <div className="space-y-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                  <Github className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-cyan-500 transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">GitHub</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">@mishravishalkumar</p>
                </div>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                  <Linkedin className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-cyan-500 transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">LinkedIn</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">in/mishravishalkumar</p>
                </div>
              </a>
            </div>
          </div>

          {/* Quick info */}
          <div className="glass rounded-xl p-6">
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              I&apos;m open to freelance projects, consulting, and full-time opportunities in DevOps, SRE, and Cloud Engineering. Feel free to reach out!
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
