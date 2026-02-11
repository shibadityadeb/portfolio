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
    } else if (section === 'experience') {
      navigate('/experience');
    } else if (section === 'resume') {
      window.open('./assets/resume.pdf', '_blank');
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
              <button type="button" className="nav-toggle project w-inline-block" onClick={() => handleNavigation('project')}>
                <div className="text-nav-toggle">Projects</div>
              </button>
              <button type="button" className="nav-toggle experience w-inline-block" onClick={() => handleNavigation('experience')}>
                <div className="text-nav-toggle">Experience</div>
              </button>
              <button type="button" className="nav-toggle about w-inline-block" onClick={() => handleNavigation('about')}>
                <div className="text-nav-toggle">About</div>
              </button>
              <button type="button" className="nav-toggle resume w-inline-block" onClick={() => handleNavigation('resume')}>
                <div className="text-nav-toggle">Resume</div>
              </button>
              <div className="nav-indicator-pill"></div>
            </div>
          </div>

          <div className="nav-right-wrapper">
            <button type="button" className="nav-menu-button w-inline-block" onClick={toggleMobileMenu}>
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
            </button>

            <div 
              className={`mobile-popup-menu ${mobileMenuOpen ? 'show' : ''}`}
              style={{ display: mobileMenuOpen ? 'flex' : 'none' }}
            >
              <a href="https://github.com/shibadityadeb" target="_blank" rel="noopener noreferrer" className="popup-menu-item w-inline-block">
                <div className="text-popup-menu">GitHub</div>
                <img src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644ca61c76573b18898f41f8_icon-open.svg" loading="lazy" alt="External link icon" className="icon-popup-external" />
              </a>
              <a href="https://www.linkedin.com/in/shibadityadeb/" rel="noopener noreferrer" target="_blank" className="popup-menu-item w-inline-block">
                <div className="text-popup-menu">LinkedIn</div>
                <img src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644ca61c76573b18898f41f8_icon-open.svg" loading="lazy" alt="External link icon" className="icon-popup-external" />
              </a>
              <a href="https://www.kaggle.com/debshibaditya" target="_blank" rel="noopener noreferrer" className="popup-menu-item w-inline-block">
                <div className="text-popup-menu">Kaggle</div>
                <img src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644ca61c76573b18898f41f8_icon-open.svg" loading="lazy" alt="External link icon" className="icon-popup-external" />
              </a>
              <a href="https://leetcode.com/u/Shibaditya_deb" target="_blank" rel="noopener noreferrer" className="popup-menu-item w-inline-block">
                <div className="text-popup-menu">LeetCode</div>
                <img src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644ca61c76573b18898f41f8_icon-open.svg" loading="lazy" alt="External link icon" className="icon-popup-external" />
              </a>
            </div>

            <div className="chip-socials-wrapper">
              <a href="https://github.com/shibadityadeb" aria-label="GitHub profile" target="_blank" rel="noopener noreferrer" className="chip-socials">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" loading="lazy" style={{ filter: 'invert(1)' }} alt="GitHub" className="icon" />
                <div className="text-socialnav">GitHub</div>
                <img src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg" loading="lazy" alt="Arrow" className="icon-external" />
              </a>
              <a href="https://www.linkedin.com/in/shibadityadeb/" aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer" className="chip-socials">
                <i className="fab fa-linkedin"></i>
                <div className="text-socialnav">LinkedIn</div>
                <img src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg" loading="lazy" alt="Arrow" className="icon-external" />
              </a>
              <a href="https://www.kaggle.com/debshibaditya" aria-label="Kaggle profile" target="_blank" rel="noopener noreferrer" className="chip-socials">
                <svg width="18" height="18" viewBox="0 0 320 512" fill="currentColor" style={{ filter: 'invert(1)' }} className="icon">
                  <path d="M304.2 501.5L158.4 320.3 298.2 185c2.4-2.4 1.7-6.5-1.2-8.1-2.4-1.3-5.4-.7-7.2 1.2L154.3 313.7 35.9 187.2c-1.8-1.9-4.8-2.5-7.2-1.2-2.9 1.6-3.6 5.7-1.2 8.1l139.8 135.3L21.8 501.5c-1.3 2.1-.7 4.9 1.3 6.3 2.7 1.9 6.4 1.1 8.1-1.8L176 342.3 320.8 506c1.7 2.9 5.4 3.7 8.1 1.8 2-1.4 2.6-4.2 1.3-6.3z"/>
                </svg>
                <div className="text-socialnav">Kaggle</div>
                <img src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg" loading="lazy" alt="Arrow" className="icon-external" />
              </a>
              <a href="https://leetcode.com/u/Shibaditya_deb" aria-label="LeetCode profile" target="_blank" rel="noopener noreferrer" className="chip-socials">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ filter: 'invert(1)' }} className="icon">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.381 1.38 1.38 0 0 0 1.38 1.381 1.38 1.38 0 0 0 1.381-1.381 1.38 1.38 0 0 0-1.381-1.381z"/>
                </svg>
                <div className="text-socialnav">LeetCode</div>
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