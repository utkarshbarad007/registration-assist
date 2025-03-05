
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const FSSAICentralLicense = () => {
  const serviceData = {
    title: "FSSAI Central License",
    description: "Comprehensive food safety license for large food businesses with annual turnover exceeding Rs. 20 crores or operating across multiple states.",
    price: 7999,
    category: "FSSAI",
    serviceType: "FSSAI Central License",
    features: [
      "Valid for 5 Years",
      "14-Digit License Number",
      "Mandatory Display at Business Premises",
      "Applicable for Multi-State Operations",
      "Required for Food Importers",
      "Suitable for Large Manufacturers",
      "Covers Central Government Institutions",
      "Includes Food Catering Services (>2 Tons/Day)",
      "E-Commerce Food Business Coverage",
      "Access to Advanced Food Safety Tools"
    ],
    requirements: [
      "Business Registration Documents (Company/LLP/Partnership)",
      "Identity & Address Proof of Directors/Partners",
      "Food Category & Manufacturing Process Details",
      "Business Premises Ownership/Rent Agreement",
      "NOC from Local Municipality/Panchayat",
      "Water Test Report from Accredited Lab",
      "List of Machinery & Equipment",
      "Layout Plan of Processing Unit",
      "Medical Fitness Certificates of Food Handlers",
      "Product List with Ingredient Composition"
    ],
    process: [
      {
        title: "Documentation Collection",
        description: "We collect all necessary documents and business information to prepare your application."
      },
      {
        title: "Application Preparation",
        description: "Our experts prepare your application form with precise details of food categories and operations."
      },
      {
        title: "Document Submission",
        description: "We submit your application along with supporting documents on the FSSAI portal."
      },
      {
        title: "Inspection Preparation",
        description: "We help you prepare for the mandatory inspection by FSSAI officials of your premises."
      },
      {
        title: "License Issuance",
        description: "Upon successful inspection and approval, we assist in obtaining your central license certificate."
      }
    ],
    faqs: [
      {
        question: "What is the difference between FSSAI State and Central License?",
        answer: "FSSAI Central License is for businesses with annual turnover exceeding Rs. 20 crores or those operating across multiple states, while State License is for businesses with turnover between Rs. 12 lakhs to 20 crores operating within a single state."
      },
      {
        question: "How long does it take to get an FSSAI Central License?",
        answer: "The process typically takes 45-60 days, including inspection and verification. With our expert assistance, we aim to expedite the process as much as possible within regulatory frameworks."
      },
      {
        question: "Is inspection mandatory for FSSAI Central License?",
        answer: "Yes, physical inspection by FSSAI officials is mandatory for Central License to verify compliance with food safety standards, hygiene practices, and infrastructure requirements."
      },
      {
        question: "Can I convert my State License to Central License?",
        answer: "Yes, you can upgrade from State to Central License by submitting an application with required documents and paying the differential fee. We can assist you with this process."
      },
      {
        question: "What happens if I operate without FSSAI Central License when required?",
        answer: "Operating without a required FSSAI Central License can result in penalties up to Rs. 5 lakhs, business closure, and potential legal action under the Food Safety and Standards Act, 2006."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default FSSAICentralLicense;
