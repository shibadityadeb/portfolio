import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Quote from '../components/Quote';
import Projects from '../components/Projects';
import TechStack from '../components/TechStack';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="body">
        <div className="gradient"></div>
        <main className="site-main">
          <Navbar />
          <Hero />
          <Quote />
          <Projects />
          <TechStack />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;