
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const OPCCompliance = () => {
  const serviceData = {
    title: "One Person Company (OPC) Compliance Package",
    description: "Complete annual compliance solution for One Person Companies covering all statutory filings and regulatory requirements with simplified procedures.",
    price: 6999,
    category: "Compliance Plan",
    serviceType: "OPC Compliance",
    features: [
      "Annual Return (MGT-7) Filing",
      "Financial Statement (AOC-4) Filing",
      "Director's Report Preparation",
      "Nominee Director Updates",
      "Board Resolution Documentation",
      "Statutory Registers Maintenance",
      "Director KYC & DIN Updates",
      "Simplified AGM Compliance",
      "Event-Based ROC Filing",
      "Compliance Advisory Services"
    ],
    requirements: [
      "Certificate of Incorporation",
      "MOA & AOA Documents",
      "Director & Nominee Details with KYC",
      "Financial Statements for the Year",
      "Previous Annual Return Documents",
      "Details of Any Significant Decisions",
      "Digital Signature Certificate of Director",
      "Company PAN & TAN Details",
      "Bank Statements for the Financial Year",
      "Any Business Transaction Records"
    ],
    process: [
      {
        title: "Compliance Assessment",
        description: "We review your current compliance status and identify any pending requirements or filings."
      },
      {
        title: "Documentation Collection",
        description: "We collect all necessary documents, financial statements, and business transaction records."
      },
      {
        title: "Director's Report & Resolutions",
        description: "We prepare the Director's Report and necessary resolutions as required by law."
      },
      {
        title: "ROC Filing Management",
        description: "We handle the preparation and filing of Annual Return (MGT-7) and Financial Statements (AOC-4)."
      },
      {
        title: "Register Maintenance",
        description: "We maintain all statutory registers and records as required for OPCs under the Companies Act."
      }
    ],
    faqs: [
      {
        question: "What are the key compliance advantages for an OPC compared to a Private Limited Company?",
        answer: "OPCs enjoy simplified compliance - no requirement to hold board meetings, AGM exemption (though annual filings are still required), simplified financial statements, and many exemptions from provisions of the Companies Act that apply to other companies."
      },
      {
        question: "Is it mandatory to update nominee director details annually?",
        answer: "While annual updates aren't mandatory if there's no change, it's good practice to review and confirm nominee details annually. Any change in nominee director must be filed with ROC in Form INC-4 within 30 days of the change."
      },
      {
        question: "What happens if an OPC exceeds the turnover threshold?",
        answer: "If an OPC's turnover exceeds ₹2 crores or its paid-up capital exceeds ₹50 lakhs for three consecutive years, it must convert to a Private Limited Company. Our package includes advisory on monitoring these thresholds."
      },
      {
        question: "Does an OPC need to file Income Tax returns separately?",
        answer: "Yes, like any other company, an OPC must file its Income Tax Return annually. This package focuses on ROC compliance; Income Tax Return filing can be added as a separate service."
      },
      {
        question: "What statutory registers need to be maintained for an OPC?",
        answer: "Despite simplified compliance, OPCs must maintain certain statutory registers including Register of Members, Register of Directors, Register of Contracts, Minutes Book, and others as applicable. Our package includes maintenance of all these required registers."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default OPCCompliance;
