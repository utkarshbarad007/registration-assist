
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const TrademarkAssignment = () => {
  const serviceData = {
    title: "Trademark Assignment",
    description: "Legally transfer ownership of a registered or pending trademark from one entity to another with proper documentation and registration.",
    price: 6999,
    category: "Trademark & IP",
    serviceType: "Trademark Assignment",
    features: [
      "Complete Ownership Transfer Documentation",
      "Legal Recognition of New Ownership",
      "Protection of Transferred Rights",
      "Official Registry Record Update",
      "Assignment Certificate Issuance",
      "Goodwill Transfer Documentation (if applicable)",
      "Assignment Advertisement Filing",
      "Official Gazette Publication Management",
      "Historical Ownership Chain Documentation",
      "Seamless Rights Transition"
    ],
    requirements: [
      "Original Trademark Registration Certificate",
      "Trademark Registration Number/Application Number",
      "Current Owner Details with ID Proof",
      "New Owner/Assignee Details with ID Proof",
      "Properly Executed Assignment Deed",
      "Details of Consideration/Terms",
      "List of Goods/Services Being Transferred",
      "Details of Associated Goodwill Transfer",
      "Stamp Duty Payment Evidence",
      "Authorization Letters from Both Parties"
    ],
    process: [
      {
        title: "Assignment Deed Preparation",
        description: "We prepare a comprehensive assignment deed that clearly outlines the terms of ownership transfer."
      },
      {
        title: "Documentation Verification",
        description: "We verify all required documents from both assignor and assignee to ensure compliance with legal requirements."
      },
      {
        title: "Assignment Application Filing",
        description: "We file Form TM-P with the assignment deed and supporting documents with the Trademark Registry."
      },
      {
        title: "Examination Response",
        description: "We address any queries or objections raised by the Registrar during the examination process."
      },
      {
        title: "Assignment Certificate Procurement",
        description: "Upon approval, we obtain the official assignment certificate confirming the transfer of ownership."
      }
    ],
    faqs: [
      {
        question: "What is the difference between trademark assignment and licensing?",
        answer: "Assignment transfers complete ownership of the trademark to another entity, whereas licensing merely grants permission to use the trademark while ownership remains with the original owner. Assignment is permanent (unless specified otherwise), while licensing is typically for a defined period."
      },
      {
        question: "Can pending trademark applications be assigned?",
        answer: "Yes, pending trademark applications can be assigned just like registered trademarks. The assignment should be recorded with the Trademark Registry to ensure the application proceeds in the name of the new owner."
      },
      {
        question: "Is it necessary to transfer goodwill along with the trademark?",
        answer: "While it's not always legally required, transferring the associated goodwill with the trademark is generally advisable. Assignments without goodwill may limit the new owner's ability to claim rights based on the previous owner's use and reputation."
      },
      {
        question: "How long does the trademark assignment process take?",
        answer: "The process typically takes 3-6 months from filing to receiving the assignment certificate, depending on the current workload at the Trademark Registry and whether any objections are raised during examination."
      },
      {
        question: "Can a trademark be partially assigned for specific goods/services?",
        answer: "Yes, partial assignment is possible where the trademark is assigned only for specific goods or services, while the original owner retains rights for other goods/services. This requires clear documentation of which goods/services are being transferred."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default TrademarkAssignment;
