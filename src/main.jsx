import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA from 'react-ga4'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import SplashLoader from './../src/components/SplashLoader.jsx'

const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
if (gaMeasurementId) {
  ReactGA.initialize(gaMeasurementId);
} else {
  console.info('GA4 disabled: VITE_GA_MEASUREMENT_ID is not set.');
}

function Root() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5-second delay for the loader

    return () => clearTimeout(timer);
  }, []);

  return (
    // <StrictMode>
      <BrowserRouter>
        {isLoading ? <SplashLoader /> : <App />}
      </BrowserRouter>
    // </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Root />);
