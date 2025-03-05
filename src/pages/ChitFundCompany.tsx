
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const ChitFundCompany = () => {
  const serviceData = {
    title: "Chit Fund Company Registration",
    description: "Establish a regulated financial institution that manages chit schemes, allowing members to save and borrow through a transparent rotation system.",
    price: 9499,
    category: "Start Your Business",
    serviceType: "Chit Fund Company",
    features: [
      "Legal Recognition as Financial Institution",
      "Authorization to Conduct Chit Fund Schemes",
      "Regulated Framework for Member Security",
      "Ability to Provide Alternative Financing Option",
      "Systematic Savings & Credit Mechanism",
      "Transparent Auction Process",
      "Fixed Duration & Return Potential",
      "Wider Financial Inclusion Opportunity",
      "Formal Record-Keeping & Governance",
      "State Government Oversight & Protection"
    ],
    requirements: [
      "Certificate of Incorporation of Company",
      "PAN Card & ID Proof (Aadhar) of Directors",
      "Memorandum & Articles of Association",
      "Board Resolution for Chit Fund Business",
      "Proof of Registered Office Address",
      "NOC from Property Owner for Office Premises",
      "Security Deposit as per State Chit Fund Rules",
      "Minimum Net Worth Certificate from CA",
      "Details of Chit Fund Schemes to be Operated",
      "Declaration of Compliance with Chit Funds Act"
    ],
    process: [
      {
        title: "Company Incorporation",
        description: "First, we set up a private limited company which will be the entity applying for chit fund registration."
      },
      {
        title: "State Registration",
        description: "We apply for registration under the Chit Funds Act, 1982 with the state government where operations are planned."
      },
      {
        title: "Security Deposit",
        description: "We assist in arranging and depositing the required security amount with the state government as per regulations."
      },
      {
        title: "Scheme Approval",
        description: "We help prepare and submit chit fund scheme details for approval by the Registrar of Chit Funds."
      },
      {
        title: "Operational Setup",
        description: "We assist with setting up operational framework, statutory registers, and accounting systems for compliant operations."
      }
    ],
    faqs: [
      {
        question: "What is a chit fund and how does it work?",
        answer: "A chit fund is a type of rotating savings and credit association where a group of individuals contribute a fixed amount periodically. Through an auction process, one member receives the collected amount each period after subtracting the organizer's commission. It combines savings and credit features in one product."
      },
      {
        question: "What are the legal requirements to start a chit fund business?",
        answer: "You need to incorporate a company, obtain registration under the Chit Funds Act from the state government, maintain minimum capital and security deposit requirements, get prior approval for each chit scheme, and comply with various operational regulations set by the state."
      },
      {
        question: "How is a chit fund company regulated in India?",
        answer: "Chit fund companies are regulated by the Chit Funds Act, 1982 at the central level and by various state-specific rules. The Registrar of Chit Funds in each state oversees operations, approves schemes, and monitors compliance. Some aspects may also fall under RBI regulations."
      },
      {
        question: "What is the maximum commission a chit fund company can charge?",
        answer: "Under the Chit Funds Act, a chit fund company can charge a maximum commission of 5% of the chit value as their service fee."
      },
      {
        question: "What are the major risks and challenges in running a chit fund business?",
        answer: "The major challenges include ensuring member payment discipline, maintaining adequate liquidity, stringent compliance requirements, negative public perception due to fraudulent schemes in the past, operational costs of maintaining proper records, and competition from formal banking and financial institutions."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default ChitFundCompany;
