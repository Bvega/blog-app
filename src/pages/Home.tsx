import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Our Blog</h1>
      <p>Explore our latest articles on React development and best practices.</p>
      <Link to="/blog" className="cta-button">
        View All Posts
      </Link>
    </div>
  );
};

export default Home;