import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { t, language, setLanguage } = useLanguage();

  const handleNavWhatsApp = () => {
    const message = t("nav.whatsappMessage");
    const whatsappUrl = `https://wa.me/17542043713?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const menuItems = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.services"), href: "#servicios" },
    { name: t("nav.testimonials"), href: "#testimonios" },
    { name: t("nav.contact"), href: "#contacto" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        backdropFilter: "blur(8px)",
        borderBottom:
          scrollY > 20 ? "1px solid rgba(243, 244, 246, 0.8)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              className="text-2xl font-serif font-bold transition-all duration-300"
              style={{ color: isOverHero ? "#ffffff" : "#1e3a8a" }}
            >
              Grace Vizcaya
            </h1>
            <p
              className="text-xs tracking-wide transition-all duration-300"
              style={{ color: isOverHero ? "#e5e7eb" : "#2563eb" }}
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
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isOverHero
                    ? "text-white hover:text-yellow-400"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                style={{
                  opacity: scrollY > 20 ? 1 : 0.9,
                }}
              >
                {item.name}
              </a>
            ))}

            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-full transition-colors flex items-center space-x-1 hover:scale-105 active:scale-95 ${
                isOverHero
                  ? "text-white hover:bg-white/10"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              title={
                language === "en" ? "Cambiar a Español" : "Switch to English"
              }
              style={{ opacity: scrollY > 20 ? 1 : 0.9 }}
            >
              <Globe size={20} />
              <span className="text-sm font-medium">
                {language.toUpperCase()}
              </span>
            </button>

            <button
              className={`px-6 py-2 rounded-lg font-bold transition-all duration-300 hover:scale-105 active:scale-95 active:shadow-inner ${
                isOverHero
                  ? "text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700"
                  : "text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700"
              }`}
              style={{
                opacity: scrollY > 20 ? 1 : 0.95,
              }}
              onClick={handleNavWhatsApp}
            >
              {t("nav.freeConsultation")}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-full transition-colors ${
                isOverHero ? "text-white" : "text-gray-700"
              }`}
            >
              <span className="font-bold text-sm">
                {language.toUpperCase()}
              </span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="transition-all duration-300 hover:scale-110 active:scale-95"
              style={{ color: isOverHero ? "#ffffff" : "#374151" }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden border-t transition-all duration-300 ${
              isOverHero ? "bg-gray-900/95" : "bg-white"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 font-medium transition-colors duration-200 ${
                    isOverHero
                      ? "text-white hover:text-yellow-400"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                className="w-full text-left bg-orange-500 text-white px-3 py-2 rounded-lg font-bold hover:bg-orange-600 active:bg-orange-700 active:scale-95 active:shadow-inner transition-all duration-200"
                onClick={handleNavWhatsApp}
              >
                {t("nav.freeConsultation")}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
