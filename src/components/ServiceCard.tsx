
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price?: number;
  route: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  price,
  route
}) => {
  return (
    <div className="service-card h-full flex flex-col">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-50 text-brand-600 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm flex-grow mb-4">{description}</p>
      
      {price && (
        <div className="mb-4">
          <span className="text-xl font-bold text-brand-600">₹{price.toLocaleString()}</span>
          <span className="text-sm text-gray-600 ml-1">onwards</span>
        </div>
      )}
      
      <Link 
        to={route} 
        className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium text-sm group mt-auto"
      >
        Know More
        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
      </Link>
    </div>
  );
};

export default ServiceCard;
