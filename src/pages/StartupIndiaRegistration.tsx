
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const StartupIndiaRegistration = () => {
  const serviceData = {
    title: "Startup India Registration",
    description: "Official recognition for innovative startups under the government's flagship initiative, providing tax benefits, funding access, and incubation support.",
    price: 2999,
    category: "Registrations",
    serviceType: "Startup India Registration",
    features: [
      "DPIIT Recognition Certificate",
      "Self-Certification Compliance Regime",
      "Fast-Track Patent Applications",
      "80% Rebate on Patent Filing Fees",
      "Income Tax Exemption for 3 Years",
      "Exemption from Capital Gains Tax",
      "Easy Winding-up Process",
      "Access to Government Tenders",
      "Access to Startup India Fund of Funds",
      "Connection to Incubators and Accelerators"
    ],
    requirements: [
      "Company Registration Certificate / Partnership Deed",
      "PAN Card of the Entity",
      "Address Proof of Business",
      "Director/Partner/Proprietor ID Proofs",
      "Brief Description of Business Innovation",
      "Business Plan or Pitch Deck",
      "Letter of Recommendation (if available)",
      "Details of Funding (if received)",
      "Patent/Trademark Details (if applicable)",
      "Details of Promoters and Directors",
      "Incorporation Date (should be less than 10 years)",
      "Annual Turnover Details (should be less than Rs. 100 crore)",
      "Self-Declaration of Innovation Details"
    ],
    process: [
      {
        title: "Eligibility Assessment",
        description: "We evaluate your startup's eligibility based on innovation, age of entity, and turnover criteria."
      },
      {
        title: "Documentation Collection",
        description: "Our team helps gather all required documents for the registration process."
      },
      {
        title: "Innovation Description Preparation",
        description: "We assist in drafting a compelling description of your startup's innovative elements."
      },
      {
        title: "Registration Form Completion",
        description: "Our experts fill out the Startup India registration form with accurate information."
      },
      {
        title: "Online Application Submission",
        description: "We submit your application on the Startup India portal along with all documents."
      },
      {
        title: "Application Tracking",
        description: "We monitor your application status and keep you updated on its progress."
      },
      {
        title: "Query Resolution",
        description: "Our team handles any queries or clarifications requested by DPIIT."
      },
      {
        title: "Certificate Issuance",
        description: "Upon approval, we help you download your DPIIT Recognition Certificate."
      },
      {
        title: "Post-Registration Guidance",
        description: "We provide guidance on how to leverage benefits available to recognized startups."
      }
    ],
    faqs: [
      {
        question: "What is Startup India registration?",
        answer: "Startup India registration, officially known as DPIIT Recognition, is a certification provided by the Department for Promotion of Industry and Internal Trade to eligible startups that meet the government's criteria of being innovative, technology-driven, and scalable businesses."
      },
      {
        question: "What are the eligibility criteria for Startup India registration?",
        answer: "To be eligible, your entity must: be incorporated/registered in India for less than 10 years; have annual turnover not exceeding Rs. 100 crore for any preceding financial year; be working towards innovation/improvement of products/processes/services with potential for commercialization; and not formed by splitting or restructuring an existing business."
      },
      {
        question: "What benefits do registered startups receive?",
        answer: "Registered startups receive benefits like self-certification compliance, tax exemptions, patent application fast-tracking with 80% fee rebate, easier public procurement norms, faster exit mechanism, access to funds, incubation support, networking opportunities, and mentorship programs."
      },
      {
        question: "How long does it take to get Startup India recognition?",
        answer: "The registration process typically takes 2-3 weeks after submission of all required documents. The processing time may vary depending on the completeness of your application and the current workload of the DPIIT."
      },
      {
        question: "Is Startup India registration the same as MSME registration?",
        answer: "No, these are different registrations with different benefits. Startup India registration focuses on innovative businesses and provides specific benefits for startups, while MSME registration is based on investment size and turnover, offering general business benefits. Many startups qualify for both and can hold both registrations simultaneously."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default StartupIndiaRegistration;
