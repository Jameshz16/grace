import { MapPin, Building } from "lucide-react";
import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker as LeafletMarker,
  Popup,
  CircleMarker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useLanguage } from "@/context/LanguageContext";

const MapContainerAny = MapContainer as any;
const TileLayerAny = TileLayer as any;
const CircleMarkerAny = CircleMarker as any;

export default function AreasServicio() {
  const { t } = useLanguage();

  const ciudadesPrincipales = [
    { nombre: "Plantation", tipo: t("areas.map.mainOffice"), destacado: true },
    { nombre: "Miami", tipo: t("areas.map.activeService"), destacado: false },
    {
      nombre: "Fort Lauderdale",
      tipo: t("areas.map.activeService"),
      destacado: false,
    },
    { nombre: "Orlando", tipo: t("areas.map.activeService"), destacado: false },
    { nombre: "Tampa", tipo: t("areas.map.activeService"), destacado: false },
    {
      nombre: "Jacksonville",
      tipo: t("areas.map.activeService"),
      destacado: false,
    },
    {
      nombre: "Boca Raton",
      tipo: t("areas.map.activeService"),
      destacado: false,
    },
    {
      nombre: "West Palm Beach",
      tipo: t("areas.map.activeService"),
      destacado: false,
    },
  ];

  const cityCoords: Record<string, { top: string; left: string }> = {
    Miami: { top: "85%", left: "88%" },
    "Fort Lauderdale": { top: "80%", left: "86%" },
    Plantation: { top: "80%", left: "84%" },
    "Boca Raton": { top: "78%", left: "85%" },
    "West Palm Beach": { top: "72%", left: "84%" },
    Orlando: { top: "55%", left: "65%" },
    Tampa: { top: "58%", left: "50%" },
    Jacksonville: { top: "25%", left: "80%" },
  };

  const cityLatLngs: Record<string, { lat: number; lng: number }> = {
    Miami: { lat: 25.7617, lng: -80.1918 },
    "Fort Lauderdale": { lat: 26.1224, lng: -80.1373 },
    Plantation: { lat: 26.1276, lng: -80.2331 },
    "Boca Raton": { lat: 26.3683, lng: -80.1289 },
    "West Palm Beach": { lat: 26.7153, lng: -80.0534 },
    Orlando: { lat: 28.5383, lng: -81.3792 },
    Tampa: { lat: 27.951, lng: -82.457 },
    Jacksonville: { lat: 30.3322, lng: -81.6557 },
  };

  const condados = [
    "Broward County",
    "Miami-Dade County",
    "Palm Beach County",
    "Orange County",
    "Hillsborough County",
    "Duval County",
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  L.Icon.Default.mergeOptions({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });

  // Helper to get translated services list
  const getAvailableServices = () => {
    // Assuming t('areas.availableServices.items') returns an array of strings
    // If not supported by current context implementation, we might need a workaround,
    // but based on previous turns we assume it works or we cast it.
    return (t("areas.availableServices.items") as unknown as string[]) || [];
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            {t("areas.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("areas.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Visualization */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {t("areas.statewide")}
              </h3>
            </div>

            <div className="relative">
              {/* Florida Map Representation */}
              <div className="rounded-lg mb-6">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <MapContainerAny
                    center={{ lat: 27.6648, lng: -81.5158 }}
                    zoom={6}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <TileLayerAny
                      attribution="&copy; OpenStreetMap contributors"
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {ciudadesPrincipales.map((ciudad, index) => {
                      const pos = cityLatLngs[ciudad.nombre];
                      if (!pos) return null;
                      return (
                        <CircleMarkerAny
                          key={`${ciudad.nombre}-circle`}
                          center={pos}
                          radius={9}
                          pathOptions={{
                            color: "#2563eb",
                            fillColor: "#2563eb",
                            fillOpacity: 0.9,
                          }}
                          eventHandlers={{
                            click: () =>
                              setSelectedIndex((prev) =>
                                prev === index ? null : index
                              ),
                          }}
                        >
                          <Popup>
                            <div className="text-sm">
                              <div className="font-semibold">
                                {ciudad.nombre}
                              </div>
                              <div className="text-gray-600">{ciudad.tipo}</div>
                            </div>
                          </Popup>
                        </CircleMarkerAny>
                      );
                    })}
                  </MapContainerAny>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-center mb-2">
                    <Building className="w-6 h-6 text-green-600 mr-2" />
                    <span className="font-bold text-green-800">
                      {t("areas.countiesTitle")}
                    </span>
                  </div>
                  <div className="text-sm text-green-700">
                    {condados.join(" • ")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t("areas.presence.title")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {t("areas.presence.broward.title")}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {t("areas.presence.broward.desc")}
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {t("areas.presence.miami.title")}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {t("areas.presence.miami.desc")}
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {t("areas.presence.palmBeach.title")}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {t("areas.presence.palmBeach.desc")}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t("areas.availableServices.title")}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {getAvailableServices().map((service, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
