import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight, Plus, Users, Trash2, ExternalLink } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import AddPostModal from '../components/AddPostModal';
import { blogPosts } from '../data';
import { useCommunityPosts } from '../hooks/useCommunityPosts';

export default function Blog() {
  const [showAddPost, setShowAddPost] = useState(false);
  const { posts: communityPosts, addPost, deletePost } = useCommunityPosts();

  const allPosts = [...blogPosts, ...communityPosts];

  return (
    <SectionWrapper id="blog">
      <div className="text-center mb-12">
        <h2 className="section-title">
          Latest <span className="gradient-text">Blog Posts</span>
        </h2>
        <p className="section-subtitle">
          Thoughts on DevOps, SRE, infrastructure, and engineering culture.
        </p>
        <button
          onClick={() => setShowAddPost(true)}
          className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
        >
          <Plus className="w-4 h-4" />
          Add Post
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {allPosts.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="glass rounded-xl overflow-hidden card-hover group"
          >
            {post.externalUrl ? (
              <a href={post.externalUrl} target="_blank" rel="noopener noreferrer">
                <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500" />
                <div className="p-5">
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                    {post.community && (
                      <span className="inline-flex items-center gap-1 text-cyan-500">
                        <Users className="w-3.5 h-3.5" />
                        Community
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 text-violet-500">
                      <ExternalLink className="w-3.5 h-3.5" />
                      External
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-cyan-500 transition-colors flex items-start gap-1">
                    {post.title}
                    <ArrowUpRight className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {post.community && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          if (window.confirm('Delete this post?')) deletePost(post.slug);
                        }}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                        title="Delete post"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </a>
            ) : (
            <Link to={`/blog/${post.slug}`}>
              <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500" />
              <div className="p-5">
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                  {post.community && (
                    <span className="inline-flex items-center gap-1 text-cyan-500">
                      <Users className="w-3.5 h-3.5" />
                      Community
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-cyan-500 transition-colors flex items-start gap-1">
                  {post.title}
                  <ArrowUpRight className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {post.community && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (window.confirm('Delete this post?')) deletePost(post.slug);
                      }}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                      title="Delete post"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </Link>
            )}
          </motion.article>
        ))}
      </div>

      <AddPostModal
        isOpen={showAddPost}
        onClose={() => setShowAddPost(false)}
        onSubmit={addPost}
      />
    </SectionWrapper>
  );
}
