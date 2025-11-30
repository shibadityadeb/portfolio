import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
                  <h1 className="project-title modern">Project Title (Placeholder)</h1>
                  <div className="project-details modern">
                    <p className="modern">Short description — replace with your project details.</p>
                    <p className="modern">Coming soon</p>
                  </div>
                </div>
                <a href="#" data-placeholder="true" target="_blank" rel="noopener noreferrer">
                  <div 
                    className="project-image modern" 
                    style={{ backgroundImage: 'url("./assets/profile-placeholder.jpeg")' }} 
                    aria-label="Placeholder project cover"
                  ></div>
                </a>
                <hr className="modern" />
              </div>
            </div>
            
            <div className="project-container modern">
              <div className="project-card modern">
                <div className="project-row modern">
                  <h1 className="project-title modern">Project Title (Placeholder)</h1>
                  <div className="project-details modern">
                    <p className="modern">Short description — replace with your project details.</p>
                    <p className="modern">Coming soon</p>
                  </div>
                </div>
                <a href="#" data-placeholder="true" target="_blank" rel="noopener noreferrer">
                  <div 
                    className="project-image modern" 
                    style={{ backgroundImage: 'url("./assets/profile-placeholder.jpeg")' }} 
                    aria-label="Placeholder project cover"
                  ></div>
                </a>
                <hr className="modern" />
              </div>
            </div>
            
            <div className="project-container modern">
              <div className="project-card modern">
                <div className="project-row modern">
                  <h1 className="project-title modern">Project Title (Placeholder)</h1>
                  <div className="project-details modern">
                    <p className="modern">Short description — replace with your project details.</p>
                    <p className="modern">Coming soon</p>
                  </div>
                </div>
                <a href="#" data-placeholder="true" target="_blank" rel="noopener noreferrer">
                  <div 
                    className="project-image modern" 
                    style={{ backgroundImage: 'url("./assets/profile-placeholder.jpeg")' }} 
                    aria-label="Placeholder project cover"
                  ></div>
                </a>
                <hr className="modern" />
              </div>
            </div>
          </div>
          <p className="projects-guide modern">
            Add your projects by editing this section (home.html) and <code>projects.html</code> with titles, descriptions, links, and preview images.
          </p>
        </div>
        
        <section className="section center-grid-btn modern">
          <div className="btn-container modern">
            <div className="grid-after-btn modern">
              <div className="btn btn-normal modern">
                <a href="#" className="btn-click magnetic modern" onClick={handleViewMoreClick} aria-label="View More Work">
                  <div className="btn-fill modern"></div>
                  <span className="btn-text modern">
                    <span className="btn-text-inner modern">
                      More work
                      <span className="count-nr modern">5</span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;