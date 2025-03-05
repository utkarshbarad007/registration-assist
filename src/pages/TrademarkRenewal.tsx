
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const TrademarkRenewal = () => {
  const serviceData = {
    title: "Trademark Renewal",
    description: "Extend the protection of your registered trademark for another 10 years to maintain your exclusive rights and brand security.",
    price: 5999,
    category: "Trademark & IP",
    serviceType: "Trademark Renewal",
    features: [
      "Continued Legal Protection for 10 Years",
      "Maintenance of Exclusive Usage Rights",
      "Prevention of Mark Abandonment",
      "Preservation of Brand Value & Goodwill",
      "Continued Right to Use ® Symbol",
      "Protection Against New Similar Registrations",
      "Maintenance of Licensing Revenue Streams",
      "Continued Legal Standing for Infringement Cases",
      "Prevention of Cancellation for Non-Renewal",
      "Priority Rights Preservation"
    ],
    requirements: [
      "Original Trademark Registration Certificate",
      "Trademark Registration Number",
      "Current Owner Details with ID Proof",
      "Updated Address Information",
      "Details of Any Assignment/Transfer (if applicable)",
      "Authorization Letter (if filed through agent)",
      "Declaration of Continued Use",
      "Details of Current Products/Services Under the Mark",
      "Changes in Goods/Services (if any)",
      "Power of Attorney (if applicable)"
    ],
    process: [
      {
        title: "Status Verification",
        description: "We verify the current status of your trademark and confirm eligibility for renewal."
      },
      {
        title: "Documentation Preparation",
        description: "We prepare the renewal application Form TM-R along with all supporting documents."
      },
      {
        title: "Filing the Renewal Application",
        description: "We file the renewal application within the eligible period (6 months before/after expiry date)."
      },
      {
        title: "Late Renewal Management",
        description: "If past the expiry date, we handle the restoration requirements with additional fees if needed."
      },
      {
        title: "Renewal Certificate Procurement",
        description: "We follow up with the registry to obtain the renewal certificate after processing."
      }
    ],
    faqs: [
      {
        question: "When should I apply for trademark renewal?",
        answer: "You can apply for renewal up to 6 months before the expiry date. If you miss this window, there's a 6-month grace period after expiry where you can still renew with an additional fee. Beyond that, restoration within 6 more months is possible with further fees and justification."
      },
      {
        question: "What happens if I don't renew my trademark?",
        answer: "If not renewed, your trademark will be removed from the register, and you'll lose all legal protection. Anyone could then apply for and potentially register the same or similar mark, and you'll lose the right to use the ® symbol."
      },
      {
        question: "Can I make changes to my trademark during renewal?",
        answer: "No substantial changes to the trademark itself are allowed during renewal. For logo changes, word mark modifications, or significant alteration to goods/services, a new trademark application would be required."
      },
      {
        question: "Is proof of usage required for trademark renewal?",
        answer: "While India doesn't strictly require proof of usage for renewal, it's advisable to maintain evidence of ongoing commercial use. Non-use for a continuous period of 5 years can make your mark vulnerable to cancellation proceedings initiated by third parties."
      },
      {
        question: "How many times can a trademark be renewed?",
        answer: "There's no limit to the number of times a trademark can be renewed. As long as you continue to pay the renewal fee every 10 years and use the mark in commerce, you can maintain protection indefinitely."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default TrademarkRenewal;
