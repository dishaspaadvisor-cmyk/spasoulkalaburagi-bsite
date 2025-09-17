import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'offers', href: '#offers' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom px-4">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/SPA SOUL KALABURAGI (1).png" 
              alt="Spa Soul Kalaburagi" 
              className="h-12 sm:h-14 lg:h-16 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-300 hover:text-secondary text-sm lg:text-base relative group ${
                  isScrolled ? 'text-accent' : 'text-white'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-medium py-2 lg:py-3 px-4 lg:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm lg:text-base"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-accent hover:bg-accent/10' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2 mb-4 border border-accent/10">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 px-4 text-accent hover:text-primary hover:bg-neutral rounded-lg transition-all duration-200 text-base font-medium"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2 border-t border-accent/10">
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 text-base"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
