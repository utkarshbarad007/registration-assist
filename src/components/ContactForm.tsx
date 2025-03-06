import React, { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import OTPVerification from './OTPVerification';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/custom-button";

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

  const [isVerifyingPhone, setIsVerifyingPhone] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (name === 'mobile') {
      setIsPhoneVerified(false);
    }
  };

  const handleVerifyPhone = () => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.mobile)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive",
      });
      return;
    }
    
    setIsVerifyingPhone(true);
  };

  const handleVerificationComplete = (isVerified: boolean) => {
    setIsPhoneVerified(isVerified);
    setIsVerifyingPhone(false);
    
    if (isVerified) {
      toast({
        title: "Phone Verified",
        description: "Your phone number has been successfully verified.",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isPhoneVerified) {
      toast({
        title: "Verification Required",
        description: "Please verify your phone number before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    console.log('Form submitted:', formData);
    setTimeout(() => {
      toast({
        title: "Thank you for your inquiry",
        description: "Our team will contact you shortly.",
      });
      
      setFormData({
        name: '',
        email: '',
        mobile: '',
        interestedService: serviceName || '',
        whatsappUpdates: false
      });
      setIsPhoneVerified(false);
    }, 1000);
  };

  return (
    <>
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

          <div className="flex space-x-2">
            <div className="flex-1">
              <label htmlFor="mobile" className="sr-only">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleInputChange}
                className={`form-input ${isPhoneVerified ? 'border-green-500' : ''}`}
                required
                maxLength={10}
              />
            </div>
            <Button
              type="button"
              onClick={handleVerifyPhone}
              variant={isPhoneVerified ? "outline" : "default"}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                isPhoneVerified
                  ? 'bg-green-100 text-green-700 border-green-200'
                  : ''
              }`}
              disabled={isPhoneVerified || !formData.mobile || formData.mobile.length !== 10}
            >
              {isPhoneVerified ? 'Verified ✓' : 'Verify'}
            </Button>
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

          <Button
            type="submit"
            className="w-full btn-primary py-3 font-semibold"
            disabled={!isPhoneVerified}
          >
            GET STARTED NOW
          </Button>
          
          {!isPhoneVerified && (
            <p className="text-xs text-center text-amber-600">
              Please verify your phone number before submitting
            </p>
          )}
        </form>
      </div>

      <Dialog open={isVerifyingPhone} onOpenChange={setIsVerifyingPhone}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Phone Verification</DialogTitle>
          </DialogHeader>
          
          <OTPVerification 
            phoneNumber={formData.mobile} 
            onVerificationComplete={handleVerificationComplete} 
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactForm;
