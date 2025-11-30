import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Quote from '../components/Quote';
import Projects from '../components/Projects';
import TechStack from '../components/TechStack';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="body">
      <div className="gradient"></div>
      <Navbar />
      <Hero />
      <Quote />
      <Projects />
      <TechStack />
      <Footer />
    </div>
  );
};

export default Home;