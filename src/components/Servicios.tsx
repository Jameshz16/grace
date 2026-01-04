import {
  Home,
  DollarSign,
  Key,
  Building,
  FileText,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Servicios() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Home,
      title: t("services.items.purchase.title"),
      description: t("services.items.purchase.description"),
      detail: t("services.items.purchase.detail"),
      cta: t("services.items.purchase.cta"),
      color: "blue",
    },
    {
      icon: DollarSign,
      title: t("services.items.sale.title"),
      description: t("services.items.sale.description"),
      detail: t("services.items.sale.detail"),
      cta: t("services.items.sale.cta"),
      color: "green",
    },
    {
      icon: Key,
      title: t("services.items.management.title"),
      description: t("services.items.management.description"),
      detail: t("services.items.management.detail"),
      cta: t("services.items.management.cta"),
      color: "purple",
    },
    {
      icon: Building,
      title: t("services.items.corporate.title"),
      description: t("services.items.corporate.description"),
      detail: t("services.items.corporate.detail"),
      cta: t("services.items.corporate.cta"),
      color: "orange",
    },
    {
      icon: FileText,
      title: t("services.items.legal.title"),
      description: t("services.items.legal.description"),
      detail: t("services.items.legal.detail"),
      cta: t("services.items.legal.cta"),
      color: "red",
    },
    {
      icon: MapPin,
      title: t("services.items.custom.title"),
      description: t("services.items.custom.description"),
      detail: t("services.items.custom.detail"),
      cta: t("services.items.custom.cta"),
      color: "indigo",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
      red: "bg-red-100 text-red-600 border-red-200",
      indigo: "bg-indigo-100 text-indigo-600 border-indigo-200",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            {t("services.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 ${getColorClasses(
                      service.color
                    )}`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4 font-medium">
                    {service.description}
                  </p>

                  <p className="text-gray-500 text-sm mb-6">{service.detail}</p>

                  <button
                    onClick={() => {
                      // We construct a simple message based on the title
                      const message = `Hello, I'm interested in the service: ${service.title}. Could we chat on WhatsApp?`;
                      const whatsappUrl = `https://wa.me/17542043713?text=${encodeURIComponent(
                        message
                      )}`;
                      window.open(whatsappUrl, "_blank");
                    }}
                    className={`mx-auto w-fit py-3 px-4 rounded-lg font-bold transition-all duration-200 active:scale-95 active:shadow-inner ${
                      service.color === "orange"
                        ? "bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white"
                        : service.color === "green"
                        ? "bg-green-500 hover:bg-green-600 active:bg-green-700 text-white"
                        : service.color === "blue"
                        ? "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white"
                        : service.color === "purple"
                        ? "bg-purple-500 hover:bg-purple-600 active:bg-purple-700 text-white"
                        : service.color === "red"
                        ? "bg-red-500 hover:bg-red-600 active:bg-red-700 text-white"
                        : "bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white"
                    }`}
                  >
                    {service.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
