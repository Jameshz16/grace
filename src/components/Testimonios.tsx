import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  origin: string;
  text: string;
  rating: number;
  photo?: string;
}

const testimonios: Testimonial[] = [
  {
    id: 1,
    name: 'Carlos Rodriguez',
    origin: 'Miami, FL',
    text: 'Grace helped us find the perfect home for our family. Her market knowledge and Spanish-speaking service made the entire process very easy. Highly recommended!',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=300&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Maria Gonzalez',
    origin: 'Plantation, FL',
    text: 'I sold my property in record time and above listing price. Grace is very professional and perfectly understands the needs of Latinos in Florida.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=300&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Roberto Silva',
    origin: 'Bogotá, Colombia',
    text: 'As a foreign investor, Grace provided me with all the guidance necessary to buy my first property in the USA. Her network of contacts was fundamental to success.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=300&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Ana Martinez',
    origin: 'Fort Lauderdale, FL',
    text: "Grace's property management service is excellent. It has saved me time and money while maximizing my rental income. A complete and reliable service.",
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&auto=format&fit=crop'
  }
];

export default function Testimonios() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonios.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonios.length) % testimonios.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from clients who have trusted us with their real estate investments
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center">
              {/* Client Photo */}
              <div className="mb-6">
                {testimonios[currentIndex].photo ? (
                  <img
                    src={testimonios[currentIndex].photo}
                    alt={testimonios[currentIndex].name}
                    className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-yellow-400"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full mx-auto bg-gradient-to-br from-blue-400 to-blue-600 border-4 border-yellow-400 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">
                      {testimonios[currentIndex].name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {renderStars(testimonios[currentIndex].rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
                "{testimonios[currentIndex].text}"
              </blockquote>

              {/* Client Info */}
              <div className="text-center">
                <div className="font-semibold text-gray-900 text-lg">
                  {testimonios[currentIndex].name}
                </div>
                <div className="text-gray-600">
                  {testimonios[currentIndex].origin}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-200"
          >
            <ChevronLeft size={24} className="text-gray-900" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-200"
          >
            <ChevronRight size={24} className="text-gray-900" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonios.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}