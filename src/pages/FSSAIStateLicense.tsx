
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const FSSAIStateLicense = () => {
  const serviceData = {
    title: "FSSAI State License",
    description: "Comprehensive food safety license for medium-sized food businesses with annual turnover between Rs. 12 lakhs to Rs. 20 crores, operating within a single state.",
    price: 3499,
    category: "FSSAI",
    serviceType: "FSSAI State License",
    features: [
      "Valid for 1-5 Years",
      "14-Digit License Number",
      "Mandatory Display at Business Premises",
      "Limited to Single State Operations",
      "Suitable for Medium Food Businesses",
      "Includes Medium Scale Manufacturers",
      "Covers Distributors with State-wide Network",
      "Storage Facilities with Medium Capacity",
      "Restaurant Chains with Multiple Outlets in Same State",
      "Catering Services with Significant Operations"
    ],
    requirements: [
      "Identity Proof of Proprietor/Partners/Directors",
      "Address Proof of Business Premises",
      "Passport Size Photograph of Applicant",
      "Business Registration or Incorporation Certificate",
      "Property Ownership/Rent Agreement",
      "Partnership Deed/Memorandum of Association",
      "NOC from Local Authority",
      "List of Food Products Being Manufactured/Sold",
      "Food Safety Management Plan",
      "Layout Plan of Processing Unit",
      "Water Testing Report",
      "List of Equipment and Machinery",
      "Medical Fitness Certificates of Food Handlers"
    ],
    process: [
      {
        title: "Documentation Collection",
        description: "We collect all necessary documents and verify your eligibility for FSSAI State License."
      },
      {
        title: "Application Preparation",
        description: "Our experts complete the application form with accurate details of your food business operations."
      },
      {
        title: "Document Submission",
        description: "We submit your application with supporting documents on the FSSAI portal."
      },
      {
        title: "Fee Payment",
        description: "License fee is paid through the portal with our assistance."
      },
      {
        title: "Inspection Coordination",
        description: "We help coordinate the mandatory physical inspection by food safety officers."
      },
      {
        title: "Query Resolution",
        description: "Our team handles any queries or additional requirements from authorities."
      },
      {
        title: "License Issuance",
        description: "Upon successful verification and inspection, we help you obtain your FSSAI State License."
      }
    ],
    faqs: [
      {
        question: "Who needs an FSSAI State License?",
        answer: "Medium-sized food businesses with annual turnover between Rs. 12 lakhs to Rs. 20 crores operating within a single state, including restaurants with seating capacity over 10, medium-sized manufacturers, distributors with state-wide operations, and storage facilities."
      },
      {
        question: "How long does it take to get an FSSAI State License?",
        answer: "The process typically takes 20-30 working days after submission of all required documents, including the time required for physical inspection by food safety authorities."
      },
      {
        question: "Is physical inspection mandatory for FSSAI State License?",
        answer: "Yes, physical inspection by authorized food safety officers is mandatory for FSSAI State License. Our team helps prepare your premises for inspection and coordinates with authorities."
      },
      {
        question: "What is the validity period of FSSAI State License?",
        answer: "FSSAI State License can be obtained for 1 to 5 years based on your preference. Renewal application should be submitted at least 30 days before expiry."
      },
      {
        question: "Can I upgrade from Basic FSSAI Registration to State License?",
        answer: "Yes, if your business has grown and now has turnover exceeding Rs. 12 lakhs, you can upgrade from Basic FSSAI Registration to State License. Our team handles the entire upgrade process."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default FSSAIStateLicense;
