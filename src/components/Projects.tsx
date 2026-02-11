import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OpenSourceContributions from './OpenSourceContributions';
import '../styles/OpenSourceContributions.css';

const Projects: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Project card animations
    document.querySelectorAll('.project-card.modern').forEach((card, index, cards) => {
      const image = card.querySelector('.project-image.modern') as HTMLElement;
      if (!image) return;

      const cardElement = card as HTMLElement;

      cardElement.addEventListener('mousemove', (e) => {
        const rect = cardElement.getBoundingClientRect();
        const x = e.clientX - rect.left - image.offsetWidth / 2;
        const y = e.clientY - rect.top - image.offsetHeight / 2;

        const clampedX = Math.max(0, Math.min(x, rect.width - image.offsetWidth));
        const clampedY = Math.max(0, Math.min(y, rect.height - image.offsetHeight));

        image.style.left = `${clampedX}px`;
        image.style.top = `${clampedY}px`;
      });

      cardElement.addEventListener('mouseleave', () => {
        image.style.opacity = '0';
        image.style.pointerEvents = 'none';
      });

      cardElement.addEventListener('mouseenter', () => {
        cards.forEach(otherCard => {
          const otherImage = otherCard.querySelector('.project-image.modern') as HTMLElement;
          if (otherImage !== image) {
            otherImage.style.opacity = '0';
            otherImage.style.pointerEvents = 'none';
          }
        });

        image.style.opacity = '1';
        image.style.pointerEvents = 'auto';
      });
    });

    // Intersection observer for project cards
    document.querySelectorAll('.project-card.modern').forEach(card => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            card.classList.add('visible');
          } else {
            card.classList.remove('visible');
          }
        });
      }, { threshold: 0.1 });
      observer.observe(card);
    });

    // Staggered animation delays
    const cards = document.querySelectorAll('.project-card.modern');
    cards.forEach((card, index) => {
      (card as HTMLElement).style.transitionDelay = `${index * 0.2}s`;
    });

    // View more button animation
    const viewMoreButton = document.querySelector('.btn-container.modern');
    if (viewMoreButton) {
      const buttonObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            viewMoreButton.classList.add('visible');
          } else {
            viewMoreButton.classList.remove('visible');
          }
        });
      }, { threshold: 0.1 });
      buttonObserver.observe(viewMoreButton);
    }
  }, []);

  const handleViewMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const overlay = document.querySelector('.transition-overlay');
    if (overlay) {
      overlay.classList.add('active');
      document.body.classList.add('transitioning');
      setTimeout(() => {
        navigate('/projects');
      }, 800);
    }
  };

  return (
    <>
      <div className="transition-overlay"></div>
      
      <div id="projects" className="relative modern">
        <div className="container modern">
          <h2 className="section-title modern">Selected Projects</h2>
          <div className="projects-list modern">
            <div className="project-container modern">
              <div className="project-card modern">
                <div className="project-row modern">
                  <h1 className="project-title modern">MindNest</h1>
                  <div className="project-details modern">
                    <p className="modern">A full-stack incubation & collaboration platform</p>
                    <p className="modern">Full Stack • Prisma ORM • OAuth • MySQL • WebSocket</p>
                  </div>
                </div>
                <a href="https://mind-nest-team-async.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <div 
                    className="project-image modern" 
                    style={{ backgroundImage: 'url("./assets/mindnest.png")' }} 
                    aria-label="MindNest project cover"
                  ></div>
                </a>
                <hr className="modern" />
              </div>
            </div>
            
            <div className="project-container modern">
              <div className="project-card modern">
                <div className="project-row modern">
                  <h1 className="project-title modern">GitHub Portfolio Analyzer</h1>
                  <div className="project-details modern">
                    <p className="modern">AI-powered GitHub profile analysis for recruiters</p>
                    <p className="modern">React • Node.js • LLM Integration • API</p>
                  </div>
                </div>
                <a href="https://git-hub-ai-analyzer.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <div 
                    className="project-image modern" 
                    style={{ backgroundImage: 'url("./assets/git-analyser.png")' }} 
                    aria-label="GitHub Portfolio Analyzer project cover"
                  ></div>
                </a>
                <hr className="modern" />
              </div>
            </div>
            
            <div className="project-container modern">
              <div className="project-card modern">
                <div className="project-row modern">
                  <h1 className="project-title modern">Resume Screening System</h1>
                  <div className="project-details modern">
                    <p className="modern">ML-powered recruitment tool with job category prediction</p>
                    <p className="modern">Python • Streamlit • scikit-learn</p>
                  </div>
                </div>
                <a href="https://resume-screeningapp.streamlit.app" target="_blank" rel="noopener noreferrer">
                  <div 
                    className="project-image modern" 
                    style={{ backgroundImage: 'url("./assets/resume-screening.png")' }} 
                    aria-label="Resume Screening System project cover"
                  ></div>
                </a>
                <hr className="modern" />
              </div>
            </div>
            
            <div className="project-container modern">
              <div className="project-card modern">
                <div className="project-row modern">
                  <h1 className="project-title modern">Scientific Research Trends Analysis</h1>
                  <div className="project-details modern">
                    <p className="modern">Data analytics project studying publication growth patterns</p>
                    <p className="modern">Apriori • KNN • Decision Tree • Statistics</p>
                  </div>
                </div>
                <a href="https://github.com/shibadityadeb/ResearchPaper_Analytics" target="_blank" rel="noopener noreferrer">
                  <div 
                    className="project-image modern" 
                    style={{ backgroundImage: 'url("./assets/scientific-research.png")' }} 
                    aria-label="Scientific Research Trends Analysis project cover"
                  ></div>
                </a>
                <hr className="modern" />
              </div>
            </div>
          </div>
          <OpenSourceContributions />
        </div>
        
        <section className="section center-grid-btn modern">
          <div className="btn-container modern">
            <div className="grid-after-btn modern">
              <div className="btn btn-normal modern">
                <button type="button" className="btn-click magnetic modern" onClick={handleViewMoreClick} aria-label="View More Work">
                  <div className="btn-fill modern"></div>
                  <span className="btn-text modern">
                    <span className="btn-text-inner modern">
                      More work
                      <span className="count-nr modern">4</span>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;