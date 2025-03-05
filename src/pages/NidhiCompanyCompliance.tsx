
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const NidhiCompanyCompliance = () => {
  const serviceData = {
    title: "Nidhi Company Compliance Package",
    description: "Comprehensive compliance solution for Nidhi Companies to meet all regulatory requirements and maintain good standing with the MCA and RBI.",
    price: 12999,
    category: "Compliance Plan",
    serviceType: "Nidhi Company Compliance",
    features: [
      "Complete NDH-1, NDH-2, NDH-3 Filing",
      "Timely Annual Return & Financial Statement Filing",
      "Net Owned Funds to Deposit Ratio Monitoring",
      "Minimum Member Requirement Compliance",
      "Reserve Fund Maintenance Documentation",
      "Fixed Deposit Acceptance Compliance",
      "Loan Disbursement Policy Compliance",
      "Dividend Distribution Compliance",
      "Branch Opening Compliance",
      "Regular Regulatory Updates & Guidance"
    ],
    requirements: [
      "Company Incorporation Certificate",
      "Director & Shareholder Details with KYC",
      "Member Register with Complete Details",
      "Financial Statements for Previous Years",
      "Details of Fixed Deposits Accepted",
      "Loan Register & Loan Policy Documentation",
      "Branch Details (if applicable)",
      "Current NDH Form Filing Status",
      "NOF to Deposit Ratio Calculation",
      "Previous Annual Return Filings"
    ],
    process: [
      {
        title: "Compliance Assessment",
        description: "We evaluate your current compliance status and identify any pending requirements or filings."
      },
      {
        title: "Documentation Review",
        description: "We review all company documentation, member registers, financial records, and previous filings."
      },
      {
        title: "NDH Form Preparation & Filing",
        description: "We prepare and file all required NDH forms (NDH-1, NDH-2, NDH-3) as per Nidhi Rules, 2014."
      },
      {
        title: "Annual Compliance Management",
        description: "We handle annual return filing, financial statement preparation, and other periodic compliance requirements."
      },
      {
        title: "Ongoing Guidance & Support",
        description: "We provide year-round advisory on regulatory changes, compliance best practices, and operational queries."
      }
    ],
    faqs: [
      {
        question: "What are the primary compliance requirements for a Nidhi Company?",
        answer: "Nidhi Companies must maintain minimum membership of 200 members, maintain Net Owned Funds to Deposit ratio of 1:20, file annual NDH forms, maintain a minimum 10% of deposits as reserve fund, follow loan disbursement guidelines, and adhere to other requirements under Nidhi Rules, 2014."
      },
      {
        question: "What happens if a Nidhi Company fails to file NDH forms?",
        answer: "Failure to file NDH forms can result in penalties, rejection of other MCA filings, disqualification of directors, and potential declaration as a non-compliant Nidhi Company which may lead to restrictions on operations."
      },
      {
        question: "How often do Nidhi Companies need to file compliance returns?",
        answer: "Nidhi Companies must file half-yearly returns in NDH-1 form, annual financial statements, annual return in Form MGT-7, along with specific returns like NDH-2 (for declaring commencement of business) and NDH-3 (for companies incorporated before Nidhi Rules, 2014)."
      },
      {
        question: "Can a Nidhi Company operate without achieving 200 members?",
        answer: "No, achieving 200 members within one year of incorporation is mandatory. If this requirement is not met, the company must apply for extension or conversion to a regular private limited company."
      },
      {
        question: "What restrictions apply to loan disbursement in a Nidhi Company?",
        answer: "Loans can only be given to members, secured loans cannot exceed 50 times the amount of shares held by the borrower, unsecured loans cannot exceed ₹2 lakhs, and the total amount of loans should not exceed 80% of the total deposits received by the Nidhi Company."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default NidhiCompanyCompliance;
