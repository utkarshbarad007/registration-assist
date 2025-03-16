import React from 'react';
import CRMContactForm from './CRMContactForm';
import { CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-brand-700 to-brand-600 pt-16 pb-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -ml-10 -mb-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Your Trusted Partner for Business Setup & Compliance
            </h1>
            <p className="text-xl opacity-90 mb-6">
              We simplify business registration, compliance, and legal formalities so you can focus on growing your business.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <div className="flex items-start space-x-2">
                <CheckCircle className="text-brand-200 flex-shrink-0 mt-1" size={20} />
                <span className="opacity-90">Company Registration</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="text-brand-200 flex-shrink-0 mt-1" size={20} />
                <span className="opacity-90">Trademark Registration</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="text-brand-200 flex-shrink-0 mt-1" size={20} />
                <span className="opacity-90">GST & Compliance</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="text-brand-200 flex-shrink-0 mt-1" size={20} />
                <span className="opacity-90">ISO Certification</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#services" className="btn-primary">
                Explore Services
              </a>
              <a href="#about" className="btn-outline bg-white text-brand-600 hover:bg-gray-100">
                Learn More
              </a>
            </div>
          </div>

          <div className="lg:max-w-lg mx-auto w-full animate-slide-up">
            <CRMContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
