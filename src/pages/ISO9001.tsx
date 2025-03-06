
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const ISO9001 = () => {
  const serviceData = {
    title: "ISO 9001:2015 Certification",
    description: "International quality management system certification that helps organizations improve efficiency, customer satisfaction, and consistent delivery of quality products/services.",
    price: 12999,
    category: "ISO Certification",
    serviceType: "ISO 9001:2015",
    features: [
      "Quality Management System Documentation",
      "Process Approach Implementation",
      "Risk-Based Thinking Framework",
      "Customer Focus Enhancement",
      "Management Commitment Documentation",
      "Continuous Improvement Methodology",
      "Evidence-Based Decision Making",
      "Supplier Relationship Management",
      "Internal Audit Program",
      "Management Review Process"
    ],
    requirements: [
      "Company Registration Documents",
      "Organization Chart with Roles & Responsibilities",
      "Process Maps/Flowcharts",
      "Current Quality Manual (if any)",
      "Existing Standard Operating Procedures",
      "Product/Service Specifications",
      "List of Applicable Regulatory Requirements",
      "Customer Feedback/Complaint Records",
      "Supplier Evaluation Criteria",
      "Quality Objectives Documentation",
      "Internal Audit Reports (if available)",
      "Management Review Minutes (if available)",
      "Previous Certification Documents (if any)"
    ],
    process: [
      {
        title: "Gap Analysis",
        description: "We assess your current quality management system against ISO 9001:2015 requirements to identify improvement areas."
      },
      {
        title: "QMS Planning",
        description: "Designing a quality management system tailored to your organization's processes and objectives."
      },
      {
        title: "Documentation Development",
        description: "Creating necessary policies, procedures, and work instructions aligned with ISO 9001 requirements."
      },
      {
        title: "Implementation Support",
        description: "Guiding your team through the implementation of the quality management system across all functions."
      },
      {
        title: "Staff Training",
        description: "Training employees on quality management principles, procedures, and their roles in the QMS."
      },
      {
        title: "Internal Audit",
        description: "Conducting internal audits to verify compliance and effectiveness of your quality management system."
      },
      {
        title: "Management Review",
        description: "Facilitating management review meetings to evaluate QMS performance."
      },
      {
        title: "Pre-certification Assessment",
        description: "Final review to ensure readiness for the certification audit."
      },
      {
        title: "Certification Audit",
        description: "Coordinating with accredited certification bodies for Stage 1 and Stage 2 audits."
      }
    ],
    faqs: [
      {
        question: "What is ISO 9001:2015 certification?",
        answer: "ISO 9001:2015 is an internationally recognized standard for quality management systems. It provides a framework for organizations to consistently deliver products and services that meet customer and regulatory requirements while enhancing customer satisfaction."
      },
      {
        question: "Can small businesses benefit from ISO 9001 certification?",
        answer: "Yes, businesses of all sizes can benefit from ISO 9001. The standard is designed to be scalable and can be implemented in organizations of any size across all industries. Small businesses often see significant improvements in efficiency and customer satisfaction."
      },
      {
        question: "How long does it take to get ISO 9001 certified?",
        answer: "The certification process typically takes 3-6 months depending on the organization's size, complexity, and current quality management maturity level."
      },
      {
        question: "What are the main benefits of ISO 9001 certification?",
        answer: "Benefits include improved product/service quality, enhanced customer satisfaction, increased operational efficiency, reduced waste and costs, better decision-making, competitive advantage, and access to new markets with certification requirements."
      },
      {
        question: "How long is ISO 9001 certification valid?",
        answer: "ISO 9001 certification is valid for 3 years with mandatory surveillance audits conducted annually to ensure continued compliance and improvement."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default ISO9001;
