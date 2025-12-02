import React, { useEffect } from 'react';

const Footer: React.FC = () => {
  useEffect(() => {
    const isElementInView = (el: Element) => {
      const rect = el.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    };

    const revealOnScroll = () => {
      const footerCols = document.querySelectorAll('.footer-col');
      const footerHeadings = document.querySelectorAll('.footer-heading');
      const footerTop = document.querySelector('.footer-top');
      const footerBottom = document.querySelector('.footer-bottom');
      const nameBanner = document.querySelector('.footer-name-banner');

      footerCols.forEach((col) => {
        if (isElementInView(col)) {
          col.classList.add('visible');
        }
      });

      footerHeadings.forEach((heading) => {
        if (isElementInView(heading)) {
          heading.classList.add('visible');
        }
      });

      if (footerTop && isElementInView(footerTop)) {
        footerTop.classList.add('visible');
      }

      if (footerBottom && isElementInView(footerBottom)) {
        footerBottom.classList.add('visible');
      }

      if (nameBanner && isElementInView(nameBanner)) {
        nameBanner.classList.add('visible');
      }
    };

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
    revealOnScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', revealOnScroll);
      window.removeEventListener('load', revealOnScroll);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container-large">
        <div className="footer-top">
          <div className="footer-text-size-large-space">
            Let's build something <span className="footer-highlight">extraordinary</span> together.
          </div>
        </div>
        
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-heading">Navigation</div>
            <a href="/about" className="footer-link">About</a>
            <a href="/projects" className="footer-link">Projects</a>
            <a href="./assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="footer-link">Resume</a>
          </div>
          
          <div className="footer-col">
            <div className="footer-heading">Connect</div>
            <a href="mailto:shibadityadeb.official@gmail.com" className="footer-link">Email</a>
            <a href="https://github.com/shibadityadeb" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
            <a href="https://www.linkedin.com/in/shibadityadeb/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            <a href="https://www.kaggle.com/debshibaditya" target="_blank" rel="noopener noreferrer" className="footer-link">Kaggle</a>
            <a href="https://leetcode.com/u/Shibaditya_deb" target="_blank" rel="noopener noreferrer" className="footer-link">LeetCode</a>
          </div>
        </div>
        
        <div className="footer-name-banner">SHIBADITYA</div>
        
        <div className="footer-bottom">
          <div>© 2025 Shibaditya Deb. All rights reserved.</div>
        </div>
      </div>
      

    </footer>
  );
};

export default Footer;