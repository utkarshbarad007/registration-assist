
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const OnePersonCompany = () => {
  const serviceData = {
    title: "One Person Company (OPC) Registration",
    description: "Perfect for solo entrepreneurs seeking limited liability protection and a professional business structure with simplified compliance requirements.",
    price: 5499,
    category: "Start Your Business",
    serviceType: "One Person Company",
    features: [
      "Limited Liability Protection for Sole Proprietor",
      "Separate Legal Entity Status",
      "Perpetual Succession with Nominee Director",
      "Enhanced Business Credibility",
      "Easier Access to Bank Loans & Credit",
      "Tax Benefits & Deductions",
      "Single Person Control & Ownership",
      "Lower Compliance Requirements than Private Limited",
      "Easy to Scale & Transition to Private Limited",
      "Professional Corporate Image"
    ],
    requirements: [
      "PAN Card & ID Proof (Aadhar) of Director",
      "Passport-sized photograph of Director",
      "Address Proof of Director (Utility Bill/Bank Statement)",
      "Residential Proof of Registered Office Address",
      "NOC from Owner if registered office is rented",
      "Digital Signature Certificate of Director",
      "Details of Nominee Director with consent",
      "Bank Statement/Utility Bill as Address Proof",
      "Details of Proposed Company Name (at least 2 options)",
      "Description of Business Activities"
    ],
    process: [
      {
        title: "DSC Application",
        description: "We apply for Digital Signature Certificate for the sole director which is required for filing documents electronically."
      },
      {
        title: "Name Reservation",
        description: "We file the name reservation application with MCA to book your company name."
      },
      {
        title: "Document Preparation",
        description: "Our team prepares all required documents including MOA, AOA, declarations and forms required for incorporation."
      },
      {
        title: "Filing with MCA",
        description: "We file the application with all required documents on the MCA portal for incorporation approval."
      },
      {
        title: "Certificate of Incorporation",
        description: "Once approved, the Registrar of Companies (ROC) issues the Certificate of Incorporation with CIN (Corporate Identity Number)."
      }
    ],
    faqs: [
      {
        question: "What is the major benefit of an OPC over a sole proprietorship?",
        answer: "The key advantage is limited liability protection. In an OPC, your personal assets are protected from business liabilities, which is not the case in a sole proprietorship."
      },
      {
        question: "Can an OPC have more than one shareholder?",
        answer: "No, an OPC can have only one shareholder. However, it requires nomination of another person who can take over in case something happens to the primary shareholder."
      },
      {
        question: "Is it mandatory to have a nominee director in an OPC?",
        answer: "Yes, it is mandatory to appoint a nominee director who will step in if the sole director/shareholder becomes incapacitated or is unable to continue."
      },
      {
        question: "Can a foreign national form an OPC in India?",
        answer: "No, only Indian citizens and NRIs who are resident in India can form an OPC."
      },
      {
        question: "Can an OPC be converted to a Private Limited Company later?",
        answer: "Yes, an OPC can be voluntarily converted to a Private Limited Company at any time. It's mandatory to convert when paid-up capital exceeds ₹50 lakhs or average annual turnover exceeds ₹2 crores for 3 consecutive years."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default OnePersonCompany;
