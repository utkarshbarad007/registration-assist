
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="bg-brand-600 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Business Journey?</h2>
          <p className="text-xl opacity-90 mb-8">
            Get expert assistance for business registration, compliance, and legal services.
            Our team is ready to help you navigate the complexities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-brand-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium flex items-center transition-colors duration-200"
            >
              Get Started <ArrowRight size={18} className="ml-2" />
            </Link>
            <a
              href="tel:+918956214625"
              className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
