import { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/common/Footer';
import Popup from './components/Popup';
import Offers from './pages/Offers';
import MobileActionButtons from './components/MobileActionButtons';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Auto-show popup after 20 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 15000); // 15 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Offers />
      <Contact />
      <Footer />
      
      {/* Popup Component */}
      <Popup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)}
        title="Book Your Appointment"
        message="Ready to experience ultimate relaxation? Choose your preferred way to get in touch with us."
      />
      
      {/* Mobile Action Buttons - Only visible on mobile */}
      <MobileActionButtons />
      
      {/* Desktop Floating Action Button - Only visible on desktop */}
      <button
        onClick={() => setIsPopupOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 z-40 flex items-center justify-center hidden md:flex"
        aria-label="Open booking popup"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    </div>
  );
}

export default App;
