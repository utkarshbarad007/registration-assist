
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const ISO22000 = () => {
  const serviceData = {
    title: "ISO 22000:2018 Certification",
    description: "International food safety management system certification ensuring safe food production, processing, and handling throughout the supply chain.",
    price: 14999,
    category: "ISO Certification",
    serviceType: "ISO 22000:2018",
    features: [
      "Food Safety Management System Framework",
      "HACCP Principles Integration",
      "Food Safety Hazard Control",
      "Prerequisite Programs (PRPs)",
      "Allergen Management System",
      "Traceability Throughout Food Chain",
      "Emergency Preparedness for Food Safety",
      "Internal Communication Procedures",
      "Supplier Evaluation Framework",
      "Product Recall Procedures"
    ],
    requirements: [
      "Company Registration Documents",
      "Organization Chart with Food Safety Roles",
      "Process Flow Diagrams",
      "Product Specifications",
      "Facility Layout Plans",
      "Existing HACCP Plans (if any)",
      "Prerequisite Programs Documentation",
      "Food Safety Policy (if existing)",
      "Cleaning and Sanitation Procedures",
      "Pest Control Documentation",
      "Training Records for Food Handlers",
      "Supplier Evaluation Records",
      "Product Testing Reports",
      "Previous Food Safety Certifications (if any)"
    ],
    process: [
      {
        title: "Gap Analysis",
        description: "We evaluate your current food safety practices against ISO 22000 requirements to identify improvement areas."
      },
      {
        title: "FSMS Planning",
        description: "Developing a Food Safety Management System framework tailored to your food business operations."
      },
      {
        title: "Prerequisite Programs Development",
        description: "Establishing and documenting essential prerequisite programs for food safety."
      },
      {
        title: "HACCP Study Implementation",
        description: "Conducting hazard analysis and establishing critical control points for your processes."
      },
      {
        title: "Documentation Development",
        description: "Creating necessary policies, procedures, and work instructions for food safety management."
      },
      {
        title: "Staff Training",
        description: "Training employees on food safety practices, HACCP principles, and their responsibilities."
      },
      {
        title: "Implementation Support",
        description: "Guiding your team through the implementation of food safety management practices."
      },
      {
        title: "Internal Audit",
        description: "Conducting internal audits to verify compliance with ISO 22000 requirements."
      },
      {
        title: "Management Review",
        description: "Facilitating management review of the food safety management system effectiveness."
      },
      {
        title: "Certification Audit",
        description: "Coordinating with accredited certification bodies for successful certification."
      }
    ],
    faqs: [
      {
        question: "What is ISO 22000:2018 certification?",
        answer: "ISO 22000:2018 is an internationally recognized standard for food safety management systems. It combines key elements like interactive communication, system management, prerequisite programs, and HACCP principles to ensure food safety throughout the supply chain."
      },
      {
        question: "Who should get ISO 22000 certified?",
        answer: "Any organization involved in the food chain can benefit from ISO 22000 certification, including primary producers, food manufacturers, processors, distributors, retailers, food service providers, and related businesses like packaging manufacturers and equipment suppliers."
      },
      {
        question: "What's the difference between HACCP and ISO 22000?",
        answer: "HACCP (Hazard Analysis Critical Control Point) is a system focused specifically on identifying and controlling food safety hazards. ISO 22000 incorporates HACCP principles but provides a more comprehensive management system framework that includes prerequisites, communication throughout the food chain, and system management."
      },
      {
        question: "How long does it take to get ISO 22000 certified?",
        answer: "The certification process typically takes 4-8 months depending on the organization's size, complexity of operations, and current food safety management maturity."
      },
      {
        question: "Is ISO 22000 certification recognized globally?",
        answer: "Yes, ISO 22000 is recognized worldwide as the international standard for food safety management systems, making it valuable for food businesses operating in global markets."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default ISO22000;
