
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CRMContactForm from './CRMContactForm';
import { ArrowLeft, ChevronRight, CheckCircle, Clock, Shield, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceDetailProps {
  title: string;
  description: string;
  price: number;
  features: string[];
  requirements: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  category: string;
  serviceType: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  title,
  description,
  price,
  features,
  requirements,
  process,
  faqs,
  category,
  serviceType
}) => {
  return (
    <div>
      <Navbar />
      
      <div className="bg-brand-600 pt-10 pb-10 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="flex items-center text-brand-100 mb-4">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight size={16} className="mx-2" />
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                <ChevronRight size={16} className="mx-2" />
                <span>{category}</span>
                <ChevronRight size={16} className="mx-2" />
                <span className="text-white">{serviceType}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
              <p className="text-xl text-brand-100 mb-6 max-w-3xl">{description}</p>
              <div className="flex items-center">
                <span className="text-3xl font-bold text-white">₹{price.toLocaleString()}</span>
                <span className="text-brand-200 ml-2">onwards</span>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-xl">
                <CRMContactForm 
                  title={`Get ${title} Now`}
                  subtitle="Fill the form for expert assistance"
                  serviceName={serviceType}
                  compact={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="lg:col-span-3">
          {/* Features Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-brand-600 flex-shrink-0 mt-1" size={20} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Documents Required</h2>
            <ul className="space-y-3">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </span>
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Registration Process</h2>
            <div className="space-y-6">
              {process.map((step, index) => (
                <div key={index} className="flex">
                  <div className="mr-4">
                    <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    {index < process.length - 1 && (
                      <div className="h-full w-0.5 bg-brand-600 mx-auto my-2"></div>
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12 bg-brand-50 p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 mb-3">
                  <Clock size={24} />
                </div>
                <h3 className="font-semibold mb-2">Fast Processing</h3>
                <p className="text-sm text-gray-600">Quick turnaround time with minimal delays</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 mb-3">
                  <Shield size={24} />
                </div>
                <h3 className="font-semibold mb-2">100% Accuracy</h3>
                <p className="text-sm text-gray-600">Error-free documentation and filing</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 mb-3">
                  <BadgeCheck size={24} />
                </div>
                <h3 className="font-semibold mb-2">Expert Guidance</h3>
                <p className="text-sm text-gray-600">Professional assistance throughout the process</p>
              </div>
            </div>
          </div>

          {/* FAQs Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
