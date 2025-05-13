
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-astro-gold/10">
      <div className="astro-container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-2xl font-playfair font-bold text-astro-blue">
              <span className="text-astro-gold">Astro</span>Destiny
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-astro-blue-dark hover:text-astro-gold transition-colors">
              Home
            </Link>
            <Link to="/kundli" className="text-astro-blue-dark hover:text-astro-gold transition-colors">
              Get Your Kundli
            </Link>
            <Link to="/#about" className="text-astro-blue-dark hover:text-astro-gold transition-colors">
              About
            </Link>
            <Link to="/#testimonials" className="text-astro-blue-dark hover:text-astro-gold transition-colors">
              Testimonials
            </Link>
            <Link to="/#faq" className="text-astro-blue-dark hover:text-astro-gold transition-colors">
              FAQs
            </Link>
            <Button className="astro-button-primary px-6 py-2">
              <Link to="/kundli">Start Now</Link>
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="text-astro-blue">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-astro-blue-dark hover:text-astro-gold px-4 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/kundli" 
                className="text-astro-blue-dark hover:text-astro-gold px-4 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Your Kundli
              </Link>
              <Link 
                to="/#about" 
                className="text-astro-blue-dark hover:text-astro-gold px-4 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/#testimonials" 
                className="text-astro-blue-dark hover:text-astro-gold px-4 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                to="/#faq" 
                className="text-astro-blue-dark hover:text-astro-gold px-4 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQs
              </Link>
              <Button className="astro-button-primary mx-4">
                <Link to="/kundli" onClick={() => setIsMenuOpen(false)}>
                  Start Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
