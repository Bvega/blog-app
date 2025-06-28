import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../lib/posts';

const BlogIndex: React.FC = () => {
  return (
    <div className="blog-index">
      <h1>Blog Posts</h1>
      <div className="posts-grid">
        {blogPosts.map((post) => (
          <article key={post.id} className="post-card">
            <h2>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="post-meta">
              By {post.author} on {new Date(post.date).toLocaleDateString()}
            </p>
            <p className="post-excerpt">
              {post.content.substring(0, 150)}...
            </p>
            <Link to={`/blog/${post.slug}`} className="read-more">
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogIndex;