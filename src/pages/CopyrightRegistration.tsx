
import React from 'react';
import ServiceDetail from '@/components/ServiceDetail';

const CopyrightRegistration = () => {
  const serviceData = {
    title: "Copyright Registration",
    description: "Secure legal protection for your original creative works including literary, artistic, musical compositions, software, and cinematographic works.",
    price: 5999,
    category: "Trademark & IP",
    serviceType: "Copyright Registration",
    features: [
      "Official Proof of Ownership",
      "Legal Protection Against Infringement",
      "Exclusive Rights to Reproduce the Work",
      "Exclusive Rights to Create Derivative Works",
      "Exclusive Rights to Distribute the Work",
      "Legal Standing in Infringement Cases",
      "Presumption of Ownership in Court",
      "60 Years Protection After Author's Lifetime",
      "Registration Certificate as Evidence",
      "Ability to License or Transfer Rights"
    ],
    requirements: [
      "Complete Copy of the Work to be Registered",
      "Creator/Author Details with ID Proof",
      "Date of Creation/Publication",
      "Details of Work Category (Literary/Artistic/Musical/etc.)",
      "Statement of Originality",
      "Assignment Deed (if applicant is not the author)",
      "Power of Attorney (if filed through agent)",
      "NOC from Publisher (if published work)",
      "Details of Previous Registrations (if any)",
      "Photographs/Samples (for artistic works)"
    ],
    process: [
      {
        title: "Work Categorization",
        description: "We determine the appropriate copyright category for your work (literary, artistic, sound recording, etc.)."
      },
      {
        title: "Application Preparation",
        description: "We prepare Form-XIV along with all supporting documents and work samples as required."
      },
      {
        title: "Application Filing",
        description: "We file the application with the Copyright Office along with the prescribed fee."
      },
      {
        title: "Examination Response",
        description: "We respond to any objections or queries raised by the examiner during review."
      },
      {
        title: "Certificate Procurement",
        description: "Upon approval, we obtain the copyright registration certificate for your work."
      }
    ],
    faqs: [
      {
        question: "What types of works can be protected by copyright?",
        answer: "Copyright protects original literary works (books, articles, computer programs), artistic works (paintings, photographs, sculptures), musical works (compositions, lyrics), dramatic works (plays, screenplays), sound recordings, cinematograph films, and broadcasts."
      },
      {
        question: "Do I need to register my copyright for protection?",
        answer: "Copyright protection exists automatically from the moment a work is created in fixed form. However, registration provides important benefits including public record of ownership, legal presumption of validity, ability to sue for infringement, and potential for statutory damages in some jurisdictions."
      },
      {
        question: "How long does copyright protection last in India?",
        answer: "For literary, dramatic, musical, and artistic works, copyright lasts for the lifetime of the author plus 60 years. For photographs, cinematograph films, sound recordings, and works of government and international organizations, it lasts 60 years from the date of publication."
      },
      {
        question: "Can I copyright an idea or concept?",
        answer: "No, copyright does not protect ideas, concepts, principles, or methods of operation. It only protects the original expression of ideas in tangible form. For example, a general story concept cannot be copyrighted, but the specific written story can be."
      },
      {
        question: "How long does the copyright registration process take?",
        answer: "The process typically takes 6-8 months from application to certificate issuance, depending on the Copyright Office's current workload and whether any objections are raised during examination."
      }
    ]
  };

  return <ServiceDetail {...serviceData} />;
};

export default CopyrightRegistration;
