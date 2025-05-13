
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';
import FAQSection from '@/components/FAQSection';

const Index = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      text: "The birth chart analysis was incredibly accurate! It provided insights into my career path that helped me make a major decision. Highly recommended.",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi, India",
      text: "I was skeptical at first, but the personality traits described in my chart were spot on. The relationship compatibility advice was particularly helpful.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4
    },
    {
      name: "Ananya Patel",
      location: "Bangalore, India",
      text: "The predictions about my career transition were surprisingly accurate. I appreciate the depth of the analysis and how it connected ancient wisdom with modern life.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="cosmic-bg relative py-20 md:py-32">
        <div className="absolute inset-0 bg-stars-pattern opacity-30"></div>
        <div className="astro-container relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-playfair">
                Discover Your <span className="text-astro-gold">Cosmic</span> Destiny
              </h1>
              <p className="text-lg text-gray-200 mb-8 max-w-lg mx-auto md:mx-0">
                Unlock the secrets of your life path with our AI-powered Vedic astrology. 
                Get personalized insights based on your unique birth chart.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Button className="astro-button-gold px-8 py-6 text-lg">
                  <Link to="/kundli">Know Your Destiny Now</Link>
                </Button>
                <Button variant="outline" className="border-astro-gold/50 text-white hover:bg-astro-gold/10 px-8 py-6 text-lg">
                  <Link to="/#about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-astro-gold/20 rounded-full blur-3xl animate-pulse"></div>
                <img 
                  src="https://img.freepik.com/free-vector/realistic-astrology-wheel-with-zodiac-symbols_23-2149409051.jpg" 
                  alt="Vedic Astrology Chart" 
                  className="w-64 h-64 md:w-80 md:h-80 object-contain relative z-10 animate-star-shine"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="astro-section bg-white" id="features">
        <div className="astro-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-astro-blue mb-4">
              Astrology Reimagined with AI
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              AstroDestiny combines ancient Vedic knowledge with modern AI technology
              to provide you with deep, personalized astrological insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="astro-card text-center">
              <div className="bg-astro-blue-light/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-astro-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-astro-blue mb-3">Accurate Birth Charts</h3>
              <p className="text-gray-600">
                Our precise calculations create detailed Vedic birth charts based on your exact birth details.
              </p>
            </div>
            
            <div className="astro-card text-center">
              <div className="bg-astro-blue-light/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-astro-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-astro-blue mb-3">Personalized Insights</h3>
              <p className="text-gray-600">
                Receive tailored interpretations of your chart covering career, relationships, health, and more.
              </p>
            </div>
            
            <div className="astro-card text-center">
              <div className="bg-astro-blue-light/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-astro-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-astro-blue mb-3">Future Predictions</h3>
              <p className="text-gray-600">
                Get forecasts on upcoming planetary transits and their potential impact on your life.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="astro-section bg-astro-white-cream" id="about">
        <div className="astro-container">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://img.freepik.com/free-photo/astrological-zodiac-signs-inside-horoscope-circle_53876-132338.jpg" 
                alt="Vedic Astrology" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold text-astro-blue mb-6">
                About AstroDestiny
              </h2>
              <p className="text-gray-600 mb-6">
                AstroDestiny bridges ancient Vedic astrological wisdom with modern technology. 
                Our platform leverages advanced AI to generate accurate birth charts and provide 
                deep, personalized interpretations of your cosmic blueprint.
              </p>
              <p className="text-gray-600 mb-6">
                Vedic astrology, originating thousands of years ago in India, offers profound insights 
                into human life and potential. By analyzing the positions of celestial bodies at the exact 
                time of your birth, we can unveil patterns and potentials that influence your journey.
              </p>
              <p className="text-gray-600">
                Our mission is to make this ancient wisdom accessible and relevant to modern life, 
                helping you navigate your path with greater awareness and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="astro-section cosmic-bg relative">
        <div className="absolute inset-0 bg-stars-pattern opacity-30"></div>
        <div className="astro-container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Discover Your <span className="text-astro-gold">Cosmic Path</span>?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Get your personalized Vedic astrological reading today and gain insights 
            into your life's journey, purpose, and potential.
          </p>
          <Button className="astro-button-gold px-8 py-6 text-lg">
            <Link to="/kundli">Generate Your Kundli Now</Link>
          </Button>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="astro-section bg-white" id="testimonials">
        <div className="astro-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-astro-blue mb-4">
              What Our Users Say
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover how AstroDestiny has helped people gain clarity and guidance
              through personalized Vedic astrological insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                location={testimonial.location}
                text={testimonial.text}
                image={testimonial.image}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Coming Soon */}
      <section className="astro-section bg-astro-white-cream">
        <div className="astro-container text-center">
          <div className="astro-card max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-astro-blue mb-4">
              Chat with Astrologer — Coming Soon
            </h3>
            <p className="text-gray-600 mb-6">
              We're working on an exciting new feature that will allow you to chat directly 
              with our AI astrologer for personalized guidance and answers to your specific questions.
            </p>
            <div className="bg-astro-blue-light/10 rounded-lg p-4 inline-block">
              <p className="text-astro-blue font-medium">
                Join our waiting list to be the first to know when this feature launches!
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
