import React from 'react';

const Admin: React.FC = () => {
  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin area! This page is only accessible to authenticated users.</p>
      <div className="admin-stats">
        <h2>Blog Statistics</h2>
        <p>Total Posts: 4</p>
        <p>Total Authors: 4</p>
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Admin;