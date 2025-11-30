import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

const ProjectsPage: React.FC = () => {
  useEffect(() => {
    document.body.classList.add("page-loaded");
  }, []);

  return (
    <div className="project-body">
      <div className="gradient"></div>
      <Navbar />
      
      <div className="section-projects">
        <div className="overline-info-wrapper">
          <div className="overline-wrapper">
            <div className="icon-section-dot"></div>
            <div className="text-projectpage-overline">MY PROJECTS</div>
          </div>
          <div className="text-hero info-hero">
            Every project here represents a moment of discovery, where challenges sparked <span className="text-info-hero-serif"> innovative solutions.</span>
          </div>
        </div>
        
        <div className="container-projects">
          <div className="project-card-outline">
            <div className="glare-item-top outer-edge"></div>
            <a href="#" data-placeholder="true" target="_blank" className="project-card w-inline-block">
              <div className="glare-item-top inner-edge"></div>
              <div className="projectcard-top">
                <div className="projectcard-title-row">
                  <div className="text-projectcard-title">Project Title (Placeholder)</div>
                  <img 
                    src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/641284285486aaab07feafaa_icon-arrow-project.svg" 
                    alt="Arrow" 
                    className="icon-projectcard-arrow"
                  />
                </div>
                <div className="text-projectcard-description">
                  <span className="text-projectcard-description-company">Short description — replace with your project details.</span> — Coming soon.
                </div>
              </div>
              <img 
                src="./assets/profile-placeholder.jpeg" 
                alt="Placeholder project thumbnail" 
                className="project-thumbnail"
              />
              <div className="project-card-colour stadiabt"></div>
            </a>
          </div>

          <div className="project-card-outline">
            <div className="glare-item-top outer-edge"></div>
            <a href="#" data-placeholder="true" className="project-card w-inline-block">
              <div className="glare-item-top inner-edge"></div>
              <div className="projectcard-top">
                <div className="projectcard-title-row">
                  <div className="text-projectcard-title">Project Title (Placeholder)</div>
                  <img 
                    src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/641284285486aaab07feafaa_icon-arrow-project.svg" 
                    alt="Arrow" 
                    className="icon-projectcard-arrow"
                  />
                </div>
                <div className="text-projectcard-description">
                  <span className="text-projectcard-description-company">Short description — replace with your project details.</span> — Coming soon.
                </div>
              </div>
              <img 
                src="./assets/profile-placeholder.jpeg" 
                alt="Placeholder project thumbnail" 
                className="project-thumbnail"
              />
              <div className="project-card-colour thn"></div>
            </a>
          </div>

          <div className="project-card-outline">
            <div className="glare-item-top outer-edge"></div>
            <a href="#" data-placeholder="true" target="_blank" className="project-card w-inline-block">
              <div className="glare-item-top inner-edge"></div>
              <div className="projectcard-top">
                <div className="projectcard-title-row">
                  <div className="text-projectcard-title">Project Title (Placeholder)</div>
                  <img 
                    src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/641284285486aaab07feafaa_icon-arrow-project.svg" 
                    alt="Arrow" 
                    className="icon-projectcard-arrow"
                  />
                </div>
                <div className="text-projectcard-description">
                  <span className="text-projectcard-description-company">Short description — replace with your project details.</span> — Coming soon.
                </div>
              </div>
              <img 
                src="./assets/profile-placeholder.jpeg" 
                alt="Placeholder project thumbnail" 
                className="project-thumbnail"
              />
              <div className="project-card-colour balanced"></div>
            </a>
          </div>
        </div>
        
        <p className="projects-guide">
          Add your projects by editing <code>projects.html</code> and updating each card with a title, description, link, and screenshot.
        </p>
      </div>
    </div>
  );
};

export default ProjectsPage;