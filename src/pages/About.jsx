// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1>About Innomatics Research Labs</h1>
      <p>
        Innomatics Research Labs is a technology-driven company focused on delivering solutions
        that enhance business processes and foster innovation through artificial intelligence and machine learning.
      </p>
      <p>
        Our team of skilled engineers and data scientists work on cutting-edge projects to create practical, scalable solutions.
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
};

export default About;
