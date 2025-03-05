
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const LLPRegistration = () => {
  const serviceData = {
    title: "Limited Liability Partnership (LLP) Registration",
    description: "Enjoy the benefits of partnership with limited liability protection. LLP is ideal for professional services, small businesses and entrepreneurs looking for flexibility with protection.",
    price: 3499,
    category: "Start Your Business",
    serviceType: "Limited Liability Partnership",
    features: [
      "Limited Liability Protection for Partners",
      "Flexible Management Structure",
      "No Minimum Capital Requirement",
      "Fewer Compliance Requirements than Private Limited",
      "Tax Benefits & Lower Compliance Cost",
      "Perpetual Existence Independent of Partners",
      "Easy Admission & Retirement of Partners",
      "No Restriction on Foreign Investment",
      "Professional Appeal with Limited Liability",
      "Ideal for Professional Services Firms"
    ],
    requirements: [
      "PAN Card & ID Proof (Aadhar) of all Partners",
      "Passport-sized photographs of all Partners",
      "Address Proof of all Partners (Utility Bill/Bank Statement)",
      "Residential Proof of Registered Office Address",
      "NOC from Owner if registered office is rented",
      "Digital Signature Certificate of Designated Partners",
      "Bank Statement/Utility Bill as Address Proof",
      "Details of Proposed LLP Name (at least 2 options)",
      "Description of Business Activities",
      "LLP Agreement Drafting Details"
    ],
    process: [
      {
        title: "DSC Application",
        description: "We apply for Digital Signature Certificates (DSC) for all designated partners which is required for filing documents electronically."
      },
      {
        title: "Name Reservation",
        description: "We file RUN-LLP (Reserve Unique Name-LLP) form to reserve your LLP name with the Ministry of Corporate Affairs."
      },
      {
        title: "Filing of FiLLiP Form",
        description: "Once the name is approved, we file FiLLiP Form with all required details about partners, registered office, business activities, etc."
      },
      {
        title: "Certificate of Incorporation",
        description: "After successful verification, the Registrar issues the Certificate of Incorporation with LLPIN (Limited Liability Partnership Identification Number)."
      },
      {
        title: "LLP Agreement Filing",
        description: "We prepare and file LLP Agreement within 30 days of incorporation, which defines the roles, rights and responsibilities of all partners."
      }
    ],
    faqs: [
      {
        question: "What is the minimum number of partners required for LLP registration?",
        answer: "A minimum of 2 partners are required to form an LLP in India. There is no maximum limit on the number of partners."
      },
      {
        question: "What is a Designated Partner in an LLP?",
        answer: "Designated Partners are responsible for compliance and legal obligations of the LLP. Every LLP must have at least 2 Designated Partners, and at least one must be a resident of India."
      },
      {
        question: "Is there any minimum capital requirement for LLP registration?",
        answer: "No, there is no minimum capital requirement for LLP registration in India. Partners can contribute any amount as per mutual agreement."
      },
      {
        question: "Can a foreign national be a partner in an Indian LLP?",
        answer: "Yes, foreign nationals can be partners in an Indian LLP, but at least one Designated Partner must be a resident of India."
      },
      {
        question: "What are the annual compliance requirements for LLP?",
        answer: "LLPs have fewer compliance requirements compared to companies. The main annual compliances include filing Annual Return (Form 11) and Statement of Accounts & Solvency (Form 8)."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default LLPRegistration;
