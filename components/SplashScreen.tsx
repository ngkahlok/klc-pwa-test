import { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
  duration?: number;
}

const SplashScreen = ({ onComplete, duration = 2000 }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 500); // Allow fade out animation to complete
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-500 ${
      isFading ? 'opacity-0' : 'opacity-100'
    }`}>
      {/* Loading text in top left */}
      <div className="absolute top-4 left-4 text-white text-lg font-medium z-20">
        Loading
      </div>

      {/* ResponsiveBackground structure */}
      <div className="relative min-h-screen flex justify-center items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-repeat bg-[url('/images/sewing-theme-background3.jpg')] z-0"
          style={{ backgroundSize: 'auto' }}
        />
        
        {/* Main content area - using ResponsiveBackground structure */}
        <div className="relative w-full max-w-[440px] min-h-screen shadow-md z-10 flex flex-col items-center justify-center" style={{ backgroundColor: '#F1E1D0' }}>
          {/* Logo container - centered */}
          <div className="flex flex-col items-center justify-center flex-1">
            {/* Logo Image */}
            <div className="w-40 h-40">
              <img 
                src="/images/icon512.png" 
                alt="Kim Loong Co Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Company name */}
            {/* <h1 className="text-2xl font-bold text-blue-900 mb-6" style={{ fontFamily: 'cursive' }}>
              Kim Loong Co
            </h1> */}
            
            {/* Loading spinner */}
            {/* <div className="flex justify-center mb-4">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-900"></div>
            </div> */}
          </div>
          
          {/* Bottom section with "Powered by RetailFlow" */}
          <div className="bg-white w-full px-8 py-3 mt-auto">
            <p className="text-center text-black text-sm">
              Powered by RetailFlow
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen; 