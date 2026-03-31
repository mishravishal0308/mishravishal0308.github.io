import { useState, useEffect } from 'react';

const STORAGE_KEY = 'community-blog-posts';

export function useCommunityPosts() {
  const [posts, setPosts] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  const addPost = (post) => {
    const slug = post.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .slice(0, 80);

    const newPost = {
      ...post,
      slug,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      readTime: post.externalUrl
        ? 'External'
        : `${Math.max(1, Math.ceil(post.content.split(/\s+/).length / 200))} min read`,
      community: true,
    };

    setPosts((prev) => [newPost, ...prev]);
    return slug;
  };

  const deletePost = (slug) => {
    setPosts((prev) => prev.filter((p) => p.slug !== slug));
  };

  return { posts, addPost, deletePost };
}
