
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const LLPAdvancedCompliance = () => {
  const serviceData = {
    title: "LLP Advanced Compliance Package",
    description: "Comprehensive compliance solution for LLPs with complex operations, including all statutory filings, tax returns, and advisory services.",
    price: 7999,
    category: "Compliance Plan",
    serviceType: "LLP Advanced Compliance",
    features: [
      "All Basic Compliance Features",
      "GST Return Filing (Monthly/Quarterly)",
      "TDS Return Filing & Compliance",
      "Partner Income Distribution Documentation",
      "LLP Agreement Amendment Assistance",
      "Comprehensive Statutory Register Maintenance",
      "Financial Statement Preparation Assistance",
      "Legal Compliance Advisory",
      "Priority Support & Consultation",
      "Quarterly Compliance Reviews"
    ],
    requirements: [
      "All Basic Compliance Requirements",
      "GST Registration Details & Access",
      "Monthly/Quarterly Financial Transactions",
      "TDS Deduction & Payment Details",
      "Bank Statement for All Accounts",
      "Vendor & Customer Invoice Records",
      "Details of Partner Remuneration/Drawings",
      "Input/Output GST Details",
      "Previous GST & TDS Returns",
      "Employee Details (if applicable)"
    ],
    process: [
      {
        title: "Initial Compliance Assessment",
        description: "We conduct a thorough review of your current compliance status across all regulatory areas."
      },
      {
        title: "Documentation & Data Collection",
        description: "We collect all necessary financial and statutory documents, organizing them for various filings."
      },
      {
        title: "Regular Filing Management",
        description: "We handle timely preparation and filing of all statutory returns including MCA, GST, TDS, and Income Tax."
      },
      {
        title: "Reconciliation & Verification",
        description: "We perform regular reconciliations of GST, banking, and financial statements to ensure accuracy."
      },
      {
        title: "Proactive Advisory",
        description: "We provide ongoing guidance on compliance optimization and regulatory changes with quarterly reviews."
      }
    ],
    faqs: [
      {
        question: "How is the Advanced Compliance package different from the Basic package?",
        answer: "The Advanced package includes all Basic package features plus GST and TDS compliance, financial statement preparation, more comprehensive advisory services, regular reviews, and assistance with complex compliance matters like LLP agreement amendments."
      },
      {
        question: "How frequently will GST returns be filed under this package?",
        answer: "We handle GST returns as per your filing frequency - monthly GSTR-1 and GSTR-3B for regular scheme registrants, or quarterly returns for those under the QRMP scheme. The package covers preparation and filing of all applicable GST returns."
      },
      {
        question: "Does this package include handling of GST notices or department inquiries?",
        answer: "Yes, our Advanced package includes basic assistance with responding to routine GST notices and inquiries. For complex cases or disputes requiring specialized representation, additional services may be recommended."
      },
      {
        question: "What type of LLP agreement amendments are covered in this package?",
        answer: "We assist with drafting and filing amendments related to changes in profit-sharing ratio, partner roles and responsibilities, capital contribution changes, and other routine amendments. Complex restructuring may require additional specialized legal services."
      },
      {
        question: "How does the quarterly compliance review work?",
        answer: "Our experts conduct a quarterly review of your compliance status, financial position, and upcoming requirements. We provide a detailed report highlighting any compliance gaps, optimization opportunities, and action items needed to maintain perfect compliance."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default LLPAdvancedCompliance;
