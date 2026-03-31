import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Tag, Trash2 } from 'lucide-react';
import { blogPosts } from '../data';
import { useCommunityPosts } from '../hooks/useCommunityPosts';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { posts: communityPosts, deletePost } = useCommunityPosts();

  const allPosts = [...blogPosts, ...communityPosts];
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">Post Not Found</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-16"
    >
      <div className="flex items-center justify-between mb-8">
        <Link
          to="/#blog"
          className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-cyan-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all posts
        </Link>
        {post.community && (
          <button
            onClick={() => {
              if (window.confirm('Delete this post?')) {
                deletePost(post.slug);
                navigate('/#blog');
              }
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 border border-red-200 dark:border-red-800/50 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Delete Post
          </button>
        )}
      </div>

      <div className="h-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 mb-8" />

      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-tight">
        {post.title}
      </h1>

      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
        <span className="inline-flex items-center gap-1.5">
          <User className="w-4 h-4" />
          {post.author}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="w-4 h-4" />
          {post.date}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          {post.readTime}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800"
          >
            <Tag className="w-3 h-3" />
            {tag}
          </span>
        ))}
      </div>

      <div className="glass rounded-xl p-6 sm:p-8">
        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:text-slate-900 dark:prose-headings:text-slate-100 prose-code:text-cyan-600 dark:prose-code:text-cyan-400 prose-pre:bg-slate-900 dark:prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-200 dark:prose-pre:border-slate-700">
          <MarkdownRenderer content={post.content} />
        </div>
      </div>
    </motion.article>
  );
}

function MarkdownRenderer({ content }) {
  const lines = content.split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code blocks
    if (line.startsWith('```')) {
      const lang = line.slice(3).trim();
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <pre key={elements.length} className="rounded-lg overflow-x-auto text-sm">
          <code className={lang ? `language-${lang}` : ''}>
            {codeLines.join('\n')}
          </code>
        </pre>
      );
      continue;
    }

    // Table
    if (line.includes('|') && line.trim().startsWith('|')) {
      const tableRows = [];
      while (i < lines.length && lines[i].includes('|') && lines[i].trim().startsWith('|')) {
        tableRows.push(lines[i]);
        i++;
      }
      if (tableRows.length >= 2) {
        const headerCells = tableRows[0].split('|').filter(c => c.trim()).map(c => c.trim());
        const bodyRows = tableRows.slice(2); // skip separator row
        elements.push(
          <div key={elements.length} className="overflow-x-auto my-4">
            <table className="min-w-full text-sm">
              <thead>
                <tr>
                  {headerCells.map((cell, ci) => (
                    <th key={ci} className="px-4 py-2 text-left font-semibold border-b border-slate-300 dark:border-slate-600">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, ri) => {
                  const cells = row.split('|').filter(c => c.trim()).map(c => c.trim());
                  return (
                    <tr key={ri} className="border-b border-slate-200 dark:border-slate-700">
                      {cells.map((cell, ci) => (
                        <td key={ci} className="px-4 py-2">{cell}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    // Headers
    if (line.startsWith('## ')) {
      elements.push(<h2 key={elements.length}>{line.slice(3)}</h2>);
      i++;
      continue;
    }
    if (line.startsWith('### ')) {
      elements.push(<h3 key={elements.length}>{line.slice(4)}</h3>);
      i++;
      continue;
    }

    // Unordered list items
    if (line.startsWith('- ')) {
      const listItems = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={elements.length}>
          {listItems.map((item, li) => (
            <li key={li}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list items
    if (/^\d+\.\s/.test(line)) {
      const listItems = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        listItems.push(lines[i].replace(/^\d+\.\s/, ''));
        i++;
      }
      elements.push(
        <ol key={elements.length}>
          {listItems.map((item, li) => (
            <li key={li}>{renderInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Empty line
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Paragraph
    elements.push(<p key={elements.length}>{renderInline(line)}</p>);
    i++;
  }

  return <>{elements}</>;
}

function renderInline(text) {
  // Bold + inline code
  const parts = [];
  const regex = /(\*\*(.+?)\*\*)|(`(.+?)`)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[1]) {
      parts.push(<strong key={match.index}>{match[2]}</strong>);
    } else if (match[3]) {
      parts.push(<code key={match.index}>{match[4]}</code>);
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}
