
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const BasicFSSAIRegistration = () => {
  const serviceData = {
    title: "Basic FSSAI Registration",
    description: "Essential food safety registration for small food businesses with annual turnover less than Rs. 12 lakhs, operating within a single state.",
    price: 1999,
    category: "FSSAI",
    serviceType: "Basic FSSAI Registration",
    features: [
      "Valid for 1-5 Years",
      "14-Digit Registration Number",
      "Mandatory Display at Business Premises",
      "Limited to Single State Operations",
      "Suitable for Small Food Retailers",
      "Covers Small Food Manufacturers",
      "Includes Small Distributors",
      "Re-Packers with Limited Operations",
      "Small Food Storage Facilities",
      "Transporters with Limited Fleet"
    ],
    requirements: [
      "Identity Proof (Aadhar Card)",
      "Address Proof (Voter ID/Passport/Driving License)",
      "Passport Size Photograph",
      "Business Registration or Shop Establishment Certificate",
      "Property Ownership/Rent Agreement",
      "NOC from Local Authority (if applicable)",
      "Partnership Deed (for partnership firms)",
      "Food Category Details",
      "Water Bill/Electricity Bill",
      "List of Food Items Being Sold/Manufactured"
    ],
    process: [
      {
        title: "Documentation Collection",
        description: "We collect all necessary documents and verify your eligibility for Basic FSSAI Registration."
      },
      {
        title: "Application Preparation",
        description: "Our experts complete the application form with accurate details of your food business."
      },
      {
        title: "Document Submission",
        description: "We submit your application with supporting documents on the FSSAI portal."
      },
      {
        title: "Fee Payment",
        description: "Registration fee is paid through the portal with our assistance."
      },
      {
        title: "Certificate Issuance",
        description: "Upon verification and approval, we help you download your FSSAI Registration Certificate."
      }
    ],
    faqs: [
      {
        question: "Who needs a Basic FSSAI Registration?",
        answer: "Small food business operators with annual turnover less than Rs. 12 lakhs including small retailers, temporary stall holders, small manufacturers, and petty hawkers need Basic FSSAI Registration."
      },
      {
        question: "What is the difference between FSSAI Registration and License?",
        answer: "FSSAI Registration (Basic) is for small businesses with turnover under Rs. 12 lakhs, while FSSAI License (State or Central) is for larger businesses with higher turnovers and multi-state operations."
      },
      {
        question: "How long does it take to get Basic FSSAI Registration?",
        answer: "The process typically takes 7-15 working days after submission of all required documents, depending on the verification process by food safety authorities."
      },
      {
        question: "Is physical inspection required for Basic FSSAI Registration?",
        answer: "Unlike FSSAI License, Basic Registration usually doesn't require mandatory physical inspection, but authorities may conduct random inspections after registration."
      },
      {
        question: "What happens if I operate without FSSAI Registration?",
        answer: "Operating without FSSAI Registration can result in penalties up to Rs. 2 lakhs, closure of business, and legal action under the Food Safety and Standards Act, 2006."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default BasicFSSAIRegistration;
