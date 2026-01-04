import { Award, Users, Globe, Shield, Handshake, Eye } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PorQueElegirnos() {
  const { t } = useLanguage();

  const beneficios = [
    {
      icon: Award,
      title: t("whyChooseUs.items.experience.title"),
      description: t("whyChooseUs.items.experience.description"),
    },
    {
      icon: Users,
      title: t("whyChooseUs.items.bilingual.title"),
      description: t("whyChooseUs.items.bilingual.description"),
    },
    {
      icon: Globe,
      title: t("whyChooseUs.items.network.title"),
      description: t("whyChooseUs.items.network.description"),
    },
    {
      icon: Shield,
      title: t("whyChooseUs.items.service.title"),
      description: t("whyChooseUs.items.service.description"),
    },
    {
      icon: Handshake,
      title: t("whyChooseUs.items.expertise.title"),
      description: t("whyChooseUs.items.expertise.description"),
    },
    {
      icon: Eye,
      title: t("whyChooseUs.items.transparency.title"),
      description: t("whyChooseUs.items.transparency.description"),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            {t("whyChooseUs.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("whyChooseUs.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => {
            const Icon = beneficio.icon;
            return (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {beneficio.title}
                  </h3>
                  <p className="text-gray-600">{beneficio.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t("whyChooseUs.ctaTitle")}
            </h3>
            <p className="text-gray-600 mb-6">{t("whyChooseUs.ctaText")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const message = t("nav.whatsappMessage");
                  const whatsappUrl = `https://wa.me/17542043713?text=${encodeURIComponent(
                    message
                  )}`;
                  window.open(whatsappUrl, "_blank");
                }}
                className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white px-8 py-3 rounded-lg font-bold transition-all duration-200 active:scale-95 active:shadow-inner"
              >
                {t("common.scheduleFreeConsultation")}
              </button>
              <button
                onClick={() => {
                  const message =
                    "Hello, I would like to learn more about your services and receive information via WhatsApp.";
                  const whatsappUrl = `https://wa.me/17542043713?text=${encodeURIComponent(
                    message
                  )}`;
                  window.open(whatsappUrl, "_blank");
                }}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white active:bg-blue-700 active:text-white px-8 py-3 rounded-lg font-bold transition-all duration-200 active:scale-95 active:shadow-inner"
              >
                {t("common.viewServices")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
