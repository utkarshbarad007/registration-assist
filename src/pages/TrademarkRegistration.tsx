
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const TrademarkRegistration = () => {
  const serviceData = {
    title: "Trademark Registration",
    description: "Protect your brand name, logo or slogan with official trademark registration for exclusive rights and legal protection against unauthorized usage.",
    price: 7999,
    category: "Trademark & IP",
    serviceType: "Trademark Registration",
    features: [
      "Exclusive Rights to Use the Mark",
      "Legal Protection Against Infringement",
      "Nationwide Brand Protection",
      "Deterrent Against Copycats",
      "Asset Creation for Business Valuation",
      "Right to Use ® Symbol",
      "10 Years Protection with Renewal Option",
      "Licensing & Franchising Opportunities",
      "Legal Remedy for Unauthorized Usage",
      "Enhanced Brand Credibility"
    ],
    requirements: [
      "Clear Image of Trademark/Logo (if applicable)",
      "Business/Applicant Details with ID Proof",
      "Address Proof of Applicant",
      "Details of Goods/Services for Registration",
      "Proposed Class(es) for Registration",
      "User Affidavit (if already in use)",
      "Authorization Letter (if filed through agent)",
      "Priority Document (if claiming convention priority)",
      "Partnership Deed/Certificate of Incorporation (for businesses)",
      "Specification of Products/Services"
    ],
    process: [
      {
        title: "Trademark Search",
        description: "We conduct a comprehensive search in the Trademark Registry database to check availability of your mark."
      },
      {
        title: "Application Preparation",
        description: "We prepare and file your trademark application in appropriate classes with complete specification."
      },
      {
        title: "Vienna Codification",
        description: "For logo marks, we apply appropriate Vienna codes for proper classification in the registry."
      },
      {
        title: "Examination Response",
        description: "We respond to any objections raised by the examiner during the examination process."
      },
      {
        title: "Publication & Registration",
        description: "After examination clearance, we monitor publication in the Trademark Journal and proceed to registration when opposition period ends."
      }
    ],
    faqs: [
      {
        question: "How long does the trademark registration process take in India?",
        answer: "The entire process typically takes 12-24 months from application to registration, depending on whether any objections are raised by the examiner or oppositions are filed by third parties."
      },
      {
        question: "What is a trademark class and how many classes should I register in?",
        answer: "Trademark classes are categories that group similar products/services. There are 45 classes (34 for goods, 11 for services). You should register in all classes relevant to your current business and planned expansions, as protection is only granted in registered classes."
      },
      {
        question: "Can I use the ™ symbol before registration is complete?",
        answer: "Yes, you can use the ™ symbol with your mark as soon as you start using it in commerce or file an application. However, the ® symbol can only be used after the trademark is officially registered."
      },
      {
        question: "What happens if someone opposes my trademark application?",
        answer: "If an opposition is filed during the 4-month opposition period after publication, you'll need to defend your application by filing a counter-statement and evidence. We provide consultation for such situations, though representation in contested cases may require additional expertise."
      },
      {
        question: "How do I maintain my trademark after registration?",
        answer: "Trademarks must be renewed every 10 years by paying the renewal fee. Additionally, you should actively use your trademark in commerce to prevent cancellation due to non-use, and monitor the market for potential infringements."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default TrademarkRegistration;
