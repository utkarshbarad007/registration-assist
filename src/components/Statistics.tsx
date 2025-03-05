
import React from 'react';

const Statistics = () => {
  return (
    <div className="bg-brand-700 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">10,000+</div>
            <div className="text-brand-200">Businesses Registered</div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-brand-200">Customer Satisfaction</div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-brand-200">Years Experience</div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-brand-200">Expert Professionals</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
