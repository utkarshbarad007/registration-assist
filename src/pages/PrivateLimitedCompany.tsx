
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const PrivateLimitedCompany = () => {
  const serviceData = {
    title: "Private Limited Company Registration",
    description: "Start your business journey with the most preferred company structure that offers limited liability protection and high credibility in the market.",
    price: 6299,
    category: "Start Your Business",
    serviceType: "Private Limited Company",
    features: [
      "Limited Liability Protection for Shareholders",
      "Separate Legal Entity Status",
      "Perpetual Succession (Company continues despite changes in ownership)",
      "Enhanced Credibility and Trust in Market",
      "Ease of Raising Capital & Funds",
      "Tax Benefits & Savings",
      "Professional Corporate Image",
      "Transferable Ownership",
      "Ideal for Startups & Growing Businesses",
      "Greater Flexibility in Business Expansion"
    ],
    requirements: [
      "PAN Card & ID Proof (Aadhar) of all Directors",
      "Passport-sized photographs of all Directors",
      "Address Proof of all Directors (Utility Bill/Bank Statement)",
      "Residential Proof of Registered Office Address",
      "NOC from Owner if registered office is rented",
      "Digital Signature Certificate of all Directors",
      "Bank Statement/Utility Bill as Address Proof",
      "Details of Proposed Company Name (at least 2 options)",
      "Description of Business Activities",
      "Proposed Authorized Capital details"
    ],
    process: [
      {
        title: "Application & Name Approval",
        description: "We apply for Digital Signature Certificates (DSC) for all directors and reserve your company name through RUN (Reserve Unique Name) service on MCA portal."
      },
      {
        title: "Document Preparation",
        description: "Our team prepares all required documents including MOA (Memorandum of Association), AOA (Articles of Association), declarations and forms required for incorporation."
      },
      {
        title: "Filing with MCA",
        description: "We file the application with all required documents on the MCA portal for incorporation approval."
      },
      {
        title: "Certificate of Incorporation",
        description: "Once approved, the Registrar of Companies (ROC) issues the Certificate of Incorporation with CIN (Corporate Identity Number)."
      },
      {
        title: "Post-Incorporation Compliance",
        description: "We help you with PAN, TAN application, bank account opening, GST registration, and other post-incorporation requirements."
      }
    ],
    faqs: [
      {
        question: "How long does it take to register a Private Limited Company?",
        answer: "The entire process of Private Limited Company registration typically takes 10-15 working days from the date of submission of all required documents."
      },
      {
        question: "What is the minimum number of directors required?",
        answer: "A Private Limited Company requires a minimum of 2 directors and 2 shareholders. The same persons can be both directors and shareholders."
      },
      {
        question: "What is the minimum capital requirement?",
        answer: "There is no minimum capital requirement for registering a Private Limited Company in India. You can start with any capital amount based on your business needs."
      },
      {
        question: "Can a foreigner be a director in an Indian Private Limited Company?",
        answer: "Yes, a foreigner can be a director in an Indian Private Limited Company. However, at least one director must be a resident of India (stayed in India for 182 days or more in the previous calendar year)."
      },
      {
        question: "What are the compliance requirements after incorporation?",
        answer: "Post incorporation, a Private Limited Company needs to comply with various statutory requirements including filing annual returns, financial statements, holding board meetings, maintaining statutory registers, and more."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default PrivateLimitedCompany;
