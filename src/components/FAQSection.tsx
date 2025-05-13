
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-astro-gold/20 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-lg text-astro-blue-dark">{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600 animate-fade-in">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What is a Kundli (birth chart)?",
      answer: "A Kundli or birth chart is a celestial snapshot of the sky at the moment of your birth. It shows the positions of planets, stars, and other celestial bodies relative to your birthplace. In Vedic astrology, this chart serves as a cosmic blueprint of your life, revealing insights about your personality, challenges, opportunities, and life path."
    },
    {
      question: "How accurate is AI-powered Vedic astrology?",
      answer: "Our AI system combines traditional Vedic astrological principles with advanced machine learning to provide personalized insights. While the planetary positions calculated are mathematically precise, the interpretation involves both traditional wisdom and AI analysis. The accuracy depends on the precision of your birth details (time, date, and location). Most users report high relevance in their readings when accurate information is provided."
    },
    {
      question: "Why do you need my exact birth time?",
      answer: "The exact birth time is crucial for creating an accurate Kundli. Even a difference of a few minutes can change important aspects of your chart, such as your ascendant (Lagna) and house positions. These elements are fundamental to providing precise astrological readings. If you don't know your exact birth time, our system can still provide insights, but with reduced precision for certain predictions."
    },
    {
      question: "Can AstroDestiny predict my future?",
      answer: "Rather than providing definitive predictions, AstroDestiny offers insights into your potentials, tendencies, and possible life paths based on planetary influences. Vedic astrology views the cosmos as influencing but not determining your life—you always have free will. Our readings highlight your strengths, challenges, and opportune periods for various activities, helping you make informed decisions."
    },
    {
      question: "How is Vedic astrology different from Western astrology?",
      answer: "Vedic astrology (Jyotish) differs from Western astrology in several key ways. It uses the sidereal zodiac (based on fixed star positions) rather than the tropical zodiac, resulting in planetary positions that differ by about 23 degrees. Vedic astrology places greater emphasis on the Moon sign and birth Nakshatra (lunar mansion) and incorporates remedial measures like gemstones, mantras, and rituals to mitigate challenging planetary influences."
    }
  ];

  return (
    <section className="astro-section bg-white" id="faq">
      <div className="astro-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-astro-blue mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our astrological services, Vedic astrology,
            and how AstroDestiny can help you understand your cosmic journey.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
