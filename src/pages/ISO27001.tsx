
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const ISO27001 = () => {
  const serviceData = {
    title: "ISO 27001:2013 Certification",
    description: "Comprehensive information security management system (ISMS) certification that protects your sensitive data and builds customer trust.",
    price: 16999,
    category: "ISO Certification",
    serviceType: "ISO 27001:2013",
    features: [
      "Information Security Management System Framework",
      "Risk Assessment Methodology",
      "Security Controls Implementation",
      "Data Protection Protocols",
      "Access Control Management",
      "Incident Response Planning",
      "Business Continuity Planning",
      "Vendor Management Security",
      "Security Awareness Training",
      "Regular Security Audits"
    ],
    requirements: [
      "Company Registration Documents",
      "Organization Chart with Information Security Roles",
      "Inventory of Information Assets",
      "Existing Security Policies (if any)",
      "Network Architecture Diagrams",
      "Risk Assessment Documentation",
      "Access Control Lists",
      "IT Infrastructure Details",
      "Previous Security Incident Reports",
      "Business Impact Analysis Documents",
      "Existing Security Controls Documentation",
      "Employee Security Awareness Program Details",
      "Third-Party Agreements with Security Clauses",
      "Previous Certification Documents (if any)"
    ],
    process: [
      {
        title: "Gap Analysis",
        description: "We assess your current information security practices against ISO 27001 requirements to identify areas for improvement."
      },
      {
        title: "ISMS Planning",
        description: "Developing the Information Security Management System framework tailored to your organization's needs."
      },
      {
        title: "Risk Assessment",
        description: "Conducting comprehensive risk assessments to identify and prioritize information security risks."
      },
      {
        title: "Control Implementation",
        description: "Implementing necessary security controls and measures based on risk assessment results."
      },
      {
        title: "Documentation Development",
        description: "Creating required policies, procedures, and records to support your ISMS."
      },
      {
        title: "Staff Training",
        description: "Training your team on information security awareness and ISMS procedures."
      },
      {
        title: "Internal Audit",
        description: "Conducting internal audits to verify compliance with ISO 27001 requirements."
      },
      {
        title: "Management Review",
        description: "Facilitating management reviews of the ISMS effectiveness."
      },
      {
        title: "Certification Audit",
        description: "Coordinating with accredited certification bodies for Stage 1 and Stage 2 audits."
      }
    ],
    faqs: [
      {
        question: "What is ISO 27001 certification?",
        answer: "ISO 27001 is an international standard for information security management that provides a framework for establishing, implementing, maintaining, and continually improving an information security management system (ISMS)."
      },
      {
        question: "Which companies should get ISO 27001 certified?",
        answer: "Any organization that handles sensitive information should consider ISO 27001 certification, especially those in IT, healthcare, finance, government, and cloud services sectors. It's valuable for companies of all sizes that want to demonstrate commitment to information security."
      },
      {
        question: "What are the benefits of ISO 27001 certification?",
        answer: "Benefits include enhanced information security, improved customer trust, competitive advantage, legal and regulatory compliance, reduced security incidents, structured approach to risk management, and improved internal processes."
      },
      {
        question: "How long does the ISO 27001 certification process take?",
        answer: "The certification process typically takes 6-12 months depending on organization size, complexity, and current security maturity level."
      },
      {
        question: "Is ISO 27001 certification mandatory?",
        answer: "While not universally mandatory, it's increasingly becoming a regulatory requirement in certain industries and regions. Many organizations also require their vendors to be ISO 27001 certified to ensure supply chain security."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default ISO27001;
