
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const AngelTaxExemption = () => {
  const serviceData = {
    title: "Angel Tax Exemption Registration",
    description: "Comprehensive assistance for startups to obtain Angel Tax Exemption under Section 56(2)(viib) of the Income Tax Act to protect investments from being taxed as income.",
    price: 9999,
    category: "Registrations",
    serviceType: "Angel Tax Exemption",
    features: [
      "Exemption from Section 56(2)(viib) Taxation",
      "Protection for Investments Above Fair Market Value",
      "Eligibility for Funding from Individual Investors",
      "Increased Investor Confidence for Raising Capital",
      "Facilitation of Higher Valuation Acceptance",
      "Reduced Tax Burden on Startup Funding",
      "Streamlined Investment Process for Angels",
      "Recognition as a DPIIT Registered Startup",
      "Access to Government Startup Benefits",
      "Legitimacy and Credibility with Investors"
    ],
    requirements: [
      "DPIIT Recognition Certificate",
      "Company Registration Certificate",
      "PAN Card of the Company",
      "Company's Bank Account Details",
      "Director's KYC Documents (PAN, Aadhaar)",
      "Shareholder Details and Pattern",
      "Investment Details (if already received)",
      "Details of Proposed Investments (if applicable)",
      "Company Valuation Report",
      "Startup Business Plan and Projections",
      "Latest Audited Financial Statements",
      "Details of Patents/Trademarks (if any)",
      "Self-Declaration in Prescribed Format"
    ],
    process: [
      {
        title: "Eligibility Assessment",
        description: "We verify your startup's eligibility criteria for Angel Tax Exemption according to DPIIT guidelines."
      },
      {
        title: "DPIIT Registration",
        description: "If not already registered, we assist in securing DPIIT recognition for your startup."
      },
      {
        title: "Documentation Collection",
        description: "We help gather and organize all required documents for the exemption application."
      },
      {
        title: "Application Preparation",
        description: "Our experts prepare the exemption application with all supporting documents and declarations."
      },
      {
        title: "Online Submission",
        description: "We submit your application on the official government portal (Startup India Hub)."
      },
      {
        title: "Application Tracking",
        description: "We monitor your application status and provide regular updates on its progress."
      },
      {
        title: "Query Resolution",
        description: "Our team handles any queries or additional information requests from authorities."
      },
      {
        title: "Exemption Certificate",
        description: "Upon approval, we help you obtain and understand your Angel Tax Exemption certificate."
      }
    ],
    faqs: [
      {
        question: "What is Angel Tax and why do startups need exemption from it?",
        answer: "Angel Tax refers to the income tax levied on funding received by unlisted companies from investors when the share premium exceeds the fair market value. Startups need exemption because it can significantly reduce the effective capital available for business growth and discourage angel investors from investing in early-stage startups."
      },
      {
        question: "Which startups are eligible for Angel Tax Exemption?",
        answer: "Startups recognized by DPIIT (Department for Promotion of Industry and Internal Trade) that are incorporated as a private limited company, LLP, or partnership firm, not older than 10 years, with annual turnover not exceeding ₹100 crore for any financial year, and working towards innovation, development, or improvement of products/processes/services are eligible."
      },
      {
        question: "Is DPIIT registration mandatory for Angel Tax Exemption?",
        answer: "Yes, DPIIT recognition is a prerequisite for applying for Angel Tax Exemption. Your startup must be officially recognized by DPIIT before you can apply for this exemption."
      },
      {
        question: "How long does it take to get Angel Tax Exemption?",
        answer: "Typically, the process takes about 45-60 days from the date of application submission, provided all documents are in order and there are no queries or clarifications required from the authorities."
      },
      {
        question: "Does Angel Tax Exemption have any limitations?",
        answer: "Yes, the exemption is subject to certain conditions including: the aggregate amount of paid-up share capital and share premium after the proposed issue should not exceed ₹25 crores, the investor should have filed Income Tax Returns with minimum returned income of ₹50 lakhs for the financial year preceding the investment year, and the investor's net worth should exceed ₹2 crores on the last date of the preceding financial year."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default AngelTaxExemption;
