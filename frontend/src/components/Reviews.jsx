import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Mike Johnson",
      text: "Eddie's is the only place I trust with my boat. Fair pricing, honest service, and they always get me back on the water fast. Eddie McPheeters knows his stuff!",
      rating: 5,
      platform: "Google"
    },
    {
      name: "Sarah Martinez",
      text: "Best boat shop in Southern Arizona! They rebuilt my engine and it runs better than new. The quality of work is outstanding and the prices are more than fair.",
      rating: 5,
      platform: "Yelp"
    },
    {
      name: "David Thompson",
      text: "I've been bringing my boats to Eddie's for over 15 years. Their expertise in inboard marine engines is unmatched. Always professional, always honest.",
      rating: 5,
      platform: "Google"
    },
    {
      name: "Jennifer Lee",
      text: "Eddie's did a complete restoration on my vintage boat. The custom work and attention to detail was incredible. Worth every penny!",
      rating: 5,
      platform: "Yelp"
    },
    {
      name: "Robert Garcia",
      text: "Fast turnaround and excellent communication. They diagnosed the problem quickly and had me back on the lake in no time. Highly recommend!",
      rating: 5,
      platform: "Google"
    },
    {
      name: "Tom Anderson",
      text: "Eddie McPheeters and his team are true professionals. Their performance rigging work transformed my boat. Best decision I ever made!",
      rating: 5,
      platform: "Google"
    },
    {
      name: "Lisa Brown",
      text: "Honest, reliable, and fair pricing - everything you want in a boat shop. They've serviced our family boats for years and never disappoint.",
      rating: 5,
      platform: "Yelp"
    },
    {
      name: "Chris Wilson",
      text: "The custom fabrication work they did was perfect. Eddie's has the skills and experience to handle any marine project. Couldn't be happier!",
      rating: 5,
      platform: "Google"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(timer);
  }, [reviews.length]);

  const review = reviews[currentReview];

  return (
    <div className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="min-h-[120px] flex items-center justify-center">
              <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed transition-opacity duration-500">
                "{review.text}"
              </blockquote>
            </div>
            <div className="mt-4">
              <p className="font-bold text-gray-900">{review.name}</p>
              <p className="text-sm text-gray-500">{review.platform} Review</p>
            </div>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentReview ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
