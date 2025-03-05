
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const PrivateLimitedCompliance = () => {
  const serviceData = {
    title: "Private Limited Company Compliance Package",
    description: "Comprehensive annual compliance solution for Private Limited Companies to meet all statutory requirements and maintain perfect regulatory standing.",
    price: 9999,
    category: "Compliance Plan",
    serviceType: "Private Limited Compliance",
    features: [
      "Annual Return (MGT-7) Filing",
      "Financial Statement (AOC-4) Filing",
      "Board Meeting & AGM Management",
      "Statutory Registers Maintenance",
      "Director KYC & DIN Updates",
      "Share Transfer & Allotment Documentation",
      "ROC Forms & Event-Based Filing",
      "Secretarial Compliance Certificate",
      "Director's Report Preparation",
      "Regulatory Advisory Services"
    ],
    requirements: [
      "Certificate of Incorporation",
      "MOA & AOA Documents",
      "Director & Shareholder Details with KYC",
      "Financial Statements for the Year",
      "Previous Annual Return Documents",
      "Details of Board Meetings Conducted",
      "Share Transfer/Allotment Details (if any)",
      "Digital Signature Certificates of Directors",
      "Company PAN & TAN Details",
      "Details of Charges or Loans (if any)"
    ],
    process: [
      {
        title: "Compliance Calendar Setup",
        description: "We create a customized compliance calendar covering all statutory due dates and requirements."
      },
      {
        title: "Board Meeting & AGM Management",
        description: "We assist with preparing notices, agendas, minutes, and resolutions for statutory meetings."
      },
      {
        title: "Documentation & Preparation",
        description: "We collect financial statements and prepare annual returns and other statutory documents."
      },
      {
        title: "MCA Filing Management",
        description: "We handle all MCA filings including event-based forms, annual returns, and financial statements."
      },
      {
        title: "Registers & Records Maintenance",
        description: "We maintain all statutory registers and records in compliance with the Companies Act, 2013."
      }
    ],
    faqs: [
      {
        question: "What are the main annual compliance requirements for a Private Limited Company?",
        answer: "Private Limited Companies must hold board meetings quarterly, conduct Annual General Meeting (AGM), file Annual Return (MGT-7), Financial Statements (AOC-4), maintain statutory registers, file DIR-3 KYC for directors annually, and comply with various event-based filing requirements."
      },
      {
        question: "What happens if annual compliance filings are missed?",
        answer: "Late filings incur penalties starting from ₹100 per day per form. Prolonged non-compliance can lead to director disqualification, company strike-off, and potential legal action against directors. Regularizing past non-compliance often costs significantly more than staying compliant."
      },
      {
        question: "Does this package include Income Tax and GST compliance?",
        answer: "No, this package focuses on MCA/ROC compliance requirements. Income Tax Return filing and GST compliance can be added as separate services based on your requirements."
      },
      {
        question: "What statutory registers are maintained as part of this package?",
        answer: "We maintain the Register of Members, Register of Directors and KMP, Register of Loans and Investments, Register of Charges, Minutes Books for Board and General Meetings, and other registers required under the Companies Act, 2013."
      },
      {
        question: "How many board meetings and general meetings are covered in this package?",
        answer: "Our package covers assistance with four quarterly board meetings and one Annual General Meeting (AGM) per year, including preparation of notices, agendas, and minutes. Additional meetings can be supported at nominal extra charges."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default PrivateLimitedCompliance;
