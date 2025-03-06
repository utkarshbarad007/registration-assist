
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const ISO14001 = () => {
  const serviceData = {
    title: "ISO 14001:2015 Certification",
    description: "Environmental management system certification that demonstrates your commitment to sustainability and reducing environmental impact.",
    price: 13999,
    category: "ISO Certification",
    serviceType: "ISO 14001:2015",
    features: [
      "Environmental Management System Framework",
      "Environmental Aspect Identification",
      "Legal Compliance Documentation",
      "Environmental Impact Assessment",
      "Pollution Prevention Planning",
      "Resource Efficiency Programs",
      "Waste Management Protocols",
      "Environmental Performance Monitoring",
      "Emergency Preparedness Plans",
      "Continuous Environmental Improvement"
    ],
    requirements: [
      "Company Registration Documents",
      "Organization Chart with Environmental Roles",
      "Site Layout and Process Maps",
      "List of Environmental Aspects",
      "Environmental Legal Register",
      "Current Environmental Policies (if any)",
      "Waste Management Records",
      "Energy Consumption Data",
      "Water Usage Records",
      "Air Emission Monitoring Reports",
      "Environmental Incident Reports",
      "Training Records for Environmental Procedures",
      "Previous Environmental Certifications (if any)"
    ],
    process: [
      {
        title: "Initial Environmental Review",
        description: "We conduct a comprehensive assessment of your environmental aspects, impacts, and current management practices."
      },
      {
        title: "EMS Planning",
        description: "Developing the Environmental Management System framework aligned with your business objectives."
      },
      {
        title: "Legal Compliance Evaluation",
        description: "Identifying and documenting applicable environmental regulations and compliance requirements."
      },
      {
        title: "Documentation Development",
        description: "Creating necessary policies, procedures, and work instructions for effective environmental management."
      },
      {
        title: "Implementation Support",
        description: "Guiding your team through the implementation of environmental management practices."
      },
      {
        title: "Staff Training",
        description: "Training employees on environmental awareness, procedures, and their responsibilities."
      },
      {
        title: "Monitoring and Measurement",
        description: "Establishing systems to track environmental performance indicators."
      },
      {
        title: "Internal Audit",
        description: "Conducting internal audits to verify compliance with ISO 14001 requirements."
      },
      {
        title: "Management Review",
        description: "Facilitating management review of the environmental management system effectiveness."
      },
      {
        title: "Certification Audit",
        description: "Coordinating with accredited certification bodies for successful certification."
      }
    ],
    faqs: [
      {
        question: "What is ISO 14001:2015 certification?",
        answer: "ISO 14001:2015 is an internationally recognized standard for environmental management systems. It provides a framework for organizations to minimize their environmental impact, ensure legal compliance, and continually improve their environmental performance."
      },
      {
        question: "Which companies should get ISO 14001 certified?",
        answer: "Any organization regardless of size, type, or industry can benefit from ISO 14001 certification, especially those with significant environmental impacts, those required by regulations or customers to demonstrate environmental responsibility, and organizations looking to enhance their sustainability credentials."
      },
      {
        question: "What are the benefits of ISO 14001 certification?",
        answer: "Benefits include reduced environmental footprint, legal compliance assurance, cost savings through resource efficiency, enhanced corporate image, competitive advantage in green markets, improved stakeholder relations, and potential for reduced insurance premiums."
      },
      {
        question: "How long does the ISO 14001 certification process take?",
        answer: "The certification process typically takes 4-8 months depending on organization size, complexity of operations, and current environmental management maturity."
      },
      {
        question: "Is ISO 14001 certification mandatory?",
        answer: "ISO 14001 certification is generally voluntary, but it may be mandated by certain regulations, customer requirements, or industry standards in specific sectors or regions."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default ISO14001;
