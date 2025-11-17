import { Award, Home, Users } from 'lucide-react';

export default function AboutAgent() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Agent Portrait */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg shadow-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl font-bold mb-2">AS</div>
                  <div className="text-lg opacity-80">Alexandra Sterling</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">$500M+</div>
                  <div className="text-sm text-gray-700">Sales Volume</div>
                </div>
              </div>
            </div>
          </div>

          {/* Agent Bio */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Alexandra Sterling
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Premier Luxury Real Estate Specialist
            </p>
            
            <div className="prose prose-lg text-gray-700 mb-8">
              <p className="mb-4">
                With over 15 years of experience in luxury real estate, Alexandra Sterling has established herself as one of Beverly Hills' most trusted and successful agents. Her unparalleled market knowledge and dedication to client service have resulted in over $500 million in sales.
              </p>
              <p className="mb-4">
                Specializing in premium properties throughout Beverly Hills, Bel Air, and Holmby Hills, Alexandra brings a sophisticated approach to every transaction, ensuring her clients receive white-glove service from initial consultation to closing.
              </p>
            </div>

            {/* Awards and Achievements */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-gray-100 p-4 rounded-lg mb-2">
                  <Award className="w-8 h-8 text-yellow-600 mx-auto" />
                </div>
                <div className="text-sm font-semibold text-gray-900">Top 1% Nationwide</div>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 p-4 rounded-lg mb-2">
                  <Home className="w-8 h-8 text-yellow-600 mx-auto" />
                </div>
                <div className="text-sm font-semibold text-gray-900">500+ Homes Sold</div>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 p-4 rounded-lg mb-2">
                  <Users className="w-8 h-8 text-yellow-600 mx-auto" />
                </div>
                <div className="text-sm font-semibold text-gray-900">Elite Clientele</div>
              </div>
            </div>

            <button onClick={() => {
              const message = "Hello, I would like to schedule a private consultation with the agent.";
              const whatsappUrl = `https://wa.me/17542043713?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }} className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 active:scale-95 active:shadow-inner">
              Schedule Private Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}