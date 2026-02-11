import React from 'react';
import '../styles/Experience.css';

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Happy City Hub",
    role: "City Index Researcher (Part-time)",
    duration: "Dec 2025 – Feb 2026 (3 Months)",
    location: "United Kingdom · Remote",
    description: [
      "Contributed to international research on happiness, resilience, and quality of life in cities worldwide",
      "Studied social policy effectiveness and public service delivery",
      "Analyzed crisis response mechanisms and community engagement models",
      "Researched workplace well-being indicators",
      "Collaborated with a global team on Happy City Index 2026",
      "Produced evidence-based insights using data analytics"
    ],
    skills: ["Research", "Data Analytics", "Policy Analysis", "Urban Studies"]
  },
  {
    company: "Kiran Foundation",
    role: "Software Engineer Intern",
    duration: "Apr 2025 – Jun 2025 (3 Months)",
    location: "Remote",
    description: [
      "Developed digital platforms for education and community empowerment",
      "Built scalable web interfaces for accessibility and engagement",
      "Worked on frontend and backend integration",
      "Improved system reliability and user experience",
      "Supported NGO initiatives through technology"
    ],
    skills: ["React", "Node.js", "Web Development", "UI/UX"]
  }
];

const Experience: React.FC = () => {
  return (
    <div className="experience-section">
      <div className="experience-container">
        <div className="experience-cards">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="experience-card-outline"
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <div className="glare-item-top outer-edge"></div>
              <div className="experience-card">
                <div className="glare-item-top inner-edge"></div>
                <div className="experience-card-header">
                  <div className="experience-header-info">
                    <div className="experience-company">{exp.company}</div>
                    <div className="experience-role">{exp.role}</div>
                    <div className="experience-meta">
                      <span className="experience-duration">{exp.duration}</span>
                      <span className="experience-separator">·</span>
                      <span className="experience-location">{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="experience-content">
                  <ul className="experience-description">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="experience-skills">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="experience-skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
                
                <div className="experience-card-colour"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
