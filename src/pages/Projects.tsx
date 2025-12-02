import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import OpenSourceContributions from '../components/OpenSourceContributions';
import '../styles/OpenSourceContributions.css';

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
            <a href="https://mind-nest-team-async.vercel.app/" target="_blank" className="project-card w-inline-block">
              <div className="glare-item-top inner-edge"></div>
              <div className="projectcard-top">
                <div className="projectcard-title-row">
                  <div className="text-projectcard-title">MindNest</div>
                  <div className="project-links">
                    <a href="https://github.com/KhanjarSingh/MindNest-Team_Async" target="_blank" className="project-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="external-link-icon">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                    </svg>
                  </div>
                </div>
                <div className="text-projectcard-description">
                  <span className="text-projectcard-description-company">MindNest — an idea incubation center</span> — A full-stack incubation & collaboration platform that connects students, mentors, and faculty to submit startup ideas, form teams, get mentorship, join events, and track project progress — all in one unified workspace.
                </div>
              </div>
              <img 
                src="./assets/mindnest.png" 
                alt="MindNest project thumbnail" 
                className="project-thumbnail"
              />
              <div className="project-card-colour stadiabt"></div>
            </a>
          </div>

          <div className="project-card-outline">
            <div className="glare-item-top outer-edge"></div>
            <a href="https://resume-screeningapp.streamlit.app" target="_blank" className="project-card w-inline-block">
              <div className="glare-item-top inner-edge"></div>
              <div className="projectcard-top">
                <div className="projectcard-title-row">
                  <div className="text-projectcard-title">Resume Screening System</div>
                  <div className="project-links">
                    <a href="https://github.com/shibadityadeb/Resume-Screening-System" target="_blank" className="project-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="external-link-icon">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                    </svg>
                  </div>
                </div>
                <div className="text-projectcard-description">
                  <span className="text-projectcard-description-company">Resume Screening System — ML-powered recruitment tool</span> — A machine learning–powered resume screening system built with Python, scikit-learn, and Streamlit. It predicts the most relevant job category from uploaded resumes and extracts key sections like Skills and Experience. Deployed on Streamlit Cloud with a clean, interactive UI.
                </div>
              </div>
              <img 
                src="./assets/resume-screening.png" 
                alt="Resume Screening System project thumbnail" 
                className="project-thumbnail"
              />
              <div className="project-card-colour thn"></div>
            </a>
          </div>

          <div className="project-card-outline">
            <div className="glare-item-top outer-edge"></div>
            <a href="https://dream-campus.vercel.app" target="_blank" className="project-card w-inline-block">
              <div className="glare-item-top inner-edge"></div>
              <div className="projectcard-top">
                <div className="projectcard-title-row">
                  <div className="text-projectcard-title">Dream Campus</div>
                  <div className="project-links">
                    <a href="https://github.com/shibadityadeb/Dream-Campus?tab=readme-ov-file" target="_blank" className="project-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="external-link-icon">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                    </svg>
                  </div>
                </div>
                <div className="text-projectcard-description">
                  <span className="text-projectcard-description-company">Dream Campus — college exploration platform</span> — A frontend React web application that helps students explore colleges and check admission eligibility through an interactive online test with live webcam proctoring. It includes a multi-step admission form, JSON-based questions, and an AI chatbot — all optimized for mobile and built with Vite.
                </div>
              </div>
              <img 
                src="./assets/dream-campus.png" 
                alt="Dream Campus project thumbnail" 
                className="project-thumbnail"
              />
              <div className="project-card-colour balanced"></div>
            </a>
          </div>
          <div className="project-card-outline">
            <div className="glare-item-top outer-edge"></div>
            <a href="https://github.com/shibadityadeb/ResearchPaper_Analytics" target="_blank" className="project-card w-inline-block">
              <div className="glare-item-top inner-edge"></div>
              <div className="projectcard-top">
                <div className="projectcard-title-row">
                  <div className="text-projectcard-title">Scientific Research Trends Analysis</div>
                  <div className="project-links">
                    <a href="https://github.com/shibadityadeb/ResearchPaper_Analytics" target="_blank" className="project-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="text-projectcard-description">
                  <span className="text-projectcard-description-company">Scientific Research Trends Analysis — data analytics project</span> — A Python-based data analytics project that studies publication growth, interdisciplinary citation patterns, and research field evolution using Semantic Scholar and arXiv datasets. Implemented entirely in Jupyter Notebook, it visualizes large-scale scientific trends and uncovers how global research is created, shared, and cited.
                </div>
              </div>
              <img 
                src="./assets/scientific-research.png" 
                alt="Scientific Research Trends Analysis project thumbnail" 
                className="project-thumbnail"
              />
              <div className="project-card-colour stadiabt"></div>
            </a>
          </div>
        </div>
        
        <OpenSourceContributions showGithubLink={true} />
      </div>
    </div>
  );
};

export default ProjectsPage;