import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface WelcomeGuardProps {
  children: React.ReactNode;
}

const WelcomeGuard: React.FC<WelcomeGuardProps> = ({ children }) => {
  const navigate = useNavigate();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const welcomeSeen = localStorage.getItem("welcomeSeen");
    if (welcomeSeen !== "true") {
      navigate('/');
    } else {
      setShouldRender(true);
    }
  }, [navigate]);

  if (!shouldRender) {
    return null;
  }

  return <>{children}</>;
};

export default WelcomeGuard;