
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
    city: '',
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
      city: '',
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

        <div>
          <label htmlFor="city" className="sr-only">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>

        {!serviceName && (
          <div>
            <label htmlFor="interestedService" className="sr-only">Interested Service</label>
            <input
              type="text"
              id="interestedService"
              name="interestedService"
              placeholder="Interested Service"
              value={formData.interestedService}
              onChange={handleInputChange}
              className="form-input"
            />
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
