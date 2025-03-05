
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const LLPBasicCompliance = () => {
  const serviceData = {
    title: "LLP Basic Compliance Package",
    description: "Essential annual compliance solution for Limited Liability Partnerships to fulfill basic statutory requirements and maintain good standing.",
    price: 4999,
    category: "Compliance Plan",
    serviceType: "LLP Basic Compliance",
    features: [
      "Annual Return (Form 11) Filing",
      "Statement of Accounts & Solvency (Form 8) Filing",
      "Income Tax Return Filing for LLP",
      "Basic MCA Compliance Management",
      "Partner Details Change Assistance",
      "Designated Partner Updates",
      "Basic Statutory Registers Maintenance",
      "Compliance Calendar & Reminders",
      "Basic Regulatory Updates & Advisory",
      "Annual Compliance Certificate"
    ],
    requirements: [
      "LLP Deed & Certificate of Incorporation",
      "Partner Details with KYC Documents",
      "Financial Statements for the Year",
      "Details of Any Changes in Partners",
      "Business Transaction Records",
      "Bank Statements for the Financial Year",
      "Previous Filing Records & LLP PIN",
      "Digital Signature Certificates of Partners",
      "Registered Office Address Details",
      "PAN & TAN Details of LLP"
    ],
    process: [
      {
        title: "Documentation Collection",
        description: "We collect all necessary documents and financial statements from you for compliance filing."
      },
      {
        title: "Form Preparation",
        description: "We prepare Annual Return (Form 11) and Statement of Accounts & Solvency (Form 8) based on provided information."
      },
      {
        title: "Partner Review & Approval",
        description: "We share the prepared forms with partners for review and approval before filing."
      },
      {
        title: "MCA Filing",
        description: "We file the approved forms with MCA within statutory deadlines using partners' DSCs."
      },
      {
        title: "Compliance Certificate Issuance",
        description: "Upon successful filing, we provide an annual compliance certificate for your records."
      }
    ],
    faqs: [
      {
        question: "What are the mandatory annual filings for an LLP?",
        answer: "Every LLP must file an Annual Return (Form 11) and Statement of Accounts & Solvency (Form 8) with the MCA annually, along with Income Tax Return based on its financial activity."
      },
      {
        question: "What is the due date for filing LLP annual returns?",
        answer: "Form 8 (Statement of Accounts & Solvency) must be filed within 30 days from the end of 6 months of the financial year (typically by October 30). Form 11 (Annual Return) must be filed within 60 days of the close of the financial year (typically by May 30)."
      },
      {
        question: "What happens if LLP compliance filings are delayed?",
        answer: "Late filing attracts penalties - ₹100 per day for Form 11 and Form 8 until the default continues. Prolonged non-compliance can lead to strike-off proceedings against the LLP."
      },
      {
        question: "Is GST compliance included in the basic compliance package?",
        answer: "No, GST compliance is not included in our basic package as it varies based on business turnover and type. It can be added as a separate service based on your requirements."
      },
      {
        question: "How do I update partner details in my LLP?",
        answer: "Partner details can be updated by filing Form 4 for appointment/cessation of partners or designated partners, along with supplementary LLP agreement. Our basic package includes assistance with these changes."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default LLPBasicCompliance;
