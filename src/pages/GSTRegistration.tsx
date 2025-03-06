
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const GSTRegistration = () => {
  const serviceData = {
    title: "GST Registration",
    description: "Comprehensive assistance for obtaining Goods and Services Tax (GST) registration for your business, ensuring compliance with Indian tax regulations.",
    price: 1999,
    category: "Registrations",
    serviceType: "GST Registration",
    features: [
      "Mandatory for Businesses with Turnover above Threshold",
      "15-Digit GST Identification Number (GSTIN)",
      "Legal Requirement for Interstate Sales",
      "Enables Input Tax Credit Claims",
      "Facilitates Seamless Flow of Tax Credits",
      "Enhances Business Credibility",
      "Required for E-commerce Sellers",
      "Allows Unified Tax System Compliance",
      "Supports Digital Invoice Management",
      "Enables Participation in Government Tenders"
    ],
    requirements: [
      "PAN Card of Business/Proprietor/Directors",
      "Aadhaar Card of Proprietor/Partners/Directors",
      "Photograph of Proprietor/Partners/Directors",
      "Business Registration Certificate",
      "Bank Account Details with Statement",
      "Address Proof of Business Premises",
      "Electricity Bill of Business Premises",
      "Rent Agreement (if premises is rented)",
      "NOC from Property Owner (if required)",
      "Partnership Deed (for partnership firms)",
      "Certificate of Incorporation (for companies)",
      "Board Resolution (for companies)",
      "Letter of Authorization with ID proof"
    ],
    process: [
      {
        title: "Information Collection",
        description: "We collect all necessary business details and documents required for GST registration."
      },
      {
        title: "Application Preparation",
        description: "Our experts prepare your GST registration application with accurate information."
      },
      {
        title: "Document Submission",
        description: "We submit your application on the GST portal with all supporting documents."
      },
      {
        title: "Application Tracking",
        description: "We monitor your application status and keep you updated on its progress."
      },
      {
        title: "Query Resolution",
        description: "Our team handles any queries or additional requirements from tax authorities."
      },
      {
        title: "Verification Support",
        description: "We assist with any verification processes required by tax authorities."
      },
      {
        title: "GSTIN Issuance",
        description: "Upon approval, we help you obtain your GST Identification Number (GSTIN)."
      },
      {
        title: "Post-Registration Guidance",
        description: "We provide guidance on initial compliances and filing requirements after registration."
      }
    ],
    faqs: [
      {
        question: "Who needs to register for GST?",
        answer: "GST registration is mandatory for businesses with aggregate turnover exceeding Rs. 20 lakhs (Rs. 10 lakhs for special category states). It's also required for businesses making interstate supplies, e-commerce sellers, and certain specified categories regardless of turnover threshold."
      },
      {
        question: "How long does it take to get GST registration?",
        answer: "Typically, GST registration is completed within 5-7 working days after submission of all required documents, provided there are no queries raised by the tax department."
      },
      {
        question: "Can I register for GST if my business is not yet started?",
        answer: "Yes, you can apply for GST registration before commencing business operations. This is known as voluntary registration and is beneficial if you expect to make interstate supplies or want to claim input tax credits."
      },
      {
        question: "What happens if I don't register for GST despite being eligible?",
        answer: "Not registering for GST when required can result in penalties (up to 10% of the tax due), inability to collect GST from customers, loss of input tax credits, and legal complications including potential business disruptions."
      },
      {
        question: "Can I have multiple GSTINs for one business?",
        answer: "Yes, if your business operates in multiple states, you need separate GSTIN for each state of operation. However, for multiple business verticals within the same state, you can opt for separate registration with certain conditions."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default GSTRegistration;
