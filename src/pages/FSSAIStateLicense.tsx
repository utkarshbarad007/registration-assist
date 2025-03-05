
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const FSSAIStateLicense = () => {
  const serviceData = {
    title: "FSSAI State License",
    description: "Standard food safety license for medium food businesses with annual turnover between Rs. 12 lakhs to 20 crores, operating within a single state.",
    price: 3999,
    category: "FSSAI",
    serviceType: "FSSAI State License",
    features: [
      "Valid for 1-5 Years",
      "14-Digit License Number",
      "Mandatory Display at Business Premises",
      "Limited to Single State Operations",
      "Required for Medium Manufacturers",
      "Covers Medium Food Retailers",
      "Includes Distributors & Wholesalers",
      "Food Storage Units",
      "Transporters with Medium Fleet",
      "Access to Food Safety Training Tools"
    ],
    requirements: [
      "Business Registration Documents (Proprietorship/Partnership/LLP/Company)",
      "Identity & Address Proof of Proprietor/Partners/Directors",
      "Passport Size Photograph of Applicant",
      "Business Premises Ownership/Rent Agreement",
      "NOC from Local Municipality/Panchayat",
      "Partnership Deed/MOA & AOA (as applicable)",
      "Blue Print/Layout Plan of Manufacturing Unit",
      "List of Food Categories & Items",
      "List of Machinery & Equipment (for manufacturers)",
      "Water Test Report (for manufacturers)"
    ],
    process: [
      {
        title: "Documentation Collection",
        description: "We collect all necessary documents and verify your eligibility for State FSSAI License."
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
        title: "Inspection Preparation",
        description: "We help you prepare for the potential inspection by food safety authorities."
      },
      {
        title: "License Issuance",
        description: "Upon verification, approval, and fee payment, we help you obtain your State FSSAI License."
      }
    ],
    faqs: [
      {
        question: "Who needs a State FSSAI License?",
        answer: "Medium food businesses with annual turnover between Rs. 12 lakhs to 20 crores operating within a single state, including manufacturers, processors, distributors, retailers, and transporters need a State FSSAI License."
      },
      {
        question: "Can I operate in multiple states with a State FSSAI License?",
        answer: "No, State FSSAI License is valid for operations within a single state only. For multi-state operations, you would need a Central FSSAI License regardless of turnover."
      },
      {
        question: "Is inspection mandatory for State FSSAI License?",
        answer: "Yes, physical inspection by food safety officers is generally conducted before issuing a State FSSAI License, especially for manufacturing units."
      },
      {
        question: "How long does it take to get a State FSSAI License?",
        answer: "The process typically takes 30-45 days, including inspection and verification. With our expert assistance, we aim to expedite the process as much as possible within regulatory frameworks."
      },
      {
        question: "Can I upgrade from Basic Registration to State License?",
        answer: "Yes, if your business grows beyond Rs. 12 lakhs annual turnover, you must upgrade from Basic Registration to State License. We can assist with this transition process."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default FSSAIStateLicense;
