
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const MSMERegistration = () => {
  const serviceData = {
    title: "MSME Registration",
    description: "Official registration for Micro, Small, and Medium Enterprises to access government benefits, subsidies, and support programs for business growth.",
    price: 999,
    category: "Registrations",
    serviceType: "MSME Registration",
    features: [
      "Priority Sector Lending from Banks",
      "Collateral-Free Loans under CGTMSE",
      "Lower Interest Rates on Business Loans",
      "Subsidies on Patent Registration",
      "Protection Against Delayed Payments",
      "50% Concession on Trademark Filing",
      "Exemption from Direct Tax Laws",
      "Preference in Government Tenders",
      "Reduced Electricity Bills in Some States",
      "Eligibility for Special Export Incentives"
    ],
    requirements: [
      "Aadhaar Card of Business Owner/Partners/Directors",
      "PAN Card of Owner/Entity",
      "Business Address Proof",
      "Bank Account Details of Business",
      "Mobile Number Linked with Aadhaar",
      "Business Registration Documents",
      "Details of Plant and Machinery/Equipment",
      "Investment Details in Equipment",
      "Annual Turnover Information",
      "Business Activity Description",
      "Number of Employees",
      "Photograph of Owner/Partners/Directors"
    ],
    process: [
      {
        title: "Eligibility Verification",
        description: "We verify your business eligibility for MSME registration based on investment and turnover criteria."
      },
      {
        title: "Documentation Collection",
        description: "We assist in collecting and organizing all required documents for MSME registration."
      },
      {
        title: "Application Preparation",
        description: "Our experts fill out the Udyam Registration form with accurate business information."
      },
      {
        title: "Online Submission",
        description: "We submit your application on the official Udyam Registration portal."
      },
      {
        title: "OTP Verification",
        description: "We help complete the Aadhaar-based OTP verification process required for submission."
      },
      {
        title: "Application Processing",
        description: "We monitor your application as it's processed by the MSME ministry."
      },
      {
        title: "Certificate Issuance",
        description: "Upon approval, we help you download your Udyam Registration Certificate."
      },
      {
        title: "Benefit Consultation",
        description: "We provide guidance on available benefits and schemes you can leverage with your MSME registration."
      }
    ],
    faqs: [
      {
        question: "What is MSME registration?",
        answer: "MSME (Micro, Small, and Medium Enterprises) registration, now known as Udyam Registration, is the official recognition given by the Government of India to businesses falling under micro, small, or medium categories based on their investment in plant & machinery and annual turnover."
      },
      {
        question: "What are the criteria for MSME classification?",
        answer: "As per the revised definition: Micro Enterprises have investment up to Rs.1 crore and turnover up to Rs.5 crore; Small Enterprises have investment up to Rs.10 crore and turnover up to Rs.50 crore; Medium Enterprises have investment up to Rs.50 crore and turnover up to Rs.250 crore."
      },
      {
        question: "Is MSME registration mandatory?",
        answer: "While MSME registration is not legally mandatory for all businesses, it is practically essential to avail various government schemes, benefits, subsidies, and protections designed for small businesses. Without registration, businesses cannot access these advantages."
      },
      {
        question: "How long does it take to get MSME registration?",
        answer: "The Udyam Registration process is completely online and typically takes 2-3 business days. The certificate is generated instantly after successful submission and verification of information."
      },
      {
        question: "Is MSME registration valid for lifetime?",
        answer: "Yes, Udyam Registration (MSME Registration) does not require any renewal and is valid for lifetime. However, if there are significant changes in your business details like investment, turnover, or nature of activity, you should update your registration information."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default MSMERegistration;
