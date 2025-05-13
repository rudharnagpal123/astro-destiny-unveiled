
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface KundliData {
  name: string;
  dob: string;
  birthTime: string;
  birthPlace: string;
}

const Results = () => {
  const navigate = useNavigate();
  const [kundliData, setKundliData] = useState<KundliData | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Get data from session storage
    const storedData = sessionStorage.getItem('kundliData');
    
    if (!storedData) {
      navigate('/kundli');
      return;
    }
    
    setKundliData(JSON.parse(storedData));
    
    // Simulate loading time for analysis generation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  if (!kundliData) {
    return null;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="astro-section flex-1 bg-white">
        <div className="astro-container">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-astro-blue mb-4">
              Your Vedic Astrology Analysis
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Based on your birth details, we've created your personalized Vedic birth chart and astrological insights.
            </p>
          </div>
          
          {loading ? (
            <div className="astro-card text-center py-16">
              <div className="inline-block relative w-24 h-24">
                <div className="absolute top-0 left-0 right-0 bottom-0">
                  <div className="w-full h-full rounded-full border-4 border-astro-blue-light/30 border-t-astro-gold animate-spin"></div>
                </div>
              </div>
              <h3 className="text-xl font-medium mt-6 text-astro-blue">
                Analyzing celestial patterns...
              </h3>
              <p className="text-gray-600 mt-2">
                We're calculating planetary positions and generating your personalized insights.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="astro-card sticky top-24">
                  <h3 className="text-xl font-bold text-astro-blue mb-4">Birth Details</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p className="font-medium">{kundliData.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date of Birth</p>
                      <p className="font-medium">{new Date(kundliData.dob).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Time of Birth</p>
                      <p className="font-medium">{kundliData.birthTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Place of Birth</p>
                      <p className="font-medium">{kundliData.birthPlace}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-astro-gold/20">
                    <h4 className="font-medium text-astro-blue mb-3">Your Birth Chart</h4>
                    <div className="bg-astro-blue-light/5 rounded-lg p-4 flex justify-center">
                      <img 
                        src="https://img.freepik.com/free-vector/realistic-astrology-wheel-with-zodiac-symbols_23-2149409051.jpg" 
                        alt="Birth Chart" 
                        className="w-full max-w-[200px] h-auto"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Vedic birth chart based on your details
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-astro-gold/20">
                    <h4 className="font-medium text-astro-blue mb-3">Key Planetary Positions</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Sun</span>
                        <span className="font-medium">Taurus</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Moon</span>
                        <span className="font-medium">Libra</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ascendant</span>
                        <span className="font-medium">Gemini</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Mercury</span>
                        <span className="font-medium">Aries</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Venus</span>
                        <span className="font-medium">Pisces</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="astro-card mb-8">
                  <h2 className="text-2xl font-bold text-astro-blue mb-4">
                    Personalized Analysis for {kundliData.name}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Based on your Vedic birth chart, we've generated the following insights about various aspects of your life. 
                    These interpretations combine ancient Vedic astrological wisdom with modern analysis.
                  </p>
                  
                  <Tabs defaultValue="personality" className="w-full">
                    <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-6">
                      <TabsTrigger value="personality">Personality</TabsTrigger>
                      <TabsTrigger value="career">Career</TabsTrigger>
                      <TabsTrigger value="relationships">Relationships</TabsTrigger>
                      <TabsTrigger value="health">Health</TabsTrigger>
                      <TabsTrigger value="finance">Finance</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="personality" className="space-y-4">
                      <h3 className="text-lg font-medium text-astro-blue">Your Core Personality</h3>
                      <p>With your Gemini ascendant, you present yourself to the world as intellectually curious, communicative, and adaptable. You have a natural ability to see multiple perspectives and adapt to changing situations.</p>
                      <p>Your Sun in Taurus gives you a grounded, practical nature. You value stability and have a strong determination once you set your mind to something. This creates an interesting dynamic with your more adaptable ascendant.</p>
                      <p>The Moon in Libra indicates that emotionally, you seek harmony and balance. You may avoid conflict and strive to create peaceful environments. Your emotional well-being is tied to your relationships and aesthetic surroundings.</p>
                      <h4 className="text-md font-medium text-astro-blue mt-6">Key Strengths</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Intellectual versatility and quick thinking</li>
                        <li>Practical approach to achieving goals</li>
                        <li>Natural diplomatic abilities</li>
                        <li>Strong aesthetic sensibilities</li>
                        <li>Ability to adapt while maintaining core values</li>
                      </ul>
                    </TabsContent>
                    
                    <TabsContent value="career" className="space-y-4">
                      <h3 className="text-lg font-medium text-astro-blue">Career Path & Professional Life</h3>
                      <p>Mercury positioned in Aries in your chart indicates a mind that works quickly and decisively. You excel in roles that require quick thinking, initiative, and leadership in communications.</p>
                      <p>Your 10th house influences suggest success in fields requiring both communication skills and practical application. Potential career paths include publishing, teaching, consulting, or any field where you can use your communication skills while building something tangible.</p>
                      <p>The current planetary transit of Jupiter through your house of career indicates that the next 12 months represent a significant growth period professionally. This is an excellent time for advancement, taking on new responsibilities, or even changing direction.</p>
                      <h4 className="text-md font-medium text-astro-blue mt-6">Favorable Career Periods</h4>
                      <p>The most favorable period for career advancement appears to be from September 2025 to March 2026, when Jupiter's aspect on your 10th house creates opportunities for growth and recognition.</p>
                    </TabsContent>
                    
                    <TabsContent value="relationships" className="space-y-4">
                      <h3 className="text-lg font-medium text-astro-blue">Relationships & Compatibility</h3>
                      <p>Venus in Pisces in your chart creates a romantic, compassionate, and somewhat idealistic approach to relationships. You seek deep emotional and spiritual connections with partners.</p>
                      <p>Your 7th house of partnerships is influenced by Saturn, suggesting you take relationships seriously and may be cautious about commitment. Once committed, you are loyal and dedicated.</p>
                      <p>You tend to be most compatible with individuals who can provide both intellectual stimulation and emotional depth. Partners who appreciate both conversation and quiet intimacy will resonate with your relationship needs.</p>
                      <h4 className="text-md font-medium text-astro-blue mt-6">Compatibility</h4>
                      <p>You tend to have strong compatibility with Cancer, Scorpio, and Capricorn signs. These signs complement your need for both emotional connection and practical stability.</p>
                    </TabsContent>
                    
                    <TabsContent value="health" className="space-y-4">
                      <h3 className="text-lg font-medium text-astro-blue">Health & Well-being</h3>
                      <p>Your chart indicates generally good vitality, with the Sun well-positioned. However, Mercury's placement suggests potential sensitivity in the nervous system and respiratory areas.</p>
                      <p>You may benefit from practices that calm the mind and strengthen the respiratory system, such as pranayama (yogic breathing exercises) or regular meditation.</p>
                      <p>The Moon's position in Libra connects your emotional well-being to your environment. Creating harmonious, beautiful surroundings is not just an aesthetic preference but important for your health.</p>
                      <h4 className="text-md font-medium text-astro-blue mt-6">Health Focus Areas</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Nervous system - manage stress through regular relaxation</li>
                        <li>Respiratory system - breathing exercises beneficial</li>
                        <li>Balance physical activity with adequate rest</li>
                        <li>Environment has strong impact on your well-being</li>
                      </ul>
                    </TabsContent>
                    
                    <TabsContent value="finance" className="space-y-4">
                      <h3 className="text-lg font-medium text-astro-blue">Financial Outlook</h3>
                      <p>Your 2nd house of finances shows promising aspects, indicating a natural ability to attract resources and build wealth over time. You likely have good financial instincts.</p>
                      <p>Jupiter's current transit enhances your earning potential, particularly through communication-related work, teaching, or consulting. This is a good period to seek raises or expand income streams.</p>
                      <p>Your financial style tends to be a blend of practical saving (Taurus influence) and occasional indulgence in quality experiences or beautiful items (Libra influence).</p>
                      <h4 className="text-md font-medium text-astro-blue mt-6">Financial Periods</h4>
                      <p>The period from July 2025 to December 2025 appears particularly favorable for financial growth and new opportunities. This would be an excellent time for investments or launching new financial initiatives.</p>
                    </TabsContent>
                  </Tabs>
                </div>
                
                <div className="astro-card">
                  <h3 className="text-xl font-bold text-astro-blue mb-4">Your 12-Month Forecast</h3>
                  <p className="text-gray-600 mb-6">
                    Based on planetary transits and their aspects to your natal chart, here's what the next 12 months may hold for you.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-astro-gold pl-4">
                      <h4 className="font-medium text-astro-blue">June - August 2025</h4>
                      <p className="text-gray-600">
                        Mercury's transit through your communication sector amplifies your natural abilities. 
                        A good time for networking, learning new skills, or starting projects requiring mental agility.
                        Watch for minor challenges in family relationships around late July.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-astro-blue pl-4">
                      <h4 className="font-medium text-astro-blue">September - November 2025</h4>
                      <p className="text-gray-600">
                        Jupiter's favorable aspect to your career house brings growth opportunities professionally.
                        Be open to expansion and new responsibilities. Financial prospects improve significantly
                        during this period, possibly through a promotion or new income source.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-astro-gold pl-4">
                      <h4 className="font-medium text-astro-blue">December 2025 - February 2026</h4>
                      <p className="text-gray-600">
                        Saturn's transit brings focus to home and foundations. This may be a time of
                        establishing greater security or making important decisions about living situations.
                        Relationships deepen during this period, with meaningful conversations and connections.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-astro-blue pl-4">
                      <h4 className="font-medium text-astro-blue">March - May 2026</h4>
                      <p className="text-gray-600">
                        Venus brings harmony to your relationship sector in April-May, an excellent time
                        for romantic developments or strengthening existing bonds. Health improves with
                        attention to diet and exercise routines established earlier in the year.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-astro-gold/20">
                    <h4 className="font-medium text-astro-blue mb-3">Recommended Focus Areas</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Take advantage of communication opportunities throughout June-August</li>
                      <li>Prepare for career advancement around September-October</li>
                      <li>Pay attention to home and family matters in December-January</li>
                      <li>Focus on relationships and self-care in April-May</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Button className="astro-button-primary mr-4">
                    Save Analysis
                  </Button>
                  <Button variant="outline" className="border-astro-blue text-astro-blue">
                    Share Results
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Results;
