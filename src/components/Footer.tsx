import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-serif font-bold text-blue-400 mb-2">
                Grace Vizcaya
              </h3>
              <p className="text-lg text-gray-300 mb-2">
                United Realty Group, Inc.
              </p>
              <p className="text-sm text-gray-400">{t("footer.partner")}</p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  1200 S. Pine Island Rd Suite 600
                  <br />
                  Plantation, FL 33324
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">754-204-3713</div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  graceviz2001@gmail.com
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-200"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-blue-400">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#home"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a
                  href="#testimonios"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t("nav.testimonials")}
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-blue-400">
              {t("footer.services")}
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t("services.items.purchase.title")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t("services.items.sale.title")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t("services.items.management.title")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t("services.items.corporate.title")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  {t("services.items.legal.title")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* License Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-gray-400 text-sm">
              <p className="mb-2">
                <strong>{t("footer.license.license")}</strong> Florida Real
                Estate License
              </p>
              <p className="mb-2">
                <strong>{t("footer.license.realtor")}</strong> Member of the
                National Association of Realtors
              </p>
              <p>
                <strong>{t("footer.license.spec")}</strong>{" "}
                {t("footer.license.specText")}
              </p>
            </div>

            <div className="text-gray-400 text-sm">
              <p className="mb-2">
                <strong>{t("footer.hours.title")}</strong>{" "}
                {t("footer.hours.time")}
              </p>
              <p className="mb-2">
                <strong>{t("footer.hours.langTitle")}</strong>{" "}
                {t("footer.hours.langText")}
              </p>
              <p>
                <strong>{t("footer.hours.emergencyTitle")}</strong>{" "}
                {t("footer.hours.emergencyText")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} United Realty Group, Inc.{" "}
              {t("footer.legal.rights")}
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                {t("footer.legal.privacy")}
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                {t("footer.legal.terms")}
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                DMCA
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                {t("footer.legal.disclaimer")}
              </a>
            </div>
          </div>

          <div className="mt-4 text-center text-gray-500 text-xs">
            <p>{t("footer.legal.disclaimerText")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
