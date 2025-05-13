
interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  image: string;
  rating: number;
}

const TestimonialCard = ({ name, location, text, image, rating }: TestimonialCardProps) => {
  const stars = Array(5).fill(0).map((_, i) => (
    <svg
      key={i}
      className={`w-5 h-5 ${i < rating ? 'text-astro-gold' : 'text-gray-300'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ));

  return (
    <div className="astro-card hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <img
          className="w-12 h-12 rounded-full mr-4 object-cover"
          src={image}
          alt={`${name}'s testimonial`}
        />
        <div>
          <p className="font-medium text-astro-blue-dark">{name}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      <div className="flex mb-3">{stars}</div>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

export default TestimonialCard;
