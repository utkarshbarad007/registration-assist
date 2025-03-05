
import React, { useState } from 'react';
import { toast } from '@/hooks/use-toast';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
  serviceName?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  title = "Get Quote Instantly", 
  subtitle = "Fill the form and our team will contact you", 
  compact = false,
  serviceName
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    interestedService: serviceName || '',
    whatsappUpdates: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would usually send the data to your backend
    
    // Show success message
    toast({
      title: "Thank you for your inquiry",
      description: "Our team will contact you shortly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      mobile: '',
      interestedService: serviceName || '',
      whatsappUpdates: false
    });
  };

  return (
    <div className={`glass-card ${compact ? 'p-5' : 'p-6 md:p-8'}`}>
      <div className="text-center mb-6">
        <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-bold text-gray-800`}>{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>

        <div>
          <label htmlFor="mobile" className="sr-only">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>

        {serviceName ? (
          <input type="hidden" name="interestedService" value={serviceName} />
        ) : (
          <div>
            <label htmlFor="interestedService" className="sr-only">Interested Service</label>
            <select
              id="interestedService"
              name="interestedService"
              value={formData.interestedService}
              onChange={(e) => setFormData(prev => ({ ...prev, interestedService: e.target.value }))}
              className="form-input"
            >
              <option value="">Select a Service</option>
              <optgroup label="Start Your Business">
                <option value="Private Limited Company">Private Limited Company</option>
                <option value="One Person Company">One Person Company</option>
                <option value="Public Limited Company">Public Limited Company</option>
                <option value="Foreign Subsidiary">Foreign Subsidiary</option>
                <option value="LLP Registration">LLP Registration</option>
                <option value="Section 8 Company">Section 8 Company (NGO)</option>
                <option value="Nidhi Company">Nidhi Company</option>
                <option value="Chit Fund Company">Chit Fund Company</option>
                <option value="Producer Company">Producer Company</option>
              </optgroup>
              <optgroup label="Compliance Plan">
                <option value="Nidhi Company Compliance">Nidhi Company Compliance</option>
                <option value="LLP Basic Compliance">LLP Basic Compliance</option>
                <option value="LLP Advanced Compliance">LLP Advanced Compliance</option>
                <option value="Private Limited Compliance">Private Limited Compliance</option>
                <option value="OPC Compliance">OPC Compliance</option>
              </optgroup>
              <optgroup label="Trademark & IP">
                <option value="Trademark Registration">Trademark Registration</option>
                <option value="Trademark Renewal">Trademark Renewal</option>
                <option value="Trademark Opposition">Trademark Opposition</option>
                <option value="Trademark Assignment">Trademark Assignment</option>
                <option value="Copyright Registration">Copyright Registration</option>
              </optgroup>
              <optgroup label="Registration">
                <option value="GST Registration">GST Registration</option>
                <option value="MSME Registration">MSME Registration</option>
                <option value="Startup India Registration">Startup India Registration</option>
                <option value="Angel Tax Exemption">Angel Tax Exemption</option>
                <option value="80 IAC Tax Exemption">80 IAC Tax Exemption</option>
              </optgroup>
              <optgroup label="ISO Certification">
                <option value="ISO 9001:2015">ISO 9001:2015 (Quality Management)</option>
                <option value="ISO 22000:2018">ISO 22000:2018 (Food Safety)</option>
                <option value="ISO 14001:2015">ISO 14001:2015 (Environmental)</option>
                <option value="ISO 45001:2018">ISO 45001:2018 (Occupational)</option>
                <option value="ISO 13485:2016">ISO 13485:2016 (Medical Devices)</option>
                <option value="ISO 27001:2013">ISO 27001:2013 (Information Security)</option>
              </optgroup>
              <optgroup label="FSSAI">
                <option value="Basic FSSAI Registration">Basic FSSAI Registration</option>
                <option value="FSSAI State License">FSSAI State License</option>
                <option value="FSSAI Central License">FSSAI Central License</option>
              </optgroup>
            </select>
          </div>
        )}

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="whatsappUpdates"
            name="whatsappUpdates"
            checked={formData.whatsappUpdates}
            onChange={handleInputChange}
            className="h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
          />
          <label htmlFor="whatsappUpdates" className="text-sm text-gray-700">
            Get updates through WhatsApp
          </label>
        </div>

        <button
          type="submit"
          className="w-full btn-primary py-3 font-semibold"
        >
          GET STARTED NOW
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
