import { Search, Handshake, FileText, LifeBuoy } from 'lucide-react';

export default function Proceso() {
  const pasos = [
    {
      numero: 1,
      icon: Search,
      titulo: "Initial Consultation",
      descripcion: "We understand your needs and objectives"
    },
    {
      numero: 2,
      icon: Search,
      titulo: "Personalized Search",
      descripcion: "We select the best options for you"
    },
    {
      numero: 3,
      icon: Handshake,
      titulo: "Negotiation and Closing",
      descripcion: "We handle all legal and financial details"
    },
    {
      numero: 4,
      icon: LifeBuoy,
      titulo: "Continuous Support",
      descripcion: "We accompany you after closing with management and advice"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Your Path to Property Ownership in 4 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've perfected our process to make your real estate experience as simple and successful as possible
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-0">
            {pasos.map((paso, index) => {
              const Icon = paso.icon;
              return (
                <div key={index} className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 mb-8 lg:mb-0 ${
                    index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'
                  }`}>
                    <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                      <div className={`flex items-center ${
                        index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                      } mb-4`}>
                        <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                          {paso.numero}
                        </div>
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {paso.titulo}
                      </h3>
                      <p className="text-gray-600">
                        {paso.descripcion}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white relative z-10 my-4 lg:my-0">
                    <Icon className="w-12 h-12" />
                  </div>

                  {/* Spacer */}
                  <div className="w-full lg:w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Take the First Step?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule your free initial consultation and discover how we can help you reach your real estate goals in Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => {
                const message = "Hello, I would like to schedule a free consultation about real estate in Florida.";
                const whatsappUrl = `https://wa.me/17542043713?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }} className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white px-8 py-3 rounded-lg font-bold transition-all duration-200 active:scale-95 active:shadow-inner">
                Schedule Initial Consultation
              </button>
              <button onClick={() => {
                const message = "Hello, I would like to learn more about your real estate services in Florida.";
                const whatsappUrl = `https://wa.me/17542043713?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }} className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white active:bg-blue-700 active:text-white px-8 py-3 rounded-lg font-bold transition-all duration-200 active:scale-95 active:shadow-inner">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}