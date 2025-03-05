
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const ForeignSubsidiary = () => {
  const serviceData = {
    title: "Foreign Subsidiary Registration in India",
    description: "Establish your foreign company's presence in the Indian market through a fully compliant subsidiary with complete ownership control.",
    price: 15999,
    category: "Start Your Business",
    serviceType: "Foreign Subsidiary",
    features: [
      "100% Foreign Ownership Permitted in Most Sectors",
      "Separate Legal Entity from Parent Company",
      "Limited Liability Protection",
      "Full Operational Control in Indian Market",
      "Ability to Repatriate Profits to Parent Company",
      "Access to Local Banking & Financial Services",
      "Eligibility for Government Incentives & Schemes",
      "Freedom to Conduct All Business Activities",
      "Can Hire Local Employees Directly",
      "Better Brand Establishment in Indian Market"
    ],
    requirements: [
      "Board Resolution from Foreign Parent Company",
      "Certificate of Incorporation of Foreign Company",
      "Memorandum & Articles of Association of Foreign Company",
      "KYC Documents of Foreign Directors & Shareholders",
      "Proof of Registered Office Address in India",
      "Digital Signature Certificate for Indian Director",
      "RBI Approval Documents (if applicable)",
      "Foreign Inward Remittance Certificate",
      "No Objection Certificate from Property Owner",
      "Name Approval Application with Alternatives"
    ],
    process: [
      {
        title: "Foreign Investment Compliance",
        description: "We verify FDI policy compliance and sector-specific regulations for your business activity in India."
      },
      {
        title: "RBI Approval (if required)",
        description: "For sectors under approval route, we assist in obtaining necessary RBI/FIPB approvals before incorporation."
      },
      {
        title: "Company Registration",
        description: "We handle the complete incorporation process including name approval, DSC, DIN, and filing all required forms with MCA."
      },
      {
        title: "FEMA Compliance",
        description: "We ensure all Foreign Exchange Management Act compliances are met for foreign investment inflow."
      },
      {
        title: "Post-Registration Setup",
        description: "We assist with bank account opening, obtaining PAN, TAN, GST registration and other business setup requirements."
      }
    ],
    faqs: [
      {
        question: "Is 100% FDI allowed in all sectors in India?",
        answer: "No, FDI limits vary by sector. Most sectors allow 100% FDI under the automatic route, some sectors have caps (like insurance at 74%), while a few sectors have restrictions or are prohibited for foreign investment."
      },
      {
        question: "Do I need an Indian director for a foreign subsidiary?",
        answer: "Yes, at least one director of the company must be a resident in India, meaning they have stayed in India for a minimum of 182 days in the previous financial year."
      },
      {
        question: "What is the difference between a branch office and a subsidiary in India?",
        answer: "A branch office is an extension of the foreign company and not a separate legal entity, with limited permitted activities. A subsidiary is a separate Indian company with foreign shareholding, which can conduct all business activities permitted under Indian law."
      },
      {
        question: "How long does it take to set up a foreign subsidiary in India?",
        answer: "The process typically takes 4-6 weeks for sectors under automatic route. For sectors requiring government approval, it may take 2-3 months or longer."
      },
      {
        question: "What are the tax implications for a foreign subsidiary in India?",
        answer: "A foreign subsidiary is taxed as an Indian company with corporate tax rates of approximately 25-30% depending on turnover and applicable surcharges. Dividend distribution and capital gains also have specific tax treatments under Indian law and applicable tax treaties."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default ForeignSubsidiary;
