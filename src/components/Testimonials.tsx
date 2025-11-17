import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  photo?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jennifer Martinez',
    location: 'Beverly Hills',
    text: 'Alexandra exceeded all our expectations. Her market knowledge and negotiation skills helped us secure our dream home in Beverly Hills. Truly exceptional service!',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Robert Chen',
    location: 'Bel Air',
    text: 'Working with Alexandra was an absolute pleasure. She made the entire process seamless and found us the perfect property that met all our requirements.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Sarah Thompson',
    location: 'Holmby Hills',
    text: 'Alexandra\'s professionalism and attention to detail are unmatched. She sold our property above asking price within weeks. Highly recommended!',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=300&auto=format&fit=crop'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear what our valued clients have to say about their experience
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center">
              {/* Client Photo */}
              <div className="mb-6">
                {testimonials[currentIndex].photo ? (
                  <img
                    src={testimonials[currentIndex].photo}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-yellow-400"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full mx-auto bg-gradient-to-br from-gray-400 to-gray-600 border-4 border-yellow-400 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">
                      {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Client Info */}
              <div className="text-center">
                <div className="font-semibold text-gray-900 text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentIndex].location}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-200 active:scale-95 active:shadow-inner"
          >
            <ChevronLeft size={24} className="text-gray-900" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-200 active:scale-95 active:shadow-inner"
          >
            <ChevronRight size={24} className="text-gray-900" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
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