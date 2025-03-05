
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      company: "TechSphere Solutions",
      content: "I was apprehensive about the paperwork and legal formalities of registering my tech startup, but BusinessAssist made it incredibly simple. Their team guided me through the entire process and completed my Private Limited registration within 15 days. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Malhotra",
      company: "GreenEats",
      content: "Getting FSSAI registration for my food business was a breeze with BusinessAssist. Their experts took care of all documentation and follow-ups. I especially appreciated the regular updates and transparent communication throughout the process.",
      rating: 5,
    },
    {
      name: "Vijay Kapoor",
      company: "UrbanStyle",
      content: "I had been postponing my trademark registration for months due to the complicated process, but BusinessAssist simplified everything. Their team was professional, knowledgeable, and helped me protect my fashion brand's identity. Great service at a reasonable price!",
      rating: 4,
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've helped thousands of entrepreneurs establish and grow their businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <div className="inline-block bg-brand-50 px-4 py-2 rounded-full text-brand-700 font-medium">
            4.8/5 | 15,750+ Google Reviews
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
