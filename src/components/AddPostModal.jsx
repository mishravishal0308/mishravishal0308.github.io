import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Plus, PenLine, Link as LinkIcon } from 'lucide-react';

export default function AddPostModal({ isOpen, onClose, onSubmit }) {
  const [mode, setMode] = useState('write'); // 'write' or 'link'
  const [form, setForm] = useState({
    title: '',
    author: '',
    description: '',
    tags: '',
    content: '',
    externalUrl: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.author.trim()) return;

    if (mode === 'write' && !form.content.trim()) return;
    if (mode === 'link' && !form.externalUrl.trim()) return;

    const post = {
      title: form.title.trim(),
      author: form.author.trim(),
      description: form.description.trim() || (mode === 'write' ? form.content.slice(0, 120) + '...' : 'External article'),
      tags: form.tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
    };

    if (mode === 'link') {
      post.externalUrl = form.externalUrl.trim();
      post.content = '';
    } else {
      post.content = form.content.trim();
    }

    onSubmit(post);
    setForm({ title: '', author: '', description: '', tags: '', content: '', externalUrl: '' });
    setMode('write');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto glass rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                  <Plus className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                  Contribute a Post
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              {/* Mode toggle */}
              <div className="flex rounded-lg bg-slate-100 dark:bg-slate-800 p-1 gap-1">
                <button
                  type="button"
                  onClick={() => setMode('write')}
                  className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    mode === 'write'
                      ? 'bg-white dark:bg-slate-700 text-cyan-600 dark:text-cyan-400 shadow-sm'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  <PenLine className="w-3.5 h-3.5" />
                  Write Post
                </button>
                <button
                  type="button"
                  onClick={() => setMode('link')}
                  className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    mode === 'link'
                      ? 'bg-white dark:bg-slate-700 text-cyan-600 dark:text-cyan-400 shadow-sm'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  <LinkIcon className="w-3.5 h-3.5" />
                  Link Article
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Title *
                </label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                  maxLength={120}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  placeholder="e.g. Getting Started with Kubernetes"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Author *
                </label>
                <input
                  name="author"
                  value={form.author}
                  onChange={handleChange}
                  required
                  maxLength={60}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Short Description
                </label>
                <input
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  maxLength={200}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  placeholder="A brief summary of your post"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Tags (comma-separated)
                </label>
                <input
                  name="tags"
                  value={form.tags}
                  onChange={handleChange}
                  maxLength={100}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  placeholder="e.g. Kubernetes, Docker, CI/CD"
                />
              </div>

              {mode === 'link' ? (
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Article URL *
                  </label>
                  <input
                    name="externalUrl"
                    type="url"
                    value={form.externalUrl}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    placeholder="https://medium.com/@user/my-article"
                  />
                  <p className="mt-1 text-xs text-slate-400">Medium, Dev.to, Hashnode, or any article link</p>
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Content * (Markdown supported)
                  </label>
                  <textarea
                    name="content"
                    value={form.content}
                    onChange={handleChange}
                    required
                    rows={12}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-mono focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-y"
                    placeholder={"## Your Heading\n\nWrite your blog post content here using Markdown...\n\n- Bullet points work\n- **Bold text** and `inline code` too\n\n```yaml\n# Code blocks are supported\napiVersion: v1\nkind: Pod\n```"}
                  />
                </div>
              )}

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25"
                >
                  <Send className="w-4 h-4" />
                  Publish Post
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
