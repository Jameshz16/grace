import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  const { t, language } = useLanguage();

  const handleWhatsApp = () => {
    const message = t("nav.whatsappMessage");
    const whatsappUrl = `https://wa.me/17542043713?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/florida.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1
          className={`text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t("hero.title1")}
          <br />
          <span className="text-yellow-400">{t("hero.title2")}</span>
        </h1>
        <p
          className={`text-xl md:text-2xl mb-8 font-light opacity-90 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t("hero.subtitle")}
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={handleWhatsApp}
            className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg active:shadow-inner"
          >
            {t("hero.cta")}
          </button>
          <button
            onClick={handleWhatsApp}
            className="border-2 border-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-500 active:bg-green-600 active:text-white active:scale-95 active:shadow-inner transition-all duration-200 flex items-center justify-center"
          >
            <img
              src="/whatsapp-svgrepo-com.svg"
              alt="WhatsApp"
              className="w-5 h-5 mr-2"
            />
            {t("common.whatsappDirect")}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
