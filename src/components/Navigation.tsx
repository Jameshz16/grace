import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const handleNavWhatsApp = () => {
    const message = "Hello, I would like to schedule a free consultation about real estate in Florida.";
    const whatsappUrl = `https://wa.me/17542043713?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#servicios' },
    { name: 'Testimonials', href: '#testimonios' },
    { name: 'Contact', href: '#contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.min(scrollY / 100, 1);
  const backgroundOpacity = Math.min(scrollY / 50, 1);
  
  // Determine if we're over the Hero section (first ~100vh)
  const isOverHero = scrollY < window.innerHeight - 100;

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${0.95 * backgroundOpacity})`,
        backdropFilter: 'blur(8px)',
        borderBottom: scrollY > 20 ? '1px solid rgba(243, 244, 246, 0.8)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 
              className="text-2xl font-serif font-bold transition-all duration-300"
              style={{ color: isOverHero ? '#ffffff' : '#1e3a8a' }}
            >
              Grace Vizcaya
            </h1>
            <p 
              className="text-xs tracking-wide transition-all duration-300"
              style={{ color: isOverHero ? '#e5e7eb' : '#2563eb' }}
            >
              UNITED REALTY GROUP, INC.
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-300 hover:scale-105 ${isOverHero ? 'text-white hover:text-yellow-400' : 'text-gray-700 hover:text-blue-600'}`}
                style={{ 
                  opacity: scrollY > 20 ? 1 : 0.9
                }}
              >
                {item.name}
              </a>
            ))}
            <button 
              className={`px-6 py-2 rounded-lg font-bold transition-all duration-300 hover:scale-105 active:scale-95 active:shadow-inner ${isOverHero ? 'text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700' : 'text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700'}`}
              style={{ 
                opacity: scrollY > 20 ? 1 : 0.95
              }}
              onClick={handleNavWhatsApp}
            >Free Consultation</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="transition-all duration-300 hover:scale-110 active:scale-95"
              style={{ color: isOverHero ? '#ffffff' : '#374151' }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden border-t transition-all duration-300 ${isOverHero ? 'bg-gray-900/95' : 'bg-white'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 font-medium transition-colors duration-200 ${isOverHero ? 'text-white hover:text-yellow-400' : 'text-gray-700 hover:text-blue-600'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full text-left bg-orange-500 text-white px-3 py-2 rounded-lg font-bold hover:bg-orange-600 active:bg-orange-700 active:scale-95 active:shadow-inner transition-all duration-200" onClick={handleNavWhatsApp}>
                Free Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}