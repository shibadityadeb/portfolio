import React from 'react';
import '../styles/Experience.css';

const Achievement: React.FC = () => {
  return (
    <div className="achievement-section">
      <div className="overline-info-wrapper">
        <div className="overline-wrapper">
          <div className="icon-section-dot"></div>
          <div className="text-projectpage-overline">ACHIEVEMENTS</div>
        </div>
      </div>

      <div className="achievement-content">
        <h2 className="achievement-title">Hackathon Highlight</h2>
        <p>
          Professional highlight: first runner‑up at a national hackathon after
          clearing two online rounds and reaching the SIT Lonavala finale
          against 120+ competitors.
        </p>
        <p>
          Product: <a href="https://lnkd.in/djbkZv73" target="_blank" rel="noopener noreferrer">
            Chit Fund Digitisation Platform
          </a>. Built in 24 hours with features such as an escrow layer,
          blockchain wiring, in-house KYC algorithm, location-aware prioritisation,
          and an LLM-backed AI risk engine.
        </p>
        <p>
          Recognized post-competition when a judge requested detailed product
          documentation, validating the quality under time pressure.
        </p>
        <p>
          Team Aync — Leader: Shibaditya Deb; teammates Arohi Jadhav, Jay Patil,
          Parth Tandalwade. We keep building scalable products and proving impact.
        </p>
      </div>
    </div>
  );
};

export default Achievement;
