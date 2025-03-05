
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const GSTRegistration = () => {
  const serviceData = {
    title: "GST Registration",
    description: "Obtain mandatory Goods and Services Tax registration for your business to legally collect GST from customers and claim input tax credits.",
    price: 1999,
    category: "Registrations",
    serviceType: "GST Registration",
    features: [
      "Legal Compliance with GST Laws",
      "Ability to Collect GST from Customers",
      "Eligibility to Claim Input Tax Credits",
      "Access to GST Portal & Services",
      "Expanded Business Opportunities",
      "Ability to Do Interstate Business",
      "Seamless Input Tax Credit Chain",
      "Enhanced Business Credibility",
      "Legal Entity Status for Business",
      "Protection from Penalties & Legal Issues"
    ],
    requirements: [
      "PAN Card of Business/Proprietor",
      "Aadhar Card of Proprietor/Partners/Directors",
      "Business Registration Documents",
      "Photograph of Proprietor/Partners/Directors",
      "Business Address Proof (Rent Agreement/Utility Bill)",
      "Bank Account Details with Statements",
      "Digital Signature Certificate (for companies/LLPs)",
      "Details of Business Activities",
      "HSN/SAC Codes for Your Products/Services",
      "Expected Annual Turnover"
    ],
    process: [
      {
        title: "Eligibility Assessment",
        description: "We verify your registration requirement based on turnover, interstate supplies, and business type."
      },
      {
        title: "Documentation Preparation",
        description: "We collect and prepare all required documents in the proper format for application."
      },
      {
        title: "Application Filing",
        description: "We file your GST registration application on the GST portal with all supporting documents."
      },
      {
        title: "ARN Tracking",
        description: "We track your Application Reference Number (ARN) and monitor its status until approval."
      },
      {
        title: "GSTIN Acquisition",
        description: "Upon approval, we help you obtain your GST Identification Number (GSTIN) and access credentials."
      }
    ],
    faqs: [
      {
        question: "When is GST registration mandatory?",
        answer: "GST registration is mandatory when your aggregate turnover exceeds ₹20 lakhs (₹10 lakhs for special category states), if you make interstate supplies, sell through e-commerce platforms, are liable to pay tax under reverse charge, or are a specific category of business regardless of turnover."
      },
      {
        question: "Can I register voluntarily even if not required?",
        answer: "Yes, you can opt for voluntary registration even if your turnover is below the threshold. This allows you to claim input tax credits and generally makes your business more credible to larger clients who prefer GST-registered vendors."
      },
      {
        question: "How many GSTINs does a business need if operating in multiple states?",
        answer: "You need separate GST registrations for each state where you have a business presence. Each state will have a unique GSTIN, even though all are linked to the same PAN."
      },
      {
        question: "What happens if I delay GST registration after crossing the threshold?",
        answer: "Late registration can result in penalties, including paying GST from the date you became liable (without being able to collect it from previous customers) and a daily late fee. You might also face difficulties with input tax credit claims for the unregistered period."
      },
      {
        question: "Can I cancel my GST registration if my turnover falls below the threshold?",
        answer: "Yes, you can apply for cancellation if your turnover falls below the threshold and you don't anticipate exceeding it in the foreseeable future. However, voluntary registrations must typically be maintained for at least 12 months before cancellation."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default GSTRegistration;
