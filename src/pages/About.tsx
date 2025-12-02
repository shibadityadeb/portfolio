import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';

const AboutPage: React.FC = () => {
  return (
    <div className="body">
      <div className="gradient"></div>
      <Navbar />
      <About />
      
      {/* Mobile version */}
      <div className="section-info-hero mobile">
        <div className="hero-fade info-hero"></div>
        <div className="container-info hero">
          <div className="overline-info-wrapper">
            <div className="overline-wrapper">
              <div className="icon-section-dot"></div>
              <div className="text-projectpage-overline">ABOUT ME</div>
            </div>
            <div className="text-hero info-hero">Hi — I'm Shibaditya Deb, a sophomore at Newton School of Technology (Pune), full-stack developer, and AI/ML builder driven by the thrill of building experiments that meaningfully help people. Alongside my development work, I’m a published author with two peer-reviewed review papers, contributing research-backed perspectives to emerging trends in AI and technology.</div>
          </div>
          
          <div className="info-hero-stack-mobile">
            <div className="container-hero-image info-hero">
              <div className="glare-item-top outer-edge"></div>
              <div className="window-outline info-hero">
                <div className="glare-item-top hero-inner"></div>
                <div className="window-main">
                  <div className="window-bar info-hero">
                    <div className="window-dots-wrapper">
                      <div className="dot red"></div>
                      <div className="dot yellow"></div>
                      <div className="dot green"></div>
                    </div>
                  </div>
                  <div className="window-content info-hero">
                    <img src="./assets/school.jpeg" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-projectpage-body info-hero">
              Alongside my development work, I'm a <span className="text-body-info-emphasis">published author</span> with two peer-reviewed review papers, contributing research-backed perspectives to emerging trends in AI and technology.
            </div>
            
            <div className="container-hero-image info-hero">
              <div className="glare-item-top outer-edge"></div>
              <div className="window-outline info-hero">
                <div className="glare-item-top hero-inner"></div>
                <div className="window-main">
                  <div className="window-bar info-hero">
                    <div className="window-dots-wrapper">
                      <div className="dot red"></div>
                      <div className="dot yellow"></div>
                      <div className="dot green"></div>
                    </div>
                  </div>
                  <div className="window-content info-hero">
                    <img src="./assets/fly.jpeg" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-projectpage-body info-hero">
              I grew up as someone who loved to <span className="text-body-info-emphasis">fly</span>—not just across the sky, but toward heights where the <span className="text-body-info-emphasis">unimaginable becomes real.</span>
            </div>
            
            <div className="container-hero-image info-hero">
              <div className="glare-item-top outer-edge"></div>
              <div className="window-outline info-hero">
                <div className="glare-item-top hero-inner"></div>
                <div className="window-main">
                  <div className="window-bar info-hero">
                    <div className="window-dots-wrapper">
                      <div className="dot red"></div>
                      <div className="dot yellow"></div>
                      <div className="dot green"></div>
                    </div>
                  </div>
                  <div className="window-content info-hero">
                    <img src="./assets/travel.jpeg" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-projectpage-body info-hero">
              I carry a deep longing to <span className="text-body-info-emphasis">roam the world</span>, to wander through every corner of this planet and let each place leave its <span className="text-body-info-emphasis">story on me.</span>
            </div>
            
            <div className="container-hero-image info-hero">
              <div className="glare-item-top outer-edge"></div>
              <div className="window-outline info-hero">
                <div className="glare-item-top hero-inner"></div>
                <div className="window-main">
                  <div className="window-bar info-hero">
                    <div className="window-dots-wrapper">
                      <div className="dot red"></div>
                      <div className="dot yellow"></div>
                      <div className="dot green"></div>
                    </div>
                  </div>
                  <div className="window-content info-hero">
                    <img src="./assets/college.jpeg" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-projectpage-body info-hero">
              I entered college carrying a <span className="text-body-info-emphasis">struggling and heartbreaking backstory</span>, but chose to look forward—with my eyes on the <span className="text-body-info-emphasis">future, not the past.</span>
            </div>
            
            <div className="container-hero-image info-hero">
              <div className="glare-item-top outer-edge"></div>
              <div className="window-outline info-hero">
                <div className="glare-item-top hero-inner"></div>
                <div className="window-main">
                  <div className="window-bar info-hero">
                    <div className="window-dots-wrapper">
                      <div className="dot red"></div>
                      <div className="dot yellow"></div>
                      <div className="dot green"></div>
                    </div>
                  </div>
                  <div className="window-content info-hero">
                    <img src="./assets/public.jpeg" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-projectpage-body info-hero">
              From conquering <span className="text-body-info-emphasis">public speaking</span> to leading India's first <span className="text-body-info-emphasis">OCPC Mirror Camp</span> and earning my first internship—my <span className="text-body-info-emphasis">first year became my breakthrough.</span>
            </div>
            
            <div className="container-hero-image info-hero">
              <div className="glare-item-top outer-edge"></div>
              <div className="window-outline info-hero">
                <div className="glare-item-top hero-inner"></div>
                <div className="window-main">
                  <div className="window-bar info-hero">
                    <div className="window-dots-wrapper">
                      <div className="dot red"></div>
                      <div className="dot yellow"></div>
                      <div className="dot green"></div>
                    </div>
                  </div>
                  <div className="window-content info-hero">
                    <img src="./assets/last.jpeg" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="info-hero-ending-wrapper">
              <div className="text-projectpage-body info-hero">
                In the hush of <span className="text-body-info-emphasis">books and ideas</span>, I grow—personally, professionally, endlessly—always reaching for the next challenge that <span className="text-body-info-emphasis">sharpens who I am.</span><br />
              </div>
            </div>
          </div>
        </div>
        
        <div style={{
          textAlign: 'center',
          padding: '3rem 1.5rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <div style={{
            fontStyle: 'italic',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.85)',
            fontWeight: '300',
            letterSpacing: '0.5px'
          }}>
            "In quiet growth and rising challenges, I'm building a life where every obstacle becomes a stepping stone toward a new sunrise"
          </div>
        </div>
        <div className="hero-noise"></div>
      </div>
    </div>
  );
};

export default AboutPage;
