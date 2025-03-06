
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const ISO45001 = () => {
  const serviceData = {
    title: "ISO 45001:2018 Certification",
    description: "Occupational health and safety management system certification that helps organizations reduce workplace risks and create safer working conditions.",
    price: 13499,
    category: "ISO Certification",
    serviceType: "ISO 45001:2018",
    features: [
      "Occupational Health & Safety Management Framework",
      "Hazard Identification Methodology",
      "Risk Assessment Process",
      "Legal Compliance Documentation",
      "Safety Leadership Commitment",
      "Worker Consultation Mechanisms",
      "Emergency Preparedness Planning",
      "Accident Investigation Procedures",
      "Contractor Safety Management",
      "Continuous OHS Performance Improvement"
    ],
    requirements: [
      "Company Registration Documents",
      "Organization Chart with Safety Roles",
      "Workplace Layout Plans",
      "Current Safety Policies and Procedures",
      "Hazard Registers",
      "Risk Assessment Documentation",
      "Accident and Incident Reports",
      "PPE Requirements Documentation",
      "Health and Safety Training Records",
      "Emergency Response Plans",
      "Safety Committee Meeting Minutes",
      "Legal Register for OHS Requirements",
      "Previous Safety Certifications (if any)"
    ],
    process: [
      {
        title: "Initial OHS Assessment",
        description: "We evaluate your current occupational health and safety practices against ISO 45001 requirements."
      },
      {
        title: "OH&S Planning",
        description: "Developing the Occupational Health and Safety Management System framework tailored to your organization."
      },
      {
        title: "Hazard Identification",
        description: "Conducting comprehensive hazard identification across all work activities."
      },
      {
        title: "Risk Assessment",
        description: "Evaluating risks associated with identified hazards and establishing control measures."
      },
      {
        title: "Legal Compliance Evaluation",
        description: "Identifying applicable OHS legal requirements and ensuring compliance mechanisms."
      },
      {
        title: "Documentation Development",
        description: "Creating necessary policies, procedures, and work instructions for effective OH&S management."
      },
      {
        title: "Implementation Support",
        description: "Guiding your team through the implementation of safety management practices."
      },
      {
        title: "Staff Training",
        description: "Training employees on safety awareness, procedures, and their responsibilities."
      },
      {
        title: "Internal Audit",
        description: "Conducting internal audits to verify compliance with ISO 45001 requirements."
      },
      {
        title: "Management Review",
        description: "Facilitating management review of the OH&S management system effectiveness."
      },
      {
        title: "Certification Audit",
        description: "Coordinating with accredited certification bodies for successful certification."
      }
    ],
    faqs: [
      {
        question: "What is ISO 45001:2018 certification?",
        answer: "ISO 45001:2018 is an internationally recognized standard for occupational health and safety management systems. It provides a framework for organizations to identify, control, and reduce risks associated with occupational health and safety, prevent work-related injuries and ill health, and continuously improve OHS performance."
      },
      {
        question: "Which organizations should get ISO 45001 certified?",
        answer: "Any organization concerned with occupational health and safety can benefit from ISO 45001 certification, regardless of size, industry, or sector. It's particularly valuable for organizations in high-risk industries, those with legal obligations to demonstrate OHS compliance, and organizations committed to worker safety."
      },
      {
        question: "What are the benefits of ISO 45001 certification?",
        answer: "Benefits include reduced workplace incidents, decreased downtime and costs associated with accidents, improved legal compliance, enhanced organizational reputation, increased worker involvement in safety matters, lower insurance premiums, and demonstration of corporate social responsibility."
      },
      {
        question: "How does ISO 45001 differ from OHSAS 18001?",
        answer: "ISO 45001 replaced OHSAS 18001 and introduced several key differences: greater emphasis on organizational context, more focus on leadership and worker participation, stronger risk-based thinking approach, and better integration with other ISO management system standards."
      },
      {
        question: "How long does the ISO 45001 certification process take?",
        answer: "The certification process typically takes 4-8 months depending on organization size, complexity of operations, hazard profile, and current occupational health and safety management maturity."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default ISO45001;
