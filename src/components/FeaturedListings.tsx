import { useState } from 'react';
import { ChevronLeft, ChevronRight, Bed, Bath, Square } from 'lucide-react';

interface Listing {
  id: number;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
}

const featuredListings: Listing[] = [
  {
    id: 1,
    title: 'Modern Beverly Hills Estate',
    price: '$12,500,000',
    location: 'Beverly Hills, CA',
    beds: 6,
    baths: 8,
    sqft: 8500,
    image: 'luxury%20modern%20mansion%20beverly%20hills%20swimming%20pool%20palm%20trees%20sunset'
  },
  {
    id: 2,
    title: 'Hollywood Hills Contemporary',
    price: '$8,750,000',
    location: 'Hollywood Hills, CA',
    beds: 5,
    baths: 6,
    sqft: 6200,
    image: 'modern%20contemporary%20home%20hollywood%20hills%20glass%20walls%20city%20view'
  },
  {
    id: 3,
    title: 'Bel Air Mediterranean Villa',
    price: '$15,200,000',
    location: 'Bel Air, CA',
    beds: 7,
    baths: 9,
    sqft: 10200,
    image: 'mediterranean%20villa%20bel%20air%20luxury%20estate%20gardens%20fountain'
  }
];

export default function FeaturedListings() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredListings.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredListings.length) % featuredListings.length);
  };

  return (
    <section id="listings" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover exceptional properties in Los Angeles' most prestigious neighborhoods
          </p>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredListings.map((listing) => (
                <div key={listing.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <div className="relative h-80 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="text-2xl font-bold mb-2">{listing.title}</div>
                          <div className="text-lg opacity-80">Luxury Property</div>
                        </div>
                      </div>
                      <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-sm">
                        <span className="text-gray-900 font-semibold">{listing.price}</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                        {listing.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{listing.location}</p>
                      
                      <div className="flex items-center space-x-6 text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Bed size={16} />
                          <span className="text-sm">{listing.beds} Beds</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Bath size={16} />
                          <span className="text-sm">{listing.baths} Baths</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Square size={16} />
                          <span className="text-sm">{listing.sqft.toLocaleString()} sqft</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 active:scale-95 active:shadow-inner"
          >
            <ChevronLeft size={24} className="text-gray-900" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 active:scale-95 active:shadow-inner"
          >
            <ChevronRight size={24} className="text-gray-900" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {featuredListings.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 active:scale-90 ${
                  index === currentIndex ? 'bg-gray-900' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}