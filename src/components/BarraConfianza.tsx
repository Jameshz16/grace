import { Calendar, Home, Users, Award } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// Custom hook for counter animation
function useAnimatedCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

// Animated Counter Component
function AnimatedCounter({ number, text, icon: Icon, index }: { number: string, text: string, icon: any, index: number }) {
  // Extract numeric value from strings like "15+", "500+", "100%"
  const numericValue = parseInt(number.replace(/\D/g, '')) || 0;
  const suffix = number.replace(/[0-9]/g, '');
  const { count, ref } = useAnimatedCounter(numericValue);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      ref={ref} 
      className={`text-center transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <div className="text-3xl font-bold text-blue-900 mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600 font-medium">
        {text}
      </div>
    </div>
  );
}

export default function BarraConfianza() {
  const stats = [
    {
      icon: Calendar,
      number: "15+",
      text: "years of experience"
    },
    {
      icon: Home,
      number: "500+",
      text: "properties sold"
    },
    {
      icon: Users,
      number: "100%",
      text: "Spanish-speaking service"
    },
    {
      icon: Award,
      number: "360°",
      text: "comprehensive service"
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              number={stat.number}
              text={stat.text}
              icon={stat.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}