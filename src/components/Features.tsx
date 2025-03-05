
import React from 'react';
import { Clock, Briefcase, Headphones, Shield, Award, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Clock size={24} className="text-brand-600" />,
      title: "Quick Turnaround",
      description: "Get your business registered and compliant in minimal time with our streamlined processes"
    },
    {
      icon: <Briefcase size={24} className="text-brand-600" />,
      title: "End-to-End Support",
      description: "We handle everything from documentation to follow-ups with government departments"
    },
    {
      icon: <Headphones size={24} className="text-brand-600" />,
      title: "Expert Assistance",
      description: "Our team of seasoned professionals provide expert guidance throughout the process"
    },
    {
      icon: <Shield size={24} className="text-brand-600" />,
      title: "Secure & Confidential",
      description: "Your business information is treated with utmost confidentiality and security"
    },
    {
      icon: <Award size={24} className="text-brand-600" />,
      title: "Quality Assurance",
      description: "We ensure every service meets the highest quality standards with attention to detail"
    },
    {
      icon: <Users size={24} className="text-brand-600" />,
      title: "Dedicated Support",
      description: "Get a dedicated relationship manager for all your business needs and queries"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">We deliver excellence in business services with these key advantages</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-brand-50 rounded-full">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
