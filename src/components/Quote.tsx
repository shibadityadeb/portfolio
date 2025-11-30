import React, { useEffect } from 'react';

const Quote: React.FC = () => {
  useEffect(() => {
    const quoteContainer = document.querySelector('.quote-container-middle');
    if (quoteContainer) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            (quoteContainer as HTMLElement).style.opacity = '1';
            (quoteContainer as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      }, { threshold: 0.5 });
      observer.observe(quoteContainer);
    }
  }, []);

  return (
    <div className="quote-container-middle">
      <blockquote className="quote-text-hero-middle info-hero-middle" aria-label="Quote">
        Transforming creativity into real-world impact, <br />
        <span className="quote-text-info-hero-serif-middle">powered by AI, logic, and pure innovation.</span>
      </blockquote>
    </div>
  );
};

export default Quote;