// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to Innomatics Research Labs</h1>
      <p>We provide innovative solutions using AI, ML, and software engineering.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
};

export default Home;
