import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import '../styles/Experience.css';

const ExperiencePage: React.FC = () => {
  useEffect(() => {
    document.body.classList.add("page-loaded");
  }, []);

  return (
    <div className="experience-body">
      <div className="gradient"></div>
      <Navbar />
      
      <div className="section-experience">
        <div className="overline-info-wrapper">
          <div className="overline-wrapper">
            <div className="icon-section-dot"></div>
            <div className="text-projectpage-overline">MY EXPERIENCE</div>
          </div>
          <div className="text-hero info-hero">
            Every role has shaped my path, building skills and perspectives that drive <span className="text-info-hero-serif">meaningful impact.</span>
          </div>
        </div>
        
        <Experience />
      </div>
      
      <Footer />
    </div>
  );
};

export default ExperiencePage;
