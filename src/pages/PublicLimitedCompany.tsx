
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const PublicLimitedCompany = () => {
  const serviceData = {
    title: "Public Limited Company Registration",
    description: "Establish a company structure that allows public share subscription and offers maximum potential for capital raising from the general public.",
    price: 12999,
    category: "Start Your Business",
    serviceType: "Public Limited Company",
    features: [
      "Ability to Raise Capital from Public",
      "Enhanced Market Credibility & Prestige",
      "Limited Liability for Shareholders",
      "Perpetual Succession & Separate Legal Entity",
      "Easy Transferability of Shares",
      "Potential for Listing on Stock Exchanges",
      "Diversified Ownership Structure",
      "Greater Access to Large-Scale Funding",
      "Improved Corporate Governance",
      "Increased Business Expansion Potential"
    ],
    requirements: [
      "PAN Card & ID Proof (Aadhar) of all Directors (min. 3)",
      "Passport-sized photographs of all Directors",
      "Address Proof of all Directors (Utility Bill/Bank Statement)",
      "Residential Proof of Registered Office Address",
      "NOC from Owner if registered office is rented",
      "Digital Signature Certificate of all Directors",
      "List of Shareholders (min. 7) with KYC documents",
      "Bank Statement/Utility Bill as Address Proof",
      "Details of Proposed Company Name (at least 2 options)",
      "Description of Business Activities & Capital Structure"
    ],
    process: [
      {
        title: "DSC & DIN Application",
        description: "We apply for Digital Signature Certificates (DSC) for all directors and obtain Director Identification Numbers (DIN)."
      },
      {
        title: "Name Approval",
        description: "We file RUN (Reserve Unique Name) to reserve your company name with the Ministry of Corporate Affairs."
      },
      {
        title: "Document Preparation",
        description: "Our team prepares all required documents including MOA, AOA, declarations and forms with required details of directors and shareholders."
      },
      {
        title: "Filing with MCA",
        description: "We file the incorporation application with all supporting documents on the MCA portal."
      },
      {
        title: "Certificate of Incorporation",
        description: "After verification and approval, the Registrar of Companies issues the Certificate of Incorporation with CIN (Corporate Identity Number)."
      }
    ],
    faqs: [
      {
        question: "What is the minimum number of directors and shareholders required for a Public Limited Company?",
        answer: "A Public Limited Company requires a minimum of 3 directors and 7 shareholders. There is no maximum limit on the number of shareholders."
      },
      {
        question: "What is the minimum capital requirement for a Public Limited Company?",
        answer: "While there is no minimum capital requirement prescribed by law anymore, due to the nature and compliance requirements of public companies, it's advisable to start with adequate capital based on your business plan."
      },
      {
        question: "Can a Public Limited Company immediately list on stock exchanges?",
        answer: "No, a newly registered Public Limited Company cannot immediately list on stock exchanges. It must meet SEBI's criteria and go through the IPO process to get listed."
      },
      {
        question: "What are the major compliance requirements for a Public Limited Company?",
        answer: "Public Limited Companies have more stringent compliance requirements including mandatory annual general meetings, quarterly board meetings, appointment of company secretary, more detailed financial reporting, and stricter corporate governance norms."
      },
      {
        question: "Can a Private Limited Company be converted to a Public Limited Company?",
        answer: "Yes, a Private Limited Company can be converted to a Public Limited Company by altering its memorandum and articles of association, increasing the minimum number of members and directors, and complying with other regulatory requirements."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default PublicLimitedCompany;
