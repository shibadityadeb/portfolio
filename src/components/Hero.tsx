import React, { useEffect } from 'react';

const Hero: React.FC = () => {
  useEffect(() => {
    const setupScrollAnimations = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      });

      const elementsToAnimate = document.querySelectorAll('.container-hero-image-landing.info-hero-landing, .homepage-text-section-landing');
      elementsToAnimate.forEach((element) => {
        observer.observe(element);
      });
    };

    setupScrollAnimations();
  }, []);

  return (
    <div className="homepage-content-wrapper-landing">
      <div className="container-hero-image-landing info-hero-landing animate-in">
        <div className="glare-item-top-landing outer-edge-landing"></div>
        <div className="window-outline-landing info-hero-landing">
          <div className="glare-item-top-landing hero-inner-landing"></div>
          <div className="window-main-landing">
            <div className="window-bar-landing info-hero-landing">
              <div className="window-dots-wrapper-landing">
                <div className="dot-landing red-landing"></div>
                <div className="dot-landing yellow-landing"></div>
                <div className="dot-landing green-landing"></div>
              </div>
            </div>
            <div className="window-content-landing info-hero-landing">
              <img 
                src="./assets/profile-placeholder.jpeg" 
                loading="lazy" 
                alt="Shibaditya Deb" 
                className="hero-image-landing" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="homepage-text-section-landing">
        <h1 className="homepage-name-landing">Shibaditya Deb</h1>
        <p className="homepage-role-landing">Sophomore · Newton School of Technology (Pune)</p>
        <p className="homepage-location-landing">Full-Stack · AI/ML</p>
        <div className="vapour-landing">
          <span style={{ '--i': 1 } as React.CSSProperties}></span>
          <span style={{ '--i': 3 } as React.CSSProperties}></span>
          <span style={{ '--i': 16 } as React.CSSProperties}></span>
          <span style={{ '--i': 5 } as React.CSSProperties}></span>
          <span style={{ '--i': 13 } as React.CSSProperties}></span>
          <span style={{ '--i': 20 } as React.CSSProperties}></span>
          <span style={{ '--i': 6 } as React.CSSProperties}></span>
          <span style={{ '--i': 7 } as React.CSSProperties}></span>
          <span style={{ '--i': 10 } as React.CSSProperties}></span>
          <span style={{ '--i': 8 } as React.CSSProperties}></span>
          <span style={{ '--i': 17 } as React.CSSProperties}></span>
          <span style={{ '--i': 11 } as React.CSSProperties}></span>
          <span style={{ '--i': 12 } as React.CSSProperties}></span>
          <span style={{ '--i': 14 } as React.CSSProperties}></span>
          <span style={{ '--i': 2 } as React.CSSProperties}></span>
          <span style={{ '--i': 9 } as React.CSSProperties}></span>
          <span style={{ '--i': 15 } as React.CSSProperties}></span>
          <span style={{ '--i': 4 } as React.CSSProperties}></span>
          <span style={{ '--i': 19 } as React.CSSProperties}></span>
        </div>
        <p className="homepage-quote-landing">
          <span className="homepage-quote-highlight-landing">"Hi — I'm Shibaditya. </span> 
          Focused on full-stack products, applied AI/ML, and learning through shipping.
        </p>
      </div>
    </div>
  );
};

export default Hero;