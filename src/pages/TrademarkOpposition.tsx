
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const TrademarkOpposition = () => {
  const serviceData = {
    title: "Trademark Opposition",
    description: "Contest a trademark application that conflicts with your registered or prior-used trademark to protect your brand rights.",
    price: 9999,
    category: "Trademark & IP",
    serviceType: "Trademark Opposition",
    features: [
      "Protection of Existing Brand Rights",
      "Prevention of Similar Mark Registration",
      "Formal Legal Challenge to Conflicting Application",
      "Evidence-Based Representation",
      "Detailed Opposition Strategy",
      "Prevention of Market Confusion",
      "Defense Against Brand Dilution",
      "Comprehensive Case Preparation",
      "Expert Representation",
      "Protection of Brand Value & Goodwill"
    ],
    requirements: [
      "Details of Your Existing Trademark",
      "Registration Certificate (if registered)",
      "Evidence of Prior Use (if unregistered)",
      "Details of Opposed Trademark Application",
      "Trademark Journal Citation",
      "Grounds for Opposition",
      "Evidence Supporting Opposition Grounds",
      "Business/Applicant Details with ID Proof",
      "Authorization Letter for Representation",
      "Market Overlap & Confusion Evidence"
    ],
    process: [
      {
        title: "Case Assessment",
        description: "We analyze your rights and the contested application to evaluate opposition grounds and success likelihood."
      },
      {
        title: "Notice of Opposition Filing",
        description: "We prepare and file Form TM-O along with grounds of opposition within the 4-month window after publication."
      },
      {
        title: "Evidence Compilation",
        description: "We help collect and organize supporting evidence including prior use, market reputation, and potential confusion."
      },
      {
        title: "Counter-Statement Response",
        description: "We prepare responses to the applicant's counter-statement and arguments if they defend their application."
      },
      {
        title: "Hearing Representation",
        description: "If the case proceeds to a hearing, we coordinate with specialized trademark attorneys for representation."
      }
    ],
    faqs: [
      {
        question: "What are valid grounds for opposing a trademark application?",
        answer: "Valid grounds include similarity to your earlier registered or pending trademark, similarity to your well-known but unregistered mark, likelihood of confusion, deceptiveness, bad faith application, prohibited marks under law, or marks that would cause dilution of your famous trademark."
      },
      {
        question: "What is the timeline for filing a trademark opposition?",
        answer: "An opposition must be filed within 4 months from the date the trademark is published in the Trademark Journal. This deadline is strict and cannot be extended under normal circumstances."
      },
      {
        question: "What happens after filing an opposition?",
        answer: "After filing, the Registrar serves notice to the applicant, who has 2 months to file a counter-statement. If they do, both parties submit evidence and may request a hearing. If they don't respond, the opposition is typically successful and the application is refused."
      },
      {
        question: "Can we settle a trademark opposition outside the official process?",
        answer: "Yes, parties can negotiate and settle at any stage of the opposition proceedings. This might involve the applicant modifying their mark, limiting goods/services, or withdrawing their application. Such settlements should be formalized and communicated to the Registry."
      },
      {
        question: "What evidence is most valuable in trademark opposition cases?",
        answer: "Valuable evidence includes proof of your prior use (sales records, advertisements, invoices), market surveys showing consumer recognition, instances of actual confusion, expert opinions on similarity, trademark search reports, and evidence of the applicant's bad faith or knowledge of your mark."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default TrademarkOpposition;
