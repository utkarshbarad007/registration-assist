
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Refund Policy | BizFile</title>
        <meta name="description" content="Refund Policy for BizFile - Our terms and conditions for service cancellations and refunds." />
      </Helmet>
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Refund Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last Updated: June 1, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>At BizFile, we are committed to ensuring your satisfaction with our services. This Refund Policy outlines the terms and conditions for refunds and cancellations of our services.</p>
            <p>Please read this policy carefully before making a purchase. By purchasing our services, you agree to be bound by this Refund Policy.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Service Commencement</h2>
            <p>Our services are deemed to have commenced in the following circumstances:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>When we begin processing your application or documentation.</li>
              <li>When we submit your application to any government authority or third party on your behalf.</li>
              <li>When we provide you with initial consultation or advice specific to your case.</li>
              <li>When we draft or prepare any documents specific to your requirements.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Cancellation Before Service Commencement</h2>
            <p>If you wish to cancel your order before the service has commenced:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>You may be eligible for a full refund of the service fee, less a processing fee of 5% or ₹500, whichever is higher.</li>
              <li>The cancellation request must be submitted in writing to support@bizfile.in within 48 hours of placing the order.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Cancellation After Service Commencement</h2>
            <p>If you wish to cancel your order after the service has commenced:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>A partial refund may be issued at our discretion, based on the amount of work already completed.</li>
              <li>Any government fees, third-party charges, or expenses already incurred by BizFile on your behalf are non-refundable.</li>
              <li>A minimum service fee of 30% of the total service charge or ₹2,000, whichever is higher, will be retained to cover administrative costs and work already performed.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Non-Refundable Services</h2>
            <p>The following services are non-refundable under any circumstances:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Government fees and charges paid to regulatory authorities.</li>
              <li>Third-party charges such as stamp duty, notary fees, or courier charges.</li>
              <li>Services where the application has already been submitted to government authorities.</li>
              <li>Customized services or documents that have been prepared specifically for your requirements.</li>
              <li>Rush or expedited services.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Service Quality Guarantee</h2>
            <p>If you are not satisfied with the quality of our service:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>You must notify us in writing at support@bizfile.in within 7 days of service delivery.</li>
              <li>Your complaint must clearly specify the issues or deficiencies in our service.</li>
              <li>We will review your complaint and, if valid, we may offer to rectify the service at no additional cost, provide a partial refund, or offer a credit for future services.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Refund Process</h2>
            <p>If your refund request is approved:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Refunds will be processed within 10-15 business days of approval.</li>
              <li>Refunds will be issued using the same payment method used for the original purchase.</li>
              <li>Bank charges or payment gateway fees associated with the refund will be deducted from the refund amount.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Cancellation Due to Force Majeure</h2>
            <p>If we are unable to provide our services due to circumstances beyond our control (such as changes in government regulations, natural disasters, etc.):</p>
            <ul className="list-disc pl-6 mb-4">
              <li>We may offer you alternative services of equivalent value.</li>
              <li>If alternative services are not acceptable, we may issue a credit for future services.</li>
              <li>A cash refund may be provided at our discretion, less any costs already incurred.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Rejection by Authorities</h2>
            <p>If your application is rejected by government authorities or third parties:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Our service fee covers the preparation and submission of your application, not the outcome.</li>
              <li>Government fees may or may not be refundable depending on the specific authority's policies.</li>
              <li>We may offer to assist with resubmission at a reduced fee in certain cases.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Client Delay or Non-cooperation</h2>
            <p>If your service is delayed or cannot be completed due to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Failure to provide required documents or information within 30 days of request.</li>
              <li>Providing incorrect or misleading information.</li>
              <li>Non-response to our communications for more than 30 days.</li>
            </ul>
            <p>In such cases, we reserve the right to close your case without a refund, or charge additional fees for reactivation.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p>If you have any questions about our Refund Policy, please contact our customer support team:</p>
            <p>Email: support@bizfile.in</p>
            <p>Phone: +91 93285 27395</p>
            <p>All refund requests must be submitted in writing via email.</p>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default RefundPolicy;
