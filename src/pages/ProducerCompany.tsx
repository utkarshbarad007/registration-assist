
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const ProducerCompany = () => {
  const serviceData = {
    title: "Producer Company Registration",
    description: "Form a specialized company owned by agricultural producers to collectively process, market, and distribute agricultural products with professional management.",
    price: 7499,
    category: "Start Your Business",
    serviceType: "Producer Company",
    features: [
      "Collective Ownership by Producers",
      "Limited Liability Protection",
      "Professional Management Structure",
      "Tax Benefits for Agricultural Activities",
      "Improved Market Access & Bargaining Power",
      "Perpetual Succession & Legal Entity Status",
      "Enhanced Access to Credit & Funding",
      "Value Addition Capabilities",
      "Distribution of Profits to Producer Members",
      "Government Scheme Eligibility"
    ],
    requirements: [
      "PAN Card & ID Proof (Aadhar) of Producer Members (min. 10)",
      "Address Proof of Producer Members",
      "Photographs of Producer Members",
      "Proof of Agricultural Producer Status",
      "Proof of Registered Office Address",
      "NOC from Property Owner for Registered Office",
      "Digital Signature Certificate for Directors",
      "Detailed Description of Producer Activities",
      "Details of Objects of Producer Company",
      "Proposed Capital Contribution Details"
    ],
    process: [
      {
        title: "Producer Verification",
        description: "We help verify and document the agricultural producer status of all proposed members."
      },
      {
        title: "DSC Application",
        description: "We apply for Digital Signature Certificates for all proposed directors among the producers."
      },
      {
        title: "Name Approval & Reservation",
        description: "We file for name approval, ensuring it reflects the producer nature of the company."
      },
      {
        title: "Specialized MOA & AOA Drafting",
        description: "We prepare specialized Memorandum and Articles of Association as per Producer Companies provisions."
      },
      {
        title: "Incorporation Filing",
        description: "We file incorporation documents with the Registrar of Companies (ROC) through appropriate forms."
      }
    ],
    faqs: [
      {
        question: "What is a Producer Company and how is it different from other company types?",
        answer: "A Producer Company is a specialized company formed by primary producers (farmers, artisans, etc.) that combines the advantages of cooperative principles with the professionalism of a company structure. Unlike regular companies, only producers can be members, one-member-one-vote principle applies, and the main objective is to benefit producer members rather than maximize profit."
      },
      {
        question: "Who can be members of a Producer Company?",
        answer: "Any individual who is a primary producer (engaged in an activity connected with primary produce) can be a member. Primary produce includes products of agriculture, horticulture, animal husbandry, floriculture, pisciculture, forestry, forest products, and products of similar nature."
      },
      {
        question: "What is the minimum number of members required to form a Producer Company?",
        answer: "A Producer Company requires a minimum of 10 individual producers or 2 producer institutions to incorporate. There is no maximum limit on the number of members."
      },
      {
        question: "Can a Producer Company accept investments from non-producers?",
        answer: "No, only producers can be members and shareholders of a Producer Company. However, expert directors who are not members can be appointed to the Board for their technical expertise."
      },
      {
        question: "What are the key activities a Producer Company can undertake?",
        answer: "Producer Companies can engage in production, harvesting, procurement, grading, pooling, handling, marketing, selling, and export of primary produce; processing including preserving, drying, distilling; manufacturing and sale of products; providing education on mutual assistance principles; insurance of producers or their primary produce; and other activities to fulfill the objectives relating to primary produce."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default ProducerCompany;
