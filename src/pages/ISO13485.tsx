
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const ISO13485 = () => {
  const serviceData = {
    title: "ISO 13485:2016 Certification",
    description: "Specialized certification for medical device manufacturers demonstrating quality management systems that ensure safety and regulatory compliance.",
    price: 15999,
    category: "ISO Certification",
    serviceType: "ISO 13485:2016",
    features: [
      "International Recognition for Medical Devices",
      "Quality Management System Documentation",
      "Risk Management Framework",
      "Process Validation Protocols",
      "Feedback and Complaints Handling System",
      "Quality Assurance for Medical Devices",
      "Traceability Throughout Manufacturing",
      "Sterile Production Capability Verification",
      "Post-Market Surveillance Framework",
      "Corrective and Preventive Action (CAPA) System"
    ],
    requirements: [
      "Company Registration Documents",
      "Organization Chart with Roles & Responsibilities",
      "List of Medical Devices Manufactured or Distributed",
      "Quality Management System (QMS) Documentation",
      "Process Flow Charts for All Procedures",
      "Risk Management Files",
      "Quality Control Test Reports",
      "Equipment Calibration Records",
      "Training Records of Employees",
      "Internal Audit Reports (if available)",
      "Medical Device Technical Files",
      "Design and Development Documentation",
      "Sterilization Validation (if applicable)",
      "Previous Certification Documents (if any)"
    ],
    process: [
      {
        title: "Initial Assessment",
        description: "We evaluate your current quality management system and identify gaps against ISO 13485:2016 requirements."
      },
      {
        title: "Documentation Development",
        description: "Our experts help create or update your QMS documentation including manuals, procedures, and work instructions specific to medical devices."
      },
      {
        title: "Risk Management Implementation",
        description: "We assist in implementing comprehensive risk management processes throughout the product lifecycle."
      },
      {
        title: "Staff Training",
        description: "Training sessions for your team on ISO 13485 requirements, quality procedures, and compliance documentation."
      },
      {
        title: "Internal Audit",
        description: "Conducting internal audits to ensure all processes comply with ISO 13485 standards before certification."
      },
      {
        title: "Pre-certification Review",
        description: "Final assessment to ensure readiness for the certification audit."
      },
      {
        title: "Certification Audit",
        description: "Coordinating with accredited certification bodies for Stage 1 and Stage 2 audits."
      },
      {
        title: "Certification Issuance",
        description: "Upon successful audits, we assist in obtaining your ISO 13485:2016 certification."
      }
    ],
    faqs: [
      {
        question: "What is ISO 13485:2016 certification?",
        answer: "ISO 13485:2016 is an internationally recognized standard that specifies requirements for a quality management system where an organization needs to demonstrate its ability to provide medical devices and related services that consistently meet customer and regulatory requirements."
      },
      {
        question: "Which companies need ISO 13485 certification?",
        answer: "The certification is essential for manufacturers of medical devices, components, and related services including design, production, installation, servicing, and supply chain organizations involved in the medical device industry."
      },
      {
        question: "How long does it take to get ISO 13485 certified?",
        answer: "The certification process typically takes 4-6 months depending on the company's size, complexity, and current quality management system maturity."
      },
      {
        question: "What is the difference between ISO 9001 and ISO 13485?",
        answer: "While ISO 9001 is a general quality management standard, ISO 13485 is specifically tailored for medical devices with additional requirements for risk management, sterile manufacturing, regulatory compliance, and traceability."
      },
      {
        question: "How long is ISO 13485 certification valid?",
        answer: "The certification is valid for 3 years with mandatory surveillance audits conducted annually to ensure continued compliance."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default ISO13485;
