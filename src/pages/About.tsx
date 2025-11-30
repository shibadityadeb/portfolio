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
            <div className="text-hero info-hero">I'm passionate about creating beautiful products that <span className="text-info-hero-serif">empower people.</span></div>
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
                    <img src="./assets/profile-placeholder.jpeg" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-projectpage-body info-hero">
              <span className="text-body-info-emphasis">Use this block to add your own story.</span><br />Update it with whatever timeline or context matters to you.
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
                    <img src="./assets/profile-placeholder.jpeg" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-projectpage-body info-hero">
              Hi — I'm <span className="text-body-info-emphasis">Shibaditya Deb.</span> Sophomore at <span className="text-body-info-emphasis">Newton School of Technology (Pune)</span>. Full-stack developer and AI/ML builder (intermediate). Author of <span className="text-body-info-emphasis">2 review papers</span> on AI. Experienced with <span className="text-body-info-emphasis">SQL</span>, <span className="text-body-info-emphasis">MongoDB</span>, and familiar with <span className="text-body-info-emphasis">LLMs</span> and generative AI systems. (Replace or expand this later as needed.)
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
                    <img src="./assets/profile-placeholder.jpeg" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-projectpage-body info-hero">
              <span className="text-body-info-emphasis">Use this area for milestones.</span><br /><br />Write about achievements, lessons, or turning points. Mention communities, hackathons, research, or anything that matters to you.
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
                    <img src="./assets/profile-placeholder.jpeg" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-projectpage-body info-hero">
              <span className="text-body-info-emphasis">Add your craft summary here.</span><br /><br />Talk about how you build products, what tools you enjoy, and the kind of work you want to do next. Swap this placeholder with specifics.
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
                    <img src="./assets/profile-placeholder.jpeg" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-projectpage-body info-hero">
              <span className="text-body-info-emphasis">Use this space for process + impact.</span><br /><br />Explain how you approach projects, collaborate with teams, or measure success. Replace this paragraph with specific examples once you're ready.
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
                    <img src="./assets/profile-placeholder.jpeg" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="info-hero-ending-wrapper">
              <div className="text-projectpage-body info-hero">
                <span className="text-body-info-emphasis">Add lifestyle or hobbies here.</span><br /><br />Share how you recharge, collaborate, or explore ideas outside of work. Replace this placeholder with your personal details.<br />
              </div>
              <div className="signature-wrapper">
                <img src="./assets/profile-placeholder.jpeg" loading="lazy" alt="" className="info-signature" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-noise"></div>
      </div>
    </div>
  );
};

export default AboutPage;