import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostBySlug } from '../lib/posts';

const BlogPost: React.FC = () => {
  // Get the slug from the URL parameters
  const { slug } = useParams<{ slug: string }>();
  
  // Find the post using the slug
  const post = slug ? getPostBySlug(slug) : undefined;

  // Handle case where post is not found
  if (!post) {
    return (
      <div className="post-not-found">
        <h1>Post Not Found</h1>
        <p>Sorry, we couldn't find the post you're looking for.</p>
        <Link to="/blog">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="blog-post">
      <Link to="/blog" className="back-link">← Back to Blog</Link>
      <h1>{post.title}</h1>
      <p className="post-meta">
        By {post.author} on {new Date(post.date).toLocaleDateString()}
      </p>
      <div className="post-content">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph.trim()}</p>
        ))}
      </div>
    </article>
  );
};

export default BlogPost;