import { useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }
    
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    const serviceLabels: {[key: string]: string} = {
      compra: 'Property Purchase',
      venta: 'Property Sale',
      gestion: 'Management and Leasing',
      corporativo: 'Corporate Services',
      legal: 'Legal Services',
      proyecto: 'Custom Projects',
      consulta: 'General Consultation'
    };
    const subject = 'New Consultation Request';
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${serviceLabels[formData.service] || 'N/A'}\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:graceviz2001@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleWhatsApp = () => {
    const message = "Hello, I would like to schedule a free consultation about real estate in Florida.";
    const whatsappUrl = `https://wa.me/17542043713?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+17542043713';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:graceviz2001@gmail.com';
  };

  return (
    <section
      id="contacto"
      className="relative py-20 text-white bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1920&auto=format&fit=crop)'
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Start Your Real Estate Investment Today
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Schedule a free consultation with no obligation. We'll guide you through every step of the process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-700 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-blue-100">754-204-3713</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-700 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-blue-100">graceviz2001@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-700 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Main Office</div>
                  <div className="text-blue-100">
                    1200 S. Pine Island Rd Suite 600<br />
                    Plantation, FL 33324
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative Contact Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={handleWhatsApp}
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white py-4 px-6 rounded-lg font-bold transition-all duration-200 active:scale-95 active:shadow-inner flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Direct WhatsApp
              </button>
              <button
                onClick={handleCall}
                className="bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-white py-3 px-4 rounded-lg font-bold transition-all duration-200 active:scale-95 active:shadow-inner flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </button>
              <button
                onClick={handleEmail}
                className="bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-white py-3 px-4 rounded-lg font-bold transition-all duration-200 active:scale-95 active:shadow-inner flex items-center justify-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 text-gray-900">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="text-green-600 mb-4">
                  <Send size={48} className="mx-auto" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  Your message has been sent successfully. We will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone (with international code) *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Ex: +1 754-204-3713"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service of Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent ${
                      errors.service ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a service</option>
                    <option value="compra">Property Purchase</option>
                    <option value="venta">Property Sale</option>
                    <option value="gestion">Management and Leasing</option>
                    <option value="corporativo">Corporate Services</option>
                    <option value="legal">Legal Services</option>
                    <option value="proyecto">Custom Projects</option>
                    <option value="consulta">General Consultation</option>
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-600">{errors.service}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Brief Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your real estate needs..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-4 px-6 rounded-lg font-bold transition-all duration-200 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}