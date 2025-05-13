
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface FormData {
  name: string;
  dob: string;
  birthTime: string;
  birthPlace: string;
}

const KundliForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    dob: '',
    birthTime: '',
    birthPlace: ''
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.dob || !formData.birthTime || !formData.birthPlace) {
      toast.error("Please fill in all fields");
      return;
    }
    
    setLoading(true);
    
    // Simulate loading/processing
    setTimeout(() => {
      // Store form data in session storage to use in results page
      sessionStorage.setItem('kundliData', JSON.stringify(formData));
      
      setLoading(false);
      navigate('/results');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="astro-section flex-1 bg-white">
        <div className="astro-container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-astro-blue mb-4">
                Generate Your Kundli
              </h1>
              <p className="text-gray-600">
                Enter your birth details to discover your cosmic blueprint and receive
                personalized astrological insights.
              </p>
            </div>
            
            <div className="astro-card">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input
                      id="dob"
                      name="dob"
                      type="date"
                      value={formData.dob}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="birthTime">Time of Birth</Label>
                    <Input
                      id="birthTime"
                      name="birthTime"
                      type="time"
                      value={formData.birthTime}
                      onChange={handleChange}
                    />
                    <p className="text-xs text-gray-500">
                      Accurate birth time is important for precise readings
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="birthPlace">Place of Birth</Label>
                    <Input
                      id="birthPlace"
                      name="birthPlace"
                      placeholder="City, State, Country"
                      value={formData.birthPlace}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full astro-button-gold py-6"
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Generating Kundli...
                        </div>
                      ) : "Generate Kundli"}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
            
            <div className="mt-8 text-center text-gray-600">
              <p className="mb-2">Your data is private and secure.</p>
              <p className="text-sm">
                For the most accurate reading, please provide your exact birth time and location.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default KundliForm;
