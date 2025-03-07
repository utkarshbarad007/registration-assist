
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | BizFile</title>
        <meta name="description" content="Terms of Service for BizFile - Your trusted partner for business registration and compliance services." />
      </Helmet>
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last Updated: June 1, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>Welcome to BizFile ("Company", "we", "our", "us")! As you have clicked "I agree" to these terms and conditions, you have agreed to be bound by these Terms of Service.</p>
            <p>These Terms of Service constitute a legally binding agreement between you and BizFile governing your access to and use of the website, including any content, functionality, and services offered on or through bizfile.in (the "Website").</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
            <p>"Client", "You" and "Your" refers to you, the person accessing this website and accepting the Company's terms and conditions.</p>
            <p>"The Company", "Ourselves", "We", "Our" and "Us", refers to BizFile.</p>
            <p>"Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves.</p>
            <p>"Services" refers to the business registration, compliance, and legal services provided by BizFile as detailed on our website.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Acceptance of Terms</h2>
            <p>By accessing or using the Website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our Website or Services.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Services Description</h2>
            <p>BizFile provides business registration, compliance, and legal services including but not limited to company registration, trademark registration, GST registration, and various compliance services. The exact scope of services provided will be detailed in the service description and the service agreement between BizFile and the Client.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Account Registration</h2>
            <p>To access certain features of the Website, you may be required to register for an account. When you register, you agree to provide accurate, current, and complete information about yourself and to update such information as necessary. You are solely responsible for the security of your account and for all activities that occur under your account.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Payment Terms</h2>
            <p>All payments for Services shall be made in advance unless otherwise specified in writing by BizFile. Prices for Services are subject to change without notice. Payment can be made via the methods specified on the Website. All payments are non-refundable except as provided in our Refund Policy.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
            <p>The Website and its original content, features, and functionality are owned by BizFile and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p>In no event shall BizFile, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Website or Services.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Indemnification</h2>
            <p>You agree to defend, indemnify, and hold harmless BizFile, its parent company, officers, directors, employees, and agents, from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms of Service or your use of the Website or Services.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
            <p>We may terminate or suspend your account and bar access to the Website immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Changes to Terms</h2>
            <p>We reserve the right to modify or replace these Terms at any time. By continuing to access or use our Website after any revisions become effective, you agree to be bound by the revised terms.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at support@bizfile.in.</p>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default TermsOfService;
