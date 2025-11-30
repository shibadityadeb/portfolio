import React, { useEffect } from 'react';
import '../styles/Greeting.css';

const Greeting: React.FC = () => {
  useEffect(() => {
    console.log('Greeting component loaded');
    
    // Always show greeting for now
    // Mark as visited
    try {
      localStorage.setItem("welcomeSeen", "true");
    } catch (e) {
      // Continue if localStorage fails
    }

    // Exact greeting code as specified
    const greetings = [
      "Hello",
      "Bonjour",
      "こんにちは",
      "Hallo",
      "Ciao",
      "Hola",
      "안녕하세요",
      "नमस्ते",
    ];

    const greetingElement = document.getElementById("greeting");
    let index = 0;

    function updateGreeting() {
      if (greetingElement) {
        greetingElement.textContent = greetings[index];
      }
      index++;

      if (index >= greetings.length) {
        clearInterval(greetingInterval);
        const container = document.getElementById("animation-container");
        if (container) {
          container.classList.add("final");
        }
        setTimeout(() => {
          window.location.href = "/home.html";
        }, 1000);
      }
    }

    const greetingInterval = setInterval(updateGreeting, 350);
    updateGreeting();
  }, []);

  return (
    <div id="animation-container" className="welcome-screen">
      <div className="greeting-content">
        <h1 id="greeting" aria-live="polite"></h1>
      </div>
    </div>
  );
};

export default Greeting;