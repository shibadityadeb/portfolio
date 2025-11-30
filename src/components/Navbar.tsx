import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (section: string) => {
    if (section === 'project') {
      navigate('/projects');
    } else if (section === 'about') {
      navigate('/about');
    } else if (section === 'resume') {
      window.open('./assets/resume-instructions.txt', '_blank');
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogoClick = () => {
    navigate('/home');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const popupMenu = document.querySelector('.mobile-popup-menu');
      const menuButton = document.querySelector('.nav-menu-button');
      if (popupMenu && menuButton && 
          !popupMenu.contains(event.target as Node) && 
          !menuButton.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return (
    <nav>
      <div className="section-nav">
        <div className="nav-bar">
          <div className="nav-left-wrapper">
            <div className="logo-text" onClick={handleLogoClick}>
              <div className="text-logo">Shibaditya Deb</div>
              <div className="text-underlogo">Full-Stack & AI/ML Builder</div>
            </div>
          </div>
          
          <div className="nav-pill-wrapper">
            <div className="nav-indicator-glow"></div>
            <div className="nav-pill">
              <a href="#" className="nav-toggle project w-inline-block" onClick={() => handleNavigation('project')}>
                <div className="text-nav-toggle">Projects</div>
              </a>
              <a href="#" className="nav-toggle about w-inline-block" onClick={() => handleNavigation('about')}>
                <div className="text-nav-toggle">About</div>
              </a>
              <a href="#" className="nav-toggle resume w-inline-block" onClick={() => handleNavigation('resume')}>
                <div className="text-nav-toggle">Resume</div>
              </a>
              <div className="nav-indicator-pill"></div>
            </div>
          </div>

          <div className="nav-right-wrapper">
            <a href="#" className="nav-menu-button w-inline-block" onClick={toggleMobileMenu}>
              <img 
                src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644c8981f87a7036b4c7fa64_icon-%40.svg" 
                loading="lazy" 
                alt="attherate-icon" 
                className="icon-contact" 
                style={{ opacity: mobileMenuOpen ? 0 : 1 }}
              />
              <img 
                src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/645a01ff46a1cf3d85d90049_icon-close.svg" 
                loading="lazy" 
                alt="close-icon" 
                className="icon-contact-close" 
                style={{ opacity: mobileMenuOpen ? 1 : 0 }}
              />
            </a>

            <div 
              className={`mobile-popup-menu ${mobileMenuOpen ? 'show' : ''}`}
              style={{ display: mobileMenuOpen ? 'flex' : 'none' }}
            >
              <a href="#" data-placeholder="true" target="_blank" rel="noopener noreferrer" className="popup-menu-item w-inline-block">
                <div className="text-popup-menu">GitHub</div>
                <img src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644ca61c76573b18898f41f8_icon-open.svg" loading="lazy" alt="External link icon" className="icon-popup-external" />
              </a>
              <a href="#" data-placeholder="true" rel="noopener noreferrer" target="_blank" className="popup-menu-item w-inline-block">
                <div className="text-popup-menu">LinkedIn</div>
                <img src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644ca61c76573b18898f41f8_icon-open.svg" loading="lazy" alt="External link icon" className="icon-popup-external" />
              </a>
            </div>

            <div className="chip-socials-wrapper">
              <a href="#" data-placeholder="true" aria-label="GitHub profile" target="_blank" rel="noopener noreferrer" className="chip-socials">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" loading="lazy" style={{ filter: 'invert(1)' }} alt="GitHub" className="icon" />
                <div className="text-socialnav">GitHub</div>
                <img src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg" loading="lazy" alt="Arrow" className="icon-external" />
              </a>
              <a href="#" data-placeholder="true" aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer" className="chip-socials">
                <i className="fab fa-linkedin"></i>
                <div className="text-socialnav">LinkedIn</div>
                <img src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg" loading="lazy" alt="Arrow" className="icon-external" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;