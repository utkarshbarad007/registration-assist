
import React from 'react';

interface CRMContactFormProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
  serviceName?: string;
}

const CRMContactForm: React.FC<CRMContactFormProps> = ({ 
  title = "Get Quote Instantly", 
  subtitle = "Fill the form and our team will contact you", 
  compact = false,
  serviceName
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg border border-gray-100 ${compact ? 'p-5' : 'p-6 md:p-8'}`}>
      <div className="text-center mb-6">
        <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-bold text-gray-800`}>{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
      </div>
      
      <div className="w-full">
        <iframe 
          src="https://crm.bizfile.in/forms/wtl/2d3ba62d97505923f206020c5bcdac25?styled=0" 
          className="w-full min-h-[500px] border-0" 
          title="CRM Contact Form"
        />
      </div>
    </div>
  );
};

export default CRMContactForm;
