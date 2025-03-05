
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const NidhiCompany = () => {
  const serviceData = {
    title: "Nidhi Company Registration",
    description: "Establish a specialized financial institution that operates on the principle of mutual benefit, accepting deposits from and lending to members only.",
    price: 8999,
    category: "Start Your Business",
    serviceType: "Nidhi Company",
    features: [
      "Can Accept Deposits from Members",
      "Can Provide Loans to Members",
      "Operates on Mutual Benefit Principle",
      "Limited Liability Protection",
      "RBI Exemption from Core Investment Company Regulations",
      "Simplified Loan Processing Procedures",
      "Higher Interest Rates on Deposits than Banks",
      "Lower Interest Rates on Loans than Banks",
      "No External Commercial Borrowings Allowed",
      "Government Recognition as Financial Institution"
    ],
    requirements: [
      "PAN Card & ID Proof (Aadhar) of Directors (min. 3)",
      "Passport-sized photographs of all Directors",
      "Address Proof of Directors (Utility Bill/Bank Statement)",
      "Proof of Registered Office Address",
      "NOC from Property Owner for Registered Office",
      "Digital Signature Certificate of all Directors",
      "List of Minimum 7 Shareholders with KYC Documents",
      "Minimum Paid-up Capital of ₹5 Lakhs",
      "Details of Proposed Company Name with Nidhi Limited suffix",
      "Declaration of Compliance with Nidhi Rules, 2014"
    ],
    process: [
      {
        title: "DSC & DIN Application",
        description: "We apply for Digital Signature Certificates and Director Identification Numbers for all directors."
      },
      {
        title: "Name Approval",
        description: "We file for name approval with 'Nidhi Limited' suffix as required under Nidhi Rules."
      },
      {
        title: "Document Preparation",
        description: "We prepare specialized MOA & AOA as per Nidhi Company requirements, along with other incorporation documents."
      },
      {
        title: "Incorporation Filing",
        description: "We file incorporation documents with the Registrar of Companies (ROC) through the SPICe+ form."
      },
      {
        title: "Post-Incorporation Compliance",
        description: "We assist with NDH-1 filing, membership development to meet 200 member requirement, and other initial compliances."
      }
    ],
    faqs: [
      {
        question: "What is the main purpose of a Nidhi Company?",
        answer: "A Nidhi Company's primary purpose is to cultivate the habit of thrift and savings amongst its members, and to provide loans to members at reasonable rates of interest for their mutual benefit."
      },
      {
        question: "What are the key regulatory requirements for a Nidhi Company?",
        answer: "Nidhi Companies must maintain minimum paid-up capital of ₹5 lakhs, achieve minimum 200 members within one year, maintain Net Owned Funds to Deposit ratio of 1:20, and follow other requirements under Nidhi Rules, 2014."
      },
      {
        question: "Can a Nidhi Company provide loans to non-members?",
        answer: "No, a Nidhi Company can only provide loans to its members and not to any non-members, as per Nidhi Rules, 2014."
      },
      {
        question: "What are the restrictions on Nidhi Company operations?",
        answer: "Nidhi Companies cannot open branches if they have not complied with NOF requirements, cannot issue preference shares or debentures, cannot provide chit fund services, cannot acquire another company, and cannot accept deposits or make loans in any form other than what is specified in the rules."
      },
      {
        question: "How is a Nidhi Company different from a regular NBFC?",
        answer: "Unlike regular NBFCs, Nidhi Companies can only operate among members, cannot raise funds from external sources, have geographical limitations, and are exempted from several RBI regulations that apply to NBFCs. However, they must strictly follow Nidhi Rules, 2014."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default NidhiCompany;
