
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const Section8Company = () => {
  const serviceData = {
    title: "Section 8 Company (NGO) Registration",
    description: "Establish a non-profit organization for charitable, social, or religious purposes with legal entity status and tax benefits under Section 8 of the Companies Act.",
    price: 7999,
    category: "Start Your Business",
    serviceType: "Section 8 Company (NGO)",
    features: [
      "Tax Exemptions Under Income Tax Act",
      "Legal Entity Status with Limited Liability",
      "Eligibility for CSR Funding from Corporates",
      "Perpetual Succession Independent of Members",
      "Credibility and Trust Among Donors",
      "Exemption from Using 'Limited' or 'Private Limited' Suffix",
      "Foreign Funding Eligibility (with FCRA Registration)",
      "Eligible for 80G Tax Benefits for Donors",
      "No Minimum Paid-up Capital Requirement",
      "Profits Used Only for Promoting Objectives"
    ],
    requirements: [
      "PAN Card & ID Proof (Aadhar) of Directors (min. 2)",
      "Passport-sized photographs of Directors",
      "Address Proof of Directors (Utility Bill/Bank Statement)",
      "Proof of Registered Office Address",
      "NOC from Property Owner for Registered Office",
      "Digital Signature Certificate of all Directors",
      "Detailed Project Report of Proposed Activities",
      "Statement of Objects of the Association",
      "Estimate of Future Income and Expenditure",
      "Declaration of No Profit Distribution Among Members"
    ],
    process: [
      {
        title: "Name Approval",
        description: "We apply for name approval with MCA, ensuring it reflects the charitable/non-profit objectives of the organization."
      },
      {
        title: "License Application",
        description: "We prepare and file application for Section 8 license with ROC along with required supporting documents."
      },
      {
        title: "Drafting Special MOA & AOA",
        description: "We draft specialized Memorandum and Articles of Association addressing charitable/non-profit objects and prohibition on profit distribution."
      },
      {
        title: "Incorporation Filing",
        description: "After license approval, we file incorporation forms with MCA to register the Section 8 company."
      },
      {
        title: "Post-Registration Compliance",
        description: "We assist with PAN, TAN registration, bank account opening, and 12A/80G registration for tax exemptions."
      }
    ],
    faqs: [
      {
        question: "What is the difference between a Section 8 Company and a Trust or Society?",
        answer: "A Section 8 Company offers limited liability to its members and greater credibility due to MCA regulation, while Trusts and Societies are governed by state laws with varying regulations. Section 8 Companies also have more structured governance and transparent financial reporting requirements."
      },
      {
        question: "Can a Section 8 Company make profits?",
        answer: "Yes, a Section 8 Company can make profits, but these profits cannot be distributed as dividends to its members. All profits must be used to promote the objectives for which the company was established."
      },
      {
        question: "Are donors to a Section 8 Company eligible for tax benefits?",
        answer: "Yes, donors can get tax benefits under Section 80G of the Income Tax Act if the Section 8 Company has obtained 80G registration. This allows donors to claim deductions on their donations."
      },
      {
        question: "Can a Section 8 Company accept foreign donations?",
        answer: "Yes, but it must first obtain FCRA (Foreign Contribution Regulation Act) registration or prior permission from the Ministry of Home Affairs to receive foreign contributions."
      },
      {
        question: "What are the ongoing compliance requirements for a Section 8 Company?",
        answer: "Section 8 Companies must file annual financial statements and returns with the ROC, hold annual general meetings, maintain statutory registers, and comply with CSR provisions if applicable. They must also adhere to the specific conditions of their Section 8 license."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default Section8Company;
