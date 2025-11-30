import React, { useEffect } from 'react';

const TechStack: React.FC = () => {
  useEffect(() => {
    const techStackWrapper = document.querySelector('.tech-stack-wrapper-language');
    if (techStackWrapper) {
      const onScroll = () => {
        const wrapperPosition = techStackWrapper.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (wrapperPosition < screenHeight * 0.8) {
          techStackWrapper.classList.add('scroll-visible');
        }
      };

      window.addEventListener('scroll', onScroll);
      onScroll();

      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }
  }, []);

  return (
    <div className="tech-stack-wrapper-language">
      <div className="tech-stack-title-language">Tech Stack</div>
      <div className="tech-stack-language">
        <div className="tech-item-language" id="html" data-tech="HTML">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="tech-icon-language" />
        </div>
        <div className="tech-item-language" id="css" data-tech="CSS">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="tech-icon-language" />
        </div>
        <div className="tech-item-language" id="javascript" data-tech="JavaScript">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="tech-icon-language" />
        </div>
        <div className="tech-item-language" id="react" data-tech="React">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="tech-icon-language" />
        </div>
        <div className="tech-item-language" id="nodejs" data-tech="Node.js">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="tech-icon-language" />
        </div>
        <div className="tech-item-language" id="python" data-tech="Python">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="tech-icon-language" />
        </div>
        <div className="tech-item-language" id="mongodb" data-tech="MongoDB">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="tech-icon-language" />
        </div>
        <div className="tech-item-language" id="sql" data-tech="SQL">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="tech-icon-language" />
        </div>
        <div className="tech-item-language" id="git" data-tech="Git">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="tech-icon-language" />
        </div>
        <div className="tech-item-language" id="ai" data-tech="AI/ML">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="AI/ML" className="tech-icon-language" />
        </div>
      </div>
    </div>
  );
};

export default TechStack;